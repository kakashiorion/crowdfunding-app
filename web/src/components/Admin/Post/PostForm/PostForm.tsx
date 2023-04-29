import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditPostById, UpdatePostInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormPost = NonNullable<EditPostById['post']>

interface PostFormProps {
  post?: EditPostById['post']
  onSave: (data: UpdatePostInput, id?: FormPost['id']) => void
  error: RWGqlError
  loading: boolean
}

const PostForm = (props: PostFormProps) => {
  const onSubmit = (data: FormPost) => {
    props.onSave(data, props?.post?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormPost> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="posterID"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Poster id
        </Label>

        <NumberField
          name="posterID"
          defaultValue={props.post?.posterID}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="posterID" className="rw-field-error" />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.post?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="writeup"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Writeup
        </Label>

        <TextField
          name="writeup"
          defaultValue={props.post?.writeup}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="writeup" className="rw-field-error" />

        <Label
          name="attachmentURL"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Attachment url
        </Label>

        <TextField
          name="attachmentURL"
          defaultValue={props.post?.attachmentURL}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="attachmentURL" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PostForm
