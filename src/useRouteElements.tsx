import { useRoutes } from 'react-router-dom'
import path from './constant/path'
import RegisterLayout from './layouts/RegisterLayout'
import Login from './pages/login'
import TabPanel from 'src/layouts/TabPanel'
import Register from './pages/register'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: path.home,
      index: true,
      element: (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TabPanel />
        </LocalizationProvider>
      )
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
