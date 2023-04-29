import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditCapTableById, UpdateCapTableInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormCapTable = NonNullable<EditCapTableById['capTable']>

interface CapTableFormProps {
  capTable?: EditCapTableById['capTable']
  onSave: (data: UpdateCapTableInput, id?: FormCapTable['id']) => void
  error: RWGqlError
  loading: boolean
}

const CapTableForm = (props: CapTableFormProps) => {
  const onSubmit = (data: FormCapTable) => {
    props.onSave(data, props?.capTable?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormCapTable> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.capTable?.startupID}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="startupID" className="rw-field-error" />

        <Label
          name="shareholder"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Shareholder
        </Label>

        <TextField
          name="shareholder"
          defaultValue={props.capTable?.shareholder}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="shareholder" className="rw-field-error" />

        <Label
          name="equityShare"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Equity share
        </Label>

        <TextField
          name="equityShare"
          defaultValue={props.capTable?.equityShare}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="equityShare" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CapTableForm
