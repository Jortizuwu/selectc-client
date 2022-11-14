import { gql } from '@apollo/client'

export const CONTENTADD_SUBSCRIPTION = gql`
  subscription OnContentAdd {
    contentAdd {
      content
      contentID
    }
  }
`
