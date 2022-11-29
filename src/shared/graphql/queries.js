import { gql } from '@apollo/client'
import { USER_DATA } from './fragments'

export const GET_USER_BY_ID = gql`
  ${USER_DATA}
  query getUserById($uid: ID!) {
    getUserById(uid: $uid) {
      user {
        ...CoreUser
      }
    }
  }
`
