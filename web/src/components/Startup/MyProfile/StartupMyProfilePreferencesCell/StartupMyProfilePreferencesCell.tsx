import type { StartupMyProfilePreferencesQuery } from 'types/graphql'

import type { CellSuccessProps } from '@redwoodjs/web'

import { MediumLabel, GreySubTextLabel } from 'src/components/Label/Label'

import { SingleSpanItemClassName } from '../../StartupConsts'

export const QUERY = gql`
  query StartupMyProfilePreferencesQuery($id: Int!) {
    startupMyProfilePreferences: user(id: $id) {
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
  startupMyProfilePreferences,
}: CellSuccessProps<StartupMyProfilePreferencesQuery>) => {
  return (
    <div
      id="preferencesTab"
      className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4"
    >
      <div id="messageVisibility" className={SingleSpanItemClassName}>
        <MediumLabel
          label={startupMyProfilePreferences.messageVisibility
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Message Visibility" />
      </div>
      <div id="activityVisbility" className={SingleSpanItemClassName}>
        <MediumLabel
          label={startupMyProfilePreferences.activityVisbility
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Activity Visbility" />
      </div>
      <div id="profileVisbility" className={SingleSpanItemClassName}>
        <MediumLabel
          label={startupMyProfilePreferences.profileVisbility
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Profile Visbility" />
      </div>
      <div id="notificationLevel" className={SingleSpanItemClassName}>
        <MediumLabel
          label={startupMyProfilePreferences.notificationLevel
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Notification Level" />
      </div>
      <div id="prefersTheme" className={SingleSpanItemClassName}>
        <MediumLabel
          label={startupMyProfilePreferences.prefersTheme
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Preferred UI Theme" />
      </div>
    </div>
  )
}
