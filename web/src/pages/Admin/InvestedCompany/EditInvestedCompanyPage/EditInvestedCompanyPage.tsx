import EditInvestedCompanyCell from 'src/components/Admin/InvestedCompany/EditInvestedCompanyCell'

type InvestedCompanyPageProps = {
  id: number
}

const EditInvestedCompanyPage = ({ id }: InvestedCompanyPageProps) => {
  return <EditInvestedCompanyCell id={id} />
}

export default EditInvestedCompanyPage
