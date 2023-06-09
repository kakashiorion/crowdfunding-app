import { LegacyRef, forwardRef, useRef, useState } from 'react'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'

import {
  DisabledFilledButton,
  LargePrimaryFilledButton,
  PrimaryFilledButton,
} from 'src/components/Button/Button'
import {
  GradientHeadingLabel,
  PrimarySubTitleLabel,
  SubTitleLabel,
  SuccessSubTextLabel,
  TextLabel,
} from 'src/components/Label/Label'
import LandingFooter from 'src/components/Landing/LandingFooter/LandingFooter'
import LandingHeader from 'src/components/Landing/LandingHeader/LandingHeader'

const LandingPage = () => {
  const investorRef = useRef<HTMLDivElement>(null)
  const startupRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollRefsList = [investorRef, startupRef, aboutRef, contactRef]
  return (
    <>
      <MetaTags title="Welcome" description="Welcome to Dealbari platform" />
      <LandingHeader scrollRefsList={scrollRefsList} />
      <div className="flex flex-col gap-10 lg:gap-11">
        <HeroSection />
        <InvestorSection ref={investorRef} />
        <StartupSection ref={startupRef} />
        <AboutSection ref={aboutRef} />
        <ContactSection ref={contactRef} />
      </div>
      <LandingFooter />
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
    <div className="flex flex-1 flex-col items-center justify-center gap-6 p-2 text-center lg:gap-8 lg:p-6 ">
      <GradientHeadingLabel
        label={' Become a part of the Indian growth story'}
      />
      <SubTitleLabel
        label={
          'Connect with a community of investors and startups driving innovation in India'
        }
      />
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
    <p className="text-bold border-b-2 border-primary-d1 text-b1 font-semibold text-black-l1 dark:border-primary-l1 dark:text-white-d1 lg:text-h7">
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
    <div className="flex flex-col gap-4 rounded border-primary-d1 bg-white-d1/30 px-7 py-4 dark:border-primary-l1 dark:bg-black-l1/30 lg:gap-6 lg:px-9 lg:py-7">
      <PrimarySubTitleLabel label={props.title} />
      <TextLabel label={props.content} />
    </div>
  )
}

type ValuePropSectionProps = {
  valuePropList: ValuePropBoxProps[]
}
const ValuePropSection = (props: ValuePropSectionProps) => {
  return (
    <div className="mx-7 flex flex-col gap-6 lg:mx-9 lg:grid lg:grid-cols-2 lg:gap-7 ">
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

const SectionClassName =
  'flex min-h-screen flex-col items-center gap-6 py-10 justify-start lg:py-12'

//Investor section
const InvestorSection = forwardRef(function InvestorSection(
  props,
  ref: LegacyRef<HTMLDivElement>
) {
  return (
    <div ref={ref} className={SectionClassName}>
      <SectionHeader title="FOR INVESTORS" />
      <ValuePropSection valuePropList={investorValuePropList} />
      <LargePrimaryFilledButton
        action={() => navigate(routes.signup({ type: 'INVESTOR' }))}
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
    <div ref={ref} className={SectionClassName}>
      <SectionHeader title="FOR STARTUPS" />
      <ValuePropSection valuePropList={startValuePropList} />
      <LargePrimaryFilledButton
        action={() => navigate(routes.signup({ type: 'STARTUP' }))}
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
    <div ref={ref} className={SectionClassName}>
      <SectionHeader title="ABOUT" />
      <ValuePropSection valuePropList={aboutValuePropList} />
    </div>
  )
})

const FEEDBACK_MUTATION = gql`
  mutation feedbackMutation($input: CreateLandingContactInput!) {
    createLandingContact(input: $input) {
      id
    }
  }
`

//TODO
const ContactSection = forwardRef(function ContactSection(
  props,
  ref: LegacyRef<HTMLDivElement>
) {
  const [query, setQuery] = useState('')
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const [createLandingContact] = useMutation(FEEDBACK_MUTATION)

  return (
    <div ref={ref} className={SectionClassName}>
      <SectionHeader title="CONTACT US" />
      <div className="flex flex-col items-center justify-center gap-4 lg:gap-6">
        <TextLabel label="Have a query or feedback about the platform? Let us know." />
        <textarea
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setSent(false)
          }}
          rows={3}
          placeholder="Your query..."
          className={
            ' w-2/3 resize-none rounded border-2 border-black-l2 bg-white-d1 p-2 text-center text-b2 text-primary-d1 placeholder:text-b3 placeholder:text-black-l4 focus:border-primary-d1 focus:outline-none dark:border-white-d2 dark:bg-black-l1 dark:text-primary-l1 dark:placeholder:text-white-d4 dark:focus:border-primary-l1 lg:px-4 lg:py-2 lg:text-b1 lg:placeholder:text-b2'
          }
        ></textarea>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            setSent(false)
          }}
          placeholder="Your email address"
          className={
            'w-2/3 rounded border-2 border-black-l2 bg-white-d1 p-2 text-center text-b2 text-primary-d1 placeholder:text-b3 placeholder:text-black-l4 focus:border-primary-d1 focus:outline-none dark:border-white-d2 dark:bg-black-l1 dark:text-primary-l1 dark:placeholder:text-white-d4 dark:focus:border-primary-l1 lg:px-4 lg:py-2 lg:text-b1 lg:placeholder:text-b2'
          }
        ></input>
        {sent ? (
          <DisabledFilledButton label="SENT" action={() => {}} />
        ) : (
          <PrimaryFilledButton
            label="SEND"
            action={async () => {
              if (email.length > 5 && query.length > 0) {
                setSent(true)
                await createLandingContact({
                  variables: { input: { query: query, email: email } },
                })
              }
            }}
          />
        )}
        {sent ? (
          <SuccessSubTextLabel label="We have received your email.. Thanks!" />
        ) : (
          <></>
        )}
      </div>
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
