import type {
  EditStartupFinancialsById,
  UpdateStartupFinancialsInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import StartupFinancialsForm from 'src/components/Admin/StartupFinancials/StartupFinancialsForm'

export const QUERY = gql`
  query EditStartupFinancialsById($id: Int!) {
    startupFinancials: startupFinancials(id: $id) {
      id
      currentValuationLacs
      currentStage
      currentRatio
      DERatio
      revenueLastFYLacs
      revenueGrowthRate
      isProfitable
      margin
      cashRunwayMonths
      plansForUsingCash
      biggestCostHeads
      createdAt
      updatedAt
    }
  }
`
const UPDATE_STARTUP_FINANCIALS_MUTATION = gql`
  mutation UpdateStartupFinancialsMutation(
    $id: Int!
    $input: UpdateStartupFinancialsInput!
  ) {
    updateStartupFinancials(id: $id, input: $input) {
      id
      currentValuationLacs
      currentStage
      currentRatio
      DERatio
      revenueLastFYLacs
      revenueGrowthRate
      isProfitable
      margin
      cashRunwayMonths
      plansForUsingCash
      biggestCostHeads
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
  startupFinancials,
}: CellSuccessProps<EditStartupFinancialsById>) => {
  const [updateStartupFinancials, { loading, error }] = useMutation(
    UPDATE_STARTUP_FINANCIALS_MUTATION,
    {
      onCompleted: () => {
        toast.success('StartupFinancials updated')
        navigate(routes.adminStartupFinancial())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateStartupFinancialsInput,
    id: EditStartupFinancialsById['startupFinancials']['id']
  ) => {
    updateStartupFinancials({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit StartupFinancials {startupFinancials?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <StartupFinancialsForm
          startupFinancials={startupFinancials}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
