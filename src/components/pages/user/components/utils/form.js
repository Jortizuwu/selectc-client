import { useMutation } from '@apollo/client'
import { useDispatch } from 'react-redux'

import * as yup from 'yup'
import { authUser } from '../../../../../redux/features/user/thunks'
import { Notify } from '../../../../../shared/components/Notify'
import { UPDATE_USER } from '../../../../../shared/graphql/mutations'

export const schema = yup.object().shape({
  email: yup.string().required('the email field is required!'),
  lastName: yup
    .string()
    .min(2, 'the last name need 2 or more characters')
    .max(20, 'maximum characters are 50')
    .required('the last name field is required!'),
  name: yup
    .string()
    .min(2, 'the name need 2 or more characters')
    .max(20, 'maximum characters are 50')
    .required('the name field is required!'),
  age: yup.number().max(120, 'max value is 120').min(5, 'min value is 5'),
  // oldPassword: yup.string(),
  // newPassword: yup.string(),
  // confirmPassword: yup
  //   .string()
  //   .oneOf([yup.ref('newPassword'), null], 'passwords must match'),
  gender: yup.string(),
  income: yup.number('number'),
})

export const UseDefaultValues = () => {
  const [update, { loading, error }] = useMutation(UPDATE_USER)
  const dispatch = useDispatch()

  const mutate = async (values) => {
    try {
      const { data } = await update({ variables: { ...values } })
      const { ...rest } = data.updateUser.user
      dispatch(authUser(rest))
      localStorage.setItem('token', data.updateUser.token)
      Notify('user update')
      if (error) throw new Error(error)
    } catch (error) {
      Notify('Something doesn`t seem to be right', 'error')
      return error
    }
  }

  return {
    isLoading: loading,
    submit: mutate,
    error,
    formValues: {
      formProps: {},
    },
  }
}
