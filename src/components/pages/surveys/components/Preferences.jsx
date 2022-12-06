import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { UilClipboardAlt, UilCapsule } from '@iconscout/react-unicons'

import { Answer } from './Answer'
import { schema, UseDefaultValues } from './utils/preferences'
import { Spinner } from '../../../../shared/components/Spinner'
import { PREFERENCES_ANSWER } from '../../../../shared/constants/answer'
import { Notify } from '../../../../shared/components/Notify'

const Preferences = () => {
  const {
    formValues: { defaultValues },
    isLoading,
    submit
  } = UseDefaultValues()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues
  })

  useEffect(() => {
    if (Object.values(errors).length > 0) {
      Notify('Debe seleccionar todas las casillas', 'error')
    }
  }, [errors])

  return (
    <>
      <h2 className='font-bold capitalize text-xl'>
        Preferencias <UilCapsule className='inline-block' />
      </h2>
      <div className='mt-4 bg-white py-4 px-7 rounded-xl shadow-xl'>
        <div className='flex space-x-4 justify-end mb-4'>
          <span className='uppercase text-sm font-bold'>Si</span>
          <span className='uppercase text-sm font-bold'>No</span>
        </div>

        <form
          className='relative flex flex-col'
          onSubmit={handleSubmit(submit)}
        >
          {PREFERENCES_ANSWER.map((val) => (
            <Answer
              answer={val.answer}
              register={register}
              key={val.id}
              radioID={val.id}
              radioValue={val.value}
              yesornot
            />
          ))}
          <div className='w-full mt-2'>
            <button
              className='bg-blue-300 w-full p-2 rounded-lg font-semibold text-gray-50 hover:text-white hover:bg-blue-400 transition-all'
              type='submit'
              disabled={isLoading}
            >
              {isLoading ? <Spinner /> : 'enviar'}
              <UilClipboardAlt className='ml-3 inline-block' />
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Preferences
