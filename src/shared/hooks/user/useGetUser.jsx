import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { GET_USER_BY_ID } from '../../graphql/queries'

export const useGetUser = (id) => {
  const { uid } = useParams()
  const { loading, error, data, refetch } = useQuery(GET_USER_BY_ID, {
    variables: { uid: uid || id },
  })

  return {
    isLoading: loading,
    error,
    user: data?.getUserById?.user,
    refetch,
  }
}
