import { FC, useEffect, useState } from 'react'
import { toAbsoluteUrl } from '../../../_metronic/helpers'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../store/store"

type Props = {
    name?: string
    score?: string
}

const ImageContainer2: FC<Props> = ({name, score}) => {
    const imageURL = useSelector((state: RootState) => state.imgSrc);

    useEffect(()=>{
        console.log(imageURL)
    })

    return (
        <div className='image-container mt-10 rounded-9'>
                    <img
                        src={imageURL?.image_src}
                        alt=""
                        className="img-193-298"
                    />

                    <a
                        href="#"
                    >
                        <img alt='Logo' src={toAbsoluteUrl('media/minimalist/zoom.png')}
                            className="img-31-31" />
                    </a>
                    <div className='row g-0'>
                        <div className='col py-0 px-4'>
                            <a
                                href="#"
                                className="btn fixed-height-button-1 rounded-0 d-flex align-items-center"
                            >
                                {name}
                            </a>
                        </div>
                        <div className='col py-0 px-0'>
                            <a
                                href="#"
                                className=" btn fixed-height-button-2 rounded-0 d-flex align-items-center"
                            >
                                {score}
                            </a>
                        </div>
                    </div>
                </div>
    )

}

export { ImageContainer2}