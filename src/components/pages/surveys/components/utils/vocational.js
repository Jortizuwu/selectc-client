import { useMutation } from '@apollo/client'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as yup from 'yup'
import { Notify } from '../../../../../shared/components/Notify'
import { ADDANDDELETE_ACTIVITIES_TO_USE } from '../../../../../shared/graphql/mutations'

export const schema = yup.object().shape({
  answer1: yup.string().required('the  answer1 field is required!'),
  answer2: yup.string().required('the  answer1 field is required!'),
  answer3: yup.string().required('the  answer2 field is required!'),
  answer4: yup.string().required('the  answer3 field is required!'),
  answer5: yup.string().required('the  answer4 field is required!'),
  answer6: yup.string().required('the  answer5 field is required!'),
  answer7: yup.string().required('the  answer6 field is required!'),
  answer8: yup.string().required('the  answer7 field is required!'),
  answer9: yup.string().required('the  answer8 field is required!'),
  answer10: yup.string().required('the  answer9 field is required!'),
  answer11: yup.string().required('thea nswer10 field is required!'),
  answer12: yup.string().required('thea nswer11 field is required!'),
  answer13: yup.string().required('thea nswer12 field is required!'),
  answer14: yup.string().required('thea nswer13 field is required!'),
  answer15: yup.string().required('thea nswer14 field is required!'),
  answer16: yup.string().required('thea nswer15 field is required!'),
  answer17: yup.string().required('thea nswer16 field is required!'),
  answer18: yup.string().required('thea nswer17 field is required!'),
  answer19: yup.string().required('thea nswer18 field is required!'),
  answer20: yup.string().required('thea nswer18 field is required!'),
  answer21: yup.string().required('thea nswer18 field is required!'),
  answer22: yup.string().required('thea nswer18 field is required!'),
  answer23: yup.string().required('thea nswer18 field is required!'),
  answer24: yup.string().required('thea nswer18 field is required!'),
  answer25: yup.string().required('thea nswer18 field is required!'),
  answer26: yup.string().required('thea nswer18 field is required!'),
  answer27: yup.string().required('thea nswer18 field is required!'),
  answer28: yup.string().required('thea nswer18 field is required!'),
  answer29: yup.string().required('thea nswer18 field is required!'),
  answer30: yup.string().required('thea nswer18 field is required!'),
  answer31: yup.string().required('thea nswer18 field is required!'),
  answer32: yup.string().required('thea nswer18 field is required!'),
  answer33: yup.string().required('thea nswer18 field is required!'),
  answer34: yup.string().required('thea nswer18 field is required!'),
  answer35: yup.string().required('thea nswer18 field is required!'),
  answer36: yup.string().required('thea nswer18 field is required!'),
  answer37: yup.string().required('thea nswer18 field is required!'),
  answer38: yup.string().required('thea nswer18 field is required!'),
  answer39: yup.string().required('thea nswer18 field is required!'),
  answer40: yup.string().required('thea nswer18 field is required!'),
  answer41: yup.string().required('thea nswer18 field is required!'),
  answer42: yup.string().required('thea nswer18 field is required!'),
  answer43: yup.string().required('thea nswer18 field is required!'),
  answer44: yup.string().required('thea nswer18 field is required!'),
  answer45: yup.string().required('thea nswer18 field is required!'),
  answer46: yup.string().required('thea nswer18 field is required!'),
  answer47: yup.string().required('thea nswer18 field is required!'),
  answer48: yup.string().required('thea nswer18 field is required!'),
  answer49: yup.string().required('thea nswer18 field is required!'),
  answer50: yup.string().required('thea nswer18 field is required!'),
  answer51: yup.string().required('thea nswer18 field is required!'),
  answer52: yup.string().required('thea nswer18 field is required!'),
  answer53: yup.string().required('thea nswer18 field is required!'),
  answer54: yup.string().required('thea nswer18 field is required!'),
  answer55: yup.string().required('thea nswer18 field is required!'),
  answer56: yup.string().required('thea nswer18 field is required!'),
  answer57: yup.string().required('thea nswer18 field is required!'),
  answer58: yup.string().required('thea nswer18 field is required!'),
  answer59: yup.string().required('thea nswer18 field is required!'),
  answer60: yup.string().required('thea nswer18 field is required!'),
  answer61: yup.string().required('thea nswer18 field is required!'),
  answer62: yup.string().required('thea nswer18 field is required!'),
  answer63: yup.string().required('thea nswer18 field is required!'),
  answer64: yup.string().required('thea nswer18 field is required!'),
  answer65: yup.string().required('thea nswer18 field is required!'),
  answer66: yup.string().required('thea nswer18 field is required!'),
  answer67: yup.string().required('thea nswer18 field is required!'),
  answer68: yup.string().required('thea nswer18 field is required!'),
  answer69: yup.string().required('thea nswer18 field is required!'),
  answer70: yup.string().required('thea nswer18 field is required!'),
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
  answer19: '',
  answer20: '',
  answer21: '',
  answer22: '',
  answer23: '',
  answer24: '',
  answer25: '',
  answer26: '',
  answer27: '',
  answer28: '',
  answer29: '',
  answer30: '',
  answer31: '',
  answer32: '',
  answer33: '',
  answer34: '',
  answer35: '',
  answer36: '',
  answer37: '',
  answer38: '',
  answer39: '',
  answer40: '',
  answer41: '',
  answer42: '',
  answer43: '',
  answer44: '',
  answer45: '',
  answer46: '',
  answer47: '',
  answer48: '',
  answer49: '',
  answer50: '',
  answer51: '',
  answer52: '',
  answer53: '',
  answer54: '',
  answer55: '',
  answer56: '',
  answer57: '',
  answer58: '',
  answer59: '',
  answer60: '',
  answer61: '',
  answer62: '',
  answer63: '',
  answer64: '',
  answer65: '',
  answer66: '',
  answer67: '',
  answer68: '',
  answer69: '',
  answer70: '',
}

export const UseDefaultValues = () => {
  const navigate = useNavigate()
  const { uid } = useSelector((state) => state.user.currentUser)
  const [add, { loading, error }] = useMutation(ADDANDDELETE_ACTIVITIES_TO_USE)

  const mutate = async (values) => {
    try {
      const arrActivities = []
      const value = {
        'Ingeniería e Informática': 0,
        'Ciencias Puras, Agrarias, Medio Ambientales': 0,
        'Profesiones Administrativas y Contables': 0,
        'Profesiones Humanísticas y Sociales': 0,
        'Actividades Artísticas': 0,
        'Defensa y Seguridad': 0,
        'Medicina y Ciencias de la Salud': 0,
      }
      Object.values(values)
        .filter((val) => val !== 'Not')
        .forEach((anser) => {
          value[anser] = !value[anser] ? 1 : (value[anser] += 1)
        })
      arrActivities.push(
        Object.keys(value).map((e) => ({
          name: e,
          userValue: value[e],
        }))
      )
      await add({
        variables: { arrActivities: arrActivities[0] },
      })
      window.localStorage.removeItem('vocationalDefaultValues')
      Notify('activities vocationals add')
      navigate(`/user/${uid}`)
    } catch (error) {
      Notify('opps! something doesn`t seem to be right', 'error')
      return error
    }
  }

  return {
    isLoading: loading,
    submit: mutate,
    error,
    formValues: {
      defaultValues: window.localStorage.getItem('vocationalDefaultValues')
        ? JSON.parse(window.localStorage.getItem('vocationalDefaultValues'))
        : initialValues,
      formProps: {},
    },
  }
}
