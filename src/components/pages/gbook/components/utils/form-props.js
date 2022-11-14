import { useMutation } from '@apollo/client'
import { useParams } from 'react-router-dom'

import * as yup from 'yup'
import { ADD_CONTENT_BOOK } from '../../../../../shared/graphql/mutations'

export const schema = yup.object().shape({
  content: yup
    .string()
    .required('the content field is required!')
    .max(1000, 'only 1000 characters')
    .min(1, 'min characters 1')
})

const initialValues = {
  content: ''
}

export const UseDefaultValues = () => {
  const { bookId } = useParams()
  const [addContent, { loading, error }] = useMutation(ADD_CONTENT_BOOK)

  const mutate = async (values) => {
    try {
      addContent({
        variables: {
          ...values,
          bookId: bookId || '5ab696c5-70d9-495a-8b71-96a790a58a68'
        }
      })
      if (error) throw new Error(error)
    } catch (error) {
      return error
    }
  }

  return {
    isLoading: loading,
    submit: mutate,
    formValues: {
      defaultValues: initialValues,
      formProps: {}
    }
  }
}
