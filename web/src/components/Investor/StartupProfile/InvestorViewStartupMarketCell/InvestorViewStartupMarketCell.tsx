import type {
  FindInvestorViewStartupMarketQuery,
  FindInvestorViewStartupMarketQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps } from '@redwoodjs/web'

import {
  DoubleSpanItemClassName,
  SingleSpanItemClassName,
} from 'src/components/Investor/InvestorConsts'
import { MediumLabel, SubTextLabel } from 'src/components/Label/Label'

export const QUERY = gql`
  query FindInvestorViewStartupMarketQuery($id: Int!) {
    investorViewStartupMarket: startupMarket(id: $id) {
      id
      revenueStreams
      costHeads
      shortTermPlan
      marketSizeInCr
      marketGrowthRate
      trends
      opporunities
      threats
      competitors
      xFactor
    }
  }
`

export const Success = ({
  investorViewStartupMarket,
}: CellSuccessProps<
  FindInvestorViewStartupMarketQuery,
  FindInvestorViewStartupMarketQueryVariables
>) => {
  return (
    <div
      id="marketTab"
      className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4"
    >
      <div id="revenueStreams" className={DoubleSpanItemClassName}>
        <MediumLabel
          label={
            investorViewStartupMarket.revenueStreams.length > 0
              ? investorViewStartupMarket.revenueStreams
                  .join(', ')
                  .replaceAll('_', ' ')
              : '-'
          }
        />
        <SubTextLabel label="Revenue Streams" />
      </div>
      <div id="costHeads" className={DoubleSpanItemClassName}>
        <MediumLabel
          label={
            investorViewStartupMarket.costHeads.length > 0
              ? investorViewStartupMarket.costHeads
                  .join(', ')
                  .replaceAll('_', ' ')
              : '-'
          }
        />
        <SubTextLabel label="Cost Heads" />
      </div>
      <div id="shortTermPlan" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorViewStartupMarket.shortTermPlan
            .toString()
            .replaceAll('_', ' ')}
        />
        <SubTextLabel label="Short Term Plan" />
      </div>
      <div id="marketSizeInCr" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorViewStartupMarket.marketSizeInCr
            .toString()
            .replaceAll('_', ' ')}
        />
        <SubTextLabel label="Market Size (in Cr)" />
      </div>
      <div id="marketGrowthRate" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorViewStartupMarket.marketGrowthRate
            .toString()
            .replaceAll('_', ' ')}
        />
        <SubTextLabel label="Market Growth Rate" />
      </div>
      <div id="trends" className={DoubleSpanItemClassName}>
        {investorViewStartupMarket.trends.length > 0 ? (
          investorViewStartupMarket.trends.map((v, i) => {
            return <MediumLabel key={i} label={v ?? ''} />
          })
        ) : (
          <MediumLabel label="-" />
        )}
        <SubTextLabel label="Market Trends" />
      </div>
      <div id="opporunities" className={DoubleSpanItemClassName}>
        {investorViewStartupMarket.opporunities.length > 0 ? (
          investorViewStartupMarket.opporunities.map((v, i) => {
            return <MediumLabel key={i} label={v ?? ''} />
          })
        ) : (
          <MediumLabel label="-" />
        )}
        <SubTextLabel label="Opporunities" />
      </div>
      <div id="threats" className={DoubleSpanItemClassName}>
        {investorViewStartupMarket.threats.length > 0 ? (
          investorViewStartupMarket.threats.map((v, i) => {
            return <MediumLabel key={i} label={v ?? ''} />
          })
        ) : (
          <MediumLabel label="-" />
        )}
        <SubTextLabel label="Threats" />
      </div>
      <div id="competitors" className={DoubleSpanItemClassName}>
        {investorViewStartupMarket.competitors.length > 0 ? (
          investorViewStartupMarket.competitors.map((v, i) => {
            return <MediumLabel key={i} label={v ?? ''} />
          })
        ) : (
          <MediumLabel label="-" />
        )}
        <SubTextLabel label="Competitors" />
      </div>
      <div id="xFactor" className={DoubleSpanItemClassName}>
        <MediumLabel label={investorViewStartupMarket.xFactor ?? '-'} />
        <SubTextLabel label="X-Factor" />
      </div>
    </div>
  )
}
