import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  RadioField,
  Submit,
} from '@redwoodjs/forms'

import type {
  EditStartupBasicById,
  UpdateStartupBasicInput,
} from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormStartupBasic = NonNullable<EditStartupBasicById['startupBasic']>

interface StartupBasicFormProps {
  startupBasic?: EditStartupBasicById['startupBasic']
  onSave: (data: UpdateStartupBasicInput, id?: FormStartupBasic['id']) => void
  error: RWGqlError
  loading: boolean
}

const StartupBasicForm = (props: StartupBasicFormProps) => {
  const onSubmit = (data: FormStartupBasic) => {
    props.onSave(data, props?.startupBasic?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormStartupBasic> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="valueProp"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Value prop
        </Label>

        <TextField
          name="valueProp"
          defaultValue={props.startupBasic?.valueProp}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="valueProp" className="rw-field-error" />

        <Label
          name="story"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Story
        </Label>

        <TextField
          name="story"
          defaultValue={props.startupBasic?.story}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="story" className="rw-field-error" />

        <Label
          name="whyThisBusiness"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Why this business
        </Label>

        <TextField
          name="whyThisBusiness"
          defaultValue={props.startupBasic?.whyThisBusiness}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="whyThisBusiness" className="rw-field-error" />

        <Label
          name="isFirstStartup"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Is first startup
        </Label>

        <CheckboxField
          name="isFirstStartup"
          defaultChecked={props.startupBasic?.isFirstStartup}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="isFirstStartup" className="rw-field-error" />

        <Label
          name="mission"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Mission
        </Label>

        <TextField
          name="mission"
          defaultValue={props.startupBasic?.mission}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="mission" className="rw-field-error" />

        <Label
          name="vision"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Vision
        </Label>

        <TextField
          name="vision"
          defaultValue={props.startupBasic?.vision}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="vision" className="rw-field-error" />

        <Label
          name="startupSize"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Startup size
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="startupBasic-startupSize-0"
            name="startupSize"
            defaultValue="ONE"
            defaultChecked={props.startupBasic?.startupSize?.includes('ONE')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>One</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="startupBasic-startupSize-1"
            name="startupSize"
            defaultValue="BW_1_AND_10"
            defaultChecked={props.startupBasic?.startupSize?.includes(
              'BW_1_AND_10'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Bw 1_and_10</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="startupBasic-startupSize-2"
            name="startupSize"
            defaultValue="BW_10_AND_50"
            defaultChecked={props.startupBasic?.startupSize?.includes(
              'BW_10_AND_50'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Bw 10_and_50</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="startupBasic-startupSize-3"
            name="startupSize"
            defaultValue="BW_50_AND_200"
            defaultChecked={props.startupBasic?.startupSize?.includes(
              'BW_50_AND_200'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Bw 50_and_200</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="startupBasic-startupSize-4"
            name="startupSize"
            defaultValue="BW_200_AND_1000"
            defaultChecked={props.startupBasic?.startupSize?.includes(
              'BW_200_AND_1000'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Bw 200_and_1000</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="startupBasic-startupSize-5"
            name="startupSize"
            defaultValue="OVER_1000"
            defaultChecked={props.startupBasic?.startupSize?.includes(
              'OVER_1000'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Over 1000</div>
        </div>

        <FieldError name="startupSize" className="rw-field-error" />

        <Label
          name="coreValues"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Core values
        </Label>

        <TextField
          name="coreValues"
          defaultValue={props.startupBasic?.coreValues}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="coreValues" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default StartupBasicForm
