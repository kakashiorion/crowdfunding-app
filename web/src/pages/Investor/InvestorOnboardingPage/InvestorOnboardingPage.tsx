import { useEffect, useState } from 'react'

import { useLazyQuery } from '@apollo/client'
import CloseIcon from 'public/icons/close.svg'
import InfoIcon from 'public/icons/info.svg'
import LogoBlack from 'public/logo/LogoBlack.svg'
import LogoWhite from 'public/logo/LogoWhite.svg'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import { SmallBlackOutlineButton } from 'src/components/Button/Button'
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
      <div className="relative flex items-center justify-between py-2 lg:py-3">
        <LogoBlack className="flex h-6 w-10 dark:hidden lg:h-8 lg:w-12" />
        <LogoWhite className="hidden h-6 w-10 dark:flex lg:h-8 lg:w-12" />
        <div className="flex items-center justify-end gap-2 lg:gap-4">
          {isMenuOpen ? (
            <CloseIcon
              className="flex h-6 w-6 fill-black dark:fill-white lg:hidden"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <InfoIcon
              className="flex h-6 w-6 fill-black dark:fill-white lg:hidden"
              onClick={() => setMenuOpen(true)}
            />
          )}
          <SmallBlackOutlineButton
            label="Logout"
            action={async () => await logOut()}
          />
        </div>
      </div>
      <div className=" relative mb-4 mt-2 flex h-full overflow-hidden lg:mb-5 lg:mt-3 lg:gap-4 xl:aspect-video xl:h-auto ">
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
