import type {
  FindStartupViewInvestorExperienceQuery,
  FindStartupViewInvestorExperienceQueryVariables,
} from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindStartupViewInvestorExperienceQuery($id: Int!) {
    startupViewInvestorExperience: startupViewInvestorExperience(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindStartupViewInvestorExperienceQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  startupViewInvestorExperience,
}: CellSuccessProps<
  FindStartupViewInvestorExperienceQuery,
  FindStartupViewInvestorExperienceQueryVariables
>) => {
  return <div>{JSON.stringify(startupViewInvestorExperience)}</div>
}
