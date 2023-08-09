import type {
  FindStartupMyProfileBusinessQuery,
  FindStartupMyProfileBusinessQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps } from '@redwoodjs/web'

import { MediumLabel, GreySubTextLabel } from 'src/components/Label/Label'
import {
  DoubleSpanItemClassName,
  SingleSpanItemClassName,
} from 'src/components/Startup/StartupConsts'

export const QUERY = gql`
  query FindStartupMyProfileBusinessQuery($id: Int!) {
    startupMyProfileBusiness: startupBusiness(id: $id) {
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
  startupMyProfileBusiness,
}: CellSuccessProps<
  FindStartupMyProfileBusinessQuery,
  FindStartupMyProfileBusinessQueryVariables
>) => {
  return (
    <div
      id="businessTab"
      className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4"
    >
      <div id="numberUsers" className={SingleSpanItemClassName}>
        <MediumLabel
          label={startupMyProfileBusiness.numberUsers
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Number of Users" />
      </div>
      <div id="numberCities" className={SingleSpanItemClassName}>
        <MediumLabel
          label={startupMyProfileBusiness.numberCities
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Number of Cities" />
      </div>
      <div id="distributionType" className={SingleSpanItemClassName}>
        <MediumLabel
          label={startupMyProfileBusiness.distributionType
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Distribution Type" />
      </div>
      <div id="hasOnlineBusiness" className={SingleSpanItemClassName}>
        <MediumLabel
          label={startupMyProfileBusiness.hasOnlineBusiness
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Online Business" />
      </div>
      <div id="partners" className={DoubleSpanItemClassName}>
        {startupMyProfileBusiness.partners.length > 0 ? (
          startupMyProfileBusiness.partners.map((v, i) => {
            return <MediumLabel key={i} label={v ?? ''} />
          })
        ) : (
          <MediumLabel label="-" />
        )}
        <GreySubTextLabel label="Partners" />
      </div>
      <div id="customers" className={DoubleSpanItemClassName}>
        {startupMyProfileBusiness.customers.length > 0 ? (
          startupMyProfileBusiness.customers.map((v, i) => {
            return <MediumLabel key={i} label={v ?? ''} />
          })
        ) : (
          <MediumLabel label="-" />
        )}
        <GreySubTextLabel label="Customers" />
      </div>
      <div id="workedWell" className={DoubleSpanItemClassName}>
        {startupMyProfileBusiness.workedWell.length > 0 ? (
          startupMyProfileBusiness.workedWell.map((v, i) => {
            return <MediumLabel key={i} label={v ?? ''} />
          })
        ) : (
          <MediumLabel label="-" />
        )}
        <GreySubTextLabel label="What has worked well?" />
      </div>
      <div id="challenges" className={DoubleSpanItemClassName}>
        {startupMyProfileBusiness.challenges.length > 0 ? (
          startupMyProfileBusiness.challenges.map((v, i) => {
            return <MediumLabel key={i} label={v ?? ''} />
          })
        ) : (
          <MediumLabel label="-" />
        )}
        <GreySubTextLabel label="Challenges" />
      </div>
      <div id="couldImprove" className={DoubleSpanItemClassName}>
        {startupMyProfileBusiness.couldImprove.length > 0 ? (
          startupMyProfileBusiness.couldImprove.map((v, i) => {
            return <MediumLabel key={i} label={v ?? ''} />
          })
        ) : (
          <MediumLabel label="-" />
        )}
        <GreySubTextLabel label="What could improve?" />
      </div>
      <div id="currentActivities" className={DoubleSpanItemClassName}>
        {startupMyProfileBusiness.currentActivities.length > 0 ? (
          startupMyProfileBusiness.currentActivities.map((v, i) => {
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
