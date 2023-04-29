import type { EditInvestorById, UpdateInvestorInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import InvestorForm from 'src/components/Admin/Investor/InvestorForm'

export const QUERY = gql`
  query EditInvestorById($id: Int!) {
    investor: investor(id: $id) {
      id
      firstName
      lastName
      dateOfBirth
      linkedInURL
      websiteURL
      locationID
      eduBG
      yearsOfWorkEx
      numberOfCompanies
      workedInSectors
      createdAt
      updatedAt
    }
  }
`
const UPDATE_INVESTOR_MUTATION = gql`
  mutation UpdateInvestorMutation($id: Int!, $input: UpdateInvestorInput!) {
    updateInvestor(id: $id, input: $input) {
      id
      firstName
      lastName
      dateOfBirth
      linkedInURL
      websiteURL
      locationID
      eduBG
      yearsOfWorkEx
      numberOfCompanies
      workedInSectors
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ investor }: CellSuccessProps<EditInvestorById>) => {
  const [updateInvestor, { loading, error }] = useMutation(
    UPDATE_INVESTOR_MUTATION,
    {
      onCompleted: () => {
        toast.success('Investor updated')
        navigate(routes.adminInvestors())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateInvestorInput,
    id: EditInvestorById['investor']['id']
  ) => {
    updateInvestor({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Investor {investor?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <InvestorForm
          investor={investor}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
