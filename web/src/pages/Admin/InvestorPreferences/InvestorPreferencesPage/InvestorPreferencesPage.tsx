import InvestorPreferencesCell from 'src/components/Admin/InvestorPreferences/InvestorPreferencesCell'

type InvestorPreferencesPageProps = {
  id: number
}

const InvestorPreferencesPage = ({ id }: InvestorPreferencesPageProps) => {
  return <InvestorPreferencesCell id={id} />
}

export default InvestorPreferencesPage
