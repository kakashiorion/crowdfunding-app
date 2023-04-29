import type {
  EditFundraisingRoundById,
  UpdateFundraisingRoundInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import FundraisingRoundForm from 'src/components/Admin/FundraisingRound/FundraisingRoundForm'

export const QUERY = gql`
  query EditFundraisingRoundById($id: Int!) {
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
const UPDATE_FUNDRAISING_ROUND_MUTATION = gql`
  mutation UpdateFundraisingRoundMutation(
    $id: Int!
    $input: UpdateFundraisingRoundInput!
  ) {
    updateFundraisingRound(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  fundraisingRound,
}: CellSuccessProps<EditFundraisingRoundById>) => {
  const [updateFundraisingRound, { loading, error }] = useMutation(
    UPDATE_FUNDRAISING_ROUND_MUTATION,
    {
      onCompleted: () => {
        toast.success('FundraisingRound updated')
        navigate(routes.adminFundraisingRounds())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateFundraisingRoundInput,
    id: EditFundraisingRoundById['fundraisingRound']['id']
  ) => {
    updateFundraisingRound({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit FundraisingRound {fundraisingRound?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <FundraisingRoundForm
          fundraisingRound={fundraisingRound}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
