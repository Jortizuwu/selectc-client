import React from 'react'

import { UilEdit, UilEnvelope } from '@iconscout/react-unicons'
import { useSelector } from 'react-redux'

export const Form = () => {
  const { currentUser } = useSelector((state) => state.user)

  return (
    <form>
      <div className='mb-10'>
        <div className='rounded relative mt-8 h-48'>
          <img
            src='https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/11/Hitori-Bocchi-the-Rock.jpg'
            alt=''
            className='w-full h-full object-cover rounded absolute shadow'
          />
          <div className='absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded' />
          <div className='flex items-center px-3 py-2 rounded absolute right-0 mr-4 mt-4 cursor-pointer'>
            <p className='text-xs text-white'>Change Cover Photo</p>
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
              <UilEdit className='text-white' />
              <p className='text-xs '>Edit Picture</p>
            </div>
          </div>
        </div>
      </div>

      <div className=''>
        <div className='pt-1'>
          <div className='container'>
            <form className=''>
              <h2 className='mb-4 capitalize font-bold'>personal info</h2>
              <div className='flex space-x-4 '>
                <div className='xl:w-1/4  lg:w-1/2 md:w-1/2 flex flex-col mb-6'>
                  <label className='pb-2 text-sm font-bold text-gray-800 '>
                    First Name
                  </label>
                  <input
                    value={currentUser?.name}
                    type='text'
                    className='border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500'
                    placeholder='First name'
                  />
                </div>
                <div className='xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6'>
                  <label className='pb-2 text-sm font-bold text-gray-800 '>
                    Last Name
                  </label>
                  <input
                    value={currentUser?.lastName}
                    type='text'
                    className='border bg-white border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 '
                    placeholder='Last name'
                  />
                </div>
              </div>
              <div className='xl:w-1/4 lg:w-full md:w-1/2 flex flex-col mb-6'>
                <label
                  for='Email'
                  className='pb-2 text-sm font-bold text-gray-800 dark:'
                >
                  Email
                </label>
                <div className='border border-green-400 shadow-sm rounded flex'>
                  <div className='focus:outline-none px-4 py-3 dark: flex items-center border-r border-green-400'>
                    <UilEnvelope />
                  </div>
                  <input
                    value={currentUser?.email}
                    type='email'
                    className='pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent '
                    placeholder='example@gmail.com'
                  />
                </div>
              </div>
              <div className='flex space-x-4'>
                <div className='xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6'>
                  <label className='pb-2 text-sm font-bold text-gray-800 dark:'>
                    Age
                  </label>
                  <input
                    type='text'
                    value={currentUser?.age}
                    className='border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 '
                    placeholder='Age'
                  />
                </div>
                <div className='xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6'>
                  <label className='pb-2 text-sm font-bold text-gray-800 dark:'>
                    Gender
                  </label>
                  <div className='border border-gray-300 dark:border-gray-700 shadow-sm rounded flex'>
                    <input
                      type='text'
                      value={currentUser?.gender}
                      className='pl-3 py-3 w-full text-sm focus:outline-none border border-transparent focus:border-indigo-700 bg-transparent rounded placeholder-gray-500 '
                      placeholder='a'
                    />
                  </div>
                </div>
                <div className='xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6'>
                  <label
                    for='City'
                    className='pb-2 text-sm font-bold text-gray-800 dark:'
                  >
                    Income
                  </label>
                  <div className='border border-gray-300 dark:border-gray-700 shadow-sm rounded flex'>
                    <input
                      type='text'
                      className='pl-3 py-3 w-full text-sm focus:outline-none border border-transparent focus:border-indigo-700 bg-transparent rounded placeholder-gray-500 '
                      placeholder='110.000'
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </form>
  )
}
