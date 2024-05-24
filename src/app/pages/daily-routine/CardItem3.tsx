
import { FC } from 'react'
import { KTIcon, toAbsoluteUrl } from '../../../_metronic/helpers'

type Props = {
  className: string
}

const CardItem3: FC<Props> = ({ className }) => {
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
              Why  Treat 1 is good for Prime Concern
            </span>
          </div>
          <div className='text-gray-800 mb-5 text'>
              Salicylic acid works by penetrating the hair follicle and oil gland and dissolving the acne-causing blockages of dead skin cells, oil and other debris. It also works to reduce the amount of oil being produced by your oil glands.
          </div>
        </div>
      </div>
  )
}

export { CardItem3 }
