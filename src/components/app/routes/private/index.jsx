import { lazy } from 'react'
import { Route } from 'react-router-dom'

const Settings = lazy(() => import('../../../pages/settings'))
const User = lazy(() => import('../../../pages/user'))

export const PrivateRoutes = () => {
  return (
    <>
      <Route path='settings' element={<Settings />} />
      <Route path='user' element={<User />} />
    </>
  )
}
