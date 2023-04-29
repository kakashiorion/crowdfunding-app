import type { FindIndustrySectors } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import IndustrySectors from 'src/components/Admin/IndustrySector/IndustrySectors'

export const QUERY = gql`
  query FindIndustrySectors {
    industrySectors {
      id
      industry
      sector
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No industrySectors yet. '}
      <Link to={routes.adminNewIndustrySector()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  industrySectors,
}: CellSuccessProps<FindIndustrySectors>) => {
  return <IndustrySectors industrySectors={industrySectors} />
}
