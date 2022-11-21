// import { useMutation } from '@apollo/client'
import { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import { authUser } from '../../../redux/features/user/thunks'
// import { LOGIN_WITH_JWT } from '../../../shared/graphql/mutations'

const Layout = lazy(() => import('../layout'))
const Home = lazy(() => import('../../pages/home'))
const User = lazy(() => import('../../pages/user'))
const Settings = lazy(() => import('../../pages/settings'))
const Surveys = lazy(() => import('../../pages/surveys'))
const Tests = lazy(() => import('../../pages/tests'))
const PageNotFound = lazy(() => import('../../pages/404'))

const App = () => {
  const { currentUser } = useSelector((state) => state.user)
  // const dispatch = useDispatch()

  // const [login, { data, loading, error }] = useMutation(LOGIN_WITH_JWT)

  // useEffect(() => {
  //   dispatch(authUser())
  // }, [dispatch])

  return (
    <BrowserRouter>
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='surveys' element={<Surveys />} />
            <Route path='test' element={<Tests />} />
            {currentUser && (
              <>
                <Route path='settings' element={<Settings />} />
                <Route path='user' element={<User />} />
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
