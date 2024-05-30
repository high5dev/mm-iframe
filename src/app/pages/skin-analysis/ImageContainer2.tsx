import { FC, useEffect, useState } from 'react'
import { toAbsoluteUrl } from '../../../_metronic/helpers'

const ImageContainer2: FC = () => {

    return (
        <div className='image-container mt-10 rounded-9'>
                    <img
                        src={toAbsoluteUrl('media/stock/600x400/img-2.jpg')}
                        alt=""
                        className="img-193-298"
                    />

                    <a
                        href="/daily-routine"
                    >
                        <img alt='Logo' src={toAbsoluteUrl('media/minimalist/zoom.png')}
                            className="img-31-31" />
                    </a>
                    <div className='row g-0'>
                        <div className='col py-0 px-4'>
                            <a
                                href="/daily-routine"
                                className="btn fixed-height-button-1 rounded-0 d-flex align-items-center"
                            >
                                Concern
                            </a>
                        </div>
                        <div className='col py-0 px-0'>
                            <a
                                href="/daily-routine"
                                className=" btn fixed-height-button-2 rounded-0 d-flex align-items-center"
                            >
                                Lowest Score
                            </a>
                        </div>
                    </div>
                </div>
    )

}

export { ImageContainer2}