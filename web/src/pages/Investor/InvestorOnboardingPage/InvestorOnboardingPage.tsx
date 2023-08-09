import { useEffect, useState } from 'react'

import { useLazyQuery } from '@apollo/client'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import { SmallBlackOutlineButton } from 'src/components/Button/Button'
import SvgBook from 'src/components/Icon/Book'
import SvgLogout from 'src/components/Icon/Logout'
import SvgUp from 'src/components/Icon/Up'
import SvgLogoBlack from 'src/components/Logo/LogoBlack'
import SvgLogoWhite from 'src/components/Logo/LogoWhite'
import InvestorOnboardingMain from 'src/components/Onboarding/Investor/InvestorOnboardingMain/InvestorOnboardingMain'
import InvestorOnboardingTimeline from 'src/components/Onboarding/Investor/InvestorOnboardingTimeline/InvestorOnboardingTimeline'

const INVESTOR_ONBOARDING_QUERY = gql`
  query CheckInvestorOnboarding($id: Int!) {
    user(id: $id) {
      id
      likedOnboarding
      isOnboarded
      investor {
        id
        investorExp {
          id
        }
        investorObjective {
          id
        }
      }
    }
  }
`

const InvestorOnboardingPage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const [currentSection, setCurrentSection] = useState(0)
  const { logOut, currentUser } = useAuth()

  //Fetch onboarding progress from DB and resume from there
  const [getOnboardingData] = useLazyQuery(INVESTOR_ONBOARDING_QUERY)

  useEffect(() => {
    const getData = async () => {
      await getOnboardingData({ variables: { id: currentUser?.id } }).then(
        (d) => {
          if (!d.data.user.investor) {
            setCurrentSection(0)
          } else if (!d.data.user.investor.investorExp) {
            setCurrentSection(2)
          } else if (!d.data.user.investor.investorObjective) {
            setCurrentSection(3)
          } else if (d.data.user.isOnboarded == false) {
            setCurrentSection(4)
          } else if (d.data.user.likedOnboarding == null) {
            setCurrentSection(5)
          } else {
            navigate(routes.investorHome())
          }
        }
      )
    }
    getData()
  }, [currentUser?.id, currentUser?.isOnboarded, getOnboardingData])

  return (
    <>
      <MetaTags
        title="Investor Onboarding"
        description="Investor Onboarding page for Dealbari platform"
      />
      <div className="relative flex items-center justify-between py-3 lg:py-4">
        <SvgLogoBlack className="flex h-7 w-12 dark:hidden lg:h-8 lg:w-13" />
        <SvgLogoWhite className="hidden h-7 w-12 dark:flex lg:h-8 lg:w-13" />
        <div className="flex items-center justify-end gap-4 lg:gap-6">
          {isMenuOpen ? (
            <SvgUp
              className="flex h-7 w-7 cursor-pointer fill-primary-d1 dark:fill-primary-l1 lg:hidden"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <SvgBook
              className="flex h-7 w-7 cursor-pointer fill-black hover:fill-primary-d1 dark:fill-white hover:dark:fill-primary-l1 lg:hidden"
              onClick={() => setMenuOpen(true)}
            />
          )}
          <div className="hidden lg:block">
            <SmallBlackOutlineButton
              label="LOGOUT"
              action={async () => await logOut()}
            />
          </div>
          <SvgLogout
            className="flex h-7 w-7 cursor-pointer fill-black hover:fill-error-d1 dark:fill-white hover:dark:fill-error-l1 lg:hidden"
            onClick={async () => await logOut()}
          />
        </div>
      </div>
      <div className="relative my-4 flex h-full overflow-hidden lg:my-6 lg:gap-4 xl:aspect-video xl:h-auto">
        <InvestorOnboardingMain
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
        <InvestorOnboardingTimeline
          isMenuOpen={isMenuOpen}
          currentSection={currentSection}
        />
      </div>
    </>
  )
}
export default InvestorOnboardingPage
