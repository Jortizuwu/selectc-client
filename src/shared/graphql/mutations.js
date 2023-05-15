import { gql } from '@apollo/client'
import { USER_DATA } from './fragments'

// auth
export const LOGIN_WITH_JWT = gql`
  # login user with jwt
  ${USER_DATA}
  mutation LoginWhitToken($token: String!) {
    loginWhitToken(token: $token) {
      code
      message
      success
      token
      user {
        ...CoreUser
      }
    }
  }
`
export const LOGIN_WITH_EMAILANDPASSWORD = gql`
  # login user with nick name and password
  ${USER_DATA}
  mutation LoginWhitEmailAndPassword($email: String!, $password: String!) {
    loginWhitEmailAndPassword(email: $email, password: $password) {
      code
      message
      success
      token
      user {
        ...CoreUser
      }
    }
  }
`
export const REGISTER_USER = gql`
  # create a user
  ${USER_DATA}
  mutation CreateUser(
    $name: String!
    $lastName: String!
    $email: String!
    $password: String!
    $roleName: AllRoles!
    $schoolID: ID!
  ) {
    createUser(
      name: $name
      lastName: $lastName
      email: $email
      password: $password
      RoleName: $roleName
      schoolID: $schoolID
    ) {
      token
      code
      message
      user {
        ...CoreUser
      }
    }
  }
`
// user
export const UPDATE_USER = gql`
  ${USER_DATA}
  mutation UpdateUser(
    $name: String
    $lastName: String
    $email: String
    $age: Int
    $gender: String
    $income: Int
    $preferenceCareer: String
  ) {
    updateUser(
      name: $name
      lastName: $lastName
      email: $email
      age: $age
      gender: $gender
      income: $income
      preferenceCareer: $preferenceCareer
    ) {
      success
      message
      token
      user {
        ...CoreUser
      }
    }
  }
`
// user has preference
export const ADD_PREFERENCE_TO_USE = gql`
  # add preference to user
  mutation AddPreferenceToUser($arrPreferences: [String]) {
    addPreferenceToUser(arrPreferences: $arrPreferences) {
      code
      message
    }
  }
`

export const ADDANDDELETE_PREFERENCE_TO_USE = gql`
  # add preference to user
  mutation addAndDeletePreferencesToUser($arrPreferences: [String]) {
    deletePreferenceToUser {
      code
      message
      success
    }
    addPreferenceToUser(arrPreferences: $arrPreferences) {
      code
      message
    }
  }
`
export const DELETE_PREFERENCES_TO_USE = gql`
  # delete preference to user
  mutation DeletePreferenceToUser {
    deletePreferenceToUser {
      code
      message
      success
    }
  }
`

// user has activity
export const ADD_ACTIVITY_TO_USE = gql`
  # add ativity to user
  mutation AddActivityToUser($arrActivities: [ArrActivities]) {
    addActivityToUser(arrActivities: $arrActivities) {
      code
      message
      success
    }
  }
`

export const ADDANDDELETE_ACTIVITIES_TO_USE = gql`
  # add preference to user
  mutation addAndDeletePreferencesToUser($arrActivities: [ArrActivities]) {
    deleteActivityToUser {
      code
      message
      success
    }
    addActivityToUser(arrActivities: $arrActivities) {
      code
      message
      success
    }
  }
`

export const DELETE_ACTIVITIES_TO_USE = gql`
  # delete ativity to user
  mutation DeleteActivityToUser {
    deleteActivityToUser {
      code
      message
      success
    }
  }
`

export const ADDANDDELETE_CAREERS_TO_USE = gql`
  # add preference to user
  mutation addAndDeleteCareerToUser($data: [ArrUserData]) {
    deleteCareerToUser {
      code
    }
    addCareerToUser(data: $data) {
      career {
        createdAt
      }
    }
  }
`
