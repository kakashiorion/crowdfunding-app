import moment from 'moment'
import type { InvestorPreviousOffersQuery } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import {
  DoubleSpanItemClassName,
  EmptyDivClassName,
  ProfilePicClassName,
} from 'src/components/Investor/InvestorConsts'
import {
  PrimaryMediumLabel,
  PrimaryTitleLabel,
  SmallLabel,
  SubTextLabel,
  SuccessSubTextLabel,
  TitleLabel,
} from 'src/components/Label/Label'

export const QUERY = gql`
  query InvestorPreviousOffersQuery {
    investorPreviousOffers: getInvestorPreviousOffers {
      id
      status
      fundingStage
      capitalTargetLacs
      equityBeingIssued
      minTicketSizeLacs
      maxTicketSizeLacs
      maxInvestors
      updatedAt
      startup {
        id
        name
      }
      successfulDealers {
        id
        fundingAmountLacs
        investor {
          id
          name
        }
      }
    }
  }
`

export const Success = ({
  investorPreviousOffers,
}: CellSuccessProps<InvestorPreviousOffersQuery>) => {
  const { currentUser } = useAuth()
  if (investorPreviousOffers.length === 0) {
    return <div className={EmptyDivClassName}></div>
  }
  return (
    <div className={'flex w-full flex-col items-start justify-start gap-2'}>
      <PrimaryTitleLabel label="Closed Offers" />
      {investorPreviousOffers.map((item) => {
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
              <PrimaryMediumLabel label={item.startup.name} />
            </div>
            <div className="flex items-center justify-between gap-2 self-stretch lg:gap-3">
              <TitleLabel
                label={`${item.equityBeingIssued}% equity for ₹${item.capitalTargetLacs} lacs`}
              />
              <div
                className={`flex items-center justify-center rounded-full bg-success-l3 px-2 py-1 font-bold dark:bg-success-d3 lg:p-3 lg:py-1.5`}
              >
                <SuccessSubTextLabel label={item.status} />
              </div>
            </div>
            <div className="flex items-center justify-between gap-2 self-stretch lg:gap-3">
              <SubTextLabel
                label={`Valuation: ₹${
                  item.capitalTargetLacs / item.equityBeingIssued
                } crores`}
              />
              <SubTextLabel
                label={moment(item.updatedAt).format('MMM DD YYYY')}
              />
            </div>
            <div className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4">
              {/* <div className={SingleSpanItemClassName}>
                <PrimaryMediumLabel
                  label={`₹${item.minTicketSizeLacs} lacs`}
                />
                <SmallLabel label="Min Ticket Size" />
              </div>
              <div className={SingleSpanItemClassName}>
                <PrimaryMediumLabel
                  label={`₹${item.maxTicketSizeLacs} lacs`}
                />
                <SmallLabel label="Max Ticket Size" />
              </div>
              <div className={SingleSpanItemClassName}>
                <PrimaryMediumLabel
                  label={item.fundingStage.toString().replaceAll('_', ' ')}
                />
                <SmallLabel label="Funding Stage" />
              </div>
              <div className={SingleSpanItemClassName}>
                <PrimaryMediumLabel label={item.maxInvestors.toString()} />
                <SmallLabel label="Max Investors" />
              </div> */}
              {item.successfulDealers.length > 0 && (
                <div className={DoubleSpanItemClassName}>
                  <SmallLabel label="Deal made with" />
                  {item.successfulDealers.map((v, i) => {
                    return (
                      <div
                        className="flex items-center justify-start gap-2 self-stretch lg:gap-3"
                        key={v?.id}
                      >
                        <button
                          className={ProfilePicClassName}
                          onClick={() => {
                            //Navigate to investor's profile
                            if (v?.investor.id == currentUser?.id) {
                              navigate(routes.investorMyProfile())
                            } else {
                              navigate(
                                routes.investorOtherProfile({
                                  id: v?.investor.id ?? 0,
                                })
                              )
                            }
                          }}
                        >
                          {
                            //TODO: Add Profile pic as BG - phase 2
                            v?.investor.name[0].toUpperCase()
                          }
                        </button>
                        <PrimaryMediumLabel
                          key={i}
                          label={`${v?.investor.name} : ₹${
                            v?.fundingAmountLacs
                          } lacs (${
                            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                            (item.equityBeingIssued * v!.fundingAmountLacs) /
                            item.capitalTargetLacs
                          }%)`}
                        />
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
