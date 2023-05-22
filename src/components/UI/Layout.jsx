import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

// /* eslint-disable react/prop-types */
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
