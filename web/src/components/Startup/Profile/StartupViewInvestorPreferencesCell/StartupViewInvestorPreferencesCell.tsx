import type { StartupViewInvestorPreferencesQuery } from 'types/graphql'

import type { CellSuccessProps } from '@redwoodjs/web'

import { MediumLabel, SubTextLabel } from 'src/components/Label/Label'

import {
  SingleSpanItemClassName,
  DoubleSpanItemClassName,
} from '../../StartupConsts'

export const QUERY = gql`
  query StartupViewInvestorPreferencesQuery($id: Int!) {
    startupViewInvestorPreferences: investorObjective(id: $id) {
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

export const Success = ({
  startupViewInvestorPreferences,
}: CellSuccessProps<StartupViewInvestorPreferencesQuery>) => {
  return (
    <div
      id="PreferencesTab"
      className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4"
    >
      <div id="AmountInvest" className={SingleSpanItemClassName}>
        <MediumLabel
          label={startupViewInvestorPreferences.preferredAmountToInvest
            .toString()
            .replaceAll('_', ' ')}
        />
        <SubTextLabel label="Investment Amount" />
      </div>
      <div id="RiskApetite" className={SingleSpanItemClassName}>
        <MediumLabel
          label={
            startupViewInvestorPreferences.riskApetite
              .toString()
              .replaceAll('_', ' ') ?? 'N/A'
          }
        />
        <SubTextLabel label="Risk Apetite" />
      </div>
      <div id="FundingStages" className={DoubleSpanItemClassName}>
        <MediumLabel
          label={startupViewInvestorPreferences.preferredFundingStages
            .join(', ')
            .replaceAll('_', ' ')}
        />
        <SubTextLabel label="Funding Stages" />
      </div>
      <div id="TeamSize" className={DoubleSpanItemClassName}>
        <MediumLabel
          label={startupViewInvestorPreferences.preferredStartupTeamSizes
            .join(', ')
            .replaceAll('_', ' ')}
        />
        <SubTextLabel label="Team Sizes" />
      </div>
      <div id="Timeline" className={DoubleSpanItemClassName}>
        <MediumLabel
          label={startupViewInvestorPreferences.preferredTimelines
            .join(', ')
            .replaceAll('_', ' ')}
        />
        <SubTextLabel label="Investment Timeline" />
      </div>
      <div id="Sectors" className={DoubleSpanItemClassName}>
        <MediumLabel
          label={startupViewInvestorPreferences.preferredSectors
            .join(', ')
            .replaceAll('_', ' ')}
        />
        <SubTextLabel label="Sectors" />
      </div>
      <div id="Locations" className={DoubleSpanItemClassName}>
        <MediumLabel
          label={
            startupViewInvestorPreferences.preferredLocations
              .join(', ')
              .replaceAll('_', ' ') ?? 'N/A'
          }
        />
        <SubTextLabel label="Locations" />
      </div>
    </div>
  )
}
