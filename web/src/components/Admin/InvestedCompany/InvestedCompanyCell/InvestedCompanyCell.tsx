import type { FindInvestedCompanyById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import InvestedCompany from 'src/components/Admin/InvestedCompany/InvestedCompany'

export const QUERY = gql`
  query FindInvestedCompanyById($id: Int!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>InvestedCompany not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  investedCompany,
}: CellSuccessProps<FindInvestedCompanyById>) => {
  return <InvestedCompany investedCompany={investedCompany} />
}
