import StartupBasicCell from 'src/components/Admin/StartupBasic/StartupBasicCell'

type StartupBasicPageProps = {
  id: number
}

const StartupBasicPage = ({ id }: StartupBasicPageProps) => {
  return <StartupBasicCell id={id} />
}

export default StartupBasicPage
