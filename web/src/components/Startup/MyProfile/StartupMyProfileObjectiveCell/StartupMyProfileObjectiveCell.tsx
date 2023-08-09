import { useCallback, useEffect, useState } from 'react'

import { useLazyQuery } from '@apollo/client'
import type {
  FindStartupMyProfileObjectiveQuery,
  FindStartupMyProfileObjectiveQueryVariables,
} from 'types/graphql'

import { type CellSuccessProps } from '@redwoodjs/web'

import { MediumLabel, GreySubTextLabel } from 'src/components/Label/Label'
import {
  DoubleSpanItemClassName,
  SingleSpanItemClassName,
} from 'src/components/Startup/StartupConsts'
import { Location } from 'src/lib/onboardingConsts'

export const QUERY = gql`
  query FindStartupMyProfileObjectiveQuery($id: Int!) {
    startupMyProfileObjective: startupObjective(id: $id) {
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
  startupMyProfileObjective,
}: CellSuccessProps<
  FindStartupMyProfileObjectiveQuery,
  FindStartupMyProfileObjectiveQueryVariables
>) => {
  const [getLocationData] = useLazyQuery(GET_LOCATION_QUERY)
  const [locations, setLocations] = useState<Location[]>([])

  const getData = useCallback(async () => {
    await getLocationData().then((d) => {
      const locs: Location[] = []
      startupMyProfileObjective.preferredLocations.forEach((element) => {
        locs.push(d.data.locations.find((loc: Location) => loc.id == element))
      })
      setLocations(locs)
    })
  }, [getLocationData, startupMyProfileObjective.preferredLocations])

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
            startupMyProfileObjective.preferredInvestorLevels.length > 0
              ? startupMyProfileObjective.preferredInvestorLevels
                  .join(', ')
                  .replaceAll('_', ' ')
              : '-'
          }
        />
        <GreySubTextLabel label="Preferred Investor Levels" />
      </div>
      <div id="preferredLocations" className={DoubleSpanItemClassName}>
        {startupMyProfileObjective.preferredLocations.length > 0 ? (
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
          label={startupMyProfileObjective.expectedTimeline
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Expected Timeline" />
      </div>
      <div id="promisingReturns" className={SingleSpanItemClassName}>
        <MediumLabel
          label={startupMyProfileObjective.promisingReturns
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Promised Returns" />
      </div>
      <div id="platformGoal" className={DoubleSpanItemClassName}>
        <MediumLabel
          label={
            startupMyProfileObjective.platformGoal.length > 0
              ? startupMyProfileObjective.platformGoal
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
            startupMyProfileObjective.referSource.length > 0
              ? startupMyProfileObjective.referSource
                  .join(', ')
                  .replaceAll('_', ' ')
              : '-'
          }
        />
        <GreySubTextLabel label="Refer Source" />
      </div>
      <div id="pitchDeckURL" className={DoubleSpanItemClassName}>
        <MediumLabel label={startupMyProfileObjective.pitchDeckURL ?? '-'} />
        <GreySubTextLabel label="Pitch Deck URL" />
      </div>
      <div id="demoURL" className={DoubleSpanItemClassName}>
        {startupMyProfileObjective.demoURL.length > 0 ? (
          startupMyProfileObjective.demoURL.map((v, i) => {
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
