import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  RadioField,
  CheckboxField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditOfferById, UpdateOfferInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormOffer = NonNullable<EditOfferById['offer']>

interface OfferFormProps {
  offer?: EditOfferById['offer']
  onSave: (data: UpdateOfferInput, id?: FormOffer['id']) => void
  error: RWGqlError
  loading: boolean
}

const OfferForm = (props: OfferFormProps) => {
  const onSubmit = (data: FormOffer) => {
    props.onSave(data, props?.offer?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormOffer> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.offer?.startupID}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="startupID" className="rw-field-error" />

        <Label
          name="status"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Status
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="offer-status-0"
            name="status"
            defaultValue="CREATED"
            defaultChecked={props.offer?.status?.includes('CREATED')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Created</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="offer-status-1"
            name="status"
            defaultValue="EXCEEDED"
            defaultChecked={props.offer?.status?.includes('EXCEEDED')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Exceeded</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="offer-status-2"
            name="status"
            defaultValue="RAISED"
            defaultChecked={props.offer?.status?.includes('RAISED')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Raised</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="offer-status-3"
            name="status"
            defaultValue="CLOSED"
            defaultChecked={props.offer?.status?.includes('CLOSED')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Closed</div>
        </div>

        <FieldError name="status" className="rw-field-error" />

        <Label
          name="extended"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Extended
        </Label>

        <CheckboxField
          name="extended"
          defaultChecked={props.offer?.extended}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="extended" className="rw-field-error" />

        <Label
          name="capitalTargetLacs"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Capital target lacs
        </Label>

        <TextField
          name="capitalTargetLacs"
          defaultValue={props.offer?.capitalTargetLacs}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="capitalTargetLacs" className="rw-field-error" />

        <Label
          name="equityBeingIssued"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Equity being issued
        </Label>

        <TextField
          name="equityBeingIssued"
          defaultValue={props.offer?.equityBeingIssued}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="equityBeingIssued" className="rw-field-error" />

        <Label
          name="minTicketSizeLacs"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Min ticket size lacs
        </Label>

        <TextField
          name="minTicketSizeLacs"
          defaultValue={props.offer?.minTicketSizeLacs}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="minTicketSizeLacs" className="rw-field-error" />

        <Label
          name="maxTicketSizeLacs"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Max ticket size lacs
        </Label>

        <TextField
          name="maxTicketSizeLacs"
          defaultValue={props.offer?.maxTicketSizeLacs}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="maxTicketSizeLacs" className="rw-field-error" />

        <Label
          name="numberOfInvestors"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Number of investors
        </Label>

        <NumberField
          name="numberOfInvestors"
          defaultValue={props.offer?.numberOfInvestors}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="numberOfInvestors" className="rw-field-error" />

        <Label
          name="willUseFundsFor"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Will use funds for
        </Label>

        <TextField
          name="willUseFundsFor"
          defaultValue={props.offer?.willUseFundsFor}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="willUseFundsFor" className="rw-field-error" />

        <Label
          name="needHelpWith"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Need help with
        </Label>

        <TextField
          name="needHelpWith"
          defaultValue={props.offer?.needHelpWith}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="needHelpWith" className="rw-field-error" />

        <Label
          name="timelineDays"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Timeline days
        </Label>

        <NumberField
          name="timelineDays"
          defaultValue={props.offer?.timelineDays}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="timelineDays" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default OfferForm
