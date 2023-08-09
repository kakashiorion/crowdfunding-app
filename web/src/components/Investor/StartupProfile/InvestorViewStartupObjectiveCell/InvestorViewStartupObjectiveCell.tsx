import { useState, useCallback, useEffect } from 'react'

import { useLazyQuery } from '@apollo/client'
import type {
  FindInvestorViewStartupObjectiveQuery,
  FindInvestorViewStartupObjectiveQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps } from '@redwoodjs/web'

import { MediumLabel, GreySubTextLabel } from 'src/components/Label/Label'
import { Location } from 'src/lib/onboardingConsts'

import {
  DoubleSpanItemClassName,
  SingleSpanItemClassName,
} from '../../InvestorConsts'

export const QUERY = gql`
  query FindInvestorViewStartupObjectiveQuery($id: Int!) {
    investorViewStartupObjective: startupObjective(id: $id) {
      id
      preferredInvestorLevels
      preferredLocations
      expectedTimeline
      promisingReturns
      platformGoal
      referSource
      pitchDeckURL
      demoURL
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
  investorViewStartupObjective,
}: CellSuccessProps<
  FindInvestorViewStartupObjectiveQuery,
  FindInvestorViewStartupObjectiveQueryVariables
>) => {
  const [getLocationData] = useLazyQuery(GET_LOCATION_QUERY)
  const [locations, setLocations] = useState<Location[]>([])

  const getData = useCallback(async () => {
    await getLocationData().then((d) => {
      const locs: Location[] = []
      investorViewStartupObjective.preferredLocations.forEach((element) => {
        locs.push(d.data.locations.find((loc: Location) => loc.id == element))
      })
      setLocations(locs)
    })
  }, [getLocationData, investorViewStartupObjective.preferredLocations])

  useEffect(() => {
    getData()
  }, [getData])

  return (
    <div
      id="objectiveTab"
      className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4"
    >
      <div id="preferredInvestorLevels" className={DoubleSpanItemClassName}>
        <MediumLabel
          label={
            investorViewStartupObjective.preferredInvestorLevels.length > 0
              ? investorViewStartupObjective.preferredInvestorLevels
                  .join(', ')
                  .replaceAll('_', ' ')
              : '-'
          }
        />
        <GreySubTextLabel label="Preferred Investor Levels" />
      </div>
      <div id="preferredLocations" className={DoubleSpanItemClassName}>
        {investorViewStartupObjective.preferredLocations.length > 0 ? (
          locations.map((v, i) => {
            return <MediumLabel key={i} label={`${v.city}, ${v.state}`} />
          })
        ) : (
          <MediumLabel label="-" />
        )}
        <GreySubTextLabel label="Preferred Locations" />
      </div>
      <div id="expectedTimeline" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorViewStartupObjective.expectedTimeline
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Expected Timeline" />
      </div>
      <div id="promisingReturns" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorViewStartupObjective.promisingReturns
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Promised Returns" />
      </div>
      <div id="platformGoal" className={DoubleSpanItemClassName}>
        <MediumLabel
          label={
            investorViewStartupObjective.platformGoal.length > 0
              ? investorViewStartupObjective.platformGoal
                  .join(', ')
                  .replaceAll('_', ' ')
              : '-'
          }
        />
        <GreySubTextLabel label="Platform Goal" />
      </div>
      <div id="referSource" className={DoubleSpanItemClassName}>
        <MediumLabel
          label={
            investorViewStartupObjective.referSource.length > 0
              ? investorViewStartupObjective.referSource
                  .join(', ')
                  .replaceAll('_', ' ')
              : '-'
          }
        />
        <GreySubTextLabel label="Refer Source" />
      </div>
      <div id="pitchDeckURL" className={DoubleSpanItemClassName}>
        <MediumLabel label={investorViewStartupObjective.pitchDeckURL ?? '-'} />
        <GreySubTextLabel label="Pitch Deck URL" />
      </div>
      <div id="demoURL" className={DoubleSpanItemClassName}>
        {investorViewStartupObjective.demoURL.length > 0 ? (
          investorViewStartupObjective.demoURL.map((v, i) => {
            return <MediumLabel key={i} label={v ?? ''} />
          })
        ) : (
          <MediumLabel label="-" />
        )}
        <GreySubTextLabel label="Demo/Resources URL" />
      </div>
    </div>
  )
}
