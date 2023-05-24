import { useParams } from 'react-router-dom'
import { Avatar } from '@mui/material'
import { stringAvatar } from '../../../reusables/utils'

const Product = () => {
  const { id } = useParams()

  return (
    <div>
      <p>This is product {id}</p>
      <div className='flex items-center gap-3'>
        <Avatar {...stringAvatar('Nobody')} variant='rounded' />
        <div className='mb-2'>
          <h1 className='text-2xl font-semibold'>
            Nobody, <span className='text-gray-600 text-xs'>sauti sol</span>
          </h1>
          {new Date(Date.now()).toLocaleString('en', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
      </div>
      {/* description here */}
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
        cumque explicabo, est voluptatum sint iste.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
        cumque explicabo, est voluptatum sint iste.
      </p>

      <div className='flex items-center gap-3'>
        <div className=''>
          <h1 className='text-xl font-semibold'>Ksh. 100</h1>
          <p className='text-xs text-gray-500'>per beat, non-exclusive</p>
        </div>
        <div className=''>
          <button className='bg-indigo-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition min-w-[5rem]'>
            Buy
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product
