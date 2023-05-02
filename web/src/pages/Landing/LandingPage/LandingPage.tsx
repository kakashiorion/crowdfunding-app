import { LegacyRef, forwardRef, useRef } from 'react'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { LargePrimaryFilledButton } from 'src/components/Button/Button'
import LandingFooter from 'src/components/LandingFooter/LandingFooter'
import LandingHeader from 'src/components/LandingHeader/LandingHeader'

const LandingPage = () => {
  const investorRef = useRef<HTMLDivElement>(null)
  const startupRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollRefsList = [investorRef, startupRef, aboutRef, contactRef]
  return (
    <>
      <MetaTags title="Welcome" description="Welcome to Dealbari platform" />
      <div className="flex flex-col gap-4 lg:gap-5 xl:mx-auto xl:max-w-screen-xl ">
        <LandingHeader scrollRefsList={scrollRefsList} />
        <div className="flex flex-col gap-8 lg:gap-10">
          <HeroSection />
          <InvestorSection ref={investorRef} />
          <StartupSection ref={startupRef} />
          <AboutSection ref={aboutRef} />
          <ContactSection ref={contactRef} />
        </div>
        <LandingFooter />
      </div>
    </>
  )
}
export default LandingPage

//Hero section
const HeroSection = () => {
  return (
    <div className="flex min-h-screen items-center justify-between lg:gap-10 ">
      <HeroTextSection />
      {/* <img
        src="./Hero.jpg"
        className="hidden lg:block lg:aspect-square lg:h-1/2  lg:bg-black-l4 "
        alt="Hero"
      /> */}
    </div>
  )
}

const HeroTextSection = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 lg:gap-8 ">
      <p className="text-center text-h2 font-black text-black dark:text-white lg:text-h1">
        Become a part of the Indian growth story
      </p>
      <p className="text-center text-h6 text-black-l2 dark:text-white-d2 lg:text-h5">
        Explore and connect with a community of investors and startups driving
        innovation in India
      </p>
      <LargePrimaryFilledButton
        action={() => navigate(routes.signup())}
        label="JOIN NOW"
      />
    </div>
  )
}

type SectionHeaderProps = {
  title: string
}
const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <p className="text-bold border-b-2 border-primary text-b1 font-semibold text-black-l1 dark:border-primary-l1 dark:text-white-d1 lg:text-h6">
      {props.title}
    </p>
  )
}

type ValuePropBoxProps = {
  title: string
  content: string
}
const ValuePropBox = (props: ValuePropBoxProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-sm border-2 border-primary-l2 bg-white-d1 px-6 py-4 opacity-90   dark:border-primary-l1 dark:bg-black-l1   lg:gap-5 lg:px-8 lg:py-6 ">
      <p className="text-h6 text-primary-d1 dark:text-primary-l2 lg:text-h5">
        {props.title}
      </p>
      <p className="text-b2 text-black-l2 dark:text-white-d2 lg:text-b1">
        {props.content}
      </p>
    </div>
  )
}

type ValuePropSectionProps = {
  valuePropList: ValuePropBoxProps[]
}
const ValuePropSection = (props: ValuePropSectionProps) => {
  return (
    <div className="mx-6 flex flex-col gap-5 lg:mx-8 lg:grid lg:grid-cols-2 lg:gap-6 ">
      {props.valuePropList.map((item: ValuePropBoxProps) => (
        <ValuePropBox
          title={item.title}
          key={item.title}
          content={item.content}
        />
      ))}
    </div>
  )
}

//Investor section
const InvestorSection = forwardRef(function InvestorSection(
  props,
  ref: LegacyRef<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      className="flex min-h-screen flex-col items-center gap-6 py-9 lg:justify-between lg:py-11 "
    >
      <SectionHeader title="FOR INVESTORS" />
      <ValuePropSection valuePropList={investorValuePropList} />
      <LargePrimaryFilledButton
        action={() => navigate(routes.signup())}
        label="START INVESTING"
      />
    </div>
  )
})

//Startup Section
const StartupSection = forwardRef(function StartupSection(
  props,
  ref: LegacyRef<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      className="flex min-h-screen flex-col items-center gap-6 py-9 lg:justify-between lg:py-11 "
    >
      <SectionHeader title="FOR STARTUPS" />
      <ValuePropSection valuePropList={startValuePropList} />
      <LargePrimaryFilledButton
        action={() => navigate(routes.signup())}
        label="RAISE FUNDS"
      />{' '}
    </div>
  )
})

//TODO
const AboutSection = forwardRef(function AboutSection(
  props,
  ref: LegacyRef<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      className="flex min-h-screen flex-col items-center gap-6 py-9 lg:justify-between lg:py-11 "
    >
      <SectionHeader title="ABOUT" />
      <ValuePropSection valuePropList={aboutValuePropList} />
    </div>
  )
})

//TODO
const ContactSection = forwardRef(function ContactSection(
  props,
  ref: LegacyRef<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      className="flex min-h-screen flex-col items-center gap-6 py-9 lg:justify-between lg:py-11 "
    >
      <SectionHeader title="CONTACT US" />
      <ValuePropSection valuePropList={aboutValuePropList} />
    </div>
  )
})

const aboutValuePropList: ValuePropBoxProps[] = []
const startValuePropList: ValuePropBoxProps[] = [
  {
    title: 'Showcase idea',
    content:
      'By using the platform, you gain access to a wide pool of potential investors who are interested in discovering and supporting new ideas and innovations',
  },

  {
    title: 'Access to industry stalwarts',
    content:
      'The platform offers you access to a network of mentors and advisors who can provide guidance and support as you navigate the startup landscape, which can be especially valuable for early-stage startups who may not have access to these resources otherwise',
  },
  {
    title: 'Improvise pitch',
    content:
      'The platform also offers a range of resources and tools to help you refine you pitch and improve your chance of success',
  },
  {
    title: 'Become leaders of the Indian growth story',
    content:
      'You get a chance to connect with investors from every corner of India who want to be a part of the Indian growth story',
  },
]
const investorValuePropList: ValuePropBoxProps[] = [
  {
    title: 'Access to a diverse range of startups',
    content:
      'We offer access to a wide variety of Indian startups across different industries and stages, which you may not have been able to discover otherwise',
  },
  {
    title: 'Opportunity for investment',
    content:
      'You can find new investment opportunities on our platform and have the chance to get in early on promising startups with the potential for high returns',
  },
  {
    title: 'Efficient process',
    content:
      'The platform makes the investment process more streamlined and efficient, with all necessary information and documentation available in one place, saving time and effort in conducting due diligence and managing your investments',
  },
  {
    title: 'Networking opportunities',
    content:
      'You can use the platform to connect with other investors and industry experts, which can lead to new investment opportunities or collaborations',
  },
  {
    title: 'Social impact',
    content:
      'Interested in supporting startups that have a positive impact on Indian society, such as those focused on sustainability, healthcare, education, or social justice? Our platform helps you identify and invest in such startups',
  },
  {
    title: 'Be a part of Indian growth story',
    content:
      'You get a chance to connect with startups from every nook and cranny of the Indian landscape',
  },
]
