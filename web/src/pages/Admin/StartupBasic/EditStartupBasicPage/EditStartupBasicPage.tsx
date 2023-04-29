import EditStartupBasicCell from 'src/components/Admin/StartupBasic/EditStartupBasicCell'

type StartupBasicPageProps = {
  id: number
}

const EditStartupBasicPage = ({ id }: StartupBasicPageProps) => {
  return <EditStartupBasicCell id={id} />
}

export default EditStartupBasicPage
