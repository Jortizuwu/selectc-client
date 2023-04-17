import { useQuery } from '@apollo/client'
import { LIST_ALL_CAREERS } from '../../graphql/queries'

export const useListAllCareers = () => {
  const { loading, error, data, refetch } = useQuery(LIST_ALL_CAREERS)

  return {
    isLoading: loading,
    error,
    careers: data?.getCareers,
    refetch,
  }
}
