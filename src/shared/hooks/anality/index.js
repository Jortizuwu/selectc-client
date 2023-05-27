import { useQuery } from '@apollo/client'
import { ANALITY } from '../../graphql/queries'

export const useAnality = () => {
  const { loading, error, data, refetch } = useQuery(ANALITY)
  return {
    isLoading: loading,
    error,
    data,
    refetch,
  }
}
