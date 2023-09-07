import moment from 'moment'
import type { StartupPreviousOffersQuery } from 'types/graphql'

import type { CellSuccessProps } from '@redwoodjs/web'

import {
  TitleLabel,
  TertiaryTitleLabel,
  SubTextLabel,
  ErrorSubTextLabel,
  SuccessSubTextLabel,
  TertiaryMediumLabel,
  SmallLabel,
} from 'src/components/Label/Label'
import {
  EmptyDivClassName,
  // SingleSpanItemClassName,
  DoubleSpanItemClassName,
} from 'src/components/Startup/StartupConsts'

export const QUERY = gql`
  query StartupPreviousOffersQuery {
    startupPreviousOffers: getStartupPreviousOffers {
      id
      status
      fundingStage
      capitalTargetLacs
      equityBeingIssued
      minTicketSizeLacs
      maxTicketSizeLacs
      maxInvestors
      updatedAt
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
  startupPreviousOffers,
}: CellSuccessProps<StartupPreviousOffersQuery>) => {
  if (startupPreviousOffers.length === 0) {
    return <div className={EmptyDivClassName}></div>
  }
  return (
    <div className={'flex w-full flex-col items-start justify-start gap-2'}>
      <TertiaryTitleLabel label="Previous Offers" />
      {startupPreviousOffers.map((item) => {
        return (
          <div
            key={item.id}
            className="flex flex-col items-start gap-3 self-stretch rounded border border-black-l4 p-4 dark:border-white-d4 lg:gap-4"
          >
            <div className="flex items-center justify-between gap-2 self-stretch lg:gap-3">
              <TitleLabel
                label={`${item.equityBeingIssued}% equity for ₹${item.capitalTargetLacs} lacs`}
              />
              <div
                className={`flex items-center justify-center rounded-full px-2 py-1 font-bold lg:p-3 lg:py-1.5 ${
                  item.status == 'CLOSED'
                    ? ' bg-success-l3 dark:bg-success-d3 '
                    : ' bg-error-l3 dark:bg-error-d3 '
                }`}
              >
                {item.status == 'CLOSED' ? (
                  <SuccessSubTextLabel label={item.status} />
                ) : (
                  <ErrorSubTextLabel label={item.status} />
                )}
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
                <TertiaryMediumLabel
                  label={`₹${item.minTicketSizeLacs} lacs`}
                />
                <SmallLabel label="Min Ticket Size" />
              </div>
              <div className={SingleSpanItemClassName}>
                <TertiaryMediumLabel
                  label={`₹${item.maxTicketSizeLacs} lacs`}
                />
                <SmallLabel label="Max Ticket Size" />
              </div>
              <div className={SingleSpanItemClassName}>
                <TertiaryMediumLabel
                  label={item.fundingStage.toString().replaceAll('_', ' ')}
                />
                <SmallLabel label="Funding Stage" />
              </div>
              <div className={SingleSpanItemClassName}>
                <TertiaryMediumLabel label={item.maxInvestors.toString()} />
                <SmallLabel label="Max Investors" />
              </div> */}
              {item.successfulDealers.length > 0 && (
                <div className={DoubleSpanItemClassName}>
                  <SmallLabel label="Deal made with" />
                  {item.successfulDealers.map((v, i) => {
                    return (
                      <TertiaryMediumLabel
                        key={i}
                        label={`${v?.investor.name} : ₹${v?.fundingAmountLacs} lacs`}
                      />
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
