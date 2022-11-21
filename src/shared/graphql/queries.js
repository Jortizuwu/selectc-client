import { gql } from '@apollo/client'

export const GET_BOOKS = gql`
  query GetBooks {
    getBooks {
      bookID
      Contents {
        User {
          password
        }
      }
      User {
        password
      }
    }
  }
`
