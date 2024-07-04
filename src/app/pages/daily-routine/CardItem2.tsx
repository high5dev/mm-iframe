
import { FC } from 'react'
import { KTIcon, toAbsoluteUrl } from '../../../_metronic/helpers'

type Props = {
  productIndex?: string
  productName: string
  whenTouse?: string
  price: string
  imageSrc: string
}

const CardItem2: FC<Props> = ({ productIndex, productName, whenTouse, price, imageSrc }) => {
  return (
    <div className='pb-0 gray-background rounded-0'>
      <div className='mb-5'>        
        <div  className='d-flex justify-content-center mb-5'>
          <img src={imageSrc} className='img-138-154'/>
        </div>
        <div className='mb-1 text-center font-size-14'>
            {productName}
        </div>
        <div className='mb-5 text-center font-size-10'>
          Small descriptions will be appeared here
        </div>
        <div className='d-flex justify-content-around'>
          <span className='font-size-10'>Price: {price}</span>
          <button className='add-cart-button2 font-size-10 ' style={{minWidth: "fit-content"}}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export { CardItem2 }
