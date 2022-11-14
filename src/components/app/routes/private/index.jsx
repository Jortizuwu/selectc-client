import { lazy } from 'react'
import { Route } from 'react-router-dom'

const Settings = lazy(() => import('../../../pages/settings'))

export const PrivateRoutes = () => {
  return (
    <Route>
      <Route path='settings' element={<Settings />} />
    </Route>
  )
}
