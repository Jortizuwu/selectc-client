import { NavLink } from 'react-router-dom'
import {
  UilSetting,
  UilEstate,
  UilUser,
  UilBookOpen,
  UilSignout,
  UilSignin
} from '@iconscout/react-unicons'
import { useDispatch, useSelector } from 'react-redux'

import Logo from '../../../../shared/components/Logo'
import { modalAction } from '../../../../redux/features/ui/uiSlice'
import { removeUser } from '../../../../redux/features/user/userSlice'

const NAVLINK_ROUTES = [
  {
    name: 'Home',
    icon: <UilEstate />,
    link: '/'
  },
  {
    name: 'User',
    icon: <UilUser />,
    link: '/user'
  },
  {
    name: 'Settings',
    icon: <UilSetting />,
    link: '/settings'
  },
  {
    name: 'Book',
    icon: <UilBookOpen />,
    link: '/book'
  }
]

export const Sidebar = () => {
  const { currentUser } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const handleSignout = () => {
    dispatch(modalAction())
  }

  const handleLogOut = () => {
    dispatch(removeUser())
    localStorage.removeItem('token')
  }

  return (
    <div className='h-screen'>
      <aside className='w-64 h-full' aria-label='Sidebar'>
        <div className='px-3 py-4 shadow-md overflow-y-auto bg-white h-full'>
          <Logo />
          <ul className='space-y-2 relative h-full pt-16'>
            {NAVLINK_ROUTES.map((val) => (
              <li key={val.name}>
                <NavLink
                  to={val.link}
                  className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 '
                  style={({ isActive }) =>
                    isActive ? { backgroundColor: '#f3f4f6' } : undefined}
                >
                  {val.icon}
                  <span className='ml-3 font-medium'>{val.name}</span>
                </NavLink>
              </li>
            ))}

            <div className='flex items-center justify-between rounded-lg bg-white p-4 shadow-md w-full absolute bottom-0'>
              <div className='flex'>
                <img
                  className='h-10 w-10 rounded-full'
                  src='https://i.ytimg.com/vi/bg7rJgjnML0/hqdefault.jpg'
                  alt='makima'
                />

                <div className='ml-4'>
                  <h2 className='font-medium'>{currentUser?.nickName}</h2>
                </div>
              </div>
              <section className='flex h-10 w-11 items-center justify-center'>
                {currentUser
                  ? (
                    <button onClick={handleLogOut}>
                      <UilSignout className='text-red-500 hover:cursor-pointer' />
                    </button>
                    )
                  : (
                    <button onClick={handleSignout}>
                      <UilSignin className='text-blue-400' />
                    </button>
                    )}
              </section>
            </div>
          </ul>
        </div>
      </aside>
    </div>
  )
}
