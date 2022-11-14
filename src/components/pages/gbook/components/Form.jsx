import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { schema, UseDefaultValues } from './utils/form-props'

const Form = () => {
  const {
    formValues: { defaultValues },
    isLoading,
    submit
  } = UseDefaultValues()

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
    mode: 'all'
  })

  useEffect(() => {
    reset(defaultValues)
  }, [defaultValues, reset])

  return (
    <form onSubmit={handleSubmit(submit)}>
      <textarea
        className='block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-400 focus:border-green-500'
        placeholder='Your content...'
        {...register('content')}
      />
      {errors && (
        <span className='text-sm text-left text-red-400'>
          {errors?.content?.message}
        </span>
      )}
      <button
        className='p-1 absolute right-0 bg-green-300 rounded-md text-white hover:text-black hover:bg-green-400 transition-all focus:ring-1 font-bold mt-2 disabled:bg-slate-200 disabled:text-white'
        type='submit'
        disabled={isLoading}
      >
        send
      </button>
    </form>
  )
}

export default Form
