import { useEffect, useState } from 'react'

import { useLazyQuery } from '@apollo/client'
import CloseIcon from 'public/icons/close.svg'
import MenuIcon from 'public/icons/menu.svg'
import LogoBlack from 'public/logo/LogoBlack.svg'
import LogoWhite from 'public/logo/LogoWhite.svg'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import { SmallSecondaryOutlineButton } from 'src/components/Button/Button'
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
        <LogoBlack className="flex h-6 w-10 dark:hidden lg:h-8 lg:w-12" />
        <LogoWhite className="hidden h-6 w-10 dark:flex lg:h-8 lg:w-12" />
        <div className="flex items-center justify-end gap-2 lg:gap-4">
          <SmallSecondaryOutlineButton
            label="Logout"
            action={async () => await logOut()}
          />
          {isMenuOpen ? (
            <CloseIcon
              className="flex h-6 w-6 fill-black dark:fill-white lg:hidden"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <MenuIcon
              className="flex h-6 w-6 fill-black dark:fill-white lg:hidden"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </div>
      <div className=" relative mb-4 mt-2 flex h-full overflow-hidden lg:mb-5 lg:mt-3 lg:gap-4 ">
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
