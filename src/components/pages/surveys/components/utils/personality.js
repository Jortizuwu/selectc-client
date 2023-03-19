import { useMutation } from '@apollo/client'

import * as yup from 'yup'
import { REGISTER_USER } from '../../../../../shared/graphql/mutations'

export const schema = yup.object().shape({
  answer1: yup.string().required('the answer1 field is required!'),
  answer2: yup.string().required('the answer2 field is required!'),
  answer3: yup.string().required('the answer3 field is required!'),
  answer4: yup.string().required('the answer4 field is required!'),
  answer5: yup.string().required('the answer5 field is required!'),
})

const initialValues = {
  answer1: '',
  answer2: '',
  answer3: '',
  answer4: '',
  answer5: '',
}

export const UseDefaultValues = () => {
  const [{ loading, error }] = useMutation(REGISTER_USER)

  const mutate = async (values) => {
    try {
      // const { data } = await register({ variables: { ...values } })
      console.log(values)
    } catch (error) {
      return error
    }
  }

  return {
    isLoading: loading,
    submit: mutate,
    error,
    formValues: {
      defaultValues: initialValues,
      formProps: {},
    },
  }
}
