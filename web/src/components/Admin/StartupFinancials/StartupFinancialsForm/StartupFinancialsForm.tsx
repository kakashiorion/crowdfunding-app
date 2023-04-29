import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  RadioField,
  CheckboxField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type {
  EditStartupFinancialsById,
  UpdateStartupFinancialsInput,
} from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormStartupFinancials = NonNullable<
  EditStartupFinancialsById['startupFinancials']
>

interface StartupFinancialsFormProps {
  startupFinancials?: EditStartupFinancialsById['startupFinancials']
  onSave: (
    data: UpdateStartupFinancialsInput,
    id?: FormStartupFinancials['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const StartupFinancialsForm = (props: StartupFinancialsFormProps) => {
  const onSubmit = (data: FormStartupFinancials) => {
    props.onSave(data, props?.startupFinancials?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormStartupFinancials> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="currentValuationLacs"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Current valuation lacs
        </Label>

        <TextField
          name="currentValuationLacs"
          defaultValue={props.startupFinancials?.currentValuationLacs}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="currentValuationLacs" className="rw-field-error" />

        <Label
          name="currentStage"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Current stage
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="startupFinancials-currentStage-0"
            name="currentStage"
            defaultValue="SEED"
            defaultChecked={props.startupFinancials?.currentStage?.includes(
              'SEED'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Seed</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="startupFinancials-currentStage-1"
            name="currentStage"
            defaultValue="SERIES_A"
            defaultChecked={props.startupFinancials?.currentStage?.includes(
              'SERIES_A'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Series A</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="startupFinancials-currentStage-2"
            name="currentStage"
            defaultValue="SERIES_B"
            defaultChecked={props.startupFinancials?.currentStage?.includes(
              'SERIES_B'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Series B</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="startupFinancials-currentStage-3"
            name="currentStage"
            defaultValue="SERIES_C"
            defaultChecked={props.startupFinancials?.currentStage?.includes(
              'SERIES_C'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Series C</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="startupFinancials-currentStage-4"
            name="currentStage"
            defaultValue="SERIES_D"
            defaultChecked={props.startupFinancials?.currentStage?.includes(
              'SERIES_D'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Series D</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="startupFinancials-currentStage-5"
            name="currentStage"
            defaultValue="SERIES_E"
            defaultChecked={props.startupFinancials?.currentStage?.includes(
              'SERIES_E'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Series E</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="startupFinancials-currentStage-6"
            name="currentStage"
            defaultValue="SERIES_F"
            defaultChecked={props.startupFinancials?.currentStage?.includes(
              'SERIES_F'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Series F</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="startupFinancials-currentStage-7"
            name="currentStage"
            defaultValue="LATER"
            defaultChecked={props.startupFinancials?.currentStage?.includes(
              'LATER'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Later</div>
        </div>

        <FieldError name="currentStage" className="rw-field-error" />

        <Label
          name="currentRatio"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Current ratio
        </Label>

        <TextField
          name="currentRatio"
          defaultValue={props.startupFinancials?.currentRatio}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="currentRatio" className="rw-field-error" />

        <Label
          name="DERatio"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          De ratio
        </Label>

        <TextField
          name="DERatio"
          defaultValue={props.startupFinancials?.DERatio}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="DERatio" className="rw-field-error" />

        <Label
          name="revenueLastFYLacs"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Revenue last fy lacs
        </Label>

        <TextField
          name="revenueLastFYLacs"
          defaultValue={props.startupFinancials?.revenueLastFYLacs}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="revenueLastFYLacs" className="rw-field-error" />

        <Label
          name="revenueGrowthRate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Revenue growth rate
        </Label>

        <TextField
          name="revenueGrowthRate"
          defaultValue={props.startupFinancials?.revenueGrowthRate}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="revenueGrowthRate" className="rw-field-error" />

        <Label
          name="isProfitable"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Is profitable
        </Label>

        <CheckboxField
          name="isProfitable"
          defaultChecked={props.startupFinancials?.isProfitable}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="isProfitable" className="rw-field-error" />

        <Label
          name="margin"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Margin
        </Label>

        <TextField
          name="margin"
          defaultValue={props.startupFinancials?.margin}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="margin" className="rw-field-error" />

        <Label
          name="cashRunwayMonths"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Cash runway months
        </Label>

        <NumberField
          name="cashRunwayMonths"
          defaultValue={props.startupFinancials?.cashRunwayMonths}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="cashRunwayMonths" className="rw-field-error" />

        <Label
          name="plansForUsingCash"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Plans for using cash
        </Label>

        <TextField
          name="plansForUsingCash"
          defaultValue={props.startupFinancials?.plansForUsingCash}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="plansForUsingCash" className="rw-field-error" />

        <Label
          name="biggestCostHeads"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Biggest cost heads
        </Label>

        <TextField
          name="biggestCostHeads"
          defaultValue={props.startupFinancials?.biggestCostHeads}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="biggestCostHeads" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default StartupFinancialsForm
