import EditIndustrySectorCell from 'src/components/Admin/IndustrySector/EditIndustrySectorCell'

type IndustrySectorPageProps = {
  id: number
}

const EditIndustrySectorPage = ({ id }: IndustrySectorPageProps) => {
  return <EditIndustrySectorCell id={id} />
}

export default EditIndustrySectorPage
