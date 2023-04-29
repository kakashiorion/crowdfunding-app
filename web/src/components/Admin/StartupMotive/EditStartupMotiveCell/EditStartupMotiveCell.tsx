import type {
  EditStartupMotiveById,
  UpdateStartupMotiveInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import StartupMotiveForm from 'src/components/Admin/StartupMotive/StartupMotiveForm'

export const QUERY = gql`
  query EditStartupMotiveById($id: Int!) {
    startupMotive: startupMotive(id: $id) {
      id
      platformGoal
      referSource
      preferredIndustrySectors
      preferredInvestorLevels
      preferredLocations
      promisingReturnsMult
      promisingTimeline
      pitchDeckURL
      demoURL
      createdAt
      updatedAt
    }
  }
`
const UPDATE_STARTUP_MOTIVE_MUTATION = gql`
  mutation UpdateStartupMotiveMutation(
    $id: Int!
    $input: UpdateStartupMotiveInput!
  ) {
    updateStartupMotive(id: $id, input: $input) {
      id
      platformGoal
      referSource
      preferredIndustrySectors
      preferredInvestorLevels
      preferredLocations
      promisingReturnsMult
      promisingTimeline
      pitchDeckURL
      demoURL
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
  startupMotive,
}: CellSuccessProps<EditStartupMotiveById>) => {
  const [updateStartupMotive, { loading, error }] = useMutation(
    UPDATE_STARTUP_MOTIVE_MUTATION,
    {
      onCompleted: () => {
        toast.success('StartupMotive updated')
        navigate(routes.adminStartupMotives())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateStartupMotiveInput,
    id: EditStartupMotiveById['startupMotive']['id']
  ) => {
    updateStartupMotive({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit StartupMotive {startupMotive?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <StartupMotiveForm
          startupMotive={startupMotive}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
