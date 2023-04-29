import CapTableCell from 'src/components/Admin/CapTable/CapTableCell'

type CapTablePageProps = {
  id: number
}

const CapTablePage = ({ id }: CapTablePageProps) => {
  return <CapTableCell id={id} />
}

export default CapTablePage
