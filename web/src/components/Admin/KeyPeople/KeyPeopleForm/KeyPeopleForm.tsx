import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  RadioField,
  Submit,
} from '@redwoodjs/forms'

import type { EditKeyPeopleById, UpdateKeyPeopleInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormKeyPeople = NonNullable<EditKeyPeopleById['keyPeople']>

interface KeyPeopleFormProps {
  keyPeople?: EditKeyPeopleById['keyPeople']
  onSave: (data: UpdateKeyPeopleInput, id?: FormKeyPeople['id']) => void
  error: RWGqlError
  loading: boolean
}

const KeyPeopleForm = (props: KeyPeopleFormProps) => {
  const onSubmit = (data: FormKeyPeople) => {
    if (data.eduBG === '') {
      data.eduBG = null
    }

    props.onSave(data, props?.keyPeople?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormKeyPeople> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.keyPeople?.startupID}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="startupID" className="rw-field-error" />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.keyPeople?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="role"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Role
        </Label>

        <TextField
          name="role"
          defaultValue={props.keyPeople?.role}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="role" className="rw-field-error" />

        <Label
          name="writeup"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Writeup
        </Label>

        <TextField
          name="writeup"
          defaultValue={props.keyPeople?.writeup}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="writeup" className="rw-field-error" />

        <Label
          name="eduBG"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Edu bg
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="keyPeople-eduBG-none"
            name="eduBG"
            defaultValue=""
            defaultChecked={!props.spot?.spotType}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div className="rw-check-radio-item-none">None</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="keyPeople-eduBG-0"
            name="eduBG"
            defaultValue="HIGH_SCHOOL"
            defaultChecked={props.keyPeople?.eduBG?.includes('HIGH_SCHOOL')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>High School</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="keyPeople-eduBG-1"
            name="eduBG"
            defaultValue="BACHELORS"
            defaultChecked={props.keyPeople?.eduBG?.includes('BACHELORS')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Bachelors</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="keyPeople-eduBG-2"
            name="eduBG"
            defaultValue="MASTERS"
            defaultChecked={props.keyPeople?.eduBG?.includes('MASTERS')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Masters</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="keyPeople-eduBG-3"
            name="eduBG"
            defaultValue="PHD"
            defaultChecked={props.keyPeople?.eduBG?.includes('PHD')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Phd</div>
        </div>

        <FieldError name="eduBG" className="rw-field-error" />

        <Label
          name="linkedInURL"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Linked in url
        </Label>

        <TextField
          name="linkedInURL"
          defaultValue={props.keyPeople?.linkedInURL}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="linkedInURL" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default KeyPeopleForm
