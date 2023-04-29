import type { EditStartupById, UpdateStartupInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import StartupForm from 'src/components/Admin/Startup/StartupForm'

export const QUERY = gql`
  query EditStartupById($id: Int!) {
    startup: startup(id: $id) {
      id
      name
      writeUp
      dateIncorporated
      linkedInURL
      websiteURL
      locationID
      industrySectorID
      createdAt
      updatedAt
    }
  }
`
const UPDATE_STARTUP_MUTATION = gql`
  mutation UpdateStartupMutation($id: Int!, $input: UpdateStartupInput!) {
    updateStartup(id: $id, input: $input) {
      id
      name
      writeUp
      dateIncorporated
      linkedInURL
      websiteURL
      locationID
      industrySectorID
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ startup }: CellSuccessProps<EditStartupById>) => {
  const [updateStartup, { loading, error }] = useMutation(
    UPDATE_STARTUP_MUTATION,
    {
      onCompleted: () => {
        toast.success('Startup updated')
        navigate(routes.adminStartups())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateStartupInput,
    id: EditStartupById['startup']['id']
  ) => {
    updateStartup({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Startup {startup?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <StartupForm
          startup={startup}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
