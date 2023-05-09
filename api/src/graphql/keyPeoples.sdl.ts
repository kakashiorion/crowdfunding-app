export const schema = gql`
  type KeyPeople {
    id: Int!
    startupBackground: StartupBackground!
    startupBackgroundID: Int!
    name: String!
    role: String!
    writeup: String
    linkedInURL: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    keyPeoples: [KeyPeople!]! @requireAuth
    keyPeople(id: Int!): KeyPeople @requireAuth
  }

  input CreateKeyPeopleInput {
    startupBackgroundID: Int!
    name: String!
    role: String!
    writeup: String
    linkedInURL: String
  }

  input UpdateKeyPeopleInput {
    startupBackgroundID: Int
    name: String
    role: String
    writeup: String
    linkedInURL: String
  }

  type Mutation {
    createKeyPeople(input: CreateKeyPeopleInput!): KeyPeople! @requireAuth
    updateKeyPeople(id: Int!, input: UpdateKeyPeopleInput!): KeyPeople!
      @requireAuth
    deleteKeyPeople(id: Int!): KeyPeople! @requireAuth
  }
`
