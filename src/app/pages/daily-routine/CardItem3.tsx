
import { FC } from 'react'
import { KTIcon, toAbsoluteUrl } from '../../../_metronic/helpers'

type Props = {
  className: string
}

const CardItem3: FC<Props> = ({ className }) => {
  return (
    <div className='card-body pb-0'>
      <div className='mb-5'>
        <div  className='d-flex justify-content-center mb-5'>
          <img src={toAbsoluteUrl('media/stock/900x600/20.jpg')} className='img-276-248'/>
        </div>
        <div className='d-flex flex-grow-1'>
          <span className='text-center font-size-20'>
            Why  Treat 1 is good for Prime Concern
          </span>
        </div>
        <div className='mb-5 text-center font-size-14'>
          Salicylic acid works by penetrating the hair follicle and oil gland and dissolving the acne-causing blockages of dead skin cells, oil and other debris. It also works to reduce the amount of oil being produced by your oil glands.
        </div>
      </div>
    </div>
  )
}

export { CardItem3 }
