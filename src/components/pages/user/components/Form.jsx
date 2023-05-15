import React, { useEffect } from 'react'

import { UilEnvelope } from '@iconscout/react-unicons'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Select from 'react-select'

import { schema, UseDefaultValues } from './utils/form'
import { Spinner } from '../../../../shared/components/Spinner'
import { FieldError } from '../../../../shared/components/FieldError'
import { useListAllCareers } from '../../../../shared/hooks/careers'
import { useMemo } from 'react'

export const Form = ({ defaultValues }) => {
  const { isLoading, submit, error } = UseDefaultValues()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  })

  const { careers, isLoading: isLoandingCareers } = useListAllCareers()

  const { options } = useMemo(
    () => ({
      options: careers
        ?.map((val) => ({ label: val.name, value: val.name }))
        .sort((a, b) => a.label - b.label),
    }),
    [careers]
  )

  useEffect(() => {
    reset(defaultValues)
  }, [reset, defaultValues])

  if (isLoading || isLoandingCareers) {
    return (
      <div className="flex w-full h-full items-end justify-center">
        <Spinner />
      </div>
    )
  }

  if (error) return null

  return (
    <React.Fragment>
      <div className="pt-4">
        <form onSubmit={handleSubmit(submit)}>
          <h2 className="mb-4 capitalize font-bold">Información personal</h2>
          <div className="flex md:space-x-4 flex-col md:flex-row">
            <div className="w-full lg:w-1/2 md:w-1/2 flex flex-col mb-6">
              <label className="pb-2 text-sm font-bold text-gray-800 ">
                Nombre
              </label>
              <input
                type="text"
                {...register('name')}
                className="border mb-2 border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500"
                placeholder="First name"
              />
              {errors?.name && <FieldError error={errors.name?.message} />}
            </div>
            <div className="w-full lg:w-1/2 md:w-1/2 flex flex-col mb-6">
              <label className="pb-2 text-sm font-bold text-gray-800 ">
                Apellido
              </label>
              <input
                type="text"
                {...register('lastName')}
                className="border mb-2 bg-white border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 "
                placeholder="Last name"
              />
              {errors?.lastName && (
                <FieldError error={errors.lastName?.message} />
              )}
            </div>
          </div>
          <div className="lg:w-full md:w-1/2 flex flex-col mb-6">
            <label className="pb-2 text-sm font-bold text-gray-800 dark:">
              De entre estas carreras universitarias, selecciona la que más te
              guste o te gustaría estudiar.
            </label>
            <Controller
              render={({ field }) => <Select options={options} {...field} />}
              name="preferenceCareer"
              control={control}
            />

            {errors?.preferenceCareer && (
              <FieldError error={errors.preferenceCareer?.message} />
            )}
          </div>
          <div className="lg:w-full md:w-1/2 flex flex-col mb-6">
            <label className="pb-2 text-sm font-bold text-gray-800 dark:">
              Correo electrónico
            </label>
            <div className="border border-green-400 shadow-sm rounded flex mb-2">
              <div className="focus:outline-none px-4 py-3 dark: flex items-center border-r border-green-400">
                <UilEnvelope />
              </div>
              <input
                type="email"
                disabled
                {...register('email')}
                className="pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent "
                placeholder="example@gmail.com"
              />
            </div>
            {errors?.email && <FieldError error={errors.email?.message} />}
          </div>

          <div className="flex md:space-x-4 flex-col md:flex-row">
            <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
              <label className="pb-2 text-sm font-bold text-gray-800 dark:">
                Edad
              </label>
              <input
                type="number"
                {...register('age')}
                className="border mb-2 border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 "
                placeholder="Age"
              />
              {errors?.age && <FieldError error={errors.age?.message} />}
            </div>
            <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
              <label className="pb-2 text-sm font-bold text-gray-800 dark:">
                Género
              </label>
              <input
                type="text"
                {...register('gender')}
                className="border mb-2 border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 "
                placeholder="a"
              />
              {errors?.gender && <FieldError error={errors.gender?.message} />}
            </div>
            <div className="lg:w-1/2 md:w-1/2 flex flex-col mb-6">
              <label className="pb-2 text-sm font-bold text-gray-800 dark:">
                Ingresos
              </label>
              <input
                type="number"
                {...register('income')}
                className="border mb-2 border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 "
                placeholder="110.000"
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
            className="w-full shadow-lg hover:shadow-none  p-2 bg-green-300 rounded-md font-bold capitalize text-white mb-4 hover:bg-green-400 transition-all"
            type="submit"
          >
            actualizar
          </button>
        </form>
      </div>
    </React.Fragment>
  )
}
