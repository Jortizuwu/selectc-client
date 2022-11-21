import { gql } from '@apollo/client'

export const LOGIN_WITH_JWT = gql`
  # login user with jwt
  mutation LoginWhitToken($token: String!) {
    loginWhitToken(token: $token) {
      code
      message
      success
      token
      user {
        Role {
          name
          roleID
        }
        email
        name
        uid
        age
        gender
        income
      }
    }
  }
`
export const LOGIN_WITH_EMAILANDPASSWORD = gql`
  # login user with nick name and password
  mutation LoginWhitEmailAndPassword($email: String!, $password: String!) {
    loginWhitEmailAndPassword(email: $email, password: $password) {
      code
      message
      success
      token
      user {
        Role {
          name
          roleID
        }
        email
        name
        lastName
        age
        gender
        income
        uid
      }
    }
  }
`
export const REGISTER_USER = gql`
  # create a user
  mutation CreateUser(
    $name: String!
    $lastName: String!
    $email: String!
    $password: String!
    $roleName: AllRoles!
  ) {
    createUser(
      name: $name
      lastName: $lastName
      email: $email
      password: $password
      RoleName: $roleName
    ) {
      token
      code
      message
      user {
        lastName
        name
        email
        age
        gender
        income
        uid
        Role {
          name
          roleID
        }
      }
    }
  }
`
