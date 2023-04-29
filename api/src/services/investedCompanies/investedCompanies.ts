import type {
  QueryResolvers,
  MutationResolvers,
  InvestedCompanyRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const investedCompanies: QueryResolvers['investedCompanies'] = () => {
  return db.investedCompany.findMany()
}

export const investedCompany: QueryResolvers['investedCompany'] = ({ id }) => {
  return db.investedCompany.findUnique({
    where: { id },
  })
}

export const createInvestedCompany: MutationResolvers['createInvestedCompany'] =
  ({ input }) => {
    return db.investedCompany.create({
      data: input,
    })
  }

export const updateInvestedCompany: MutationResolvers['updateInvestedCompany'] =
  ({ id, input }) => {
    return db.investedCompany.update({
      data: input,
      where: { id },
    })
  }

export const deleteInvestedCompany: MutationResolvers['deleteInvestedCompany'] =
  ({ id }) => {
    return db.investedCompany.delete({
      where: { id },
    })
  }

export const InvestedCompany: InvestedCompanyRelationResolvers = {
  investor: (_obj, { root }) => {
    return db.investedCompany.findUnique({ where: { id: root?.id } }).investor()
  },
}
