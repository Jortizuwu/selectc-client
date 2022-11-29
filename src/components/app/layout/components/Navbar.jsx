import { UilUser, UilBars, UilGlobe } from '@iconscout/react-unicons'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { dropMenuAction } from '../../../../redux/features/ui/uiSlice'
import DropMenu from '../../../../shared/components/DropMenu'

import Logo from '../../../../shared/components/Logo'

export const Navbar = () => {
  const { dropMenu } = useSelector((state) => state.ui)

  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const handelDropMenu = () => {
    dispatch(dropMenuAction())
  }

  useEffect(() => {
    dispatch(dropMenuAction())
  }, [pathname])

  return (
    <nav className='w-full flex justify-between items-center mx-auto p-3 md:px-8'>
      <div className='inline-flex'>
        <Link to='/'>
          <Logo postion='relative' />
        </Link>
      </div>

      <div className='flex-initial'>
        <div className='flex justify-end items-center relative'>
          <div className='md:flex mr-4 items-center hidden'>
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
                onClick={handelDropMenu}
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
              {dropMenu && <DropMenu />}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
