import FundraisingRoundCell from 'src/components/Admin/FundraisingRound/FundraisingRoundCell'

type FundraisingRoundPageProps = {
  id: number
}

const FundraisingRoundPage = ({ id }: FundraisingRoundPageProps) => {
  return <FundraisingRoundCell id={id} />
}

export default FundraisingRoundPage
