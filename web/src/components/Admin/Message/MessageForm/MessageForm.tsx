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

import type { EditMessageById, UpdateMessageInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormMessage = NonNullable<EditMessageById['message']>

interface MessageFormProps {
  message?: EditMessageById['message']
  onSave: (data: UpdateMessageInput, id?: FormMessage['id']) => void
  error: RWGqlError
  loading: boolean
}

const MessageForm = (props: MessageFormProps) => {
  const onSubmit = (data: FormMessage) => {
    props.onSave(data, props?.message?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormMessage> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="conversationID"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Conversation id
        </Label>

        <NumberField
          name="conversationID"
          defaultValue={props.message?.conversationID}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="conversationID" className="rw-field-error" />

        <Label
          name="senderID"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Sender id
        </Label>

        <NumberField
          name="senderID"
          defaultValue={props.message?.senderID}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="senderID" className="rw-field-error" />

        <Label
          name="receiverID"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Receiver id
        </Label>

        <NumberField
          name="receiverID"
          defaultValue={props.message?.receiverID}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="receiverID" className="rw-field-error" />

        <Label
          name="content"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Content
        </Label>

        <TextField
          name="content"
          defaultValue={props.message?.content}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="content" className="rw-field-error" />

        <Label
          name="attachmentURL"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Attachment url
        </Label>

        <TextField
          name="attachmentURL"
          defaultValue={props.message?.attachmentURL}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="attachmentURL" className="rw-field-error" />

        <Label
          name="unread"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Unread
        </Label>

        <CheckboxField
          name="unread"
          defaultChecked={props.message?.unread}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="unread" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default MessageForm
