import React, { useEffect } from 'react'

import { UilEnvelope } from '@iconscout/react-unicons'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { schema, UseDefaultValues } from './utils/form'
import { Spinner } from '../../../../shared/components/Spinner'
import { FieldError } from '../../../../shared/components/FieldError'

export const Form = ({ defaultValues }) => {
  const { isLoading, submit, error } = UseDefaultValues()
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
  }, [reset, defaultValues])

  if (isLoading) {
    return (
      <div className='flex w-full h-full items-end justify-center'>
        <Spinner />
      </div>
    )
  }

  if (error) return null

  return (
    <>
      {/* <div className='mb-10'>
        <div className='rounded relative mt-8 h-48'>
          <img
            src='https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/11/Hitori-Bocchi-the-Rock.jpg'
            alt=''
            className='w-full h-full object-cover rounded absolute shadow'
          />
          <div className='absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded' />
          <div className='flex items-center px-3 py-2 rounded absolute right-0 mr-4 mt-4 cursor-pointer'>
            <p className='text-xs text-white'>Cambiar foto de portada</p>
            <div className='ml-2 '>
              <UilEdit className='text-white' />
            </div>
          </div>
          <div className='w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat absolute bottom-0 -mb-10 ml-12 shadow flex items-center justify-center'>
            <img
              src='https://th.bing.com/th/id/R.ae8111c220bffd6ebaa78a6c71ad1e3d?rik=U2IvFxZ%2bUNpVaQ&pid=ImgRaw&r=0'
              alt=''
              className='absolute z-0 h-full w-full object-cover rounded-full shadow top-0 left-0 bottom-0 right-0'
            />

            <div className='absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded-full z-0' />
            <div className='cursor-pointer text-white flex flex-col justify-center items-center z-10 '>
              <UilEdit />
              <p className='text-xs '>Editar imagen</p>
            </div>
          </div>
        </div>
      </div> */}

      <div className='pt-4'>
        <form onSubmit={handleSubmit(submit)}>
          <h2 className='mb-4 capitalize font-bold'>Información personal</h2>
          <div className='flex md:space-x-4 flex-col md:flex-row'>
            <div className='w-full lg:w-1/2 md:w-1/2 flex flex-col mb-6'>
              <label className='pb-2 text-sm font-bold text-gray-800 '>
                Nombre
              </label>
              <input
                type='text'
                {...register('name')}
                className='border mb-2 border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500'
                placeholder='First name'
              />
              {errors?.name && <FieldError error={errors.name?.message} />}
            </div>
            <div className='w-full lg:w-1/2 md:w-1/2 flex flex-col mb-6'>
              <label className='pb-2 text-sm font-bold text-gray-800 '>
                Apellido
              </label>
              <input
                type='text'
                {...register('lastName')}
                className='border mb-2 bg-white border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 '
                placeholder='Last name'
              />
              {errors?.lastName && (
                <FieldError error={errors.lastName?.message} />
              )}
            </div>
          </div>
          <div className='lg:w-full md:w-1/2 flex flex-col mb-6'>
            <label className='pb-2 text-sm font-bold text-gray-800 dark:'>
              Correo electrónico
            </label>
            <div className='border border-green-400 shadow-sm rounded flex mb-2'>
              <div className='focus:outline-none px-4 py-3 dark: flex items-center border-r border-green-400'>
                <UilEnvelope />
              </div>
              <input
                type='email'
                disabled
                {...register('email')}
                className='pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent '
                placeholder='example@gmail.com'
              />
            </div>
            {errors?.email && <FieldError error={errors.email?.message} />}
          </div>
          <div className='flex md:space-x-4 flex-col md:flex-row'>
            <div className='lg:w-1/2 md:w-1/2 flex flex-col mb-6'>
              <label className='pb-2 text-sm font-bold text-gray-800 dark:'>
                Edad
              </label>
              <input
                type='number'
                {...register('age')}
                className='border mb-2 border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 '
                placeholder='Age'
              />
              {errors?.age && <FieldError error={errors.age?.message} />}
            </div>
            <div className='lg:w-1/2 md:w-1/2 flex flex-col mb-6'>
              <label className='pb-2 text-sm font-bold text-gray-800 dark:'>
                Género
              </label>
              <input
                type='text'
                {...register('gender')}
                className='border mb-2 border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 '
                placeholder='a'
              />
              {errors?.gender && <FieldError error={errors.gender?.message} />}
            </div>
            <div className='lg:w-1/2 md:w-1/2 flex flex-col mb-6'>
              <label className='pb-2 text-sm font-bold text-gray-800 dark:'>
                Ingresos
              </label>
              <input
                type='number'
                {...register('income')}
                className='border mb-2 border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 '
                placeholder='110.000'
              />
              {errors?.income && <FieldError error={errors.income?.message} />}
            </div>
          </div>
          {/* <div className='flex md:space-x-4 flex-col md:flex-row'>
            <div className='lg:w-1/2 md:w-1/2 flex flex-col mb-6'>
              <label className='pb-2 text-sm font-bold text-gray-800 dark:'>
                current Password
              </label>
              <input
                type='text'
                {...register('oldPassword')}
                className='border mb-2 border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 '
                placeholder='***********'
              />
              {errors?.oldPassword && (
                <FieldError error={errors.oldPassword?.message} />
              )}
            </div>
            <div className='lg:w-1/2 md:w-1/2 flex flex-col mb-6'>
              <label className='pb-2 text-sm font-bold text-gray-800 dark:'>
                New password
              </label>
              <input
                type='text'
                {...register('newPassword')}
                className='border mb-2 border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 '
                placeholder='************'
              />
              {errors?.newPassword && (
                <FieldError error={errors.newPassword?.message} />
              )}
            </div>
            <div className='lg:w-1/2 md:w-1/2 flex flex-col mb-6'>
              <label className='pb-2 text-sm font-bold text-gray-800 dark:'>
                Confirm new password
              </label>
              <input
                type='text'
                {...register('confirmPassword')}
                className='border mb-2 border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 '
                placeholder='*************'
              />
              {errors?.confirmPassword && (
                <FieldError error={errors.confirmPassword?.message} />
              )}
            </div>
          </div> */}

          <button
            className='w-full shadow-lg hover:shadow-none  p-2 bg-blue-300 rounded-md font-bold capitalize text-white mb-4 hover:bg-blue-400 transition-all'
            type='submit'
          >
            actualizar
          </button>
        </form>
      </div>
    </>
  )
}
