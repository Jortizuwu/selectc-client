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
export const GET_BOOK_BY_ID = gql`
  query getBookById($bookId: ID!) {
    getBookById(bookID: $bookId) {
      book {
        bookID
        bookName
        description
        Contents {
          content
          contentID
          User {
            nickName
          }
        }
      }
    }
  }
`
export const GET_CONETENTS_BY_BOOKID = gql`
  query GetContentsByBookId($bookId: ID!) {
    getContentsByBookId(bookID: $bookId) {
      User {
        uid
        nickName
      }
      content
      contentID
      createdAt
    }
  }
`
export const GET_BOOK_AND_CONETENTS_BY_BOOKID = gql`
  query GetBookAndContentsByBookID($bookId: ID!) {
    getContentsByBook(bookID: $bookId) {
      User {
        uid
        nickName
      }
      content
      contentID
      createdAt
    }
    getBookById(bookID: $bookId) {
      code
      book {
        bookID
        bookName
        description
        Contents {
          content
          contentID
          User {
            nickName
            password
          }
        }
      }
    }
  }
`
