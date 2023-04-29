import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  RadioField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type {
  EditFundraisingRoundById,
  UpdateFundraisingRoundInput,
} from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormFundraisingRound = NonNullable<
  EditFundraisingRoundById['fundraisingRound']
>

interface FundraisingRoundFormProps {
  fundraisingRound?: EditFundraisingRoundById['fundraisingRound']
  onSave: (
    data: UpdateFundraisingRoundInput,
    id?: FormFundraisingRound['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const FundraisingRoundForm = (props: FundraisingRoundFormProps) => {
  const onSubmit = (data: FormFundraisingRound) => {
    props.onSave(data, props?.fundraisingRound?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormFundraisingRound> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="startupID"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Startup id
        </Label>

        <NumberField
          name="startupID"
          defaultValue={props.fundraisingRound?.startupID}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="startupID" className="rw-field-error" />

        <Label
          name="roundStage"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Round stage
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="fundraisingRound-roundStage-0"
            name="roundStage"
            defaultValue="SEED"
            defaultChecked={props.fundraisingRound?.roundStage?.includes(
              'SEED'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Seed</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="fundraisingRound-roundStage-1"
            name="roundStage"
            defaultValue="SERIES_A"
            defaultChecked={props.fundraisingRound?.roundStage?.includes(
              'SERIES_A'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Series A</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="fundraisingRound-roundStage-2"
            name="roundStage"
            defaultValue="SERIES_B"
            defaultChecked={props.fundraisingRound?.roundStage?.includes(
              'SERIES_B'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Series B</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="fundraisingRound-roundStage-3"
            name="roundStage"
            defaultValue="SERIES_C"
            defaultChecked={props.fundraisingRound?.roundStage?.includes(
              'SERIES_C'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Series C</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="fundraisingRound-roundStage-4"
            name="roundStage"
            defaultValue="SERIES_D"
            defaultChecked={props.fundraisingRound?.roundStage?.includes(
              'SERIES_D'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Series D</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="fundraisingRound-roundStage-5"
            name="roundStage"
            defaultValue="SERIES_E"
            defaultChecked={props.fundraisingRound?.roundStage?.includes(
              'SERIES_E'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Series E</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="fundraisingRound-roundStage-6"
            name="roundStage"
            defaultValue="SERIES_F"
            defaultChecked={props.fundraisingRound?.roundStage?.includes(
              'SERIES_F'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Series F</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="fundraisingRound-roundStage-7"
            name="roundStage"
            defaultValue="LATER"
            defaultChecked={props.fundraisingRound?.roundStage?.includes(
              'LATER'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Later</div>
        </div>

        <FieldError name="roundStage" className="rw-field-error" />

        <Label
          name="capitalRaisedLacs"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Capital raised lacs
        </Label>

        <TextField
          name="capitalRaisedLacs"
          defaultValue={props.fundraisingRound?.capitalRaisedLacs}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="capitalRaisedLacs" className="rw-field-error" />

        <Label
          name="valuationLacs"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Valuation lacs
        </Label>

        <TextField
          name="valuationLacs"
          defaultValue={props.fundraisingRound?.valuationLacs}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="valuationLacs" className="rw-field-error" />

        <Label
          name="keyInvestors"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Key investors
        </Label>

        <TextField
          name="keyInvestors"
          defaultValue={props.fundraisingRound?.keyInvestors}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="keyInvestors" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default FundraisingRoundForm
