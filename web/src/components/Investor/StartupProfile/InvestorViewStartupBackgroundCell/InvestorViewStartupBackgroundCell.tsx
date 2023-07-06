import type {
  FindInvestorViewStartupBackgroundQuery,
  FindInvestorViewStartupBackgroundQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps } from '@redwoodjs/web'

import {
  DoubleSpanItemClassName,
  SingleSpanItemClassName,
} from 'src/components/Investor/InvestorConsts'
import { MediumLabel, SubTextLabel } from 'src/components/Label/Label'

export const QUERY = gql`
  query FindInvestorViewStartupBackgroundQuery($id: Int!) {
    investorViewStartupBackground: startupBackground(id: $id) {
      id
      valueProp
      idea
      whyThis
      foundedBefore
      mission
      vision
      coreValues
      startupTeamSize
      keyPeople {
        id
        name
        role
        writeup
        linkedInURL
      }
    }
  }
`

export const Success = ({
  investorViewStartupBackground,
}: CellSuccessProps<
  FindInvestorViewStartupBackgroundQuery,
  FindInvestorViewStartupBackgroundQueryVariables
>) => {
  return (
    <div
      id="backgroundTab"
      className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4"
    >
      <div id="ValueProp" className={DoubleSpanItemClassName}>
        <MediumLabel label={investorViewStartupBackground.valueProp ?? '-'} />
        <SubTextLabel label="Value Prop" />
      </div>
      <div id="idea" className={DoubleSpanItemClassName}>
        <MediumLabel label={investorViewStartupBackground.idea ?? '-'} />
        <SubTextLabel label="Idea" />
      </div>
      <div id="whyThis" className={DoubleSpanItemClassName}>
        <MediumLabel label={investorViewStartupBackground.whyThis ?? '-'} />
        <SubTextLabel label="Why This Business" />
      </div>
      <div id="foundedBefore" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorViewStartupBackground.foundedBefore
            .toString()
            .replaceAll('_', ' ')}
        />
        <SubTextLabel label="Companies Founded Before" />
      </div>
      <div id="teamSize" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorViewStartupBackground.startupTeamSize
            .toString()
            .replaceAll('_', ' ')}
        />
        <SubTextLabel label="Team Size" />
      </div>
      <div id="mission" className={DoubleSpanItemClassName}>
        <MediumLabel label={investorViewStartupBackground.mission ?? '-'} />
        <SubTextLabel label="Mission" />
      </div>
      <div id="vision" className={DoubleSpanItemClassName}>
        <MediumLabel label={investorViewStartupBackground.vision ?? '-'} />
        <SubTextLabel label="Vision" />
      </div>
      <div id="coreValues" className={DoubleSpanItemClassName}>
        {investorViewStartupBackground.coreValues.length > 0 ? (
          investorViewStartupBackground.coreValues.map((v, i) => {
            return <MediumLabel key={i} label={v ?? ''} />
          })
        ) : (
          <MediumLabel label="-" />
        )}
        <SubTextLabel label="Core Values" />
      </div>
      <div id="keyPeople" className={DoubleSpanItemClassName}>
        {investorViewStartupBackground.keyPeople.length > 0 ? (
          investorViewStartupBackground.keyPeople.map((people) => {
            return (
              <MediumLabel
                key={people?.id}
                label={`${people?.name}, ${people?.role} ${
                  people?.writeup ? `: ${people.writeup}` : ''
                } ${people?.linkedInURL ? `(${people.linkedInURL})` : ''}`}
              />
            )
          })
        ) : (
          <MediumLabel label="-" />
        )}
        <SubTextLabel label="Key People" />
      </div>
    </div>
  )
}
