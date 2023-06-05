import { gql } from '@apollo/client'

export const USER_DATA = gql`
  fragment CoreUser on User {
    Role {
      name
      roleID
    }
    Activities {
      name
      user_has_activity {
        userValue
      }
    }
    Preferences {
      name
      preferenceID
    }
    Careers {
      name
      careerID
      user_has_career {
        coincidenceValue
      }
    }
    email
    name
    uid
    age
    gender
    lastName
    income
    preferenceCareer
  }
`
