import EditStartupBusinessCell from 'src/components/Admin/StartupBusiness/EditStartupBusinessCell'

type StartupBusinessPageProps = {
  id: number
}

const EditStartupBusinessPage = ({ id }: StartupBusinessPageProps) => {
  return <EditStartupBusinessCell id={id} />
}

export default EditStartupBusinessPage
