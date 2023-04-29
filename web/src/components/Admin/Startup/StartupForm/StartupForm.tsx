import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditStartupById, UpdateStartupInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormStartup = NonNullable<EditStartupById['startup']>

interface StartupFormProps {
  startup?: EditStartupById['startup']
  onSave: (data: UpdateStartupInput, id?: FormStartup['id']) => void
  error: RWGqlError
  loading: boolean
}

const StartupForm = (props: StartupFormProps) => {
  const onSubmit = (data: FormStartup) => {
    props.onSave(data, props?.startup?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormStartup> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.startup?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="writeUp"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Write up
        </Label>

        <TextField
          name="writeUp"
          defaultValue={props.startup?.writeUp}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="writeUp" className="rw-field-error" />

        <Label
          name="dateIncorporated"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Date incorporated
        </Label>

        <DatetimeLocalField
          name="dateIncorporated"
          defaultValue={formatDatetime(props.startup?.dateIncorporated)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="dateIncorporated" className="rw-field-error" />

        <Label
          name="linkedInURL"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Linked in url
        </Label>

        <TextField
          name="linkedInURL"
          defaultValue={props.startup?.linkedInURL}
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
          defaultValue={props.startup?.websiteURL}
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
          defaultValue={props.startup?.locationID}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="locationID" className="rw-field-error" />

        <Label
          name="industrySectorID"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Industry sector id
        </Label>

        <NumberField
          name="industrySectorID"
          defaultValue={props.startup?.industrySectorID}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="industrySectorID" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default StartupForm
