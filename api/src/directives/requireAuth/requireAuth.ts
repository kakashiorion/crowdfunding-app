import gql from 'graphql-tag'
import { UserType } from 'types/graphql'

import {
  createValidatorDirective,
  ValidatorDirectiveFunc,
} from '@redwoodjs/graphql-server'

import { requireAuth as applicationRequireAuth } from 'src/lib/auth'

export const schema = gql`
  """
  Use to check whether or not a user is authenticated and is associated
  with an optional set of roles.
  """
  directive @requireAuth(type: [UserType]) on FIELD_DEFINITION
`

type RequireAuthValidate = ValidatorDirectiveFunc<{ type?: UserType[] }>

const validate: RequireAuthValidate = ({ directiveArgs }) => {
  const { type } = directiveArgs
  applicationRequireAuth({ type })
}

const requireAuth = createValidatorDirective(schema, validate)

export default requireAuth
