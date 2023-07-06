import { useContext, useEffect, useState } from 'react'

import DownIcon from 'public/icons/down.svg'
import ProfileIcon from 'public/icons/profile.svg'
import SearchIcon from 'public/icons/search.svg'
import UpIcon from 'public/icons/up.svg'

import { MetaTags } from '@redwoodjs/web'

import { TertiaryIconButton } from 'src/components/Button/Button'
import {
  BoldTextLabel,
  SubTextLabel,
  TertiaryTitleLabel,
  TextLabel,
} from 'src/components/Label/Label'
import {
  LightIconClassName,
  TextInputClassName,
} from 'src/components/Startup/StartupConsts'
import { StartupPageContext } from 'src/layouts/StartupHomeLayout/StartupHomeLayout'

const StartupHelpPage = () => {
  const { setPageSelected } = useContext(StartupPageContext)
  const [searchText, setSearchText] = useState('')
  const [selectedTag, setSelectedTag] = useState<string>('')
  const [faqList, setFaqList] = useState(FAQList)
  const [selectedFaq, setSelectedFaq] = useState(-1)

  //TODO: Handle Search
  const handleSearch = () => {}

  useEffect(() => {
    setPageSelected('Help')
  }, [setPageSelected])

  return (
    <>
      <MetaTags title="Help" description="Help page for Dealbari platform" />
      <div
        id="HelpPage"
        className="flex h-full w-full flex-col gap-6 overflow-y-scroll rounded lg:gap-7"
      >
        <TertiaryTitleLabel label="Help Center" />
        <div
          id="SearchSection"
          className="flex w-full flex-col items-center gap-2 lg:gap-3"
        >
          <TextLabel label="Got a question? We are here to help." />
          <div className="flex w-full items-center gap-1 lg:w-1/2 lg:gap-2">
            <input
              id="SearchBar"
              value={searchText}
              placeholder={'Search a topic'}
              type="text"
              onChange={(e) => {
                setSearchText(e.target.value)
              }}
              className={TextInputClassName}
            />
            <TertiaryIconButton
              icon={<SearchIcon className={LightIconClassName} />}
              action={() => {
                handleSearch()
              }}
            />
          </div>
        </div>
        <div
          id="ExploreTopicDiv"
          className="flex w-full flex-col items-center gap-2 rounded bg-white-d2 p-3 text-center dark:bg-black-l2 lg:gap-3 lg:p-4"
        >
          <BoldTextLabel label="Explore Topics" />
          <div
            id="TopicGrid"
            className="grid w-full grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-3"
          >
            {Topics.map((t, i) => {
              return (
                <button
                  key={i}
                  className="flex w-full flex-col items-start gap-2 rounded bg-white-d1 p-3 hover:bg-white dark:bg-black-l1 dark:hover:bg-black lg:p-4"
                  onClick={() => {
                    //TODO: Topic navigation
                  }}
                >
                  <t.icon className="h-6 w-6 fill-black dark:fill-white lg:h-7 lg:w-7" />
                  <BoldTextLabel label={t.title} />
                  <SubTextLabel label={t.body} />
                </button>
              )
            })}
          </div>
        </div>
        <div
          id="FAQSection"
          className="flex w-full flex-col items-center gap-3 rounded p-3 text-center lg:gap-4 lg:p-4"
        >
          <BoldTextLabel label="Frequently Asked Questions" />
          <SubTextLabel label="If you need help, probably we have already answered your question before. Check out our FAQs!" />
          <div
            id="FAQTags"
            className="flex flex-wrap items-center justify-center gap-2 lg:gap-3"
          >
            {Object.values(FAQTag).map((f) => {
              return (
                <button
                  key={f}
                  onClick={() => {
                    setSelectedFaq(-1)
                    if (selectedTag != f) {
                      setSelectedTag(f)
                      setFaqList(FAQList.filter((l) => l.tag === f))
                    } else {
                      setSelectedTag('')
                      setFaqList(FAQList)
                    }
                  }}
                  className={`rounded border border-black p-2 text-b2 dark:border-white lg:text-b1  ${
                    selectedTag == f
                      ? ' bg-black text-white dark:bg-white dark:text-black '
                      : ' bg-white text-black hover:bg-white-d1 dark:bg-black dark:text-white dark:hover:bg-black-l1 '
                  }`}
                >
                  {f}
                </button>
              )
            })}
          </div>
          <div
            id="FAQGrid"
            className="flex w-full flex-col gap-2 lg:w-1/2 lg:gap-3"
          >
            {faqList.map((faq, i) => {
              return (
                <div
                  key={i}
                  className="flex w-full flex-col items-start gap-2 rounded border border-white-d3 p-2 dark:border-black-l3"
                >
                  <button
                    onClick={() => {
                      if (selectedFaq == i) {
                        setSelectedFaq(-1)
                      } else {
                        setSelectedFaq(i)
                      }
                    }}
                    className="flex w-full items-center justify-between gap-2 lg:gap-3"
                  >
                    <TextLabel label={faq.question} />
                    {selectedFaq == i ? (
                      <UpIcon className="h-5 w-5 fill-black dark:fill-white lg:h-6 lg:w-6" />
                    ) : (
                      <DownIcon className="h-5 w-5 fill-black dark:fill-white lg:h-6 lg:w-6" />
                    )}
                  </button>
                  {selectedFaq == i && (
                    <div className="w-full text-start">
                      <SubTextLabel label={faq.answer} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default StartupHelpPage

const Topics = [
  {
    title: 'Managing your account',
    body: 'Setting up your account and getting verified',
    icon: ProfileIcon,
    link: '',
  },
  {
    title: 'Managing your account',
    body: 'Setting up your account and getting verified',
    icon: ProfileIcon,
    link: '',
  },
  {
    title: 'Managing your account',
    body: 'Setting up your account and getting verified',
    icon: ProfileIcon,
    link: '',
  },
]

enum FAQTag {
  Account = 'Account',
  Startup = 'Startup',
  Investor = 'Investor',
  Offer = 'Offer',
}

//TODO: FAQs
const FAQList = [
  {
    question: 'How to hide my profile?',
    answer: 'TBD',
    tag: FAQTag.Account,
  },
  {
    question: 'How to hide my profile?',
    answer: 'TBD',
    tag: FAQTag.Account,
  },
  {
    question: 'How to hide my profile?',
    answer: 'TBD',
    tag: FAQTag.Account,
  },
  {
    question: 'Can I connect with other startups?',
    answer: 'TBD',
    tag: FAQTag.Startup,
  },
  {
    question: 'Can I connect with other startups?',
    answer: 'TBD',
    tag: FAQTag.Startup,
  },
  {
    question: 'Can I connect with other startups?',
    answer: 'TBD',
    tag: FAQTag.Startup,
  },
  {
    question: 'How can I chat with investors?',
    answer: 'TBD',
    tag: FAQTag.Investor,
  },
  {
    question: 'How can I chat with investors?',
    answer: 'TBD',
    tag: FAQTag.Investor,
  },
  {
    question: 'How to create an offer?',
    answer: 'TBD',
    tag: FAQTag.Offer,
  },
  {
    question: 'How to create an offer?',
    answer: 'TBD',
    tag: FAQTag.Offer,
  },
  {
    question: 'How to create an offer?',
    answer: 'TBD',
    tag: FAQTag.Offer,
  },
]
