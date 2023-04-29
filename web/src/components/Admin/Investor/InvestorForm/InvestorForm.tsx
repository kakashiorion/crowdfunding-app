import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  NumberField,
  RadioField,
  Submit,
} from '@redwoodjs/forms'

import type { EditInvestorById, UpdateInvestorInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormInvestor = NonNullable<EditInvestorById['investor']>

interface InvestorFormProps {
  investor?: EditInvestorById['investor']
  onSave: (data: UpdateInvestorInput, id?: FormInvestor['id']) => void
  error: RWGqlError
  loading: boolean
}

const InvestorForm = (props: InvestorFormProps) => {
  const onSubmit = (data: FormInvestor) => {
    if (data.eduBG === '') {
      data.eduBG = null
    }

    props.onSave(data, props?.investor?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormInvestor> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="firstName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          First name
        </Label>

        <TextField
          name="firstName"
          defaultValue={props.investor?.firstName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="firstName" className="rw-field-error" />

        <Label
          name="lastName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Last name
        </Label>

        <TextField
          name="lastName"
          defaultValue={props.investor?.lastName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="lastName" className="rw-field-error" />

        <Label
          name="dateOfBirth"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Date of birth
        </Label>

        <DatetimeLocalField
          name="dateOfBirth"
          defaultValue={formatDatetime(props.investor?.dateOfBirth)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="dateOfBirth" className="rw-field-error" />

        <Label
          name="linkedInURL"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Linked in url
        </Label>

        <TextField
          name="linkedInURL"
          defaultValue={props.investor?.linkedInURL}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="linkedInURL" className="rw-field-error" />

        <Label
          name="websiteURL"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Website url
        </Label>

        <TextField
          name="websiteURL"
          defaultValue={props.investor?.websiteURL}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="websiteURL" className="rw-field-error" />

        <Label
          name="locationID"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Location id
        </Label>

        <NumberField
          name="locationID"
          defaultValue={props.investor?.locationID}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="locationID" className="rw-field-error" />

        <Label
          name="eduBG"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Edu bg
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="investor-eduBG-none"
            name="eduBG"
            defaultValue=""
            defaultChecked={!props.spot?.spotType}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div className="rw-check-radio-item-none">None</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="investor-eduBG-0"
            name="eduBG"
            defaultValue="HIGH_SCHOOL"
            defaultChecked={props.investor?.eduBG?.includes('HIGH_SCHOOL')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>High School</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="investor-eduBG-1"
            name="eduBG"
            defaultValue="BACHELORS"
            defaultChecked={props.investor?.eduBG?.includes('BACHELORS')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Bachelors</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="investor-eduBG-2"
            name="eduBG"
            defaultValue="MASTERS"
            defaultChecked={props.investor?.eduBG?.includes('MASTERS')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Masters</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="investor-eduBG-3"
            name="eduBG"
            defaultValue="PHD"
            defaultChecked={props.investor?.eduBG?.includes('PHD')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Phd</div>
        </div>

        <FieldError name="eduBG" className="rw-field-error" />

        <Label
          name="yearsOfWorkEx"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Years of work ex
        </Label>

        <NumberField
          name="yearsOfWorkEx"
          defaultValue={props.investor?.yearsOfWorkEx}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="yearsOfWorkEx" className="rw-field-error" />

        <Label
          name="numberOfCompanies"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Number of companies
        </Label>

        <NumberField
          name="numberOfCompanies"
          defaultValue={props.investor?.numberOfCompanies}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="numberOfCompanies" className="rw-field-error" />

        <Label
          name="workedInSectors"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Worked in sectors
        </Label>

        <NumberField
          name="workedInSectors"
          defaultValue={props.investor?.workedInSectors}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="workedInSectors" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default InvestorForm
