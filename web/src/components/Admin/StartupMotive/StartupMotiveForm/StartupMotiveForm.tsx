import {
  Form,
  FormError,
  FieldError,
  Label,
  CheckboxField,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type {
  EditStartupMotiveById,
  UpdateStartupMotiveInput,
} from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormStartupMotive = NonNullable<EditStartupMotiveById['startupMotive']>

interface StartupMotiveFormProps {
  startupMotive?: EditStartupMotiveById['startupMotive']
  onSave: (data: UpdateStartupMotiveInput, id?: FormStartupMotive['id']) => void
  error: RWGqlError
  loading: boolean
}

const StartupMotiveForm = (props: StartupMotiveFormProps) => {
  const onSubmit = (data: FormStartupMotive) => {
    if (data.platformGoal) {
      data.platformGoal = data.platformGoal.filter((value) => !!value)
    }

    if (data.referSource) {
      data.referSource = data.referSource.filter((value) => !!value)
    }

    if (data.preferredInvestorLevels) {
      data.preferredInvestorLevels = data.preferredInvestorLevels.filter(
        (value) => !!value
      )
    }

    props.onSave(data, props?.startupMotive?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormStartupMotive> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="platformGoal"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Platform goal
        </Label>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="startupMotive-platformGoal-0"
            name="platformGoal[0]"
            defaultValue="RAISE_FUNDS"
            defaultChecked={props.startupMotive?.platformGoal?.includes(
              'RAISE_FUNDS'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Raise Funds</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="startupMotive-platformGoal-1"
            name="platformGoal[1]"
            defaultValue="EXPLORE"
            defaultChecked={props.startupMotive?.platformGoal?.includes(
              'EXPLORE'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Explore</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="startupMotive-platformGoal-2"
            name="platformGoal[2]"
            defaultValue="CONNECT"
            defaultChecked={props.startupMotive?.platformGoal?.includes(
              'CONNECT'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Connect</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="startupMotive-platformGoal-3"
            name="platformGoal[3]"
            defaultValue="GET_ADVICE"
            defaultChecked={props.startupMotive?.platformGoal?.includes(
              'GET_ADVICE'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Get Advice</div>
        </div>

        <FieldError name="platformGoal" className="rw-field-error" />

        <Label
          name="referSource"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Refer source
        </Label>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="startupMotive-referSource-0"
            name="referSource[0]"
            defaultValue="WORD_OF_MOUTH"
            defaultChecked={props.startupMotive?.referSource?.includes(
              'WORD_OF_MOUTH'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Word Of_mouth</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="startupMotive-referSource-1"
            name="referSource[1]"
            defaultValue="SOCIAL_MEDIA"
            defaultChecked={props.startupMotive?.referSource?.includes(
              'SOCIAL_MEDIA'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Social Media</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="startupMotive-referSource-2"
            name="referSource[2]"
            defaultValue="BROWSING"
            defaultChecked={props.startupMotive?.referSource?.includes(
              'BROWSING'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Browsing</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="startupMotive-referSource-3"
            name="referSource[3]"
            defaultValue="REFERRAL"
            defaultChecked={props.startupMotive?.referSource?.includes(
              'REFERRAL'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Referral</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="startupMotive-referSource-4"
            name="referSource[4]"
            defaultValue="ADVERTISEMENT"
            defaultChecked={props.startupMotive?.referSource?.includes(
              'ADVERTISEMENT'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Advertisement</div>
        </div>

        <FieldError name="referSource" className="rw-field-error" />

        <Label
          name="preferredIndustrySectors"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Preferred industry sectors
        </Label>

        <NumberField
          name="preferredIndustrySectors"
          defaultValue={props.startupMotive?.preferredIndustrySectors}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError
          name="preferredIndustrySectors"
          className="rw-field-error"
        />

        <Label
          name="preferredInvestorLevels"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Preferred investor levels
        </Label>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="startupMotive-preferredInvestorLevels-0"
            name="preferredInvestorLevels[0]"
            defaultValue="NOVICE"
            defaultChecked={props.startupMotive?.preferredInvestorLevels?.includes(
              'NOVICE'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Novice</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="startupMotive-preferredInvestorLevels-1"
            name="preferredInvestorLevels[1]"
            defaultValue="INTERMEDIATE"
            defaultChecked={props.startupMotive?.preferredInvestorLevels?.includes(
              'INTERMEDIATE'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Intermediate</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="startupMotive-preferredInvestorLevels-2"
            name="preferredInvestorLevels[2]"
            defaultValue="EXPERIENCED"
            defaultChecked={props.startupMotive?.preferredInvestorLevels?.includes(
              'EXPERIENCED'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Experienced</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="startupMotive-preferredInvestorLevels-3"
            name="preferredInvestorLevels[3]"
            defaultValue="PROFESSIONAL"
            defaultChecked={props.startupMotive?.preferredInvestorLevels?.includes(
              'PROFESSIONAL'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Professional</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="startupMotive-preferredInvestorLevels-4"
            name="preferredInvestorLevels[4]"
            defaultValue="SEASONED"
            defaultChecked={props.startupMotive?.preferredInvestorLevels?.includes(
              'SEASONED'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Seasoned</div>
        </div>

        <FieldError name="preferredInvestorLevels" className="rw-field-error" />

        <Label
          name="preferredLocations"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Preferred locations
        </Label>

        <NumberField
          name="preferredLocations"
          defaultValue={props.startupMotive?.preferredLocations}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="preferredLocations" className="rw-field-error" />

        <Label
          name="promisingReturnsMult"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Promising returns mult
        </Label>

        <NumberField
          name="promisingReturnsMult"
          defaultValue={props.startupMotive?.promisingReturnsMult}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="promisingReturnsMult" className="rw-field-error" />

        <Label
          name="promisingTimeline"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Promising timeline
        </Label>

        <NumberField
          name="promisingTimeline"
          defaultValue={props.startupMotive?.promisingTimeline}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="promisingTimeline" className="rw-field-error" />

        <Label
          name="pitchDeckURL"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Pitch deck url
        </Label>

        <TextField
          name="pitchDeckURL"
          defaultValue={props.startupMotive?.pitchDeckURL}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="pitchDeckURL" className="rw-field-error" />

        <Label
          name="demoURL"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Demo url
        </Label>

        <TextField
          name="demoURL"
          defaultValue={props.startupMotive?.demoURL}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="demoURL" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default StartupMotiveForm
