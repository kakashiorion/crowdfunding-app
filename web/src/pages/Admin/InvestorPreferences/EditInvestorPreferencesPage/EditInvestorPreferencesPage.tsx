import EditInvestorPreferencesCell from 'src/components/Admin/InvestorPreferences/EditInvestorPreferencesCell'

type InvestorPreferencesPageProps = {
  id: number
}

const EditInvestorPreferencesPage = ({ id }: InvestorPreferencesPageProps) => {
  return <EditInvestorPreferencesCell id={id} />
}

export default EditInvestorPreferencesPage
