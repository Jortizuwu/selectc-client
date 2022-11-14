import { useMutation } from '@apollo/client'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { modalAction } from '../../../../redux/features/ui/uiSlice'
import { authUser } from '../../../../redux/features/user/thunks'
import { REGISTER_USER } from '../../../../shared/graphql/mutations'

export const schema = yup.object().shape({
  nickName: yup
    .string()
    .min(2, 'the nick name need 2 or more characters')
    .max(20, 'maximum characters are 20')
    .required('the nick name field is required!'),
  password: yup
    .string()
    .min(7, 'the password need 7 or more characters')
    .max(20, 'maximum characters are 20')
    .required('the password field is required!'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'passwords must match')
    .required('this field is required!'),
  lastName: yup
    .string()
    .min(2, 'the last name need 2 or more characters')
    .max(20, 'maximum characters are 20')
    .required('the last name field is required!'),
  name: yup
    .string()
    .min(2, 'the name need 2 or more characters')
    .max(20, 'maximum characters are 20')
    .required('the name field is required!')
})

const initialValues = {
  nickName: '',
  password: '',
  confirmPassword: '',
  lastName: '',
  name: '',
  roleName: 'USER'
}

export const UseDefaultValues = () => {
  const dispatch = useDispatch()
  const [register, { data, loading, error }] = useMutation(REGISTER_USER)

  const mutate = async (values) => {
    try {
      register({ variables: { ...values } })

      if (error) throw new Error(error)

      console.log(data)

      localStorage.setItem('token', data.createUser.token)
      dispatch(authUser(data.createUser.user))
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
