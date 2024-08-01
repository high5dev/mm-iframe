
import { FC } from 'react'
import { KTIcon, toAbsoluteUrl } from '../../../_metronic/helpers'

type Props = {
  productIndex?: string
  productName?: string
  whenTouse?: string
  price?: string
  imageSrc?: string
  productLink?: string
}

const CardItem2: FC<Props> = ({ productIndex, productName, whenTouse, price, imageSrc, productLink }) => {
  return (
    <div className='pb-0 gray-background rounded-0'>
      <div className='mb-5'>        
        <div  className='d-flex justify-content-center mb-5 you-may-also-like-product-image-container'>
          <img src={imageSrc} className='you-may-also-like-product-image'/>
        </div>
        <div className='mb-1 text-center font-size-14'>
            {productName}
        </div>
        <div className='mb-5 text-center font-size-10'>
          Small descriptions will be appeared here
        </div>
        <div className='d-flex you-may-also-like-product-atc-container'>
          <span className='font-size-10'>Price:₹{price}</span>
          <a href={productLink} target='_blank' className='add-cart-button2 font-size-10 align-items-center text-center' style={{minWidth: "fit-content"}}>Add to Cart</a>
        </div>
      </div>
    </div>
  )
}

export { CardItem2 }
