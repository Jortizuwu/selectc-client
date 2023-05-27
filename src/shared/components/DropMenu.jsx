import React from 'react'
import { ListRoutes } from '../../components/app/layout/components/ListRoutes'
import { modalAction } from '../../redux/features/ui/uiSlice'
import { removeUser } from '../../redux/features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { UilSignout, UilSignin } from '@iconscout/react-unicons'

const EXCLUDE_NAVIGATE = ['/']

const DropMenu = () => {
  const { currentUser } = useSelector((state) => state.user)
  const { isCollapse } = useSelector((state) => state.ui)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { pathname } = useLocation()

  const handleSignout = () => {
    dispatch(modalAction('Inicia sesión'))
  }

  const handleLogOut = () => {
    dispatch(removeUser())
    localStorage.clear()
    if (!EXCLUDE_NAVIGATE.includes(pathname)) navigate('/')
  }
  return (
    <div className="absolute md:hidden right-0 z-50">
      <ul className="flex flex-col justify-between rounded-lg bg-white p-2 shadow-lg w-full">
        <ListRoutes />
        <div className="flex items-center justify-between rounded-lg bg-white p-2 shadow-lg w-full mt-2">
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
                  className="hover:bg-slate-200 transition-all font-bold p-2 text-sm rounded-md"
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
  )
}

export default DropMenu
