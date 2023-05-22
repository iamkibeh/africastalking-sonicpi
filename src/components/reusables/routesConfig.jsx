import About from '../UI/About'
import HomePage from '../UI/HomePage'
import SignUp from '../pages/SignUp'
import DashboardLayout from '../pages/dashboard/DashboardLayout'
import DashboardHomePage from '../pages/dashboard'
import Layout from '../UI/Layout'
import Login from '../pages/Login'
import Products from '../pages/dashboard/Products'
import DashboardSettings from '../pages/dashboard/Settings'

export const routesConfig = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <About /> },
      { path: '*', element: <h1>Not Found</h1> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '',
        element: <DashboardHomePage />,
      },
      { path: 'products', element: <Products /> },
      { path: 'settings', element: <DashboardSettings /> },
    ],
  },
]
