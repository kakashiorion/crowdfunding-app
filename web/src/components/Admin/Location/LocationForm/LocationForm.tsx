import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditLocationById, UpdateLocationInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormLocation = NonNullable<EditLocationById['location']>

interface LocationFormProps {
  location?: EditLocationById['location']
  onSave: (data: UpdateLocationInput, id?: FormLocation['id']) => void
  error: RWGqlError
  loading: boolean
}

const LocationForm = (props: LocationFormProps) => {
  const onSubmit = (data: FormLocation) => {
    props.onSave(data, props?.location?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormLocation> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="state"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          State
        </Label>

        <TextField
          name="state"
          defaultValue={props.location?.state}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="state" className="rw-field-error" />

        <Label
          name="city"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          City
        </Label>

        <TextField
          name="city"
          defaultValue={props.location?.city}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="city" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default LocationForm
