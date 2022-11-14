import { useMutation } from '@apollo/client'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { modalAction } from '../../../../redux/features/ui/uiSlice'
import { authUser } from '../../../../redux/features/user/thunks'
import { LOGIN_WITH_NICKNAMEANDPASSWORD } from '../../../../shared/graphql/mutations'

export const schema = yup.object().shape({
  nickName: yup.string().required('the nick name field is required!'),
  password: yup.string().required('the password field is required!')
})

const initialValues = {
  nickName: '',
  password: ''
}

export const UseDefaultValues = () => {
  const dispatch = useDispatch()
  const [login, { data, loading, error }] = useMutation(
    LOGIN_WITH_NICKNAMEANDPASSWORD
  )

  const mutate = async (values) => {
    try {
      login({ variables: { ...values } })

      if (error) throw new Error(error)

      localStorage.setItem('token', data.loginWhitNickNameAndPassword.token)
      dispatch(authUser(data.loginWhitNickNameAndPassword.user))
      dispatch(modalAction())
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
