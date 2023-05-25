import { useRoutes } from 'react-router-dom'
import { routesConfig } from './components/reusables/routesConfig'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAsync } from './redux/features/authActions'

function App() {
  const routes = useRoutes(routesConfig)
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)

  // dispatch an action to the store to get the user's data from the database
  useEffect(() => {
    dispatch(getUserAsync())
  }, [dispatch])

  console.log('this is our user from redux =>', user)

  return <>{routes}</>
}

export default App
