import type {
  FindStartupViewInvestorExperienceQuery,
  FindStartupViewInvestorExperienceQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps } from '@redwoodjs/web'

import { MediumLabel, GreySubTextLabel } from 'src/components/Label/Label'
import {
  SingleSpanItemClassName,
  DoubleSpanItemClassName,
} from 'src/components/Startup/StartupConsts'

export const QUERY = gql`
  query FindStartupViewInvestorExperienceQuery($id: Int!) {
    startupViewInvestorExperience: investorExperience(id: $id) {
      id
      workedInStartups
      foundedStartups
      investedStartups
      investedAmountLacs
      investedStages
      successfulExits
      returnsReceived
      investedSectors
      investorLevel
    }
  }
`

export const Success = ({
  startupViewInvestorExperience,
}: CellSuccessProps<
  FindStartupViewInvestorExperienceQuery,
  FindStartupViewInvestorExperienceQueryVariables
>) => {
  return (
    <div
      id="ExperienceTab"
      className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4"
    >
      <div id="WorkedStartups" className={SingleSpanItemClassName}>
        <MediumLabel
          label={startupViewInvestorExperience.workedInStartups
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Worked in Startups" />
      </div>
      <div id="FoundStartups" className={SingleSpanItemClassName}>
        <MediumLabel
          label={startupViewInvestorExperience.foundedStartups
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Founded Startups" />
      </div>
      <div id="InvestedStartups" className={SingleSpanItemClassName}>
        <MediumLabel
          label={startupViewInvestorExperience.investedStartups
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Invested in Startups" />
      </div>
      <div id="InvestedAmount" className={SingleSpanItemClassName}>
        <MediumLabel
          label={startupViewInvestorExperience.investedAmountLacs
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Avg Investment Amount" />
      </div>
      <div id="FundingStages" className={DoubleSpanItemClassName}>
        <MediumLabel
          label={
            startupViewInvestorExperience.investedStages.length > 0
              ? startupViewInvestorExperience.investedStages
                  .join(', ')
                  .replaceAll('_', ' ')
              : '-'
          }
        />
        <GreySubTextLabel label="Funding Stages" />
      </div>
      <div id="SuccessfulExits" className={SingleSpanItemClassName}>
        <MediumLabel
          label={startupViewInvestorExperience.successfulExits
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Successful Exits" />
      </div>
      <div id="Level" className={SingleSpanItemClassName}>
        <MediumLabel
          label={startupViewInvestorExperience.investorLevel.toString()}
        />
        <GreySubTextLabel label="Investor Level" />
      </div>
      <div id="InvestedSectors" className={DoubleSpanItemClassName}>
        <MediumLabel
          label={
            startupViewInvestorExperience.investedSectors.length > 0
              ? startupViewInvestorExperience.investedSectors
                  .join(', ')
                  .replaceAll('_', ' ')
              : '-'
          }
        />
        <GreySubTextLabel label="Invested in Sectors" />
      </div>
    </div>
  )
}
