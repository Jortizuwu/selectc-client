import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { UilSignout, UilSignin } from '@iconscout/react-unicons'
import { useDispatch, useSelector } from 'react-redux'

import Logo from '../../../../shared/components/Logo'
import {
  handleHoverEnter,
  handleHoverLeave,
  modalAction,
} from '../../../../redux/features/ui/uiSlice'
import { removeUser } from '../../../../redux/features/user/userSlice'
import { ListRoutes } from './ListRoutes'

const EXCLUDE_NAVIGATE = ['/']

export const Sidebar = () => {
  const { currentUser } = useSelector((state) => state.user)
  const { isCollapse } = useSelector((state) => state.ui)
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
  // useEffect(() => {
  //   if (isOpenSidebar) {
  //     onCloseSidebar()
  //   }
  // }, [pathname])

  const hoverEnter = () => dispatch(handleHoverEnter())

  const hoverLeave = () => dispatch(handleHoverLeave())

  return (
    <div className="h-screen hidden md:block fixed z-20">
      <aside
        onMouseEnter={hoverEnter}
        onMouseLeave={hoverLeave}
        style={{ width: isCollapse ? '16rem' : '4rem' }}
        className="h-full transition-all"
        aria-label="Sidebar"
      >
        <div className="px-3 py-4 shadow-md overflow-y-auto bg-white h-full">
          <Logo />

          <ul className="space-y-2 relative h-full pt-16">
            <ListRoutes />

            <div className="flex items-center justify-between rounded-lg bg-white p-2 shadow-md w-full absolute bottom-0">
              {isCollapse ? (
                <React.Fragment>
                  <div className="flex flex-col justify-center items-center">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://th.bing.com/th/id/R.56c43cbb520b6765ff4eb984fadf57b3?rik=HKOzBY9VwmQSQQ&pid=ImgRaw&r=0&sres=1&sresct=1"
                      alt="default"
                    />

                    {currentUser && (
                      <h2 className="font-medium capitalize mt-1">{`${currentUser?.name}`}</h2>
                    )}
                  </div>
                  <section className="flex items-center justify-center">
                    <button
                      onClick={currentUser ? handleLogOut : handleSignout}
                      className="hover:bg-red-200  hover:text-white transition-all font-bold p-2 text-sm rounded-md"
                    >
                      {currentUser ? (
                        <React.Fragment>
                          Cerrar sesión
                          <UilSignout className="text-red-500 hover:cursor-pointer inline-block ml-2" />
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          Iniciar sesión
                          <UilSignin className="text-green-400 hover:cursor-pointer inline-block ml-2" />
                        </React.Fragment>
                      )}
                    </button>
                  </section>
                </React.Fragment>
              ) : (
                <button onClick={currentUser ? handleLogOut : handleSignout}>
                  {currentUser ? (
                    <UilSignout className="text-red-500 hover:cursor-pointer inline-block" />
                  ) : (
                    <UilSignin className="text-green-400 hover:cursor-pointer inline-block" />
                  )}
                </button>
              )}
            </div>
          </ul>
        </div>
      </aside>
    </div>
  )
}
