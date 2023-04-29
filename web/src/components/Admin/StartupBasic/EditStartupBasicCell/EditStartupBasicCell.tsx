import type {
  EditStartupBasicById,
  UpdateStartupBasicInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import StartupBasicForm from 'src/components/Admin/StartupBasic/StartupBasicForm'

export const QUERY = gql`
  query EditStartupBasicById($id: Int!) {
    startupBasic: startupBasic(id: $id) {
      id
      valueProp
      story
      whyThisBusiness
      isFirstStartup
      mission
      vision
      startupSize
      coreValues
      createdAt
      updatedAt
    }
  }
`
const UPDATE_STARTUP_BASIC_MUTATION = gql`
  mutation UpdateStartupBasicMutation(
    $id: Int!
    $input: UpdateStartupBasicInput!
  ) {
    updateStartupBasic(id: $id, input: $input) {
      id
      valueProp
      story
      whyThisBusiness
      isFirstStartup
      mission
      vision
      startupSize
      coreValues
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
  startupBasic,
}: CellSuccessProps<EditStartupBasicById>) => {
  const [updateStartupBasic, { loading, error }] = useMutation(
    UPDATE_STARTUP_BASIC_MUTATION,
    {
      onCompleted: () => {
        toast.success('StartupBasic updated')
        navigate(routes.adminStartupBasics())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateStartupBasicInput,
    id: EditStartupBasicById['startupBasic']['id']
  ) => {
    updateStartupBasic({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit StartupBasic {startupBasic?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <StartupBasicForm
          startupBasic={startupBasic}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
