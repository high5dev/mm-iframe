import React from 'react'
import { KTIcon, toAbsoluteUrl } from '../../../_metronic/helpers'

type Props = {
    productIndex: string
    productName: string
    whenTouse: string
    price: string
}

const CardItem: React.FC<Props> = ({ productIndex, productName, whenTouse, price }) => {
    return (
        <>
            <div className='card-body item-card mb-3'>
                <span className='text-muted d-block fw-semibold'>{productIndex}</span>
                <div className='d-flex align-items-center'>                    
                    <div className='symbol symbol-50px me-5'>
                        <img src={toAbsoluteUrl('media/avatars/300-6.jpg')} className='' alt='' />
                    </div>
                    <div className='flex-grow-1'>
                        <span className='text-gray-900 fw-bold text-hover-primary fs-6'>
                            {productName}
                        </span>
                        <span className='text-muted d-block fw-semibold'>When to use: {whenTouse}</span>
                        <div className='row d-flex align-items-center'>
                            <span className='col text-muted d-block fw-semibold'>Price: {price}</span>
                            <button className='col btn btn-sm btn-bg-secondary rounded-10'>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { CardItem }
