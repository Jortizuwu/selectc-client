import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Answer } from './Answer'
import { schema, UseDefaultValues } from './utils/vocational'
import { UilClipboardAlt, UilCapsule } from '@iconscout/react-unicons'
import { Spinner } from '../../../../shared/components/Spinner'
import { VOCATIONAL_ANSWER } from '../../../../shared/constants/answer'
import { Notify } from '../../../../shared/components/Notify'

const Vocational = () => {
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
      Notify('You must select all the boxes', 'error')
    }
  }, [errors])

  return (
    <>
      <h2 className='font-bold capitalize text-xl'>
        Vocational <UilCapsule className='inline-block' />
      </h2>
      <div className='mt-4addActivityToUser bg-white py-4 px-7 rounded-xl shadow-xl'>
        <div className='flex space-x-4 justify-end mb-4'>
          <span className='uppercase text-sm font-bold'>Yes</span>
          <span className='uppercase text-sm font-bold'>Not</span>
        </div>

        <form
          className='relative flex flex-col'
          onSubmit={handleSubmit(submit)}
        >
          {VOCATIONAL_ANSWER.map((val) => (
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
              {isLoading ? <Spinner /> : 'send'}
              <UilClipboardAlt className='ml-3 inline-block' />
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Vocational
