import { lazy } from 'react'
import { Route } from 'react-router-dom'

const User = lazy(() => import('../../../pages/user'))

export const PublicRoutes = () => {
  return (
    <Route>
      <Route path='user' element={<User />} />
    </Route>
  )
}
