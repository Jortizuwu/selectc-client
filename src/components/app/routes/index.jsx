// import { useMutation } from '@apollo/client'
import { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Loading } from '../../../shared/components/Loading'

const Layout = lazy(() => import('../layout'))
const Home = lazy(() => import('../../pages/home'))
const User = lazy(() => import('../../pages/user'))
const Settings = lazy(() => import('../../pages/settings'))
const Surveys = lazy(() => import('../../pages/surveys'))
const PageNotFound = lazy(() => import('../../pages/404'))
const Personality = lazy(() =>
  import('../../pages/surveys/components/Personality')
)
const Preferences = lazy(() =>
  import('../../pages/surveys/components/Preferences')
)
const Vocational = lazy(() =>
  import('../../pages/surveys/components/Vocational')
)

const App = () => {
  const { currentUser } = useSelector((state) => state.user)
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />

            {currentUser && (
              <>
                <Route path='surveys' element={<Surveys />} />
                <Route path='settings' element={<Settings />} />
                <Route path='user/:uid' element={<User />} />
                <Route path='surveys/personality' element={<Personality />} />
                <Route path='surveys/preferences' element={<Preferences />} />
                <Route path='surveys/vocational' element={<Vocational />} />
              </>
            )}
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
