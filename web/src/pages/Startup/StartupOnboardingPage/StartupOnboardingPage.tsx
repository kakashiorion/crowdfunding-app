import { useEffect, useState } from 'react'

import { useLazyQuery } from '@apollo/client'
import BookIcon from 'public/icons/book.svg'
import LogoutIcon from 'public/icons/logout.svg'
import UpIcon from 'public/icons/up.svg'
import LogoBlack from 'public/logo/LogoBlack.svg'
import LogoWhite from 'public/logo/LogoWhite.svg'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import { SmallBlackOutlineButton } from 'src/components/Button/Button'
import StartupOnboardingMain from 'src/components/Onboarding/Startup/StartupOnboardingMain/StartupOnboardingMain'
import StartupOnboardingTimeline from 'src/components/Onboarding/Startup/StartupOnboardingTimeline/StartupOnboardingTimeline'

const STARTUP_ONBOARDING_QUERY = gql`
  query CheckStartupOnboarding($id: Int!) {
    user(id: $id) {
      id
      likedOnboarding
      isOnboarded
      startup {
        id
        startupBackground {
          id
        }
        startupBusiness {
          id
        }
        startupMarket {
          id
        }
        startupFinancials {
          id
        }
        startupObjective {
          id
        }
      }
    }
  }
`

const StartupOnboardingPage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)
  const { logOut, currentUser } = useAuth()

  //Fetch onboarding progress from DB and resume from there
  const [getOnboardingData] = useLazyQuery(STARTUP_ONBOARDING_QUERY)

  useEffect(() => {
    const getData = async () => {
      await getOnboardingData({ variables: { id: currentUser?.id } }).then(
        (d) => {
          if (!d.data.user.startup) {
            setCurrentSection(0)
          } else if (!d.data.user.startup.startupBackground) {
            setCurrentSection(2)
          } else if (!d.data.user.startup.startupBusiness) {
            setCurrentSection(3)
          } else if (!d.data.user.startup.startupMarket) {
            setCurrentSection(4)
          } else if (!d.data.user.startup.startupFinancials) {
            setCurrentSection(5)
          } else if (!d.data.user.startup.startupObjective) {
            setCurrentSection(6)
          } else if (d.data.user.isOnboarded == false) {
            setCurrentSection(7)
          } else if (d.data.user.likedOnboarding == null) {
            setCurrentSection(8)
          } else {
            navigate(routes.startupHome())
          }
        }
      )
    }
    getData()
  }, [currentUser?.id, getOnboardingData])

  return (
    <>
      <MetaTags
        title="StartupOnboarding"
        description="Startup Onboarding page for Dealbari platform"
      />
      <div className="relative flex items-center justify-between py-2 lg:py-3">
        <LogoBlack className="flex h-7 w-12 dark:hidden lg:h-8 lg:w-13" />
        <LogoWhite className="hidden h-7 w-12 dark:flex lg:h-8 lg:w-13" />
        <div className="flex items-center justify-end gap-4 lg:gap-6">
          {isMenuOpen ? (
            <UpIcon
              className="flex h-7 w-7 cursor-pointer fill-tertiary-d1 dark:fill-tertiary-l1 lg:hidden"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <BookIcon
              className="flex h-7 w-7 cursor-pointer fill-black hover:fill-tertiary-d1 dark:fill-white hover:dark:fill-tertiary-l1 lg:hidden"
              onClick={() => setMenuOpen(true)}
            />
          )}
          <div className="hidden lg:block">
            <SmallBlackOutlineButton
              label="LOGOUT"
              action={async () => await logOut()}
            />
          </div>
          <LogoutIcon
            className="flex h-7 w-7 cursor-pointer fill-black hover:fill-error-d1 dark:fill-white hover:dark:fill-error-l1 lg:hidden"
            onClick={() => setMenuOpen(true)}
          />
        </div>
      </div>
      <div className="relative my-4 flex h-full overflow-hidden lg:my-6 lg:gap-4 xl:aspect-video xl:h-auto">
        <StartupOnboardingMain
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
        <StartupOnboardingTimeline
          isMenuOpen={isMenuOpen}
          currentSection={currentSection}
        />
      </div>
    </>
  )
}
export default StartupOnboardingPage
