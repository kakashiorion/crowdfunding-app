import ConnectionCell from 'src/components/Admin/Connection/ConnectionCell'

type ConnectionPageProps = {
  id: number
}

const ConnectionPage = ({ id }: ConnectionPageProps) => {
  return <ConnectionCell id={id} />
}

export default ConnectionPage
