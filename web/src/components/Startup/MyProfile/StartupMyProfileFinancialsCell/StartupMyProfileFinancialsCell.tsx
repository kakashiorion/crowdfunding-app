import type { StartupMyProfileFinancialsQuery } from 'types/graphql'

import type { CellSuccessProps } from '@redwoodjs/web'

import { MediumLabel, SubTextLabel } from 'src/components/Label/Label'
import {
  DoubleSpanItemClassName,
  SingleSpanItemClassName,
} from 'src/components/Startup/StartupConsts'

export const QUERY = gql`
  query StartupMyProfileFinancialsQuery($id: Int!) {
    startupMyProfileFinancials: startupFinancials(id: $id) {
      id
      latestFundingStage
      latestValuationInCr
      latestCapTable {
        id
        shareholderName
        equityShare
      }
      fundraisingRounds {
        id
        fundingStage
        capitalRaisedInCr
        valuationInCr
        keyInvestors
      }
      currentRatio
      debtEquityRatio
      revenueLastFY
      revenueGrowthRate
      margin
      cashRunway
      plansForUsingCash
    }
  }
`

export const Success = ({
  startupMyProfileFinancials,
}: CellSuccessProps<StartupMyProfileFinancialsQuery>) => {
  return (
    <div
      id="financialsTab"
      className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4"
    >
      <div id="latestFundingStage" className={SingleSpanItemClassName}>
        <MediumLabel
          label={startupMyProfileFinancials.latestFundingStage
            .toString()
            .replaceAll('_', ' ')}
        />
        <SubTextLabel label="Latest Funding Stage" />
      </div>
      <div id="latestValuationInCr" className={SingleSpanItemClassName}>
        <MediumLabel
          label={
            startupMyProfileFinancials.latestValuationInCr?.toString() ?? '-'
          }
        />
        <SubTextLabel label="Latest Valuation (in Cr)" />
      </div>
      <div id="currentRatio" className={SingleSpanItemClassName}>
        <MediumLabel
          label={startupMyProfileFinancials.currentRatio
            .toString()
            .replaceAll('_', ' ')}
        />
        <SubTextLabel label="Current Ratio" />
      </div>
      <div id="debtEquityRatio" className={SingleSpanItemClassName}>
        <MediumLabel
          label={startupMyProfileFinancials.debtEquityRatio
            .toString()
            .replaceAll('_', ' ')}
        />
        <SubTextLabel label="Debt/Equity Ratio" />
      </div>
      <div id="revenueLastFY" className={SingleSpanItemClassName}>
        <MediumLabel
          label={startupMyProfileFinancials.revenueLastFY
            .toString()
            .replaceAll('_', ' ')}
        />
        <SubTextLabel label="Revenue (Prev FY)" />
      </div>
      <div id="revenueGrowthRate" className={SingleSpanItemClassName}>
        <MediumLabel
          label={startupMyProfileFinancials.revenueGrowthRate
            .toString()
            .replaceAll('_', ' ')}
        />
        <SubTextLabel label="Revenue Growth Rate" />
      </div>
      <div id="margin" className={SingleSpanItemClassName}>
        <MediumLabel
          label={startupMyProfileFinancials.margin
            .toString()
            .replaceAll('_', ' ')}
        />
        <SubTextLabel label="Margin" />
      </div>
      <div id="cashRunway" className={SingleSpanItemClassName}>
        <MediumLabel
          label={startupMyProfileFinancials.cashRunway
            .toString()
            .replaceAll('_', ' ')}
        />
        <SubTextLabel label="Cash Runway" />
      </div>
      <div id="plansForUsingCash" className={DoubleSpanItemClassName}>
        {startupMyProfileFinancials.plansForUsingCash.length > 0 ? (
          startupMyProfileFinancials.plansForUsingCash.map((v, i) => {
            return <MediumLabel key={i} label={v ?? ''} />
          })
        ) : (
          <MediumLabel label="-" />
        )}
        <SubTextLabel label="Plans For Using Cash" />
      </div>
      <div id="latestCapTable" className={DoubleSpanItemClassName}>
        {startupMyProfileFinancials.latestCapTable.length > 0 ? (
          startupMyProfileFinancials.latestCapTable.map((capTable) => {
            return (
              <MediumLabel
                key={capTable?.id}
                label={`${capTable?.shareholderName}, ${capTable?.equityShare}`}
              />
            )
          })
        ) : (
          <MediumLabel label="-" />
        )}
        <SubTextLabel label="Latest Cap Table" />
      </div>
      <div id="fundraisingRounds" className={DoubleSpanItemClassName}>
        {startupMyProfileFinancials.fundraisingRounds.length > 0 ? (
          startupMyProfileFinancials.fundraisingRounds.map((round) => {
            return (
              <MediumLabel
                key={round?.id}
                label={`${round?.fundingStage}: ${round?.capitalRaisedInCr} @${round?.valuationInCr} (${round?.keyInvestors})`}
              />
            )
          })
        ) : (
          <MediumLabel label="-" />
        )}
        <SubTextLabel label="Fundraising Rounds" />
      </div>
    </div>
  )
}
