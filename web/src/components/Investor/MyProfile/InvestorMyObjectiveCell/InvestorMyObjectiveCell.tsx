import { useState, useCallback, useEffect } from 'react'

import { useLazyQuery } from '@apollo/client'
import type {
  FindInvestorMyObjectiveQuery,
  FindInvestorMyObjectiveQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps } from '@redwoodjs/web'

import { MediumLabel, SubTextLabel } from 'src/components/Label/Label'
import { Location } from 'src/lib/onboardingConsts'

import {
  DoubleSpanItemClassName,
  SingleSpanItemClassName,
} from '../../InvestorConsts'

export const QUERY = gql`
  query FindInvestorMyObjectiveQuery($id: Int!) {
    investorMyObjective: investorObjective(id: $id) {
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
  investorMyObjective,
}: CellSuccessProps<
  FindInvestorMyObjectiveQuery,
  FindInvestorMyObjectiveQueryVariables
>) => {
  const [getLocationData] = useLazyQuery(GET_LOCATION_QUERY)
  const [locations, setLocations] = useState<Location[]>([])

  const getData = useCallback(async () => {
    await getLocationData().then((d) => {
      const locs: Location[] = []
      investorMyObjective.preferredLocations.forEach((element) => {
        locs.push(d.data.locations.find((loc: Location) => loc.id == element))
      })
      setLocations(locs)
    })
  }, [getLocationData, investorMyObjective.preferredLocations])

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
          label={investorMyObjective.preferredAmountToInvest
            .toString()
            .replaceAll('_', ' ')}
        />
        <SubTextLabel label="Investment Amount" />
      </div>
      <div id="RiskApetite" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorMyObjective.riskApetite
            .toString()
            .replaceAll('_', ' ')}
        />
        <SubTextLabel label="Risk Apetite" />
      </div>
      <div id="FundingStages" className={DoubleSpanItemClassName}>
        <MediumLabel
          label={
            investorMyObjective.preferredFundingStages.length > 0
              ? investorMyObjective.preferredFundingStages
                  .join(', ')
                  .replaceAll('_', ' ')
              : '-'
          }
        />
        <SubTextLabel label="Funding Stages" />
      </div>
      <div id="TeamSize" className={DoubleSpanItemClassName}>
        <MediumLabel
          label={
            investorMyObjective.preferredStartupTeamSizes.length > 0
              ? investorMyObjective.preferredStartupTeamSizes
                  .join(', ')
                  .replaceAll('_', ' ')
              : '-'
          }
        />
        <SubTextLabel label="Team Sizes" />
      </div>
      <div id="Timeline" className={DoubleSpanItemClassName}>
        <MediumLabel
          label={
            investorMyObjective.preferredTimelines.length > 0
              ? investorMyObjective.preferredTimelines
                  .join(', ')
                  .replaceAll('_', ' ')
              : '-'
          }
        />
        <SubTextLabel label="Investment Timeline" />
      </div>
      <div id="Sectors" className={DoubleSpanItemClassName}>
        <MediumLabel
          label={
            investorMyObjective.preferredSectors.length > 0
              ? investorMyObjective.preferredSectors
                  .join(', ')
                  .replaceAll('_', ' ')
              : '-'
          }
        />
        <SubTextLabel label="Sectors" />
      </div>
      <div id="Locations" className={DoubleSpanItemClassName}>
        {locations.length > 0 ? (
          locations.map((v, i) => {
            return <MediumLabel key={i} label={`${v.city}, ${v.state}`} />
          })
        ) : (
          <MediumLabel label="-" />
        )}
        <SubTextLabel label="Locations" />
      </div>
    </div>
  )
}
