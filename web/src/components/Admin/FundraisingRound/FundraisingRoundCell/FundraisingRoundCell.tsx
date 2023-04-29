import type { FindFundraisingRoundById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import FundraisingRound from 'src/components/Admin/FundraisingRound/FundraisingRound'

export const QUERY = gql`
  query FindFundraisingRoundById($id: Int!) {
    fundraisingRound: fundraisingRound(id: $id) {
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

export const Empty = () => <div>FundraisingRound not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  fundraisingRound,
}: CellSuccessProps<FindFundraisingRoundById>) => {
  return <FundraisingRound fundraisingRound={fundraisingRound} />
}
