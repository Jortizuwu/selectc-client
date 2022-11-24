import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Answer } from './Answer'
import { schema, UseDefaultValues } from './utils/personality'
import { UilMessage } from '@iconscout/react-unicons'

const RADIO_IDS = [
  {
    answer: 'Me gusta reparar cosas',
    id: 'answer1'
  },
  {
    answer: 'Me desilusiono con facilidad',
    id: 'answer2'
  },
  {
    answer: 'En ocasiones, cometo errores',
    id: 'answer3'
  },
  {
    answer: 'Me gusta ayudar a los demás',
    id: 'answer4'
  },
  {
    answer: 'Disfruto de conocer a gente nueva',
    id: 'answer5'
  }
]

const Personality = () => {
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

  return (
    <>
      <h2 className='font-bold capitalize text-xl'>Personality</h2>
      <div className='mt-4 bg-white py-4 px-7 rounded-xl shadow-xl'>
        <div className='flex space-x-4 justify-end mb-4'>
          <span className='uppercase text-sm font-bold'>Total descuerdo</span>
          <span className='uppercase text-sm font-bold'>Desacuerdo </span>
          <span className='uppercase text-sm font-bold'>No está seguro</span>
          <span className='uppercase text-sm font-bold'>De acuerdo</span>
          <span className='uppercase text-sm font-bold'>Total acuerdo</span>
        </div>

        <form
          className='relative flex flex-col'
          onSubmit={handleSubmit(submit)}
        >
          {RADIO_IDS.map((val) => (
            <Answer
              answer={val.answer}
              register={register}
              key={val.id}
              radioID={val.id}
            />
          ))}
          {errors && (
            <p className='text-red-500'>You must select all the boxes</p>
          )}
          <div className='flex w-full items-end justify-end'>
            <button
              className='bg-blue-300 p-2 rounded-lg font-semibold text-gray-50 hover:text-white hover:bg-blue-200 transition-all'
              type='submit'
              disabled={isLoading}
            >
              send
              <UilMessage className='ml-3 inline-block' />
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Personality
