import type { FindIndustrySectorById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import IndustrySector from 'src/components/Admin/IndustrySector/IndustrySector'

export const QUERY = gql`
  query FindIndustrySectorById($id: Int!) {
    industrySector: industrySector(id: $id) {
      id
      industry
      sector
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>IndustrySector not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  industrySector,
}: CellSuccessProps<FindIndustrySectorById>) => {
  return <IndustrySector industrySector={industrySector} />
}
