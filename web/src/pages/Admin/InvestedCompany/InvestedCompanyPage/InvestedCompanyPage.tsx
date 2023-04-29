import InvestedCompanyCell from 'src/components/Admin/InvestedCompany/InvestedCompanyCell'

type InvestedCompanyPageProps = {
  id: number
}

const InvestedCompanyPage = ({ id }: InvestedCompanyPageProps) => {
  return <InvestedCompanyCell id={id} />
}

export default InvestedCompanyPage
