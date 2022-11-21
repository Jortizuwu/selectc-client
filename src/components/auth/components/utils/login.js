import { useMutation } from '@apollo/client'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { modalAction } from '../../../../redux/features/ui/uiSlice'
import { authUser } from '../../../../redux/features/user/thunks'
import { LOGIN_WITH_EMAILANDPASSWORD } from '../../../../shared/graphql/mutations'

export const schema = yup.object().shape({
  email: yup.string().required('the email field is required!'),
  password: yup.string().required('the password field is required!')
})

const initialValues = {
  email: '',
  password: ''
}

export const UseDefaultValues = () => {
  const dispatch = useDispatch()
  const [login, { loading, error }] = useMutation(LOGIN_WITH_EMAILANDPASSWORD)

  const mutate = async (values) => {
    try {
      const { data } = await login({ variables: { ...values } })
      if (error) throw new Error(error)
      dispatch(authUser(data.loginWhitEmailAndPassword.user))
      localStorage.setItem('token', data.loginWhitEmailAndPassword.token)
      dispatch(modalAction())
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
      formProps: {}
    }
  }
}
