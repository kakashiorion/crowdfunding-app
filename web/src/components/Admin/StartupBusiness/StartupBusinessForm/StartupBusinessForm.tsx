import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  RadioField,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

import type {
  EditStartupBusinessById,
  UpdateStartupBusinessInput,
} from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormStartupBusiness = NonNullable<
  EditStartupBusinessById['startupBusiness']
>

interface StartupBusinessFormProps {
  startupBusiness?: EditStartupBusinessById['startupBusiness']
  onSave: (
    data: UpdateStartupBusinessInput,
    id?: FormStartupBusiness['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const StartupBusinessForm = (props: StartupBusinessFormProps) => {
  const onSubmit = (data: FormStartupBusiness) => {
    if (data.shortTermPlan) {
      data.shortTermPlan = data.shortTermPlan.filter((value) => !!value)
    }

    props.onSave(data, props?.startupBusiness?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormStartupBusiness> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="numberUsersFY"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Number users fy
        </Label>

        <NumberField
          name="numberUsersFY"
          defaultValue={props.startupBusiness?.numberUsersFY}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="numberUsersFY" className="rw-field-error" />

        <Label
          name="numberCitiesFY"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Number cities fy
        </Label>

        <NumberField
          name="numberCitiesFY"
          defaultValue={props.startupBusiness?.numberCitiesFY}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="numberCitiesFY" className="rw-field-error" />

        <Label
          name="distributionType"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Distribution type
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="startupBusiness-distributionType-0"
            name="distributionType"
            defaultValue="B2B"
            defaultChecked={props.startupBusiness?.distributionType?.includes(
              'B2B'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>B2b</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="startupBusiness-distributionType-1"
            name="distributionType"
            defaultValue="B2C"
            defaultChecked={props.startupBusiness?.distributionType?.includes(
              'B2C'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>B2c</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="startupBusiness-distributionType-2"
            name="distributionType"
            defaultValue="BOTH"
            defaultChecked={props.startupBusiness?.distributionType?.includes(
              'BOTH'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Both</div>
        </div>

        <FieldError name="distributionType" className="rw-field-error" />

        <Label
          name="workedWell"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Worked well
        </Label>

        <TextField
          name="workedWell"
          defaultValue={props.startupBusiness?.workedWell}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="workedWell" className="rw-field-error" />

        <Label
          name="challenges"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Challenges
        </Label>

        <TextField
          name="challenges"
          defaultValue={props.startupBusiness?.challenges}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="challenges" className="rw-field-error" />

        <Label
          name="couldImprove"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Could improve
        </Label>

        <TextField
          name="couldImprove"
          defaultValue={props.startupBusiness?.couldImprove}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="couldImprove" className="rw-field-error" />

        <Label
          name="currentFYActivities"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Current fy activities
        </Label>

        <TextField
          name="currentFYActivities"
          defaultValue={props.startupBusiness?.currentFYActivities}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="currentFYActivities" className="rw-field-error" />

        <Label
          name="hasOnlineBusiness"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Has online business
        </Label>

        <CheckboxField
          name="hasOnlineBusiness"
          defaultChecked={props.startupBusiness?.hasOnlineBusiness}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="hasOnlineBusiness" className="rw-field-error" />

        <Label
          name="partners"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Partners
        </Label>

        <TextField
          name="partners"
          defaultValue={props.startupBusiness?.partners}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="partners" className="rw-field-error" />

        <Label
          name="customers"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Customers
        </Label>

        <TextField
          name="customers"
          defaultValue={props.startupBusiness?.customers}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="customers" className="rw-field-error" />

        <Label
          name="revenueModel"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Revenue model
        </Label>

        <TextField
          name="revenueModel"
          defaultValue={props.startupBusiness?.revenueModel}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="revenueModel" className="rw-field-error" />

        <Label
          name="costStructure"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Cost structure
        </Label>

        <TextField
          name="costStructure"
          defaultValue={props.startupBusiness?.costStructure}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="costStructure" className="rw-field-error" />

        <Label
          name="shortTermPlan"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Short term plan
        </Label>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="startupBusiness-shortTermPlan-0"
            name="shortTermPlan[0]"
            defaultValue="EXPAND_GEO"
            defaultChecked={props.startupBusiness?.shortTermPlan?.includes(
              'EXPAND_GEO'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Expand Geo</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="startupBusiness-shortTermPlan-1"
            name="shortTermPlan[1]"
            defaultValue="IPO"
            defaultChecked={props.startupBusiness?.shortTermPlan?.includes(
              'IPO'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Ipo</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="startupBusiness-shortTermPlan-2"
            name="shortTermPlan[2]"
            defaultValue="HIRE_TEAM"
            defaultChecked={props.startupBusiness?.shortTermPlan?.includes(
              'HIRE_TEAM'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Hire Team</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="startupBusiness-shortTermPlan-3"
            name="shortTermPlan[3]"
            defaultValue="IMPROVE_PRODUCT_SERVICE"
            defaultChecked={props.startupBusiness?.shortTermPlan?.includes(
              'IMPROVE_PRODUCT_SERVICE'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Improve Product_service</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="startupBusiness-shortTermPlan-4"
            name="shortTermPlan[4]"
            defaultValue="BUILD_CUSTOMER_BASE"
            defaultChecked={props.startupBusiness?.shortTermPlan?.includes(
              'BUILD_CUSTOMER_BASE'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Build Customer_base</div>
        </div>

        <FieldError name="shortTermPlan" className="rw-field-error" />

        <Label
          name="marketSizeLacs"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Market size lacs
        </Label>

        <TextField
          name="marketSizeLacs"
          defaultValue={props.startupBusiness?.marketSizeLacs}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="marketSizeLacs" className="rw-field-error" />

        <Label
          name="marketGrowthRate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Market growth rate
        </Label>

        <TextField
          name="marketGrowthRate"
          defaultValue={props.startupBusiness?.marketGrowthRate}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="marketGrowthRate" className="rw-field-error" />

        <Label
          name="trends"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Trends
        </Label>

        <TextField
          name="trends"
          defaultValue={props.startupBusiness?.trends}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="trends" className="rw-field-error" />

        <Label
          name="competitors"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Competitors
        </Label>

        <TextField
          name="competitors"
          defaultValue={props.startupBusiness?.competitors}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="competitors" className="rw-field-error" />

        <Label
          name="opporunities"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Opporunities
        </Label>

        <TextField
          name="opporunities"
          defaultValue={props.startupBusiness?.opporunities}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="opporunities" className="rw-field-error" />

        <Label
          name="threats"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Threats
        </Label>

        <TextField
          name="threats"
          defaultValue={props.startupBusiness?.threats}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="threats" className="rw-field-error" />

        <Label
          name="xFactor"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          X factor
        </Label>

        <TextField
          name="xFactor"
          defaultValue={props.startupBusiness?.xFactor}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="xFactor" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default StartupBusinessForm
