import EditStartupPreferencesCell from 'src/components/Admin/StartupPreferences/EditStartupPreferencesCell'

type StartupPreferencesPageProps = {
  id: number
}

const EditStartupPreferencesPage = ({ id }: StartupPreferencesPageProps) => {
  return <EditStartupPreferencesCell id={id} />
}

export default EditStartupPreferencesPage
