import React, { useEffect } from 'react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema, UseDefaultValues } from './utils/login'
import { Spinner } from '../../../shared/components/Spinner'

export const Login = ({ handelChange }) => {
  const {
    formValues: { defaultValues },
    isLoading,
    submit
  } = UseDefaultValues()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues
  })

  useEffect(() => {
    reset(defaultValues)
  }, [defaultValues, reset])

  return (
    <div className='flex w-full flex-wrap content-center justify-center bg-white'>
      <div className='w-auto'>
        <h1 className='text-xl font-semibold'>Login</h1>
        <small className='text-gray-400'>
          Welcome back! Please enter your details
        </small>
        <form
          autoComplete='off'
          onSubmit={handleSubmit(submit)}
          className='mt-4'
        >
          <div className='mb-3'>
            <label className='mb-2 block text-xs font-semibold'>Email</label>
            <input
              autoComplete='off'
              type='email'
              placeholder='example@example.com'
              className='block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500'
              {...register('email')}
            />
            <p className='text-red-400 text-sm mt-2'>{errors.email?.message}</p>
          </div>
          <div className='mb-3'>
            <label className='mb-2 block text-xs font-semibold'>Password</label>
            <input
              autoComplete='off'
              type='password'
              placeholder='***********'
              {...register('password')}
              className='block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500'
            />
            <p className='text-red-400 text-sm mt-2'>
              {errors.password?.message}
            </p>
          </div>
          <div className='mb-3 flex content-center'>
            <a
              href='#'
              className='text-xs text-right font-semibold text-purple-700'
            >
              Forgot password?
            </a>
          </div>
          <div className='text-center mb-3'>
            <span className='text-xs text-gray-400 font-semibold'>
              Don't have account?
            </span>
            <button
              onClick={handelChange}
              type='button'
              className='text-xs font-semibold text-purple-700'
            >
              Sign up
            </button>
          </div>
          <div className='mb-3'>
            <button
              type='submit'
              disabled={isLoading}
              className='flex space-x-4 justify-center items-center mb-1.5 w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md'
            >
              {isLoading ? <Spinner /> : 'Sign in'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
