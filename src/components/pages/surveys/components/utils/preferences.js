import { useMutation } from '@apollo/client'
import { useNavigate } from 'react-router-dom'

import * as yup from 'yup'
import { Notify } from '../../../../../shared/components/Notify'
import { ADDANDDELETE_PREFERENCE_TO_USE } from '../../../../../shared/graphql/mutations'

export const schema = yup.object().shape({
  answer1: yup.string().required('the answer1 field is required!'),
  answer2: yup.string().required('the answer2 field is required!'),
  answer3: yup.string().required('the answer3 field is required!'),
  answer4: yup.string().required('the answer4 field is required!'),
  answer5: yup.string().required('the answer5 field is required!'),
  answer6: yup.string().required('the answer6 field is required!'),
  answer7: yup.string().required('the answer7 field is required!'),
  answer8: yup.string().required('the answer8 field is required!'),
  answer9: yup.string().required('the answer9 field is required!'),
  answer10: yup.string().required('the nswer10 field is required!'),
  answer11: yup.string().required('the nswer11 field is required!'),
  answer12: yup.string().required('the nswer12 field is required!'),
  answer13: yup.string().required('the nswer13 field is required!'),
  answer14: yup.string().required('the nswer14 field is required!'),
  answer15: yup.string().required('the nswer15 field is required!'),
  answer16: yup.string().required('the nswer16 field is required!'),
  answer17: yup.string().required('the nswer17 field is required!'),
  answer18: yup.string().required('the nswer18 field is required!'),
})

const initialValues = {
  answer1: '',
  answer2: '',
  answer3: '',
  answer4: '',
  answer5: '',
  answer6: '',
  answer7: '',
  answer8: '',
  answer9: '',
  answer10: '',
  answer11: '',
  answer12: '',
  answer13: '',
  answer14: '',
  answer15: '',
  answer16: '',
  answer17: '',
  answer18: '',
}

export const UseDefaultValues = () => {
  const navigate = useNavigate()
  const [add, { loading, error }] = useMutation(ADDANDDELETE_PREFERENCE_TO_USE)

  const mutate = async (values) => {
    try {
      console.log(values)
      const arrPreferences = Object.values(values).filter(
        (val) => val !== 'Not'
      )
      await add({ variables: { arrPreferences } })
      window.localStorage.removeItem('preferencesDefaultValues')
      Notify('preferences add')
      navigate('/results')
    } catch (error) {
      console.log(error)
      Notify('opps! something doesn`t seem to be right', 'error')
      return error
    }
  }

  return {
    isLoading: loading,
    submit: mutate,
    error,
    formValues: {
      defaultValues: window.localStorage.getItem('preferencesDefaultValues')
        ? JSON.parse(window.localStorage.getItem('preferencesDefaultValues'))
        : initialValues,
      formProps: {},
    },
  }
}
