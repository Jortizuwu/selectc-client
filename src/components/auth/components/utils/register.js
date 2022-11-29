import { useMutation } from '@apollo/client'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { modalAction } from '../../../../redux/features/ui/uiSlice'
import { authUser } from '../../../../redux/features/user/thunks'
import { Notify } from '../../../../shared/components/Notify'
import { REGISTER_USER } from '../../../../shared/graphql/mutations'

export const schema = yup.object().shape({
  email: yup.string().required('the email field is required!'),
  password: yup
    .string()
    .min(7, 'the password need 7 or more characters')
    .required('the password field is required!'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'passwords must match')
    .required('this field is required!'),
  lastName: yup
    .string()
    .min(2, 'the last name need 2 or more characters')
    .max(20, 'maximum characters are 50')
    .required('the last name field is required!'),
  name: yup
    .string()
    .min(2, 'the name need 2 or more characters')
    .max(20, 'maximum characters are 50')
    .required('the name field is required!')
})

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
  lastName: '',
  name: '',
  roleName: 'USER'
}

export const UseDefaultValues = () => {
  const dispatch = useDispatch()
  const [register, { loading, error }] = useMutation(REGISTER_USER)

  const mutate = async (values) => {
    try {
      const { data } = await register({ variables: { ...values } })
      console.log(data)
      if (error) throw new Error(error)
      localStorage.setItem('token', data.createUser.token)
      dispatch(authUser(data.createUser.user))
      dispatch(modalAction())
      Notify('user created success')
    } catch (error) {
      Notify(error?.message, 'error')
      return error
    }
  }

  return {
    isLoading: loading,
    submit: mutate,
    error,
    formValues: {
      defaultValues: initialValues,
      formProps: {}
    }
  }
}
