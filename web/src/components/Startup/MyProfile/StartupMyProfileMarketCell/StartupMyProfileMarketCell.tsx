import type {
  FindStartupMyProfileMarketQuery,
  FindStartupMyProfileMarketQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps } from '@redwoodjs/web'

import { MediumLabel, GreySubTextLabel } from 'src/components/Label/Label'

import {
  DoubleSpanItemClassName,
  SingleSpanItemClassName,
} from '../../StartupConsts'

export const QUERY = gql`
  query FindStartupMyProfileMarketQuery($id: Int!) {
    startupMyProfileMarket: startupMarket(id: $id) {
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
  startupMyProfileMarket,
}: CellSuccessProps<
  FindStartupMyProfileMarketQuery,
  FindStartupMyProfileMarketQueryVariables
>) => {
  return (
    <div
      id="marketTab"
      className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4"
    >
      <div id="revenueStreams" className={DoubleSpanItemClassName}>
        <MediumLabel
          label={
            startupMyProfileMarket.revenueStreams.length > 0
              ? startupMyProfileMarket.revenueStreams
                  .join(', ')
                  .replaceAll('_', ' ')
              : '-'
          }
        />
        <GreySubTextLabel label="Revenue Streams" />
      </div>
      <div id="costHeads" className={DoubleSpanItemClassName}>
        <MediumLabel
          label={
            startupMyProfileMarket.costHeads.length > 0
              ? startupMyProfileMarket.costHeads.join(', ').replaceAll('_', ' ')
              : '-'
          }
        />
        <GreySubTextLabel label="Cost Heads" />
      </div>
      <div id="shortTermPlan" className={SingleSpanItemClassName}>
        <MediumLabel
          label={startupMyProfileMarket.shortTermPlan
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Short Term Plan" />
      </div>
      <div id="marketSizeInCr" className={SingleSpanItemClassName}>
        <MediumLabel
          label={startupMyProfileMarket.marketSizeInCr
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Market Size (in Cr)" />
      </div>
      <div id="marketGrowthRate" className={SingleSpanItemClassName}>
        <MediumLabel
          label={startupMyProfileMarket.marketGrowthRate
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Market Growth Rate" />
      </div>
      <div id="trends" className={DoubleSpanItemClassName}>
        {startupMyProfileMarket.trends.length > 0 ? (
          startupMyProfileMarket.trends.map((v, i) => {
            return <MediumLabel key={i} label={v ?? ''} />
          })
        ) : (
          <MediumLabel label="-" />
        )}
        <GreySubTextLabel label="Market Trends" />
      </div>
      <div id="opporunities" className={DoubleSpanItemClassName}>
        {startupMyProfileMarket.opporunities.length > 0 ? (
          startupMyProfileMarket.opporunities.map((v, i) => {
            return <MediumLabel key={i} label={v ?? ''} />
          })
        ) : (
          <MediumLabel label="-" />
        )}
        <GreySubTextLabel label="Opporunities" />
      </div>
      <div id="threats" className={DoubleSpanItemClassName}>
        {startupMyProfileMarket.threats.length > 0 ? (
          startupMyProfileMarket.threats.map((v, i) => {
            return <MediumLabel key={i} label={v ?? ''} />
          })
        ) : (
          <MediumLabel label="-" />
        )}
        <GreySubTextLabel label="Threats" />
      </div>
      <div id="competitors" className={DoubleSpanItemClassName}>
        {startupMyProfileMarket.competitors.length > 0 ? (
          startupMyProfileMarket.competitors.map((v, i) => {
            return <MediumLabel key={i} label={v ?? ''} />
          })
        ) : (
          <MediumLabel label="-" />
        )}
        <GreySubTextLabel label="Competitors" />
      </div>
      <div id="xFactor" className={DoubleSpanItemClassName}>
        <MediumLabel label={startupMyProfileMarket.xFactor ?? '-'} />
        <GreySubTextLabel label="X-Factor" />
      </div>
    </div>
  )
}
