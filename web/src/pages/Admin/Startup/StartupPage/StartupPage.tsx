import StartupCell from 'src/components/Admin/Startup/StartupCell'

type StartupPageProps = {
  id: number
}

const StartupPage = ({ id }: StartupPageProps) => {
  return <StartupCell id={id} />
}

export default StartupPage
