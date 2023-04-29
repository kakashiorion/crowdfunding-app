import EditInvestorCell from 'src/components/Admin/Investor/EditInvestorCell'

type InvestorPageProps = {
  id: number
}

const EditInvestorPage = ({ id }: InvestorPageProps) => {
  return <EditInvestorCell id={id} />
}

export default EditInvestorPage
