import { useEffect } from 'react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema, UseDefaultValues } from './utils/register'
import { Spinner } from '../../../shared/components/Spinner'

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

  return (
    <div className='flex w-full flex-wrap content-center justify-center bg-white'>
      <div className='w-auto'>
        <form
          autoComplete='off'
          onSubmit={handleSubmit(submit)}
          className='mt-4'
        >
          <div className='flex space-x-3'>
            <div className='mb-3'>
              <label className='mb-2 block text-xs font-semibold'>Nombre</label>
              <input
                autoComplete='off'
                type='text'
                placeholder='ingrese su nombre'
                className='block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500'
                {...register('name')}
              />
              <p className='text-red-400 text-sm mt-2'>
                {errors.name?.message}
              </p>
            </div>
            <div className='mb-3'>
              <label className='mb-2 block text-xs font-semibold'>
                Apellido
              </label>
              <input
                autoComplete='off'
                type='text'
                placeholder='ingrese su apellido'
                className='block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500'
                {...register('lastName')}
              />
              <p className='text-red-400 text-sm mt-2'>
                {errors.lastName?.message}
              </p>
            </div>
          </div>
          <div className='mb-3'>
            <label className='mb-2 block text-xs font-semibold'>
              Correo electrónico
            </label>
            <input
              autoComplete='off'
              type='email'
              placeholder='example@example.com'
              className='block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500'
              {...register('email')}
            />
            <p className='text-red-400 text-sm mt-2'>{errors.email?.message}</p>
          </div>
          <div className='flex space-x-3'>
            <div className='mb-3'>
              <label className='mb-2 block text-xs font-semibold'>
                Contraseña
              </label>
              <input
                autoComplete='off'
                type='password'
                placeholder='*********'
                {...register('password')}
                className='block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500'
              />
              <p className='text-red-400 text-sm mt-2'>
                {errors.password?.message}
              </p>
            </div>

            <div className='mb-3'>
              <label className='mb-2 block text-xs font-semibold'>
                confirma contraseña
              </label>
              <input
                autoComplete='off'
                type='password'
                placeholder='confirma contraseña'
                {...register('confirmPassword')}
                className='block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500'
              />
              <p className='text-red-400 text-sm mt-2'>
                {errors.confirmPassword?.message}
              </p>
            </div>
          </div>

          <div className='text-center mb-3'>
            <span className='text-xs text-gray-400 font-semibold'>
              ¿Ya tienes una cuenta?
            </span>
            <button
              onClick={handleChange}
              type='button'
              className='text-xs font-semibold text-purple-700 ml-3'
            >
              Inicia sesión
            </button>
          </div>
          <div className='mb-3'>
            <button
              type='submit'
              disabled={isLoading}
              className='mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md'
            >
              {isLoading ? <Spinner /> : 'Registro'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
