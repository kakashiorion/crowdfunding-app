import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BidQuestionForm from 'src/components/Admin/BidQuestion/BidQuestionForm'

import type { CreateBidQuestionInput } from 'types/graphql'

const CREATE_BID_QUESTION_MUTATION = gql`
  mutation CreateBidQuestionMutation($input: CreateBidQuestionInput!) {
    createBidQuestion(input: $input) {
      id
    }
  }
`

const NewBidQuestion = () => {
  const [createBidQuestion, { loading, error }] = useMutation(
    CREATE_BID_QUESTION_MUTATION,
    {
      onCompleted: () => {
        toast.success('BidQuestion created')
        navigate(routes.adminBidQuestions())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateBidQuestionInput) => {
    createBidQuestion({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New BidQuestion</h2>
      </header>
      <div className="rw-segment-main">
        <BidQuestionForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewBidQuestion
