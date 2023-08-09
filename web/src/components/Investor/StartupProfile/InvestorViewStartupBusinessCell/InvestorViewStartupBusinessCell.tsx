import type {
  FindInvestorViewStartupBusinessQuery,
  FindInvestorViewStartupBusinessQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps } from '@redwoodjs/web'

import {
  DoubleSpanItemClassName,
  SingleSpanItemClassName,
} from 'src/components/Investor/InvestorConsts'
import { MediumLabel, GreySubTextLabel } from 'src/components/Label/Label'

export const QUERY = gql`
  query FindInvestorViewStartupBusinessQuery($id: Int!) {
    investorViewStartupBusiness: startupBusiness(id: $id) {
      id
      numberUsers
      numberCities
      distributionType
      partners
      customers
      workedWell
      challenges
      couldImprove
      currentActivities
      hasOnlineBusiness
    }
  }
`

export const Success = ({
  investorViewStartupBusiness,
}: CellSuccessProps<
  FindInvestorViewStartupBusinessQuery,
  FindInvestorViewStartupBusinessQueryVariables
>) => {
  return (
    <div
      id="businessTab"
      className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4"
    >
      <div id="numberUsers" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorViewStartupBusiness.numberUsers
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Number of Users" />
      </div>
      <div id="numberCities" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorViewStartupBusiness.numberCities
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Number of Cities" />
      </div>
      <div id="distributionType" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorViewStartupBusiness.distributionType
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Distribution Type" />
      </div>
      <div id="hasOnlineBusiness" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorViewStartupBusiness.hasOnlineBusiness
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Online Business" />
      </div>
      <div id="partners" className={DoubleSpanItemClassName}>
        {investorViewStartupBusiness.partners.length > 0 ? (
          investorViewStartupBusiness.partners.map((v, i) => {
            return <MediumLabel key={i} label={v ?? ''} />
          })
        ) : (
          <MediumLabel label="-" />
        )}
        <GreySubTextLabel label="Partners" />
      </div>
      <div id="customers" className={DoubleSpanItemClassName}>
        {investorViewStartupBusiness.customers.length > 0 ? (
          investorViewStartupBusiness.customers.map((v, i) => {
            return <MediumLabel key={i} label={v ?? ''} />
          })
        ) : (
          <MediumLabel label="-" />
        )}
        <GreySubTextLabel label="Customers" />
      </div>
      <div id="workedWell" className={DoubleSpanItemClassName}>
        {investorViewStartupBusiness.workedWell.length > 0 ? (
          investorViewStartupBusiness.workedWell.map((v, i) => {
            return <MediumLabel key={i} label={v ?? ''} />
          })
        ) : (
          <MediumLabel label="-" />
        )}
        <GreySubTextLabel label="What has worked well?" />
      </div>
      <div id="challenges" className={DoubleSpanItemClassName}>
        {investorViewStartupBusiness.challenges.length > 0 ? (
          investorViewStartupBusiness.challenges.map((v, i) => {
            return <MediumLabel key={i} label={v ?? ''} />
          })
        ) : (
          <MediumLabel label="-" />
        )}
        <GreySubTextLabel label="Challenges" />
      </div>
      <div id="couldImprove" className={DoubleSpanItemClassName}>
        {investorViewStartupBusiness.couldImprove.length > 0 ? (
          investorViewStartupBusiness.couldImprove.map((v, i) => {
            return <MediumLabel key={i} label={v ?? ''} />
          })
        ) : (
          <MediumLabel label="-" />
        )}
        <GreySubTextLabel label="What could improve?" />
      </div>
      <div id="currentActivities" className={DoubleSpanItemClassName}>
        {investorViewStartupBusiness.currentActivities.length > 0 ? (
          investorViewStartupBusiness.currentActivities.map((v, i) => {
            return <MediumLabel key={i} label={v ?? ''} />
          })
        ) : (
          <MediumLabel label="-" />
        )}
        <GreySubTextLabel label="Current Activities" />
      </div>
    </div>
  )
}
