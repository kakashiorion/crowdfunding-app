import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  RadioField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

import type {
  EditInvestedCompanyById,
  UpdateInvestedCompanyInput,
} from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormInvestedCompany = NonNullable<
  EditInvestedCompanyById['investedCompany']
>

interface InvestedCompanyFormProps {
  investedCompany?: EditInvestedCompanyById['investedCompany']
  onSave: (
    data: UpdateInvestedCompanyInput,
    id?: FormInvestedCompany['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const InvestedCompanyForm = (props: InvestedCompanyFormProps) => {
  const onSubmit = (data: FormInvestedCompany) => {
    if (data.fundingAmountLacs === '') {
      data.fundingAmountLacs = null
    }

    props.onSave(data, props?.investedCompany?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormInvestedCompany> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="investorID"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Investor id
        </Label>

        <NumberField
          name="investorID"
          defaultValue={props.investedCompany?.investorID}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="investorID" className="rw-field-error" />

        <Label
          name="companyName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Company name
        </Label>

        <TextField
          name="companyName"
          defaultValue={props.investedCompany?.companyName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="companyName" className="rw-field-error" />

        <Label
          name="industrySectorID"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Industry sector id
        </Label>

        <NumberField
          name="industrySectorID"
          defaultValue={props.investedCompany?.industrySectorID}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="industrySectorID" className="rw-field-error" />

        <Label
          name="fundingStage"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Funding stage
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="investedCompany-fundingStage-0"
            name="fundingStage"
            defaultValue="SEED"
            defaultChecked={props.investedCompany?.fundingStage?.includes(
              'SEED'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Seed</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="investedCompany-fundingStage-1"
            name="fundingStage"
            defaultValue="SERIES_A"
            defaultChecked={props.investedCompany?.fundingStage?.includes(
              'SERIES_A'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Series A</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="investedCompany-fundingStage-2"
            name="fundingStage"
            defaultValue="SERIES_B"
            defaultChecked={props.investedCompany?.fundingStage?.includes(
              'SERIES_B'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Series B</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="investedCompany-fundingStage-3"
            name="fundingStage"
            defaultValue="SERIES_C"
            defaultChecked={props.investedCompany?.fundingStage?.includes(
              'SERIES_C'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Series C</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="investedCompany-fundingStage-4"
            name="fundingStage"
            defaultValue="SERIES_D"
            defaultChecked={props.investedCompany?.fundingStage?.includes(
              'SERIES_D'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Series D</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="investedCompany-fundingStage-5"
            name="fundingStage"
            defaultValue="SERIES_E"
            defaultChecked={props.investedCompany?.fundingStage?.includes(
              'SERIES_E'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Series E</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="investedCompany-fundingStage-6"
            name="fundingStage"
            defaultValue="SERIES_F"
            defaultChecked={props.investedCompany?.fundingStage?.includes(
              'SERIES_F'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Series F</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="investedCompany-fundingStage-7"
            name="fundingStage"
            defaultValue="LATER"
            defaultChecked={props.investedCompany?.fundingStage?.includes(
              'LATER'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Later</div>
        </div>

        <FieldError name="fundingStage" className="rw-field-error" />

        <Label
          name="fundingAmountLacs"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Funding amount lacs
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="investedCompany-fundingAmountLacs-none"
            name="fundingAmountLacs"
            defaultValue=""
            defaultChecked={!props.spot?.spotType}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div className="rw-check-radio-item-none">None</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="investedCompany-fundingAmountLacs-0"
            name="fundingAmountLacs"
            defaultValue="LESS_THAN_1_LAC"
            defaultChecked={props.investedCompany?.fundingAmountLacs?.includes(
              'LESS_THAN_1_LAC'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Less Than_1_lac</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="investedCompany-fundingAmountLacs-1"
            name="fundingAmountLacs"
            defaultValue="LACS_1_TO_5"
            defaultChecked={props.investedCompany?.fundingAmountLacs?.includes(
              'LACS_1_TO_5'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Lacs 1_to_5</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="investedCompany-fundingAmountLacs-2"
            name="fundingAmountLacs"
            defaultValue="LACS_5_TO_20"
            defaultChecked={props.investedCompany?.fundingAmountLacs?.includes(
              'LACS_5_TO_20'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Lacs 5_to_20</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="investedCompany-fundingAmountLacs-3"
            name="fundingAmountLacs"
            defaultValue="LACS_20_TO_99"
            defaultChecked={props.investedCompany?.fundingAmountLacs?.includes(
              'LACS_20_TO_99'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Lacs 20_to_99</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="investedCompany-fundingAmountLacs-4"
            name="fundingAmountLacs"
            defaultValue="MORE_THAN_1_CRORE"
            defaultChecked={props.investedCompany?.fundingAmountLacs?.includes(
              'MORE_THAN_1_CRORE'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>More Than_1_crore</div>
        </div>

        <FieldError name="fundingAmountLacs" className="rw-field-error" />

        <Label
          name="fundingReason"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Funding reason
        </Label>

        <TextField
          name="fundingReason"
          defaultValue={props.investedCompany?.fundingReason}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="fundingReason" className="rw-field-error" />

        <Label
          name="hasExited"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Has exited
        </Label>

        <CheckboxField
          name="hasExited"
          defaultChecked={props.investedCompany?.hasExited}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="hasExited" className="rw-field-error" />

        <Label
          name="expectedReturnsMult"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Expected returns mult
        </Label>

        <NumberField
          name="expectedReturnsMult"
          defaultValue={props.investedCompany?.expectedReturnsMult}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="expectedReturnsMult" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default InvestedCompanyForm
