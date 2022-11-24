import React from 'react'

const YesOrNot = ({ register, radioID }) => {
  return (
    <div className='flex justify-end w-full space-x-7'>
      <input
        type='radio'
        name={radioID}
        id={radioID}
        {...register(radioID)}
        className='h-5 w-5 form-check-input appearance-none rounded-full border border-gray-300 bg-white checked:bg-blue-400 checked:border-blue-400 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
        value='Yes'
      />
      <input
        type='radio'
        name={radioID}
        id={radioID}
        {...register(radioID)}
        className='h-5 w-5 form-check-input appearance-none rounded-full border border-gray-300 bg-white checked:bg-blue-400 checked:border-blue-400 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
        value='Not'
      />
    </div>
  )
}

const FiveOptions = ({ register, radioID }) => {
  return (
    <>
      <input
        type='radio'
        name={radioID}
        id={radioID}
        {...register(radioID)}
        className='h-5 w-5 form-check-input appearance-none rounded-full border border-gray-300 bg-white checked:bg-blue-400 checked:border-blue-400 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
        value='Total descuerdo'
      />
      <input
        type='radio'
        name={radioID}
        id={radioID}
        {...register(radioID)}
        className='h-5 w-5 form-check-input appearance-none rounded-full border border-gray-300 bg-white checked:bg-blue-400 checked:border-blue-400 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
        value='Desacuerdo'
      />
      <input
        type='radio'
        name={radioID}
        id={radioID}
        {...register(radioID)}
        className='h-5 w-5 form-check-input appearance-none rounded-full border border-gray-300 bg-white checked:bg-blue-400 checked:border-blue-400 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
        value='No está seguro'
      />
      <input
        type='radio'
        name={radioID}
        id={radioID}
        {...register(radioID)}
        className='h-5 w-5 form-check-input appearance-none rounded-full border border-gray-300 bg-white checked:bg-blue-400 checked:border-blue-400 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
        value='De acuerdo'
      />
      <input
        type='radio'
        name={radioID}
        id={radioID}
        {...register(radioID)}
        className='h-5 w-5 form-check-input appearance-none rounded-full border border-gray-300 bg-white checked:bg-blue-400 checked:border-blue-400 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
        value='Total acuerdo'
      />
    </>
  )
}

export const Answer = ({ answer, register, radioID, yesornot = false }) => {
  return (
    <div className='mb-5 grid grid-cols-3'>
      <label
        className={`mb-3  ${
          yesornot ? 'col-span-2' : 'col-span-1'
        }  block text-base font-medium text-[#07074D]`}
      >
        {answer}
      </label>
      <div
        className={`${
          yesornot ? 'col-span-1' : 'col-span-2'
        }  flex items-center justify-between space-x-1`}
      >
        {yesornot
          ? (
            <YesOrNot radioID={radioID} register={register} />
            )
          : (
            <FiveOptions radioID={radioID} register={register} />
            )}
      </div>
    </div>
  )
}
