import type {
  FindStartupMyProfileBackgroundQuery,
  FindStartupMyProfileBackgroundQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps } from '@redwoodjs/web'

import { MediumLabel, GreySubTextLabel } from 'src/components/Label/Label'
import {
  DoubleSpanItemClassName,
  SingleSpanItemClassName,
} from 'src/components/Startup/StartupConsts'

export const QUERY = gql`
  query FindStartupMyProfileBackgroundQuery($id: Int!) {
    startupMyProfileBackground: startupBackground(id: $id) {
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
  startupMyProfileBackground,
}: CellSuccessProps<
  FindStartupMyProfileBackgroundQuery,
  FindStartupMyProfileBackgroundQueryVariables
>) => {
  return (
    <div
      id="backgroundTab"
      className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4"
    >
      <div id="ValueProp" className={DoubleSpanItemClassName}>
        <MediumLabel label={startupMyProfileBackground.valueProp ?? '-'} />
        <GreySubTextLabel label="Value Prop" />
      </div>
      <div id="idea" className={DoubleSpanItemClassName}>
        <MediumLabel label={startupMyProfileBackground.idea ?? '-'} />
        <GreySubTextLabel label="Idea" />
      </div>
      <div id="whyThis" className={DoubleSpanItemClassName}>
        <MediumLabel label={startupMyProfileBackground.whyThis ?? '-'} />
        <GreySubTextLabel label="Why This Business" />
      </div>
      <div id="foundedBefore" className={SingleSpanItemClassName}>
        <MediumLabel
          label={startupMyProfileBackground.foundedBefore
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Companies Founded Before" />
      </div>
      <div id="teamSize" className={SingleSpanItemClassName}>
        <MediumLabel
          label={startupMyProfileBackground.startupTeamSize
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Team Size" />
      </div>
      <div id="mission" className={DoubleSpanItemClassName}>
        <MediumLabel label={startupMyProfileBackground.mission ?? '-'} />
        <GreySubTextLabel label="Mission" />
      </div>
      <div id="vision" className={DoubleSpanItemClassName}>
        <MediumLabel label={startupMyProfileBackground.vision ?? '-'} />
        <GreySubTextLabel label="Vision" />
      </div>
      <div id="coreValues" className={DoubleSpanItemClassName}>
        {startupMyProfileBackground.coreValues.length > 0 ? (
          startupMyProfileBackground.coreValues.map((v, i) => {
            return <MediumLabel key={i} label={v ?? ''} />
          })
        ) : (
          <MediumLabel label="-" />
        )}
        <GreySubTextLabel label="Core Values" />
      </div>
      <div id="keyPeople" className={DoubleSpanItemClassName}>
        {startupMyProfileBackground.keyPeople.length > 0 ? (
          startupMyProfileBackground.keyPeople.map((people) => {
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
        <GreySubTextLabel label="Key People" />
      </div>
    </div>
  )
}
