import { Avatar, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { stringAvatar } from '../../../reusables/utils'
const Products = () => {
  const navigate = useNavigate()
  const handleClick = (index) => {
    navigate(`/dashboard/products/${index}`)
  }

  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-2'>
        {Array.from(Array(6)).map((_, index) => (
          <div
            key={index}
            className='border col-span-1 border-gray-300 rounded-md py-4 px-2 flex items-center justify-between gap-2 cursor-pointer'
            onClick={() => handleClick(index)}
          >
            <div className=''>
              <Avatar {...stringAvatar('munch')} variant='rounded' />
            </div>
            <div className=''>
              <h1 className='font-semibold'>Beat Name</h1>
              <p className='text-sm text-gray-500 line-clamp-1'>
                Beat Description Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Repudiandae sed, asperiores porro aperiam
                provident corporis.
              </p>
            </div>
            <div className=''>
              <Button
                variant='outlined'
                color='primary'
                className='text-xs px-1 py-2'
              >
                Ksh. 100
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
