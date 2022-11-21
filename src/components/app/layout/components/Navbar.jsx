import { UilSearch, UilUser, UilBars, UilGlobe } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'
import DropMenu from '../../../../shared/components/DropMenu'

import Logo from '../../../../shared/components/Logo'

export const Navbar = () => {
  return (
    <nav className='w-full flex justify-between items-center mx-auto px-8 h-20'>
      <div className='inline-flex'>
        <Link to='/'>
          <Logo postion='relative' />
        </Link>
      </div>

      <div className='hidden sm:block flex-shrink flex-grow-0 justify-start px-2'>
        <div className='inline-block'>
          <div className='inline-flex items-center max-w-full'>
            <button
              className='flex items-center flex-grow-0 flex-shrink pl-2 relative w-60 border rounded-full px-1  py-1'
              type='button'
            >
              <div className='block flex-grow flex-shrink overflow-hidden'>
                Start your search
              </div>
              <div className='flex items-center justify-center relative  h-8 w-8 rounded-full'>
                <UilSearch />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className='flex-initial'>
        <div className='flex justify-end items-center relative'>
          <div className='flex mr-4 items-center'>
            <Link
              className='inline-block py-2 px-3 hover:bg-gray-200 rounded-full'
              to='/'
            >
              <div className='flex items-center relative cursor-pointer whitespace-nowrap'>
                Become a host
              </div>
            </Link>
            <div className='block relative'>
              <button
                type='button'
                className='inline-block py-2 px-3 hover:bg-gray-200 rounded-full relative '
              >
                <div className='flex items-center h-5'>
                  <UilGlobe />
                </div>
              </button>
            </div>
          </div>

          <div className='block'>
            <div className='inline relative'>
              <button
                type='button'
                className='flex items-center relative px-2 border rounded-full hover:shadow-lg hover:bg-white transition-all'
              >
                <div className='pl-1'>
                  <UilBars />
                </div>

                <div className='block flex-grow-0 flex-shrink-0 pl-5 py-2'>
                  <UilUser />
                </div>
              </button>
              <DropMenu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
