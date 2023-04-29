import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  RadioField,
  Submit,
} from '@redwoodjs/forms'

import type { EditConnectionById, UpdateConnectionInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormConnection = NonNullable<EditConnectionById['connection']>

interface ConnectionFormProps {
  connection?: EditConnectionById['connection']
  onSave: (data: UpdateConnectionInput, id?: FormConnection['id']) => void
  error: RWGqlError
  loading: boolean
}

const ConnectionForm = (props: ConnectionFormProps) => {
  const onSubmit = (data: FormConnection) => {
    props.onSave(data, props?.connection?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormConnection> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="requesterID"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Requester id
        </Label>

        <NumberField
          name="requesterID"
          defaultValue={props.connection?.requesterID}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="requesterID" className="rw-field-error" />

        <Label
          name="accepterID"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Accepter id
        </Label>

        <NumberField
          name="accepterID"
          defaultValue={props.connection?.accepterID}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="accepterID" className="rw-field-error" />

        <Label
          name="status"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Status
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="connection-status-0"
            name="status"
            defaultValue="PENDING"
            defaultChecked={props.connection?.status?.includes('PENDING')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Pending</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="connection-status-1"
            name="status"
            defaultValue="ACCEPTED"
            defaultChecked={props.connection?.status?.includes('ACCEPTED')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Accepted</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="connection-status-2"
            name="status"
            defaultValue="REJECTED"
            defaultChecked={props.connection?.status?.includes('REJECTED')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Rejected</div>
        </div>

        <FieldError name="status" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ConnectionForm
