import type {
  FindStartupMyOfferQuery,
  FindStartupMyOfferQueryVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps } from '@redwoodjs/web'

import { LargeTertiaryFilledButton } from 'src/components/Button/Button'
import {
  SubHeadingLabel,
  GreySubTextLabel,
  GreySubTitleLabel,
  TertiarySubTitleLabel,
  TertiaryTitleLabel,
  TextLabel,
} from 'src/components/Label/Label'
import {
  DoubleSpanItemClassName,
  SingleSpanItemClassName,
} from 'src/components/Startup/StartupConsts'

export const QUERY = gql`
  query FindStartupMyOfferQuery {
    startupMyOffer: getStartupActiveOffer {
      id
      startupID
      capitalTargetLacs
      equityBeingIssued
      minTicketSizeLacs
      maxTicketSizeLacs
      fundingStage
      maxInvestors
      willUseFundsFor
      needHelpWith
      offerRoom {
        id
        isPublic
        timelineDays
      }
      successfulDealers {
        id
        investorID
        fundingAmountLacs
      }
      status
      createdAt
    }
  }
`

//No active offer - provide create offer flow
export const Empty = () => (
  <div
    className={
      'flex w-full flex-col items-center justify-center gap-4 py-8 text-center lg:gap-6 lg:py-10'
    }
  >
    <GreySubTitleLabel label="You don't have an active offer.. Create one now to start raising funds!" />
    <LargeTertiaryFilledButton
      label="CREATE OFFER"
      action={() => navigate(routes.startupCreateOffer())}
    />
  </div>
)

//Show active offer details
export const Success = ({
  startupMyOffer,
}: CellSuccessProps<
  FindStartupMyOfferQuery,
  FindStartupMyOfferQueryVariables
>) => {
  return (
    <div className={'flex w-full flex-col items-start justify-start gap-2'}>
      <TertiaryTitleLabel label="My Offer" />
      <div
        id="myOfferDiv"
        className="flex flex-col items-start gap-3 self-stretch rounded border border-black-l4 p-4 dark:border-white-d4 lg:gap-4"
      >
        <SubHeadingLabel
          label={`${startupMyOffer.equityBeingIssued}% equity for ₹${startupMyOffer.capitalTargetLacs} lacs`}
        />
        <TextLabel
          label={`Valuation: ₹${
            startupMyOffer.capitalTargetLacs / startupMyOffer.equityBeingIssued
          } crores`}
        />
        <div
          id="line3"
          className="grid w-full grid-cols-2 gap-3 lg:grid-cols-2 lg:gap-4"
        >
          <div id="minTicketDiv" className={SingleSpanItemClassName}>
            <TertiarySubTitleLabel
              label={`₹${startupMyOffer.minTicketSizeLacs} lacs`}
            />
            <GreySubTextLabel label="Min Ticket Size" />
          </div>
          <div id="maxTicketDiv" className={SingleSpanItemClassName}>
            <TertiarySubTitleLabel
              label={`₹${startupMyOffer.maxTicketSizeLacs} lacs`}
            />
            <GreySubTextLabel label="Max Ticket Size" />
          </div>
          <div id="stageDiv" className={SingleSpanItemClassName}>
            <TertiarySubTitleLabel
              label={startupMyOffer.fundingStage
                .toString()
                .replaceAll('_', ' ')}
            />
            <GreySubTextLabel label="Funding Stage" />
          </div>
          <div id="maxInvestorsDiv" className={SingleSpanItemClassName}>
            <TertiarySubTitleLabel
              label={startupMyOffer.maxInvestors.toString()}
            />
            <GreySubTextLabel label="Max Investors" />
          </div>
          <div id="useFundsDiv" className={DoubleSpanItemClassName}>
            <GreySubTextLabel label="Will Use Funds For" />
            {startupMyOffer.willUseFundsFor.length > 0 ? (
              startupMyOffer.willUseFundsFor.map((v, i) => {
                return <TertiarySubTitleLabel key={i} label={v ?? ''} />
              })
            ) : (
              <TertiarySubTitleLabel label="-" />
            )}
          </div>
          <div id="needHelpDiv" className={DoubleSpanItemClassName}>
            <GreySubTextLabel label="Need Help With" />
            {startupMyOffer.needHelpWith.length > 0 ? (
              startupMyOffer.needHelpWith.map((v, i) => {
                return <TertiarySubTitleLabel key={i} label={v ?? ''} />
              })
            ) : (
              <TertiarySubTitleLabel label="-" />
            )}
          </div>
          <LargeTertiaryFilledButton
            label="Visit Offer Room"
            action={() =>
              navigate(routes.startupOfferRoom({ id: startupMyOffer.id }))
            }
          />
        </div>
      </div>
    </div>
  )
}

/*
Offer room page shall have:
  - High-level details (capital, equity, ticketSize, funding stage, success/max investors, status)
  - Recent updates from investors (joined/left negotiation table, makes/leaves deal, asked question,  )
  - Successful deals made if any
  - Option to visit offer room
  - Option to edit offer 3 times (applicable)
*/
