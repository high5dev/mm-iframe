
import { FC } from 'react'
import { KTIcon, toAbsoluteUrl } from '../../../_metronic/helpers'

type Props = {
  className: string
}

const CardItem2: FC<Props> = ({ className }) => {
  return (
    <div className='card-body pb-0'>
      <div className='mb-5'>
        <div
          className='bgi-no-repeat bgi-size-cover rounded h-250px mb-5'
          style={{
            backgroundImage: `url('${toAbsoluteUrl('media/stock/900x600/20.jpg')}')`,
          }}
        ></div>
        <div className='separator mb-4'></div>
        <div className='d-flex flex-grow-1'>
          <span className='text-gray-900 fw-bold text-center fs-6'>
            Product name
          </span>
        </div>
        <div className='text-gray-800 mb-5 text'>
          Small descriptions will be appeared here
        </div>
        <div className='row d-flex align-items-center'>
          <span className='col text-muted d-block fw-semibold'>Price: </span>
          <button className='col btn btn-sm btn-light btn-color-muted btn-active-light-danger rounded-10'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export { CardItem2 }
