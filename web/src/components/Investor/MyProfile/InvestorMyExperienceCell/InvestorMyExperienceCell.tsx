import type {
  FindInvestorMyExperienceQuery,
  FindInvestorMyExperienceQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps } from '@redwoodjs/web'

import {
  DoubleSpanItemClassName,
  SingleSpanItemClassName,
} from 'src/components/Investor/InvestorConsts'
import { MediumLabel, SubTextLabel } from 'src/components/Label/Label'

export const QUERY = gql`
  query FindInvestorMyExperienceQuery($id: Int!) {
    investorMyExperience: investorExperience(id: $id) {
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
  investorMyExperience,
}: CellSuccessProps<
  FindInvestorMyExperienceQuery,
  FindInvestorMyExperienceQueryVariables
>) => {
  return (
    <div
      id="ExperienceTab"
      className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4"
    >
      <div id="WorkedStartups" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorMyExperience.workedInStartups
            .toString()
            .replaceAll('_', ' ')}
        />
        <SubTextLabel label="Worked in Startups" />
      </div>
      <div id="FoundStartups" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorMyExperience.foundedStartups
            .toString()
            .replaceAll('_', ' ')}
        />
        <SubTextLabel label="Founded Startups" />
      </div>
      <div id="InvestedStartups" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorMyExperience.investedStartups
            .toString()
            .replaceAll('_', ' ')}
        />
        <SubTextLabel label="Invested in Startups" />
      </div>
      <div id="InvestedAmount" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorMyExperience.investedAmountLacs
            .toString()
            .replaceAll('_', ' ')}
        />
        <SubTextLabel label="Avg Investment Amount" />
      </div>
      <div id="FundingStages" className={DoubleSpanItemClassName}>
        <MediumLabel
          label={
            investorMyExperience.investedStages.length > 0
              ? investorMyExperience.investedStages
                  .join(', ')
                  .replaceAll('_', ' ')
              : '-'
          }
        />
        <SubTextLabel label="Funding Stages" />
      </div>
      <div id="SuccessfulExits" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorMyExperience.successfulExits
            .toString()
            .replaceAll('_', ' ')}
        />
        <SubTextLabel label="Successful Exits" />
      </div>
      <div id="Level" className={SingleSpanItemClassName}>
        <MediumLabel label={investorMyExperience.investorLevel.toString()} />
        <SubTextLabel label="Investor Level" />
      </div>
      <div id="InvestedSectors" className={DoubleSpanItemClassName}>
        <MediumLabel
          label={
            investorMyExperience.investedSectors.length > 0
              ? investorMyExperience.investedSectors
                  .join(', ')
                  .replaceAll('_', ' ')
              : '-'
          }
        />
        <SubTextLabel label="Invested in Sectors" />
      </div>
    </div>
  )
}
