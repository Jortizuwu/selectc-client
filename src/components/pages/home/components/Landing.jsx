import React from 'react'
import { useDispatch } from 'react-redux'
import { modalAction } from '../../../../redux/features/ui/uiSlice'

export const Landing = () => {
  const dispatch = useDispatch()

  const handleCloseModal = () => {
    dispatch(modalAction())
  }

  return (
    <>
      <div className='mx-auto text-center mb-4'>
        <div className='mx-auto max-w-lg'>
          <h1 className='text-3xl font-bold lg:text-4xl'>
            You don't know what career to study?
          </h1>
          <p className='mt-6 text-center '>
            Selectc is here to help, SELECTC is a web application that will help
            you choose the career you should study, this based on your
            preferences, market trends and many more things, do not hesitate to
            register now
          </p>
          <button
            onClick={handleCloseModal}
            className='mt-6 rounded-lg bg-blue-600 px-6 py-2.5 text-center text-sm font-medium capitalize leading-5 text-white hover:bg-blue-500 focus:outline-none lg:mx-0 lg:w-auto'
          >
            Sing in now
          </button>
        </div>
        <div className='mt-10 flex justify-center'>
          <img
            className='h-96 w-full rounded-xl shadow-md object-cover lg:w-4/5'
            src='https://th.bing.com/th/id/R.deaa07f0b5b0dae0cbad41f3721b7e18?rik=pSPMjCiBa1fFBQ&riu=http%3a%2f%2fyoyvocacional.com%2fBlog%2fimage.axd%3fpicture%3d%2fwse-fb.jpg&ehk=unbKiRlPh8kRj%2fNWsNPshlUn9Zsiitt6xh62juH8XVs%3d&risl=&pid=ImgRaw&r=0'
          />
        </div>
      </div>
    </>
  )
}
