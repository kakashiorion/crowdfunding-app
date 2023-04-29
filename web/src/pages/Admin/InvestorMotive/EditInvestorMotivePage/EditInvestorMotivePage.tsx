import EditInvestorMotiveCell from 'src/components/Admin/InvestorMotive/EditInvestorMotiveCell'

type InvestorMotivePageProps = {
  id: number
}

const EditInvestorMotivePage = ({ id }: InvestorMotivePageProps) => {
  return <EditInvestorMotiveCell id={id} />
}

export default EditInvestorMotivePage
