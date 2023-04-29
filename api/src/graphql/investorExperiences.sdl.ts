export const schema = gql`
  type InvestorExperience {
    id: Int!
    investor: Investor!
    hasInvestedBefore: Boolean!
    investedCompany: [InvestedCompany]!
    hasFoundStartup: Boolean!
    hasWorkedInStartup: Boolean!
    riskApetite: RiskApetite!
    investorLevel: InvestorLevel!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum RiskApetite {
    LOW
    MEDIUM
    HIGH
  }

  enum InvestorLevel {
    NOVICE
    INTERMEDIATE
    EXPERIENCED
    PROFESSIONAL
    SEASONED
  }

  type Query {
    investorExperiences: [InvestorExperience!]! @requireAuth
    investorExperience(id: Int!): InvestorExperience @requireAuth
  }

  input CreateInvestorExperienceInput {
    hasInvestedBefore: Boolean!
    hasFoundStartup: Boolean!
    hasWorkedInStartup: Boolean!
    riskApetite: RiskApetite!
    investorLevel: InvestorLevel!
  }

  input UpdateInvestorExperienceInput {
    hasInvestedBefore: Boolean
    hasFoundStartup: Boolean
    hasWorkedInStartup: Boolean
    riskApetite: RiskApetite
    investorLevel: InvestorLevel
  }

  type Mutation {
    createInvestorExperience(
      input: CreateInvestorExperienceInput!
    ): InvestorExperience! @requireAuth
    updateInvestorExperience(
      id: Int!
      input: UpdateInvestorExperienceInput!
    ): InvestorExperience! @requireAuth
    deleteInvestorExperience(id: Int!): InvestorExperience! @requireAuth
  }
`
