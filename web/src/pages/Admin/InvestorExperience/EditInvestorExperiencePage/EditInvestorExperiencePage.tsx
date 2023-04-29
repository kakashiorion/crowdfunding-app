import EditInvestorExperienceCell from 'src/components/Admin/InvestorExperience/EditInvestorExperienceCell'

type InvestorExperiencePageProps = {
  id: number
}

const EditInvestorExperiencePage = ({ id }: InvestorExperiencePageProps) => {
  return <EditInvestorExperienceCell id={id} />
}

export default EditInvestorExperiencePage
