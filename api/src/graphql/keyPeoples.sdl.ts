export const schema = gql`
  type KeyPeople {
    id: Int!
    startup: StartupBasic!
    startupID: Int!
    name: String!
    role: String!
    writeup: String
    eduBG: EducationBG
    linkedInURL: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum EducationBG {
    HIGH_SCHOOL
    BACHELORS
    MASTERS
    PHD
  }

  type Query {
    keyPeoples: [KeyPeople!]! @requireAuth
    keyPeople(id: Int!): KeyPeople @requireAuth
  }

  input CreateKeyPeopleInput {
    startupID: Int!
    name: String!
    role: String!
    writeup: String
    eduBG: EducationBG
    linkedInURL: String
  }

  input UpdateKeyPeopleInput {
    startupID: Int
    name: String
    role: String
    writeup: String
    eduBG: EducationBG
    linkedInURL: String
  }

  type Mutation {
    createKeyPeople(input: CreateKeyPeopleInput!): KeyPeople! @requireAuth
    updateKeyPeople(id: Int!, input: UpdateKeyPeopleInput!): KeyPeople!
      @requireAuth
    deleteKeyPeople(id: Int!): KeyPeople! @requireAuth
  }
`
