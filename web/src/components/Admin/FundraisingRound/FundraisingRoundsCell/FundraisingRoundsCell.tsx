import type { FindFundraisingRounds } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import FundraisingRounds from 'src/components/Admin/FundraisingRound/FundraisingRounds'

export const QUERY = gql`
  query FindFundraisingRounds {
    fundraisingRounds {
      id
      startupID
      roundStage
      capitalRaisedLacs
      valuationLacs
      keyInvestors
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No fundraisingRounds yet. '}
      <Link to={routes.adminNewFundraisingRound()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  fundraisingRounds,
}: CellSuccessProps<FindFundraisingRounds>) => {
  return <FundraisingRounds fundraisingRounds={fundraisingRounds} />
}
