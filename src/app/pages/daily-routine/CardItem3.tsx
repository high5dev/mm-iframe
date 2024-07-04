
import { FC } from 'react'
import { KTIcon, toAbsoluteUrl } from '../../../_metronic/helpers'

type Props = {
  productIndex?: string
  productName: string
  concern: string
  imageSrc: string
}

const CardItem3: FC<Props> = ({ productIndex, productName, concern, imageSrc  }) => {
  return (
    <div className='card-body pb-0'>
      <div className='mb-5'>
        <div  className='d-flex justify-content-center mb-5'>
          <img src={imageSrc} className='img-276-248'/>
        </div>
        <div className='d-flex flex-grow-1'>
          <span className='text-center font-size-20'>
            Why  {productName} is good for {concern}
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
