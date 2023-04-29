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

import type { EditBidById, UpdateBidInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormBid = NonNullable<EditBidById['bid']>

interface BidFormProps {
  bid?: EditBidById['bid']
  onSave: (data: UpdateBidInput, id?: FormBid['id']) => void
  error: RWGqlError
  loading: boolean
}

const BidForm = (props: BidFormProps) => {
  const onSubmit = (data: FormBid) => {
    props.onSave(data, props?.bid?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormBid> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="offerID"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Offer id
        </Label>

        <NumberField
          name="offerID"
          defaultValue={props.bid?.offerID}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="offerID" className="rw-field-error" />

        <Label
          name="investorID"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Investor id
        </Label>

        <NumberField
          name="investorID"
          defaultValue={props.bid?.investorID}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="investorID" className="rw-field-error" />

        <Label
          name="status"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Status
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="bid-status-0"
            name="status"
            defaultValue="CREATED"
            defaultChecked={props.bid?.status?.includes('CREATED')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Created</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="bid-status-1"
            name="status"
            defaultValue="COUNTER"
            defaultChecked={props.bid?.status?.includes('COUNTER')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Counter</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="bid-status-2"
            name="status"
            defaultValue="ACCEPTED"
            defaultChecked={props.bid?.status?.includes('ACCEPTED')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Accepted</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="bid-status-3"
            name="status"
            defaultValue="DECLINED"
            defaultChecked={props.bid?.status?.includes('DECLINED')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Declined</div>
        </div>

        <FieldError name="status" className="rw-field-error" />

        <Label
          name="rebid"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Rebid
        </Label>

        <CheckboxField
          name="rebid"
          defaultChecked={props.bid?.rebid}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="rebid" className="rw-field-error" />

        <Label
          name="capitalAvailable"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Capital available
        </Label>

        <TextField
          name="capitalAvailable"
          defaultValue={props.bid?.capitalAvailable}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="capitalAvailable" className="rw-field-error" />

        <Label
          name="equityNeeded"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Equity needed
        </Label>

        <TextField
          name="equityNeeded"
          defaultValue={props.bid?.equityNeeded}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="equityNeeded" className="rw-field-error" />

        <Label
          name="counterCapital"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Counter capital
        </Label>

        <TextField
          name="counterCapital"
          defaultValue={props.bid?.counterCapital}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="counterCapital" className="rw-field-error" />

        <Label
          name="counterEquity"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Counter equity
        </Label>

        <TextField
          name="counterEquity"
          defaultValue={props.bid?.counterEquity}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="counterEquity" className="rw-field-error" />

        <Label
          name="canHelpWith"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Can help with
        </Label>

        <TextField
          name="canHelpWith"
          defaultValue={props.bid?.canHelpWith}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="canHelpWith" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default BidForm
