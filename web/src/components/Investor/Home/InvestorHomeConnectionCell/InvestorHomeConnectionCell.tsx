import type {
  FindInvestorHomeConnectionQuery,
  FindInvestorHomeConnectionQueryVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps } from '@redwoodjs/web'

import {
  HomeConnDivClassName,
  ProfilePicClassName,
} from 'src/components/Investor/InvestorConsts'
import { PrimaryTextLabel, TextLabel } from 'src/components/Label/Label'

export const QUERY = gql`
  query FindInvestorHomeConnectionQuery($id: Int!) {
    investorHomeConnection: connection(id: $id) {
      id
      users {
        id
        profilePicURL
        type
        investor {
          id
          name
        }
        startup {
          id
          name
        }
      }
    }
  }
`

export const Success = ({
  investorHomeConnection,
}: CellSuccessProps<
  FindInvestorHomeConnectionQuery,
  FindInvestorHomeConnectionQueryVariables
>) => {
  const isUser1Investor = investorHomeConnection.users[0]?.type == 'INVESTOR'
  const isUser2Investor = investorHomeConnection.users[1]?.type == 'INVESTOR'
  return (
    <div className={HomeConnDivClassName}>
      <button
        className={ProfilePicClassName}
        onClick={() => {
          if (isUser1Investor) {
            //Navigate to other investor's profile
            navigate(
              routes.investorOtherProfile({
                id: investorHomeConnection.users[0]?.id ?? 0,
              })
            )
          } else {
            //Navigate to startup's profile
            navigate(
              routes.investorStartupProfile({
                id: investorHomeConnection.users[0]?.id ?? 0,
              })
            )
          }
        }}
      >
        {
          //TODO: Add Profile pic as BG - phase 2
          isUser1Investor
            ? investorHomeConnection.users[0]?.investor?.name[0].toUpperCase()
            : investorHomeConnection.users[0]?.startup?.name[0].toUpperCase()
        }
      </button>
      <PrimaryTextLabel
        label={
          isUser1Investor
            ? investorHomeConnection.users[0]?.investor?.name
            : investorHomeConnection.users[0]?.startup?.name
        }
      />
      <TextLabel label="is now connected with" />
      <button
        className={ProfilePicClassName}
        onClick={() => {
          if (isUser2Investor) {
            //Navigate to other investor's profile
            navigate(
              routes.investorOtherProfile({
                id: investorHomeConnection.users[1]?.id ?? 0,
              })
            )
          } else {
            //Navigate to startup's profile
            navigate(
              routes.investorStartupProfile({
                id: investorHomeConnection.users[1]?.id ?? 0,
              })
            )
          }
        }}
      >
        {
          //TODO: Add Profile pic as BG - phase 2
          isUser2Investor
            ? investorHomeConnection.users[1]?.investor?.name[0].toUpperCase()
            : investorHomeConnection.users[1]?.startup?.name[0].toUpperCase()
        }
      </button>
      <PrimaryTextLabel
        label={
          isUser2Investor
            ? investorHomeConnection.users[1]?.investor?.name
            : investorHomeConnection.users[1]?.startup?.name
        }
      />
    </div>
  )
}
