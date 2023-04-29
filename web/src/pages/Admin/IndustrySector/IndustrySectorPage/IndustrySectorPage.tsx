import IndustrySectorCell from 'src/components/Admin/IndustrySector/IndustrySectorCell'

type IndustrySectorPageProps = {
  id: number
}

const IndustrySectorPage = ({ id }: IndustrySectorPageProps) => {
  return <IndustrySectorCell id={id} />
}

export default IndustrySectorPage
