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
    .min(2, 'El apellido necesita 2 o más caracteres')
    .max(20, 'El máximo de caracteres es 50')
    .required('¡El campo apellido es obligatorio!'),
  name: yup
    .string()
    .min(2, 'El nombre necesita 2 o más caracteres')
    .max(20, 'El máximo de caracteres es 50')
    .required('¡El campo nombre es obligatorio!'),
  age: yup
    .number()
    .max(120, 'El valor máximo es 120')
    .min(5, 'El valor mínimo es 5'),
  // oldPassword: yup.string(),
  // newPassword: yup.string(),
  // confirmPassword: yup
  //   .string()
  //   .oneOf([yup.ref('newPassword'), null], 'passwords must match'),
  gender: yup.string(),
  preferenceCareer: yup
    .object({
      label: yup.string(),
      value: yup.string(),
    })
    .required('La preferencia de carrera es requerido'),
  income: yup.number('number'),
})

export const UseDefaultValues = () => {
  const [update, { loading, error }] = useMutation(UPDATE_USER)
  const dispatch = useDispatch()

  const mutate = async (values) => {
    try {
      const { data } = await update({
        variables: {
          ...values,
          preferenceCareer: values.preferenceCareer.value,
        },
      })
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
