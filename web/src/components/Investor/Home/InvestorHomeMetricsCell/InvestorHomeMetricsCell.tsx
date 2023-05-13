import type { InvestorHomeMetricsQuery } from 'types/graphql'

import { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import { SubTextLabel, TitleLabel } from 'src/components/Label/Label'

export const QUERY = gql`
  query InvestorHomeMetricsQuery {
    bids {
      id
      status
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  bids,
}: CellSuccessProps<InvestorHomeMetricsQuery>) => {
  return (
    <div className="flex w-full gap-4 ">
      <div className="flex flex-col items-start gap-2 p-4">
        <TitleLabel
          label={
            bids
              .filter((b) => b.status == 'CREATED' || b.status == 'COUNTER')
              .length.toString() ?? 0
          }
        />
        <SubTextLabel label={'Bids in progress'} />
      </div>
    </div>
  )
}
