import InvestorMotiveCell from 'src/components/Admin/InvestorMotive/InvestorMotiveCell'

type InvestorMotivePageProps = {
  id: number
}

const InvestorMotivePage = ({ id }: InvestorMotivePageProps) => {
  return <InvestorMotiveCell id={id} />
}

export default InvestorMotivePage
