import EditStartupCell from 'src/components/Admin/Startup/EditStartupCell'

type StartupPageProps = {
  id: number
}

const EditStartupPage = ({ id }: StartupPageProps) => {
  return <EditStartupCell id={id} />
}

export default EditStartupPage
