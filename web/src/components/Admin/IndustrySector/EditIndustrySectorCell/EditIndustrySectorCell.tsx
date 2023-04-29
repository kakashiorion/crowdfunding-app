import type {
  EditIndustrySectorById,
  UpdateIndustrySectorInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import IndustrySectorForm from 'src/components/Admin/IndustrySector/IndustrySectorForm'

export const QUERY = gql`
  query EditIndustrySectorById($id: Int!) {
    industrySector: industrySector(id: $id) {
      id
      industry
      sector
      createdAt
      updatedAt
    }
  }
`
const UPDATE_INDUSTRY_SECTOR_MUTATION = gql`
  mutation UpdateIndustrySectorMutation(
    $id: Int!
    $input: UpdateIndustrySectorInput!
  ) {
    updateIndustrySector(id: $id, input: $input) {
      id
      industry
      sector
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  industrySector,
}: CellSuccessProps<EditIndustrySectorById>) => {
  const [updateIndustrySector, { loading, error }] = useMutation(
    UPDATE_INDUSTRY_SECTOR_MUTATION,
    {
      onCompleted: () => {
        toast.success('IndustrySector updated')
        navigate(routes.adminIndustrySectors())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateIndustrySectorInput,
    id: EditIndustrySectorById['industrySector']['id']
  ) => {
    updateIndustrySector({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit IndustrySector {industrySector?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <IndustrySectorForm
          industrySector={industrySector}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
