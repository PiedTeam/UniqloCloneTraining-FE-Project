import { useRoutes } from 'react-router-dom'
import path from './constant/path'
import RegisterLayout from './layouts/RegisterLayout'
import Login from './pages/login'
import TabPanel from 'src/components/TabPanel'
import Register from './pages/register'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: path.home,
      index: true,
      element: <TabPanel />
    },
    {
      path: path.login,
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: path.register,
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    }
  ])
  return routeElements
}
