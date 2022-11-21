import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import {
  UilSetting,
  UilEstate,
  UilUser,
  UilSignout,
  UilSignin,
  UilClipboardAlt,
  UilFileGraph
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
    name: 'Surveys',
    icon: <UilFileGraph />,
    link: '/surveys'
  },
  {
    name: 'Vocational tests',
    icon: <UilClipboardAlt />,
    link: '/test'
  },
  {
    name: 'Settings',
    icon: <UilSetting />,
    link: '/settings'
  },
  {
    name: 'User',
    icon: <UilUser />,
    link: '/user',
    login: true
  }
]

const EXCLUDE_NAVIGATE = ['/test', '/', '/surveys']

export const Sidebar = () => {
  const { currentUser } = useSelector((state) => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { pathname } = useLocation()

  const handleSignout = () => {
    dispatch(modalAction())
  }

  const handleLogOut = () => {
    dispatch(removeUser())
    localStorage.removeItem('token')
    if (!EXCLUDE_NAVIGATE.includes(pathname)) navigate('/')
  }

  return (
    <div className='h-screen fixed z-20'>
      <aside className='w-64 h-full' aria-label='Sidebar'>
        <div className='px-3 py-4 shadow-md overflow-y-auto bg-white h-full'>
          <Logo />
          <ul className='space-y-2 relative h-full pt-16'>
            {NAVLINK_ROUTES.slice(
              0,
              currentUser ? NAVLINK_ROUTES.length : NAVLINK_ROUTES.length - 2
            ).map((val) => (
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
                  src='https://th.bing.com/th/id/R.56c43cbb520b6765ff4eb984fadf57b3?rik=HKOzBY9VwmQSQQ&pid=ImgRaw&r=0&sres=1&sresct=1'
                  alt='default'
                />

                <div className='ml-4'>
                  {currentUser && (
                    <h2 className='font-medium capitalize'>{`${currentUser?.name}`}</h2>
                  )}
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
