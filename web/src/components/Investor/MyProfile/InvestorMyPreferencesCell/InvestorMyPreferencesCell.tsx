import type { InvestorMyPreferencesQuery } from 'types/graphql'

import type { CellSuccessProps } from '@redwoodjs/web'

import { SingleSpanItemClassName } from 'src/components/Investor/InvestorConsts'
import { MediumLabel, GreySubTextLabel } from 'src/components/Label/Label'

export const QUERY = gql`
  query InvestorMyPreferencesQuery($id: Int!) {
    investorMyPreferences: user(id: $id) {
      id
      messageVisibility
      activityVisbility
      profileVisbility
      notificationLevel
      prefersTheme
    }
  }
`

export const Success = ({
  investorMyPreferences,
}: CellSuccessProps<InvestorMyPreferencesQuery>) => {
  return (
    <div
      id="preferencesTab"
      className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4"
    >
      <div id="messageVisibility" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorMyPreferences.messageVisibility
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Message Visibility" />
      </div>
      <div id="activityVisbility" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorMyPreferences.activityVisbility
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Activity Visbility" />
      </div>
      <div id="profileVisbility" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorMyPreferences.profileVisbility
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Profile Visbility" />
      </div>
      <div id="notificationLevel" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorMyPreferences.notificationLevel
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Notification Level" />
      </div>
      <div id="prefersTheme" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorMyPreferences.prefersTheme
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Preferred UI Theme" />
      </div>
    </div>
  )
}
