import type {
  EditStartupBusinessById,
  UpdateStartupBusinessInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import StartupBusinessForm from 'src/components/Admin/StartupBusiness/StartupBusinessForm'

export const QUERY = gql`
  query EditStartupBusinessById($id: Int!) {
    startupBusiness: startupBusiness(id: $id) {
      id
      numberUsersFY
      numberCitiesFY
      distributionType
      workedWell
      challenges
      couldImprove
      currentFYActivities
      hasOnlineBusiness
      partners
      customers
      revenueModel
      costStructure
      shortTermPlan
      marketSizeLacs
      marketGrowthRate
      trends
      competitors
      opporunities
      threats
      xFactor
      createdAt
      updatedAt
    }
  }
`
const UPDATE_STARTUP_BUSINESS_MUTATION = gql`
  mutation UpdateStartupBusinessMutation(
    $id: Int!
    $input: UpdateStartupBusinessInput!
  ) {
    updateStartupBusiness(id: $id, input: $input) {
      id
      numberUsersFY
      numberCitiesFY
      distributionType
      workedWell
      challenges
      couldImprove
      currentFYActivities
      hasOnlineBusiness
      partners
      customers
      revenueModel
      costStructure
      shortTermPlan
      marketSizeLacs
      marketGrowthRate
      trends
      competitors
      opporunities
      threats
      xFactor
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
  startupBusiness,
}: CellSuccessProps<EditStartupBusinessById>) => {
  const [updateStartupBusiness, { loading, error }] = useMutation(
    UPDATE_STARTUP_BUSINESS_MUTATION,
    {
      onCompleted: () => {
        toast.success('StartupBusiness updated')
        navigate(routes.adminStartupBusinesses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateStartupBusinessInput,
    id: EditStartupBusinessById['startupBusiness']['id']
  ) => {
    updateStartupBusiness({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit StartupBusiness {startupBusiness?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <StartupBusinessForm
          startupBusiness={startupBusiness}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
