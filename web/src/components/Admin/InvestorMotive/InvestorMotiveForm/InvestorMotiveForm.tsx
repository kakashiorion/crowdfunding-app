import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  CheckboxField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type {
  EditInvestorMotiveById,
  UpdateInvestorMotiveInput,
} from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormInvestorMotive = NonNullable<EditInvestorMotiveById['investorMotive']>

interface InvestorMotiveFormProps {
  investorMotive?: EditInvestorMotiveById['investorMotive']
  onSave: (
    data: UpdateInvestorMotiveInput,
    id?: FormInvestorMotive['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const InvestorMotiveForm = (props: InvestorMotiveFormProps) => {
  const onSubmit = (data: FormInvestorMotive) => {
    if (data.prefferedCapitalToInvest) {
      data.prefferedCapitalToInvest = data.prefferedCapitalToInvest.filter(
        (value) => !!value
      )
    }

    if (data.preferredFundingStage) {
      data.preferredFundingStage = data.preferredFundingStage.filter(
        (value) => !!value
      )
    }

    if (data.preferredStartupTeamSize) {
      data.preferredStartupTeamSize = data.preferredStartupTeamSize.filter(
        (value) => !!value
      )
    }

    if (data.platformGoal) {
      data.platformGoal = data.platformGoal.filter((value) => !!value)
    }

    if (data.referSource) {
      data.referSource = data.referSource.filter((value) => !!value)
    }

    props.onSave(data, props?.investorMotive?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormInvestorMotive> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="preferredIndustrySectors"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Preferred industry sectors
        </Label>

        <NumberField
          name="preferredIndustrySectors"
          defaultValue={props.investorMotive?.preferredIndustrySectors}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError
          name="preferredIndustrySectors"
          className="rw-field-error"
        />

        <Label
          name="prefferedCapitalToInvest"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Preffered capital to invest
        </Label>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="investorMotive-prefferedCapitalToInvest-0"
            name="prefferedCapitalToInvest[0]"
            defaultValue="LESS_THAN_1_LAC"
            defaultChecked={props.investorMotive?.prefferedCapitalToInvest?.includes(
              'LESS_THAN_1_LAC'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Less Than_1_lac</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="investorMotive-prefferedCapitalToInvest-1"
            name="prefferedCapitalToInvest[1]"
            defaultValue="LACS_1_TO_5"
            defaultChecked={props.investorMotive?.prefferedCapitalToInvest?.includes(
              'LACS_1_TO_5'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Lacs 1_to_5</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="investorMotive-prefferedCapitalToInvest-2"
            name="prefferedCapitalToInvest[2]"
            defaultValue="LACS_5_TO_20"
            defaultChecked={props.investorMotive?.prefferedCapitalToInvest?.includes(
              'LACS_5_TO_20'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Lacs 5_to_20</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="investorMotive-prefferedCapitalToInvest-3"
            name="prefferedCapitalToInvest[3]"
            defaultValue="LACS_20_TO_99"
            defaultChecked={props.investorMotive?.prefferedCapitalToInvest?.includes(
              'LACS_20_TO_99'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Lacs 20_to_99</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="investorMotive-prefferedCapitalToInvest-4"
            name="prefferedCapitalToInvest[4]"
            defaultValue="MORE_THAN_1_CRORE"
            defaultChecked={props.investorMotive?.prefferedCapitalToInvest?.includes(
              'MORE_THAN_1_CRORE'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>More Than_1_crore</div>
        </div>

        <FieldError
          name="prefferedCapitalToInvest"
          className="rw-field-error"
        />

        <Label
          name="preferredFundingStage"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Preferred funding stage
        </Label>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="investorMotive-preferredFundingStage-0"
            name="preferredFundingStage[0]"
            defaultValue="SEED"
            defaultChecked={props.investorMotive?.preferredFundingStage?.includes(
              'SEED'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Seed</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="investorMotive-preferredFundingStage-1"
            name="preferredFundingStage[1]"
            defaultValue="SERIES_A"
            defaultChecked={props.investorMotive?.preferredFundingStage?.includes(
              'SERIES_A'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Series A</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="investorMotive-preferredFundingStage-2"
            name="preferredFundingStage[2]"
            defaultValue="SERIES_B"
            defaultChecked={props.investorMotive?.preferredFundingStage?.includes(
              'SERIES_B'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Series B</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="investorMotive-preferredFundingStage-3"
            name="preferredFundingStage[3]"
            defaultValue="SERIES_C"
            defaultChecked={props.investorMotive?.preferredFundingStage?.includes(
              'SERIES_C'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Series C</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="investorMotive-preferredFundingStage-4"
            name="preferredFundingStage[4]"
            defaultValue="SERIES_D"
            defaultChecked={props.investorMotive?.preferredFundingStage?.includes(
              'SERIES_D'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Series D</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="investorMotive-preferredFundingStage-5"
            name="preferredFundingStage[5]"
            defaultValue="SERIES_E"
            defaultChecked={props.investorMotive?.preferredFundingStage?.includes(
              'SERIES_E'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Series E</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="investorMotive-preferredFundingStage-6"
            name="preferredFundingStage[6]"
            defaultValue="SERIES_F"
            defaultChecked={props.investorMotive?.preferredFundingStage?.includes(
              'SERIES_F'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Series F</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="investorMotive-preferredFundingStage-7"
            name="preferredFundingStage[7]"
            defaultValue="LATER"
            defaultChecked={props.investorMotive?.preferredFundingStage?.includes(
              'LATER'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Later</div>
        </div>

        <FieldError name="preferredFundingStage" className="rw-field-error" />

        <Label
          name="preferredStartupTeamSize"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Preferred startup team size
        </Label>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="investorMotive-preferredStartupTeamSize-0"
            name="preferredStartupTeamSize[0]"
            defaultValue="ONE"
            defaultChecked={props.investorMotive?.preferredStartupTeamSize?.includes(
              'ONE'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>One</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="investorMotive-preferredStartupTeamSize-1"
            name="preferredStartupTeamSize[1]"
            defaultValue="BW_1_AND_10"
            defaultChecked={props.investorMotive?.preferredStartupTeamSize?.includes(
              'BW_1_AND_10'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Bw 1_and_10</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="investorMotive-preferredStartupTeamSize-2"
            name="preferredStartupTeamSize[2]"
            defaultValue="BW_10_AND_50"
            defaultChecked={props.investorMotive?.preferredStartupTeamSize?.includes(
              'BW_10_AND_50'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Bw 10_and_50</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="investorMotive-preferredStartupTeamSize-3"
            name="preferredStartupTeamSize[3]"
            defaultValue="BW_50_AND_200"
            defaultChecked={props.investorMotive?.preferredStartupTeamSize?.includes(
              'BW_50_AND_200'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Bw 50_and_200</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="investorMotive-preferredStartupTeamSize-4"
            name="preferredStartupTeamSize[4]"
            defaultValue="BW_200_AND_1000"
            defaultChecked={props.investorMotive?.preferredStartupTeamSize?.includes(
              'BW_200_AND_1000'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Bw 200_and_1000</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="investorMotive-preferredStartupTeamSize-5"
            name="preferredStartupTeamSize[5]"
            defaultValue="OVER_1000"
            defaultChecked={props.investorMotive?.preferredStartupTeamSize?.includes(
              'OVER_1000'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Over 1000</div>
        </div>

        <FieldError
          name="preferredStartupTeamSize"
          className="rw-field-error"
        />

        <Label
          name="preferredTimelineMonths"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Preferred timeline months
        </Label>

        <NumberField
          name="preferredTimelineMonths"
          defaultValue={props.investorMotive?.preferredTimelineMonths}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="preferredTimelineMonths" className="rw-field-error" />

        <Label
          name="preferredReturnsMult"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Preferred returns mult
        </Label>

        <NumberField
          name="preferredReturnsMult"
          defaultValue={props.investorMotive?.preferredReturnsMult}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="preferredReturnsMult" className="rw-field-error" />

        <Label
          name="preferredLocations"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Preferred locations
        </Label>

        <NumberField
          name="preferredLocations"
          defaultValue={props.investorMotive?.preferredLocations}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="preferredLocations" className="rw-field-error" />

        <Label
          name="reasonForInvesting"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Reason for investing
        </Label>

        <TextField
          name="reasonForInvesting"
          defaultValue={props.investorMotive?.reasonForInvesting}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="reasonForInvesting" className="rw-field-error" />

        <Label
          name="platformGoal"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Platform goal
        </Label>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="investorMotive-platformGoal-0"
            name="platformGoal[0]"
            defaultValue="INVEST"
            defaultChecked={props.investorMotive?.platformGoal?.includes(
              'INVEST'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Invest</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="investorMotive-platformGoal-1"
            name="platformGoal[1]"
            defaultValue="LEARN"
            defaultChecked={props.investorMotive?.platformGoal?.includes(
              'LEARN'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Learn</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="investorMotive-platformGoal-2"
            name="platformGoal[2]"
            defaultValue="EXPLORE"
            defaultChecked={props.investorMotive?.platformGoal?.includes(
              'EXPLORE'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Explore</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="investorMotive-platformGoal-3"
            name="platformGoal[3]"
            defaultValue="CONNECT"
            defaultChecked={props.investorMotive?.platformGoal?.includes(
              'CONNECT'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Connect</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="investorMotive-platformGoal-4"
            name="platformGoal[4]"
            defaultValue="ADVISE"
            defaultChecked={props.investorMotive?.platformGoal?.includes(
              'ADVISE'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Advise</div>
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
            id="investorMotive-referSource-0"
            name="referSource[0]"
            defaultValue="WORD_OF_MOUTH"
            defaultChecked={props.investorMotive?.referSource?.includes(
              'WORD_OF_MOUTH'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Word Of_mouth</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="investorMotive-referSource-1"
            name="referSource[1]"
            defaultValue="SOCIAL_MEDIA"
            defaultChecked={props.investorMotive?.referSource?.includes(
              'SOCIAL_MEDIA'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Social Media</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="investorMotive-referSource-2"
            name="referSource[2]"
            defaultValue="BROWSING"
            defaultChecked={props.investorMotive?.referSource?.includes(
              'BROWSING'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Browsing</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="investorMotive-referSource-3"
            name="referSource[3]"
            defaultValue="REFERRAL"
            defaultChecked={props.investorMotive?.referSource?.includes(
              'REFERRAL'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Referral</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="investorMotive-referSource-4"
            name="referSource[4]"
            defaultValue="ADVERTISEMENT"
            defaultChecked={props.investorMotive?.referSource?.includes(
              'ADVERTISEMENT'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Advertisement</div>
        </div>

        <FieldError name="referSource" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default InvestorMotiveForm
