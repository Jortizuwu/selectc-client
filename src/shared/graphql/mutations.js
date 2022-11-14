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
        nickName
        name
        uid
      }
    }
  }
`
export const LOGIN_WITH_NICKNAMEANDPASSWORD = gql`
  # login user with nick name and password
  mutation LoginWhitNickNameAndPassword(
    $nickName: String!
    $password: String!
  ) {
    loginWhitNickNameAndPassword(nickName: $nickName, password: $password) {
      code
      message
      success
      token
      user {
        Role {
          name
          roleID
        }
        nickName
        name
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
    $nickName: String!
    $password: String!
    $roleName: AllRoles!
  ) {
    createUser(
      name: $name
      lastName: $lastName
      nickName: $nickName
      password: $password
      RoleName: $roleName
    ) {
      token
      code
      message
      user {
        lastName
        name
        nickName
        uid
        Role {
          name
          roleID
        }
      }
    }
  }
`
export const ADD_CONTENT_BOOK = gql`
  # add content to book
  mutation CreateContent($bookId: ID!, $content: String!) {
    createContent(bookID: $bookId, content: $content) {
      content {
        content
        contentID
        User {
          nickName
        }
      }
    }
  }
`
