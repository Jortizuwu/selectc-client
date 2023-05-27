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

export const LIST_ALL_CAREERS = gql`
  query GetCareers {
    getCareers {
      name
      matters
      duration
      description
      careerID
    }
  }
`

export const GET_CARRER_BY_ID = gql`
  query GetCareerById($id: ID!) {
    getCareerById(id: $id) {
      career {
        careerID
        description
        name
        duration
        matters
        name
      }
    }
  }
`
export const ANALITY = gql`
  query anality {
    getSuccessfulPreferencesForFaculties {
      data {
        correct
        unsuccessful
      }
      code
    }
    getSuccessfulPreferences {
      data {
        correct
        unsuccessful
      }
      code
    }
    getMostFrequentCareers {
      code
      data
    }
    getMostFrequentFaculties {
      code
      data
    }
  }
`
