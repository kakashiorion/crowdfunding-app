import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  RadioField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

import type { EditUserById, UpdateUserInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormUser = NonNullable<EditUserById['user']>

interface UserFormProps {
  user?: EditUserById['user']
  onSave: (data: UpdateUserInput, id?: FormUser['id']) => void
  error: RWGqlError
  loading: boolean
}

const UserForm = (props: UserFormProps) => {
  const onSubmit = (data: FormUser) => {
    props.onSave(data, props?.user?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormUser> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.user?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="hashedPassword"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Hashed password
        </Label>

        <TextField
          name="hashedPassword"
          defaultValue={props.user?.hashedPassword}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="hashedPassword" className="rw-field-error" />

        <Label
          name="salt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Salt
        </Label>

        <TextField
          name="salt"
          defaultValue={props.user?.salt}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="salt" className="rw-field-error" />

        <Label
          name="resetToken"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Reset token
        </Label>

        <TextField
          name="resetToken"
          defaultValue={props.user?.resetToken}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="resetToken" className="rw-field-error" />

        <Label
          name="resetTokenExpiresAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Reset token expires at
        </Label>

        <DatetimeLocalField
          name="resetTokenExpiresAt"
          defaultValue={formatDatetime(props.user?.resetTokenExpiresAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="resetTokenExpiresAt" className="rw-field-error" />

        <Label
          name="profilePicURL"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Profile pic url
        </Label>

        <TextField
          name="profilePicURL"
          defaultValue={props.user?.profilePicURL}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="profilePicURL" className="rw-field-error" />

        <Label
          name="mobile"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Mobile
        </Label>

        <TextField
          name="mobile"
          defaultValue={props.user?.mobile}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="mobile" className="rw-field-error" />

        <Label
          name="otp"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Otp
        </Label>

        <TextField
          name="otp"
          defaultValue={props.user?.otp}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="otp" className="rw-field-error" />

        <Label
          name="otpExpiresAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Otp expires at
        </Label>

        <DatetimeLocalField
          name="otpExpiresAt"
          defaultValue={formatDatetime(props.user?.otpExpiresAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="otpExpiresAt" className="rw-field-error" />

        <Label
          name="webAuthnChallenge"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Web authn challenge
        </Label>

        <TextField
          name="webAuthnChallenge"
          defaultValue={props.user?.webAuthnChallenge}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="webAuthnChallenge" className="rw-field-error" />

        <Label
          name="type"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Type
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="user-type-0"
            name="type"
            defaultValue="INVESTOR"
            defaultChecked={props.user?.type?.includes('INVESTOR')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Investor</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="user-type-1"
            name="type"
            defaultValue="STARTUP"
            defaultChecked={props.user?.type?.includes('STARTUP')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Startup</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="user-type-2"
            name="type"
            defaultValue="ADMIN"
            defaultChecked={props.user?.type?.includes('ADMIN')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Admin</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="user-type-3"
            name="type"
            defaultValue="GUEST"
            defaultChecked={props.user?.type?.includes('GUEST')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Guest</div>
        </div>

        <FieldError name="type" className="rw-field-error" />

        <Label
          name="isLoggedIn"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Is logged in
        </Label>

        <CheckboxField
          name="isLoggedIn"
          defaultChecked={props.user?.isLoggedIn}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="isLoggedIn" className="rw-field-error" />

        <Label
          name="isOnboarded"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Is onboarded
        </Label>

        <CheckboxField
          name="isOnboarded"
          defaultChecked={props.user?.isOnboarded}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="isOnboarded" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserForm
