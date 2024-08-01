import { FC, useEffect, useState } from 'react'
import { toAbsoluteUrl } from '../../../_metronic/helpers'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../store/store"
import TempBar from '../home/components/icons/TempBar';
import PointerIcon from '../home/components/icons/PointerIcon';

type Props = {
    name?: string
    score?: string
    imageURL?: string
}

const ImageContainer2: FC<Props> = ({name, score, imageURL}) => {
    
    if (score && parseInt(score) < 26) {

        return (
            <div className='image-frame'>
                <div className='image-frame-name'>
                    {name}
                </div>
                <div className='image-container rounded-9'>
                    <img
                        src={imageURL}
                        alt=""
                        className="img-193-298"
                    />
    
                    <a
                        href="#"
                    >
                        <img alt='Logo' src={toAbsoluteUrl('media/minimalist/zoom.png')}
                            className="img-31-31" />
                    </a>
                </div>
                <div className='row g-0'>
                    <div><TempBar grading={'severe'}/></div>
                    <div>Severe</div>
                </div>
            </div>
        )
    } else if (score && parseInt(score) > 25 && parseInt(score) < 51) {
        return (
            <div className='image-frame'>
                <div className='image-frame-name'>
                    {name}
                </div>
                <div className='image-container rounded-9'>
                    <img
                        src={imageURL}
                        alt=""
                        className="img-193-298"
                    />
    
                    <a
                        href="#"
                    >
                        <img alt='Logo' src={toAbsoluteUrl('media/minimalist/zoom.png')}
                            className="img-31-31" />
                    </a>
                </div>
                <div className='row g-0'>
                    <div><TempBar grading={'trouble'}/></div>
                    <div>Trouble</div>
                </div>
            </div>
        )
    } else if (score && parseInt(score) > 50 && parseInt(score) < 76) {
        return (
            <div className='image-frame'>
                <div className='image-frame-name'>
                    {name}
                </div>
                <div className='image-container rounded-9'>
                    <img
                        src={imageURL}
                        alt=""
                        className="img-193-298"
                    />
    
                    <a
                        href="#"
                    >
                        <img alt='Logo' src={toAbsoluteUrl('media/minimalist/zoom.png')}
                            className="img-31-31" />
                    </a>
                </div>
                <div className='row g-0'>
                    <div><TempBar grading={'stable'}/></div>
                    <div>Stable</div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='image-frame'>
                <div className='image-frame-name'>
                    {name}
                </div>
                <div className='image-container rounded-9'>
                    <img
                        src={imageURL}
                        alt=""
                        className="img-193-298"
                    />
    
                    <a
                        href="#"
                    >
                        <img alt='Logo' src={toAbsoluteUrl('media/minimalist/zoom.png')}
                            className="img-31-31" />
                    </a>
                </div>
                <div className='row g-0'>
                        <div><TempBar grading={'optimal'}/></div>
                        <div>Optimal</div>
                    </div>
            </div>
        )
    }
}

export { ImageContainer2}