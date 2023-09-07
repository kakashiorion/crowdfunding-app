import { useState } from 'react'

import type {
  FindStartupCreateOfferQuery,
  FindStartupCreateOfferQueryVariables,
} from 'types/graphql'

import { back, navigate, routes } from '@redwoodjs/router'
import { useMutation, type CellSuccessProps } from '@redwoodjs/web'

import {
  HoverErrorTextButton,
  TertiaryFilledButton,
} from 'src/components/Button/Button'
import SvgDnd from 'src/components/Icon/Dnd'
import {
  ErrorSubTextLabel,
  GreySubTitleLabel,
  TertiaryTitleLabel,
  TextLabel,
} from 'src/components/Label/Label'
import {
  ActionGroupClassName,
  EmptyDivClassName,
  EmptyIconClassName,
  PageDivClassName,
  SelectInputClassName,
  TextInputClassName,
} from 'src/components/Startup/StartupConsts'

export const QUERY = gql`
  query FindStartupCreateOfferQuery {
    startupCreateOffer: getStartupActiveOffer {
      id
    }
    fundingStage: __type(name: "FundingStage") {
      name
      enumValues {
        name
      }
    }
  }
`

/*
Info to create offer:
- capitalTargetLacs
- equityBeingIssued
- minTicketSizeLacs @default(1.0)
- maxTicketSizeLacs
- fundingStage
- maxInvestors
- willUseFundsFor
- needHelpWith
*/

const CREATE_OFFER_MUTATION = gql`
  mutation createOffer($input: CreateOfferInput!) {
    createOffer(input: $input) {
      id
    }
  }
`

