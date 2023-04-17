// import { useMutation } from '@apollo/client'
import React, { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom'

import { Loading } from '../../../shared/components/Loading'

const Layout = lazy(() => import('../layout'))
const Home = lazy(() => import('../../pages/home'))
const User = lazy(() => import('../../pages/user'))
const Results = lazy(() => import('../../pages/results'))
const Carrers = lazy(() => import('../../pages/careers'))
const Trending = lazy(() => import('../../pages/trending'))
const Carrer = lazy(() => import('../../pages/careers/components/Career'))
const Surveys = lazy(() => import('../../pages/surveys'))
const PageNotFound = lazy(() => import('../../pages/404'))
const Preferences = lazy(() =>
  import('../../pages/surveys/components/Preferences')
)
const Vocational = lazy(() =>
  import('../../pages/surveys/components/Vocational')
)
const PrivateRoute = () => {
  const { currentUser } = useSelector((state) => state.user)
  return currentUser ? <Outlet /> : <Navigate to="/" />
}

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="trending" element={<Trending />} />
            <Route element={<PrivateRoute />}>
              <Route path="surveys" element={<Surveys />} />
              <Route path="results" element={<Results />} />
              <Route path="careers" element={<Carrers />} />
              <Route path="careers/:id" element={<Carrer />} />
              <Route path="user/:uid" element={<User />} />
              <Route path="surveys/preferences" element={<Preferences />} />
              <Route path="surveys/vocational" element={<Vocational />} />
              <Route />
            </Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
