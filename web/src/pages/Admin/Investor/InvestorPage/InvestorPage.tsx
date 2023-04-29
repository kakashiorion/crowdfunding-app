import InvestorCell from 'src/components/Admin/Investor/InvestorCell'

type InvestorPageProps = {
  id: number
}

const InvestorPage = ({ id }: InvestorPageProps) => {
  return <InvestorCell id={id} />
}

export default InvestorPage
