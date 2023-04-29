import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

import type { EditBidQuestionById, UpdateBidQuestionInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormBidQuestion = NonNullable<EditBidQuestionById['bidQuestion']>

interface BidQuestionFormProps {
  bidQuestion?: EditBidQuestionById['bidQuestion']
  onSave: (data: UpdateBidQuestionInput, id?: FormBidQuestion['id']) => void
  error: RWGqlError
  loading: boolean
}

const BidQuestionForm = (props: BidQuestionFormProps) => {
  const onSubmit = (data: FormBidQuestion) => {
    props.onSave(data, props?.bidQuestion?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormBidQuestion> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="bidID"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Bid id
        </Label>

        <NumberField
          name="bidID"
          defaultValue={props.bidQuestion?.bidID}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="bidID" className="rw-field-error" />

        <Label
          name="question"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Question
        </Label>

        <TextField
          name="question"
          defaultValue={props.bidQuestion?.question}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="question" className="rw-field-error" />

        <Label
          name="answered"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Answered
        </Label>

        <CheckboxField
          name="answered"
          defaultChecked={props.bidQuestion?.answered}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="answered" className="rw-field-error" />

        <Label
          name="answer"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Answer
        </Label>

        <TextField
          name="answer"
          defaultValue={props.bidQuestion?.answer}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="answer" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default BidQuestionForm
