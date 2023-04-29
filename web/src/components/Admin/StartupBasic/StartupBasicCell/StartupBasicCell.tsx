import type { FindStartupBasicById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import StartupBasic from 'src/components/Admin/StartupBasic/StartupBasic'

export const QUERY = gql`
  query FindStartupBasicById($id: Int!) {
    startupBasic: startupBasic(id: $id) {
      id
      valueProp
      story
      whyThisBusiness
      isFirstStartup
      mission
      vision
      startupSize
      coreValues
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>StartupBasic not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  startupBasic,
}: CellSuccessProps<FindStartupBasicById>) => {
  return <StartupBasic startupBasic={startupBasic} />
}
