import StartupMotiveCell from 'src/components/Admin/StartupMotive/StartupMotiveCell'

type StartupMotivePageProps = {
  id: number
}

const StartupMotivePage = ({ id }: StartupMotivePageProps) => {
  return <StartupMotiveCell id={id} />
}

export default StartupMotivePage
