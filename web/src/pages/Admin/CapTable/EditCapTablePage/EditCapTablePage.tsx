import EditCapTableCell from 'src/components/Admin/CapTable/EditCapTableCell'

type CapTablePageProps = {
  id: number
}

const EditCapTablePage = ({ id }: CapTablePageProps) => {
  return <EditCapTableCell id={id} />
}

export default EditCapTablePage
