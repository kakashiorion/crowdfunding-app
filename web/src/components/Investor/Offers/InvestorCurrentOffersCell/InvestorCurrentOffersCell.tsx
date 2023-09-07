import type { InvestorCurrentOffersQuery } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import { LargePrimaryFilledButton } from 'src/components/Button/Button'
import {
  SingleSpanItemClassName,
  DoubleSpanItemClassName,
  ProfilePicClassName,
} from 'src/components/Investor/InvestorConsts'
import {
  GreySubTextLabel,
  GreySubTitleLabel,
  PrimarySubTitleLabel,
  PrimaryTitleLabel,
  SubHeadingLabel,
  TextLabel,
  WarnTextLabel,
} from 'src/components/Label/Label'

export const QUERY = gql`
  query InvestorCurrentOffersQuery {
    investorCurrentOffers: getInvestorCurrentOffers {
      id
      capitalTargetLacs
      equityBeingIssued
      minTicketSizeLacs
      maxTicketSizeLacs
      fundingStage
      maxInvestors
      willUseFundsFor
      needHelpWith
      startup {
        id
        name
      }
      offerRoom {
        id
        participants {
          id
        }
      }
      successfulDealers {
        id
        investorID
        fundingAmountLacs
      }
    }
  }
`

export const Empty = () => {
  return (
    <div
      className={
        'flex w-full flex-col items-center justify-center gap-4 py-10 text-center lg:gap-6 lg:py-12'
      }
    >
      <GreySubTitleLabel label="You are not participating in any ongoing offers.. Start exploring to invest in startups!" />
      <LargePrimaryFilledButton
        label="EXPLORE STARTUP OFFERS"
        action={() => navigate(routes.investorExplore())}
      />
    </div>
  )
}

export const Success = ({
  investorCurrentOffers,
}: CellSuccessProps<InvestorCurrentOffersQuery>) => {
  const { currentUser } = useAuth()
  return (
    <div className={'flex w-full flex-col items-start justify-start gap-2'}>
      <PrimaryTitleLabel label="Current Offers" />
      {investorCurrentOffers.map((item) => {
        return (
          <div
            key={item.id}
            className="flex flex-col items-start gap-3 self-stretch rounded border border-black-l4 p-4 dark:border-white-d4 lg:gap-4"
          >
            <div className="flex items-center justify-start gap-2 self-stretch lg:gap-3">
              <button
                className={ProfilePicClassName}
                onClick={() => {
                  //Navigate to startup's profile
                  navigate(
                    routes.investorStartupProfile({
                      id: item.startup.id,
                    })
                  )
                }}
              >
                {
                  //TODO: Add Profile pic as BG - phase 2
                  item.startup.name[0].toUpperCase()
                }
              </button>
              <PrimarySubTitleLabel label={item.startup.name} />
            </div>
            <SubHeadingLabel
              label={`${item.equityBeingIssued}% equity for ₹${item.capitalTargetLacs} lacs`}
            />
            <TextLabel
              label={`Valuation: ₹${
                item.capitalTargetLacs / item.equityBeingIssued
              } crores`}
            />
            <div className="grid w-full grid-cols-2 gap-3 lg:grid-cols-2 lg:gap-4">
              {item.offerRoom?.participants.some(
                (t) => t?.id == currentUser?.id
              ) ? (
                <>
                  <div className={SingleSpanItemClassName}>
                    <PrimarySubTitleLabel
                      label={`₹${item.minTicketSizeLacs} lacs`}
                    />
                    <GreySubTextLabel label="Min Ticket Size" />
                  </div>
                  <div className={SingleSpanItemClassName}>
                    <PrimarySubTitleLabel
                      label={`₹${item.maxTicketSizeLacs} lacs`}
                    />
                    <GreySubTextLabel label="Max Ticket Size" />
                  </div>
                  <div className={SingleSpanItemClassName}>
                    <PrimarySubTitleLabel
                      label={item.fundingStage.toString().replaceAll('_', ' ')}
                    />
                    <GreySubTextLabel label="Funding Stage" />
                  </div>
                  <div className={SingleSpanItemClassName}>
                    <PrimarySubTitleLabel
                      label={item.maxInvestors.toString()}
                    />
                    <GreySubTextLabel label="Max Investors" />
                  </div>
                  <div className={DoubleSpanItemClassName}>
                    <GreySubTextLabel label="Will Use Funds For" />
                    {item.willUseFundsFor.length > 0 ? (
                      item.willUseFundsFor.map((v, i) => {
                        return <PrimarySubTitleLabel key={i} label={v ?? ''} />
                      })
                    ) : (
                      <PrimarySubTitleLabel label="-" />
                    )}
                  </div>
                  <div className={DoubleSpanItemClassName}>
                    <GreySubTextLabel label="Need Help With" />
                    {item.needHelpWith.length > 0 ? (
                      item.needHelpWith.map((v, i) => {
                        return <PrimarySubTitleLabel key={i} label={v ?? ''} />
                      })
                    ) : (
                      <PrimarySubTitleLabel label="-" />
                    )}
                  </div>
                  <LargePrimaryFilledButton
                    label="Visit Offer Room"
                    action={() =>
                      navigate(routes.startupOfferRoom({ id: item.id }))
                    }
                  />
                </>
              ) : (
                <div
                  className={
                    'flex items-center justify-center rounded-full bg-warn-l3 px-2 py-1 font-bold dark:bg-warn-d3 lg:p-3 lg:py-1.5'
                  }
                >
                  <WarnTextLabel label="WAITING LIST" />
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
