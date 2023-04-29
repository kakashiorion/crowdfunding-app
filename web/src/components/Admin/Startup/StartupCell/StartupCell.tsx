import type { FindStartupById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Startup from 'src/components/Admin/Startup/Startup'

export const QUERY = gql`
  query FindStartupById($id: Int!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Startup not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ startup }: CellSuccessProps<FindStartupById>) => {
  return <Startup startup={startup} />
}
