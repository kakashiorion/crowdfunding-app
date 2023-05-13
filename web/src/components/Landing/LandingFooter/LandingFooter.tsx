import BlackLogo from 'public/logo/LogoBlack.svg'
import WhiteLogo from 'public/logo/LogoWhite.svg'

import { routes, navigate } from '@redwoodjs/router'

import { BlackTextButton } from 'src/components/Button/Button'
import { PrimarySubTextLabel, TextLabel } from 'src/components/Label/Label'

const LandingFooter = () => {
  return (
    <div className="grid max-w-full grid-cols-2 flex-col items-start justify-start gap-6  py-12 lg:grid-cols-4 lg:py-14 ">
      <BrandBlock />
      <InfoList header="PLATFORM" infoList={platformInfoList} />
      <InfoList header="LEGAL" infoList={legalInfoList} />
      <InfoList header="CONTACT" infoList={contactInfoList} />
    </div>
  )
}

const BrandBlock = () => {
  return (
    <div className="order-last flex flex-col items-start gap-2 lg:order-first lg:gap-3">
      <BlackLogo
        className="flex h-6 w-10 dark:hidden lg:h-8 lg:w-12"
        onClick={() => {
          navigate(routes.landing())
        }}
      />
      <WhiteLogo
        className="hidden h-6 w-10 dark:flex lg:h-8 lg:w-12"
        onClick={() => {
          navigate(routes.landing())
        }}
      />
      <TextLabel label={'Copyright @2023'} />
    </div>
  )
}

const legalInfoList: InfoItemType[] = [
  {
    label: 'Fair Use',
    action: () => {},
  },
  {
    label: 'Privacy Policy',
    action: () => {},
  },
  {
    label: 'Terms Of Service',
    action: () => {},
  },
]

const contactInfoList: InfoItemType[] = [
  {
    label: 'LinkedIn',
    action: () => {},
  },
  {
    label: 'Github',
    action: () => {},
  },
  {
    label: 'Email',
    action: () => {},
  },
]

const platformInfoList: InfoItemType[] = [
  {
    label: 'For Investors',
    action: () => {},
  },
  {
    label: 'For Startups',
    action: () => {},
  },
  {
    label: 'About',
    action: () => {},
  },
  {
    label: 'Support',
    action: () => {},
  },
  {
    label: 'Pricing',
    action: () => {},
  },
]

type InfoItemType = {
  label: string
  action: () => void
}

type InfoListProps = {
  header: string
  infoList: InfoItemType[]
}

const InfoList = (props: InfoListProps) => {
  return (
    <div className="flex flex-col items-start justify-start gap-3">
      <PrimarySubTextLabel label={props.header} />
      {props.infoList.map((item: InfoItemType) => (
        <BlackTextButton
          key={item.label}
          label={item.label}
          action={item.action}
        />
      ))}
    </div>
  )
}

export default LandingFooter
