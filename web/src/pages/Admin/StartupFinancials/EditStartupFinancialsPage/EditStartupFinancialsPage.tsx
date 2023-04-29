import EditStartupFinancialsCell from 'src/components/Admin/StartupFinancials/EditStartupFinancialsCell'

type StartupFinancialsPageProps = {
  id: number
}

const EditStartupFinancialsPage = ({ id }: StartupFinancialsPageProps) => {
  return <EditStartupFinancialsCell id={id} />
}

export default EditStartupFinancialsPage
