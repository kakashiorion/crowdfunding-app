import StartupFinancialsCell from 'src/components/Admin/StartupFinancials/StartupFinancialsCell'

type StartupFinancialsPageProps = {
  id: number
}

const StartupFinancialsPage = ({ id }: StartupFinancialsPageProps) => {
  return <StartupFinancialsCell id={id} />
}

export default StartupFinancialsPage
