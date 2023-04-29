import EditFundraisingRoundCell from 'src/components/Admin/FundraisingRound/EditFundraisingRoundCell'

type FundraisingRoundPageProps = {
  id: number
}

const EditFundraisingRoundPage = ({ id }: FundraisingRoundPageProps) => {
  return <EditFundraisingRoundCell id={id} />
}

export default EditFundraisingRoundPage
