import { useCallback, useEffect, useState } from 'react'

import { useLazyQuery } from '@apollo/client'
import type { InvestorViewOtherObjectiveQuery } from 'types/graphql'

import type { CellSuccessProps } from '@redwoodjs/web'

import {
  DoubleSpanItemClassName,
  SingleSpanItemClassName,
} from 'src/components/Investor/InvestorConsts'
import { MediumLabel, GreySubTextLabel } from 'src/components/Label/Label'
import { Location } from 'src/lib/onboardingConsts'

export const QUERY = gql`
  query InvestorViewOtherObjectiveQuery($id: Int!) {
    investorViewOtherObjective: investorObjective(id: $id) {
      id
      preferredAmountToInvest
      riskApetite
      preferredFundingStages
      preferredStartupTeamSizes
      preferredTimelines
      preferredSectors
      preferredLocations
      platformGoal
      referSource
    }
  }
`
const GET_LOCATION_QUERY = gql`
  query getLocations {
    locations {
      id
      state
      city
    }
  }
`

export const Success = ({
  investorViewOtherObjective,
}: CellSuccessProps<InvestorViewOtherObjectiveQuery>) => {
  const [getLocationData] = useLazyQuery(GET_LOCATION_QUERY)
  const [locations, setLocations] = useState<Location[]>([])

  const getData = useCallback(async () => {
    await getLocationData().then((d) => {
      const locs: Location[] = []
      investorViewOtherObjective.preferredLocations.forEach((element) => {
        locs.push(d.data.locations.find((loc: Location) => loc.id == element))
      })
      setLocations(locs)
    })
  }, [getLocationData, investorViewOtherObjective.preferredLocations])

  useEffect(() => {
    getData()
  }, [getData])

  return (
    <div
      id="ObjectiveTab"
      className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4"
    >
      <div id="AmountInvest" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorViewOtherObjective.preferredAmountToInvest
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Investment Amount" />
      </div>
      <div id="RiskApetite" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorViewOtherObjective.riskApetite
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Risk Apetite" />
      </div>
      <div id="FundingStages" className={DoubleSpanItemClassName}>
        <MediumLabel
          label={
            investorViewOtherObjective.preferredFundingStages.length > 0
              ? investorViewOtherObjective.preferredFundingStages
                  .join(', ')
                  .replaceAll('_', ' ')
              : '-'
          }
        />
        <GreySubTextLabel label="Funding Stages" />
      </div>
      <div id="TeamSize" className={DoubleSpanItemClassName}>
        <MediumLabel
          label={
            investorViewOtherObjective.preferredStartupTeamSizes.length > 0
              ? investorViewOtherObjective.preferredStartupTeamSizes
                  .join(', ')
                  .replaceAll('_', ' ')
              : '-'
          }
        />
        <GreySubTextLabel label="Team Sizes" />
      </div>
      <div id="Timeline" className={DoubleSpanItemClassName}>
        <MediumLabel
          label={
            investorViewOtherObjective.preferredTimelines.length > 0
              ? investorViewOtherObjective.preferredTimelines
                  .join(', ')
                  .replaceAll('_', ' ')
              : '-'
          }
        />
        <GreySubTextLabel label="Investment Timeline" />
      </div>
      <div id="Sectors" className={DoubleSpanItemClassName}>
        <MediumLabel
          label={
            investorViewOtherObjective.preferredSectors.length > 0
              ? investorViewOtherObjective.preferredSectors
                  .join(', ')
                  .replaceAll('_', ' ')
              : '-'
          }
        />
        <GreySubTextLabel label="Sectors" />
      </div>
      <div id="Locations" className={DoubleSpanItemClassName}>
        {locations.length > 0 ? (
          locations.map((v, i) => {
            return <MediumLabel key={i} label={`${v.city}, ${v.state}`} />
          })
        ) : (
          <MediumLabel label="-" />
        )}
        <GreySubTextLabel label="Locations" />
      </div>
    </div>
  )
}
