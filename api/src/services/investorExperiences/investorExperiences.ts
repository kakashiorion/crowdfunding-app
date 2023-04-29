import type {
  QueryResolvers,
  MutationResolvers,
  InvestorExperienceRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const investorExperiences: QueryResolvers['investorExperiences'] =
  () => {
    return db.investorExperience.findMany()
  }

export const investorExperience: QueryResolvers['investorExperience'] = ({
  id,
}) => {
  return db.investorExperience.findUnique({
    where: { id },
  })
}

export const createInvestorExperience: MutationResolvers['createInvestorExperience'] =
  ({ input }) => {
    return db.investorExperience.create({
      data: input,
    })
  }

export const updateInvestorExperience: MutationResolvers['updateInvestorExperience'] =
  ({ id, input }) => {
    return db.investorExperience.update({
      data: input,
      where: { id },
    })
  }

export const deleteInvestorExperience: MutationResolvers['deleteInvestorExperience'] =
  ({ id }) => {
    return db.investorExperience.delete({
      where: { id },
    })
  }

export const InvestorExperience: InvestorExperienceRelationResolvers = {
  investor: (_obj, { root }) => {
    return db.investorExperience
      .findUnique({ where: { id: root?.id } })
      .investor()
  },
  investedCompany: (_obj, { root }) => {
    return db.investorExperience
      .findUnique({ where: { id: root?.id } })
      .investedCompany()
  },
}
