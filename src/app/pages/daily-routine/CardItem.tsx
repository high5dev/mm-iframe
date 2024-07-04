import React from 'react'
import { KTIcon, toAbsoluteUrl } from '../../../_metronic/helpers'

type Props = {
    productIndex: string
    productName: string
    whenTouse: string
    price: string
    imageSrc: string
    productLink: string
}

const CardItem: React.FC<Props> = ({ productIndex, productName, whenTouse, price, imageSrc, productLink }) => {
    return (
        <>
            <span className='d-block font-size-18 ml-18'>{productIndex}</span>
            <div className='item-card mb-5 p-1'>
                <div className='d-flex'>                    
                    <div className='symbol symbol-50px me-2'>
                        <img src={imageSrc} className='img-product' />
                    </div>
                    <div className='font-size-14 w-100 d-flex row'>
                        <div>
                            <span className='text-hover-primary'>
                                {productName}
                            </span>
                            <span className='d-block'>When to use: {whenTouse}</span>
                        </div>
                        <div className='row d-flex align-items-center align-self-end'>
                            <div className='d-block' style={{maxWidth: "fit-content"}}>Price: ₹{price}</div>
                            <a href={productLink} target='_blank' className='add-cart-button rounded-10 align-items-center pt-0 px-50' style={{minWidth: "fit-content"}}>Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { CardItem }
