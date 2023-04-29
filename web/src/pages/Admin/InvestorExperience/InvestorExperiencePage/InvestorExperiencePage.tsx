import InvestorExperienceCell from 'src/components/Admin/InvestorExperience/InvestorExperienceCell'

type InvestorExperiencePageProps = {
  id: number
}

const InvestorExperiencePage = ({ id }: InvestorExperiencePageProps) => {
  return <InvestorExperienceCell id={id} />
}

export default InvestorExperiencePage
