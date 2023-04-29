import StartupPreferencesCell from 'src/components/Admin/StartupPreferences/StartupPreferencesCell'

type StartupPreferencesPageProps = {
  id: number
}

const StartupPreferencesPage = ({ id }: StartupPreferencesPageProps) => {
  return <StartupPreferencesCell id={id} />
}

export default StartupPreferencesPage
