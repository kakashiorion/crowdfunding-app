import {
  Form,
  FormError,
  FieldError,
  Label,
  CheckboxField,
  RadioField,
  Submit,
} from '@redwoodjs/forms'

import type {
  EditInvestorExperienceById,
  UpdateInvestorExperienceInput,
} from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormInvestorExperience = NonNullable<
  EditInvestorExperienceById['investorExperience']
>

interface InvestorExperienceFormProps {
  investorExperience?: EditInvestorExperienceById['investorExperience']
  onSave: (
    data: UpdateInvestorExperienceInput,
    id?: FormInvestorExperience['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const InvestorExperienceForm = (props: InvestorExperienceFormProps) => {
  const onSubmit = (data: FormInvestorExperience) => {
    props.onSave(data, props?.investorExperience?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormInvestorExperience> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="hasInvestedBefore"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Has invested before
        </Label>

        <CheckboxField
          name="hasInvestedBefore"
          defaultChecked={props.investorExperience?.hasInvestedBefore}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="hasInvestedBefore" className="rw-field-error" />

        <Label
          name="hasFoundStartup"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Has found startup
        </Label>

        <CheckboxField
          name="hasFoundStartup"
          defaultChecked={props.investorExperience?.hasFoundStartup}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="hasFoundStartup" className="rw-field-error" />

        <Label
          name="hasWorkedInStartup"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Has worked in startup
        </Label>

        <CheckboxField
          name="hasWorkedInStartup"
          defaultChecked={props.investorExperience?.hasWorkedInStartup}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="hasWorkedInStartup" className="rw-field-error" />

        <Label
          name="riskApetite"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Risk apetite
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="investorExperience-riskApetite-0"
            name="riskApetite"
            defaultValue="LOW"
            defaultChecked={props.investorExperience?.riskApetite?.includes(
              'LOW'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Low</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="investorExperience-riskApetite-1"
            name="riskApetite"
            defaultValue="MEDIUM"
            defaultChecked={props.investorExperience?.riskApetite?.includes(
              'MEDIUM'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Medium</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="investorExperience-riskApetite-2"
            name="riskApetite"
            defaultValue="HIGH"
            defaultChecked={props.investorExperience?.riskApetite?.includes(
              'HIGH'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>High</div>
        </div>

        <FieldError name="riskApetite" className="rw-field-error" />

        <Label
          name="investorLevel"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Investor level
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="investorExperience-investorLevel-0"
            name="investorLevel"
            defaultValue="NOVICE"
            defaultChecked={props.investorExperience?.investorLevel?.includes(
              'NOVICE'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Novice</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="investorExperience-investorLevel-1"
            name="investorLevel"
            defaultValue="INTERMEDIATE"
            defaultChecked={props.investorExperience?.investorLevel?.includes(
              'INTERMEDIATE'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Intermediate</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="investorExperience-investorLevel-2"
            name="investorLevel"
            defaultValue="EXPERIENCED"
            defaultChecked={props.investorExperience?.investorLevel?.includes(
              'EXPERIENCED'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Experienced</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="investorExperience-investorLevel-3"
            name="investorLevel"
            defaultValue="PROFESSIONAL"
            defaultChecked={props.investorExperience?.investorLevel?.includes(
              'PROFESSIONAL'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Professional</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="investorExperience-investorLevel-4"
            name="investorLevel"
            defaultValue="SEASONED"
            defaultChecked={props.investorExperience?.investorLevel?.includes(
              'SEASONED'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Seasoned</div>
        </div>

        <FieldError name="investorLevel" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default InvestorExperienceForm
