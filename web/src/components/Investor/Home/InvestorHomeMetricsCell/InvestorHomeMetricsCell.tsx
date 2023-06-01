import type { InvestorHomeMetricsQuery } from 'types/graphql'

import { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import { SubTextLabel, TitleLabel } from 'src/components/Label/Label'

export const QUERY = gql`
  query InvestorHomeMetricsQuery {
    connections: myConnections {
      id
      status
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  connections,
}: CellSuccessProps<InvestorHomeMetricsQuery>) => {
  return (
    <div className="flex w-full gap-4 overflow-x-scroll">
      <div className="flex flex-col items-start gap-2 rounded bg-white-d1 p-4 dark:bg-black-l2">
        <TitleLabel
          label={
            connections
              .filter((c) => c.status == 'ACCEPTED')
              .length.toString() ?? 0
          }
        />
        <SubTextLabel label={'Connections'} />
      </div>
    </div>
  )
}
