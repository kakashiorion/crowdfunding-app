import type {
  EditInvestedCompanyById,
  UpdateInvestedCompanyInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import InvestedCompanyForm from 'src/components/Admin/InvestedCompany/InvestedCompanyForm'

export const QUERY = gql`
  query EditInvestedCompanyById($id: Int!) {
    investedCompany: investedCompany(id: $id) {
      id
      investorID
      companyName
      industrySectorID
      fundingStage
      fundingAmountLacs
      fundingReason
      hasExited
      expectedReturnsMult
      createdAt
      updatedAt
    }
  }
`
const UPDATE_INVESTED_COMPANY_MUTATION = gql`
  mutation UpdateInvestedCompanyMutation(
    $id: Int!
    $input: UpdateInvestedCompanyInput!
  ) {
    updateInvestedCompany(id: $id, input: $input) {
      id
      investorID
      companyName
      industrySectorID
      fundingStage
      fundingAmountLacs
      fundingReason
      hasExited
      expectedReturnsMult
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
  investedCompany,
}: CellSuccessProps<EditInvestedCompanyById>) => {
  const [updateInvestedCompany, { loading, error }] = useMutation(
    UPDATE_INVESTED_COMPANY_MUTATION,
    {
      onCompleted: () => {
        toast.success('InvestedCompany updated')
        navigate(routes.adminInvestedCompanies())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateInvestedCompanyInput,
    id: EditInvestedCompanyById['investedCompany']['id']
  ) => {
    updateInvestedCompany({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit InvestedCompany {investedCompany?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <InvestedCompanyForm
          investedCompany={investedCompany}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
