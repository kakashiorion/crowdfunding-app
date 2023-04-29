import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import FundraisingRoundForm from 'src/components/Admin/FundraisingRound/FundraisingRoundForm'

import type { CreateFundraisingRoundInput } from 'types/graphql'

const CREATE_FUNDRAISING_ROUND_MUTATION = gql`
  mutation CreateFundraisingRoundMutation(
    $input: CreateFundraisingRoundInput!
  ) {
    createFundraisingRound(input: $input) {
      id
    }
  }
`

const NewFundraisingRound = () => {
  const [createFundraisingRound, { loading, error }] = useMutation(
    CREATE_FUNDRAISING_ROUND_MUTATION,
    {
      onCompleted: () => {
        toast.success('FundraisingRound created')
        navigate(routes.adminFundraisingRounds())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateFundraisingRoundInput) => {
    createFundraisingRound({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New FundraisingRound
        </h2>
      </header>
      <div className="rw-segment-main">
        <FundraisingRoundForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewFundraisingRound
