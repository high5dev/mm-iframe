
import { FC } from 'react'
import { KTIcon, toAbsoluteUrl } from '../../../_metronic/helpers'

type Props = {
  className: string
}

const CardItem2: FC<Props> = ({ className }) => {
  return (
    <div className='pb-0 gray-background rounded-0'>
      <div className='mb-5'>        
        <div  className='d-flex justify-content-center mb-5'>
          <img src={toAbsoluteUrl('media/stock/900x600/20.jpg')} className='img-138-154'/>
        </div>
        <div className='mb-1 text-center font-size-14'>
            Product name
        </div>
        <div className='mb-5 text-center font-size-10'>
          Small descriptions will be appeared here
        </div>
        <div className='d-flex justify-content-around'>
          <span className='font-size-10'>Price: </span>
          <button className='add-cart-button2 font-size-10 ' style={{minWidth: "fit-content"}}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export { CardItem2 }
