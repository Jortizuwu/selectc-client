import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Answer } from './Answer'
import { schema, UseDefaultValues } from './utils/preferences'
import { UilMessage, UilCapsule } from '@iconscout/react-unicons'

const RADIO_IDS = [
  {
    answer: 'Me gusta construir, arreglar, montar herramientas, objetos',
    id: 'answer1'
  },
  {
    answer:
      'Me gustaria dedicarme a la enseñanza de niños y niñas, jóvenes, adultos',
    id: 'answer2'
  },
  {
    answer:
      'Considero is economía un aspecto muy importante para la vida y para la sociedad',
    id: 'answer3'
  },
  {
    answer: 'Me gustaria aprender a tocar un instrumento musical',
    id: 'answer4'
  },
  {
    answer: 'Me apuntaria a visitar el museo de la ciencia',
    id: 'answer5'
  },
  {
    answer: 'Colaboraria en campañas destinadas a ayudara personas marginadas',
    id: 'answer6'
  },
  {
    answer: 'Dirginia un negocio propio: tiends, restaurante, etc',
    id: 'answer7'
  },
  {
    answer: 'Me gusta el mismo tipo y ritmo de trabajo cada día',
    id: 'answer8'
  },
  {
    answer:
      ' Me gustaria intentar arreglar los pequeños electrodomésticos que se estropean en casa',
    id: 'answer9'
  },
  {
    answer: 'Me gusta analizar el porqué de las cosas',
    id: 'answer10'
  },
  {
    answer: 'Me gustarís estudiar la flors y la fauna de diferentes lugares',
    id: 'answer11'
  },
  {
    answer: 'Me gustaría formar parte de una compañía de teatro',
    id: 'answer12'
  },
  {
    answer:
      ' Me interesaria un trabajo en el que tuviera un contacto con la gente',
    id: 'answer13'
  },
  {
    answer:
      'Me gustaria seleccionary dirigir a los trabajadores de una empresa.',
    id: 'answer14'
  },
  {
    answer: 'Trabajaris en un taller mecánico',
    id: 'answer15'
  },
  {
    answer: 'Me interesan las actividades que se realizan en el mar.',
    id: 'answer16'
  },
  {
    answer:
      'Me lo pasaría bien recibiendo mensajes telefónicos en una oficina.',
    id: 'answer17'
  },
  {
    answer: 'Me gustaria encargamme de una caja registradors.',
    id: 'answer18'
  }
]

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

  return (
    <>
      <h2 className='font-bold capitalize text-xl'>
        Preferences <UilCapsule className='inline-block' />
      </h2>
      <div className='mt-4 bg-white py-4 px-7 rounded-xl shadow-xl'>
        <div className='flex space-x-4 justify-end mb-4'>
          <span className='uppercase text-sm font-bold'>Yes</span>
          <span className='uppercase text-sm font-bold'>Not</span>
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
              yesornot
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

export default Preferences