export const Success = ({
  startupCreateOffer,
  fundingStage,
}: CellSuccessProps<
  FindStartupCreateOfferQuery,
  FindStartupCreateOfferQueryVariables
>) => {
  const [capital, setCapital] = useState(1)
  const [error1, setError1] = useState('')
  const [equity, setEquity] = useState(10)
  const [error2, setError2] = useState('')
  const [minTicket, setMinTicket] = useState(1)
  const [error3, setError3] = useState('')
  const [maxTicket, setMaxTicket] = useState(1)
  const [error4, setError4] = useState('')
  const [stage, setStage] = useState(
    fundingStage.enumValues ? fundingStage.enumValues[0].name : ''
  )
  const [maxInvestors, setMaxInvestors] = useState(1)
  const [error5, setError5] = useState('')
  const [useFundsFor1, setUseFundsFor1] = useState('')
  const [useFundsFor2, setUseFundsFor2] = useState('')
  const [useFundsFor3, setUseFundsFor3] = useState('')
  const [needHelpWith1, setNeedHelpWith1] = useState('')
  const [needHelpWith2, setNeedHelpWith2] = useState('')
  const [needHelpWith3, setNeedHelpWith3] = useState('')
  const [createOffer] = useMutation(CREATE_OFFER_MUTATION)

  const submit = async () => {
    if (capital < 1 || Number.isNaN(capital)) {
      setError1('Capital to be raised must be atleast 1 lac')
    } else if (equity <= 0 || equity > 99 || Number.isNaN(equity)) {
      setError2('Invalid equity share value')
    } else if (minTicket < 0.1 || Number.isNaN(minTicket)) {
      setError3('Minimum ticket size must be atleast 0.1 lac')
    } else if (maxTicket < minTicket || Number.isNaN(maxTicket)) {
      setError4('Maximum ticket size cannot be less than minimum ticket size')
    } else if (maxTicket > capital) {
      setError4(
        'Maximum ticket size cannot be greater than total capital itself'
      )
    } else if (
      maxInvestors < 1 ||
      maxInvestors > 20 ||
      Number.isNaN(maxInvestors)
    ) {
      setError5('Invalid number of investors.. Must be between 1 and 20')
    } else {
      await createOffer({
        variables: {
          input: {
            capitalTargetLacs: capital,
            equityBeingIssued: equity,
            minTicketSizeLacs: minTicket,
            maxTicketSizeLacs: maxTicket,
            fundingStage: stage,
            maxInvestors: maxInvestors,
            willUseFundsFor:
              useFundsFor1 == '' && useFundsFor2 == '' && useFundsFor3 == ''
                ? []
                : [useFundsFor1, useFundsFor2, useFundsFor3],
            needHelpWith:
              needHelpWith1 == '' && needHelpWith2 == '' && needHelpWith3 == ''
                ? []
                : [needHelpWith1, needHelpWith2, needHelpWith3],
          },
        },
      }).then((d) => {
        navigate(routes.startupOfferRoom({ id: d.data.createOffer.id }))
      })
    }
  }

  //Already an active offer - cannot go ahead with creation; redirect
  if (startupCreateOffer) {
    return (
      <div className={EmptyDivClassName}>
        <SvgDnd className={EmptyIconClassName} />
        <GreySubTitleLabel label="You already have an active offer.. Cannot create a new one!" />
        <TertiaryFilledButton label="GO BACK" action={() => back()} />
      </div>
    )
  }

  //No active offer - go ahead and provide create new offer
  return (
    <>
      <TertiaryTitleLabel label="Create Offer" />
      <div className={PageDivClassName}>
        <TextLabel label="Capital being raised (in lacs)" />
        <input
          id="Capital"
          className={TextInputClassName}
          value={capital}
          type="number"
          placeholder={'How much funding amount are you planning to raise?'}
          onChange={(e) => {
            setCapital(parseFloat(e.target.value))
            error1 != '' && setError1('')
          }}
        />
        <ErrorSubTextLabel label={error1} />
        <Divider />

        <TextLabel label="Equity you are offering (in %)" />
        <input
          id="Equity"
          className={TextInputClassName}
          value={equity}
          type="number"
          placeholder={
            'How much equity are you willing to offer for this amount?'
          }
          onChange={(e) => {
            console.log(e.target.value)
            setEquity(parseFloat(e.target.value))
            error2 != '' && setError2('')
          }}
        />
        <ErrorSubTextLabel label={error2} />
        <Divider />

        <TextLabel label="Minimum Ticket Size (in lacs)" />
        <input
          id="minTicket"
          className={TextInputClassName}
          value={minTicket}
          type="number"
          placeholder={
            'What is the minimum funding amount an investor can bring in?'
          }
          onChange={(e) => {
            setMinTicket(parseFloat(e.target.value))
            error3 != '' && setError3('')
          }}
        />
        <ErrorSubTextLabel label={error3} />
        <Divider />

        <TextLabel label="Maximum Ticket Size (in lacs)" />
        <input
          id="maxTicket"
          className={TextInputClassName}
          value={maxTicket}
          type="number"
          placeholder={
            'What is the maximum funding amount an investor can bring in?'
          }
          onChange={(e) => {
            setMaxTicket(parseFloat(e.target.value))
            error4 != '' && setError4('')
          }}
        />
        <ErrorSubTextLabel label={error4} />
        <Divider />

        <TextLabel label="Select Funding Stage" />
        <select
          className={SelectInputClassName}
          value={stage}
          onChange={(e) => {
            setStage(e.target.value)
          }}
        >
          {fundingStage.enumValues?.map((v) => (
            <option value={v.name} key={v.name}>
              {v.name.replaceAll('_', ' ')}
            </option>
          ))}
        </select>
        <Divider />

        <TextLabel label="Investors Limit" />
        <input
          id="maxInvestors"
          className={TextInputClassName}
          value={maxInvestors}
          type="number"
          placeholder={
            'At maximum, how many investors do you plan to onboard in this funding round?'
          }
          onChange={(e) => {
            setMaxInvestors(parseInt(e.target.value))
            error5 != '' && setError5('')
          }}
        />
        <ErrorSubTextLabel label={error5} />
        <Divider />

        <TextLabel label="How do you plan to use these funds? (Optional)" />
        <input
          id="plan1"
          className={TextInputClassName}
          value={useFundsFor1}
          placeholder="Plan 1"
          onChange={(e) => {
            setUseFundsFor1(e.target.value)
          }}
        />
        <input
          id="plan2"
          className={TextInputClassName}
          value={useFundsFor2}
          placeholder="Plan 2"
          onChange={(e) => {
            setUseFundsFor2(e.target.value)
          }}
        />
        <input
          id="plan3"
          className={TextInputClassName}
          value={useFundsFor3}
          placeholder="Plan 3"
          onChange={(e) => {
            setUseFundsFor3(e.target.value)
          }}
        />
        <Divider />

        <TextLabel label="What kind of help do you need from investors? (Optional)" />
        <input
          id="help1"
          className={TextInputClassName}
          value={needHelpWith1}
          placeholder="Help 1"
          onChange={(e) => {
            setNeedHelpWith1(e.target.value)
          }}
        />
        <input
          id="help2"
          className={TextInputClassName}
          value={needHelpWith2}
          placeholder="Help 2"
          onChange={(e) => {
            setNeedHelpWith2(e.target.value)
          }}
        />
        <input
          id="help3"
          className={TextInputClassName}
          value={needHelpWith3}
          placeholder="Help 3"
          onChange={(e) => {
            setNeedHelpWith3(e.target.value)
          }}
        />
        <Divider />
      </div>
      <div className={ActionGroupClassName}>
        <TertiaryFilledButton label="CREATE" action={() => submit()} />
        <HoverErrorTextButton label="CANCEL" action={() => back()} />
      </div>
    </>
  )
}

const Divider = () => {
  return <div className="h-1"></div>
}
