import type { FindInvestedCompanies } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import InvestedCompanies from 'src/components/Admin/InvestedCompany/InvestedCompanies'

export const QUERY = gql`
  query FindInvestedCompanies {
    investedCompanies {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No investedCompanies yet. '}
      <Link to={routes.adminNewInvestedCompany()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  investedCompanies,
}: CellSuccessProps<FindInvestedCompanies>) => {
  return <InvestedCompanies investedCompanies={investedCompanies} />
}
