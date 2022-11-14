import { useEffect } from 'react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema, UseDefaultValues } from './utils/register'

export const Register = ({ handleChange }) => {
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

  if (isLoading) return <>loading...</>

  return (
    <div className='flex w-full flex-wrap content-center justify-center bg-white'>
      <div className='w-auto'>
        <h1 className='text-xl font-semibold'>Register</h1>
        <form
          autoComplete='off'
          onSubmit={handleSubmit(submit)}
          className='mt-4'
        >
          <div className='mb-3'>
            <label className='mb-2 block text-xs font-semibold'>Name</label>
            <input
              autoComplete='off'
              type='text'
              placeholder='Enter your name'
              className='block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500'
              {...register('name')}
            />
            <p>{errors.name?.message}</p>
          </div>
          <div className='mb-3'>
            <label className='mb-2 block text-xs font-semibold'>
              Last name
            </label>
            <input
              autoComplete='off'
              type='text'
              placeholder='Enter last name'
              className='block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500'
              {...register('lastName')}
            />
            <p>{errors.lastName?.message}</p>
          </div>
          <div className='mb-3'>
            <label className='mb-2 block text-xs font-semibold'>
              Nick name
            </label>
            <input
              autoComplete='off'
              type='text'
              placeholder='Enter your nick name'
              className='block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500'
              {...register('nickName')}
            />
            <p>{errors.nickName?.message}</p>
          </div>

          <div className='mb-3'>
            <label className='mb-2 block text-xs font-semibold'>Password</label>
            <input
              autoComplete='off'
              type='password'
              placeholder='*****'
              {...register('password')}
              className='block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500'
            />
            <p>{errors.password?.message}</p>
          </div>

          <div className='mb-3'>
            <label className='mb-2 block text-xs font-semibold'>
              confirm password
            </label>
            <input
              autoComplete='off'
              type='password'
              placeholder='confirm password'
              {...register('confirmPassword')}
              className='block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500'
            />
            <p>{errors.confirmPassword?.message}</p>
          </div>

          <div className='text-center mb-3'>
            <span className='text-xs text-gray-400 font-semibold'>
              You already have an account?
            </span>
            <button
              onClick={handleChange}
              className='text-xs font-semibold text-purple-700'
            >
              Log in
            </button>
          </div>
          <div className='mb-3'>
            <button
              type='submit'
              className='mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md'
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
