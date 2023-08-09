import type {
  FindInvestorViewOtherExperienceQuery,
  FindInvestorViewOtherExperienceQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps } from '@redwoodjs/web'

import {
  DoubleSpanItemClassName,
  SingleSpanItemClassName,
} from 'src/components/Investor/InvestorConsts'
import { MediumLabel, GreySubTextLabel } from 'src/components/Label/Label'

export const QUERY = gql`
  query FindInvestorViewOtherExperienceQuery($id: Int!) {
    investorViewOtherExperience: investorExperience(id: $id) {
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
  investorViewOtherExperience,
}: CellSuccessProps<
  FindInvestorViewOtherExperienceQuery,
  FindInvestorViewOtherExperienceQueryVariables
>) => {
  return (
    <div
      id="ExperienceTab"
      className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4"
    >
      <div id="WorkedStartups" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorViewOtherExperience.workedInStartups
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Worked in Startups" />
      </div>
      <div id="FoundStartups" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorViewOtherExperience.foundedStartups
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Founded Startups" />
      </div>
      <div id="InvestedStartups" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorViewOtherExperience.investedStartups
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Invested in Startups" />
      </div>
      <div id="InvestedAmount" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorViewOtherExperience.investedAmountLacs
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Avg Investment Amount" />
      </div>
      <div id="FundingStages" className={DoubleSpanItemClassName}>
        <MediumLabel
          label={
            investorViewOtherExperience.investedStages.length > 0
              ? investorViewOtherExperience.investedStages
                  .join(', ')
                  .replaceAll('_', ' ')
              : '-'
          }
        />
        <GreySubTextLabel label="Funding Stages" />
      </div>
      <div id="SuccessfulExits" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorViewOtherExperience.successfulExits
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Successful Exits" />
      </div>
      <div id="Level" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorViewOtherExperience.investorLevel.toString()}
        />
        <GreySubTextLabel label="Investor Level" />
      </div>
      <div id="InvestedSectors" className={DoubleSpanItemClassName}>
        <MediumLabel
          label={
            investorViewOtherExperience.investedSectors.length > 0
              ? investorViewOtherExperience.investedSectors
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
