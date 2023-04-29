import StartupBusinessCell from 'src/components/Admin/StartupBusiness/StartupBusinessCell'

type StartupBusinessPageProps = {
  id: number
}

const StartupBusinessPage = ({ id }: StartupBusinessPageProps) => {
  return <StartupBusinessCell id={id} />
}

export default StartupBusinessPage
