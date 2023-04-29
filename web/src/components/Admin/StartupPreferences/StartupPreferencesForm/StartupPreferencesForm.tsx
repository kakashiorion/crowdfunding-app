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
  EditStartupPreferencesById,
  UpdateStartupPreferencesInput,
} from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormStartupPreferences = NonNullable<
  EditStartupPreferencesById['startupPreferences']
>

interface StartupPreferencesFormProps {
  startupPreferences?: EditStartupPreferencesById['startupPreferences']
  onSave: (
    data: UpdateStartupPreferencesInput,
    id?: FormStartupPreferences['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const StartupPreferencesForm = (props: StartupPreferencesFormProps) => {
  const onSubmit = (data: FormStartupPreferences) => {
    props.onSave(data, props?.startupPreferences?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormStartupPreferences> onSubmit={onSubmit} error={props.error}>
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
          defaultChecked={props.startupPreferences?.prefersLightTheme}
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
          defaultChecked={props.startupPreferences?.profileHiddenFromStrangers}
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
          defaultChecked={props.startupPreferences?.receiveMessageFromStrangers}
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
            id="startupPreferences-activityVisbility-0"
            name="activityVisbility"
            defaultValue="PRIVATE"
            defaultChecked={props.startupPreferences?.activityVisbility?.includes(
              'PRIVATE'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Private</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="startupPreferences-activityVisbility-1"
            name="activityVisbility"
            defaultValue="CONNECTIONS"
            defaultChecked={props.startupPreferences?.activityVisbility?.includes(
              'CONNECTIONS'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Connections</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="startupPreferences-activityVisbility-2"
            name="activityVisbility"
            defaultValue="PUBLIC"
            defaultChecked={props.startupPreferences?.activityVisbility?.includes(
              'PUBLIC'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Public</div>
        </div>

        <FieldError name="activityVisbility" className="rw-field-error" />

        <Label
          name="financialVisbility"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Financial visbility
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="startupPreferences-financialVisbility-0"
            name="financialVisbility"
            defaultValue="PRIVATE"
            defaultChecked={props.startupPreferences?.financialVisbility?.includes(
              'PRIVATE'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Private</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="startupPreferences-financialVisbility-1"
            name="financialVisbility"
            defaultValue="CONNECTIONS"
            defaultChecked={props.startupPreferences?.financialVisbility?.includes(
              'CONNECTIONS'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Connections</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="startupPreferences-financialVisbility-2"
            name="financialVisbility"
            defaultValue="PUBLIC"
            defaultChecked={props.startupPreferences?.financialVisbility?.includes(
              'PUBLIC'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Public</div>
        </div>

        <FieldError name="financialVisbility" className="rw-field-error" />

        <Label
          name="notificationLevel"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Notification level
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="startupPreferences-notificationLevel-0"
            name="notificationLevel"
            defaultValue="NONE"
            defaultChecked={props.startupPreferences?.notificationLevel?.includes(
              'NONE'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>None</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="startupPreferences-notificationLevel-1"
            name="notificationLevel"
            defaultValue="LOW"
            defaultChecked={props.startupPreferences?.notificationLevel?.includes(
              'LOW'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Low</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="startupPreferences-notificationLevel-2"
            name="notificationLevel"
            defaultValue="MEDIUM"
            defaultChecked={props.startupPreferences?.notificationLevel?.includes(
              'MEDIUM'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Medium</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="startupPreferences-notificationLevel-3"
            name="notificationLevel"
            defaultValue="HIGH"
            defaultChecked={props.startupPreferences?.notificationLevel?.includes(
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

export default StartupPreferencesForm
