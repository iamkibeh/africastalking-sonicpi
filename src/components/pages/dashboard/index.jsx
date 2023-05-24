import { Box } from '@mui/material'
import Products from './products/Products'

const DashboardHomePage = () => {
  return (
    <Box>
      <h1 className='font-semibold text-2xl mb-2'>Beats</h1>
      <Products />
    </Box>
  )
}

export default DashboardHomePage
