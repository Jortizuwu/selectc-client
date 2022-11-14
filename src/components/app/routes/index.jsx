// import { useMutation } from '@apollo/client'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import { authUser } from '../../../redux/features/user/thunks'
// import { LOGIN_WITH_JWT } from '../../../shared/graphql/mutations'

const Layout = lazy(() => import('../layout'))
const Gbook = lazy(() => import('../../pages/gbook'))
const User = lazy(() => import('../../pages/user'))
const PageNotFound = lazy(() => import('../../pages/404'))

const App = () => {
  // const user = useSelector((state) => state.user)
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
            <Route index element={<Gbook />} />
            <Route path='user' element={<User />} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
