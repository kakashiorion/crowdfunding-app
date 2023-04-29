import {
  Form,
  FormError,
  FieldError,
  Label,
  CheckboxField,
  RadioField,
  Submit,
} from '@redwoodjs/forms'

import type {
  EditInvestorPreferencesById,
  UpdateInvestorPreferencesInput,
} from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormInvestorPreferences = NonNullable<
  EditInvestorPreferencesById['investorPreferences']
>

interface InvestorPreferencesFormProps {
  investorPreferences?: EditInvestorPreferencesById['investorPreferences']
  onSave: (
    data: UpdateInvestorPreferencesInput,
    id?: FormInvestorPreferences['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const InvestorPreferencesForm = (props: InvestorPreferencesFormProps) => {
  const onSubmit = (data: FormInvestorPreferences) => {
    props.onSave(data, props?.investorPreferences?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormInvestorPreferences> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="prefersLightTheme"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Prefers light theme
        </Label>

        <CheckboxField
          name="prefersLightTheme"
          defaultChecked={props.investorPreferences?.prefersLightTheme}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="prefersLightTheme" className="rw-field-error" />

        <Label
          name="profileHiddenFromStrangers"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Profile hidden from strangers
        </Label>

        <CheckboxField
          name="profileHiddenFromStrangers"
          defaultChecked={props.investorPreferences?.profileHiddenFromStrangers}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError
          name="profileHiddenFromStrangers"
          className="rw-field-error"
        />

        <Label
          name="receiveMessageFromStrangers"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Receive message from strangers
        </Label>

        <CheckboxField
          name="receiveMessageFromStrangers"
          defaultChecked={
            props.investorPreferences?.receiveMessageFromStrangers
          }
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError
          name="receiveMessageFromStrangers"
          className="rw-field-error"
        />

        <Label
          name="activityVisbility"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Activity visbility
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="investorPreferences-activityVisbility-0"
            name="activityVisbility"
            defaultValue="PRIVATE"
            defaultChecked={props.investorPreferences?.activityVisbility?.includes(
              'PRIVATE'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Private</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="investorPreferences-activityVisbility-1"
            name="activityVisbility"
            defaultValue="CONNECTIONS"
            defaultChecked={props.investorPreferences?.activityVisbility?.includes(
              'CONNECTIONS'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Connections</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="investorPreferences-activityVisbility-2"
            name="activityVisbility"
            defaultValue="PUBLIC"
            defaultChecked={props.investorPreferences?.activityVisbility?.includes(
              'PUBLIC'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Public</div>
        </div>

        <FieldError name="activityVisbility" className="rw-field-error" />

        <Label
          name="notificationLevel"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Notification level
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="investorPreferences-notificationLevel-0"
            name="notificationLevel"
            defaultValue="NONE"
            defaultChecked={props.investorPreferences?.notificationLevel?.includes(
              'NONE'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>None</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="investorPreferences-notificationLevel-1"
            name="notificationLevel"
            defaultValue="LOW"
            defaultChecked={props.investorPreferences?.notificationLevel?.includes(
              'LOW'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Low</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="investorPreferences-notificationLevel-2"
            name="notificationLevel"
            defaultValue="MEDIUM"
            defaultChecked={props.investorPreferences?.notificationLevel?.includes(
              'MEDIUM'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Medium</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="investorPreferences-notificationLevel-3"
            name="notificationLevel"
            defaultValue="HIGH"
            defaultChecked={props.investorPreferences?.notificationLevel?.includes(
              'HIGH'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>High</div>
        </div>

        <FieldError name="notificationLevel" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default InvestorPreferencesForm
