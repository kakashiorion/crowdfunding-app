import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

import type {
  EditConversationById,
  UpdateConversationInput,
} from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormConversation = NonNullable<EditConversationById['conversation']>

interface ConversationFormProps {
  conversation?: EditConversationById['conversation']
  onSave: (data: UpdateConversationInput, id?: FormConversation['id']) => void
  error: RWGqlError
  loading: boolean
}

const ConversationForm = (props: ConversationFormProps) => {
  const onSubmit = (data: FormConversation) => {
    props.onSave(data, props?.conversation?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormConversation> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="conversationStarterID"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Conversation starter id
        </Label>

        <NumberField
          name="conversationStarterID"
          defaultValue={props.conversation?.conversationStarterID}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="conversationStarterID" className="rw-field-error" />

        <Label
          name="conversationResponderID"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Conversation responder id
        </Label>

        <NumberField
          name="conversationResponderID"
          defaultValue={props.conversation?.conversationResponderID}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="conversationResponderID" className="rw-field-error" />

        <Label
          name="isFavoriteByStarter"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Is favorite by starter
        </Label>

        <CheckboxField
          name="isFavoriteByStarter"
          defaultChecked={props.conversation?.isFavoriteByStarter}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="isFavoriteByStarter" className="rw-field-error" />

        <Label
          name="isFavoriteByResponder"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Is favorite by responder
        </Label>

        <CheckboxField
          name="isFavoriteByResponder"
          defaultChecked={props.conversation?.isFavoriteByResponder}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="isFavoriteByResponder" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ConversationForm
