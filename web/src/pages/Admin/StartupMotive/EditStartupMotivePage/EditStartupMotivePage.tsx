import EditStartupMotiveCell from 'src/components/Admin/StartupMotive/EditStartupMotiveCell'

type StartupMotivePageProps = {
  id: number
}

const EditStartupMotivePage = ({ id }: StartupMotivePageProps) => {
  return <EditStartupMotiveCell id={id} />
}

export default EditStartupMotivePage
