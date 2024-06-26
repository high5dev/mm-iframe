import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import './styles.scss'
import { ImageContainer2 } from './ImageContainer2'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../store/store"

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.,
        partialVisibilityGutter: 40
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2,
        partialVisibilityGutter: 40 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
        partialVisibilityGutter: 40 // optional, default to 1.
    }
};


const SkinAnalysisWrapper = () => {
    const score = useSelector((state: RootState) => state.score);
    const customer = useSelector((state:RootState) => state.user)

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/take-selfie', { replace: true });
    };

    const handleForward = () => {
        navigate('/daily-routine', { replace: true });
    };

    const intl = useIntl()
    return (
        <>
            {/* <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle> */}
            <PageTitle breadcrumbs={[]}>Skin Analysis</PageTitle>

            <div className=''>
                <div className='d-flex align-items-center margin-top-65 font-size-25 margin-left-20'>
                    Skin Analysis
                </div>
            </div>
            <div className=''>
                <div className='card-319-90 d-flex'>
                    <div className='row align-items-center justify-content-center font-size-18 px-7'>
                        <span>Age: {score.age}</span>
                        <span>Eyes Age: {score.skinTone}</span>
                        <span>Skin tone:{score.eyeAge}</span>
                    </div>
                </div>
            </div>
            <div className=''>
                <div>
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        centerMode={false}
                        responsive={responsive}
                        focusOnSelect
                        infinite={true}
                        autoPlay={false}
                        autoPlaySpeed={10000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        partialVisible={true}
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        rewind={true}
                        itemClass="carousel-item-padding-10-px d-flex justify-content-start carousel-item-width-220-px"
                    >
                        <div className=''>
                            <ImageContainer2 imageURL={customer?.imageURL} score={score.acne} name='Acne' />
                        </div >
                        <div className=''>
                            <ImageContainer2 imageURL={customer?.imageURL} score={score.hydration} name='Hydration' />
                        </div>
                        <div className=''>
                            <ImageContainer2 imageURL={customer?.imageURL} score={score.lines} name='Lines' />
                        </div>
                        <div className=''>
                            <ImageContainer2 imageURL={customer?.imageURL} score={score.eyeBags} name='Eye bags' />
                        </div >
                        <div className=''>
                            <ImageContainer2 imageURL={customer?.imageURL} score={score.pigmentation} name='Pigmentation' />
                        </div>
                        <div className=''>
                            <ImageContainer2 imageURL={customer?.imageURL} score={score.pores} name='Pores' />
                        </div>
                        <div className=''>
                            <ImageContainer2 imageURL={customer?.imageURL} score={score.redness} name='Redness' />
                        </div >
                        <div className=''>
                            <ImageContainer2 imageURL={customer?.imageURL} score={score.translucency} name='Translucency' />
                        </div>
                        <div className=''>
                            <ImageContainer2 imageURL={customer?.imageURL} score={score.uniformness} name='Uniformness' />
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className=''>
                <div className='row button-alignment justify-content-center pt-15 mb-5'>
                    <button
                        onClick={handleForward}
                        className="btn btn-lg btn-primary align-items-center w-203 rounded-0"
                    >
                        <span className='indicator-label font-size-20'>Your Routine
                        </span>

                    </button>
                </div>
                <div className='mt-10 row button-alignment justify-content-center mb-15'>
                    <button
                        onClick={handleBack}
                        className="btn-next-md align-items-center"
                    >
                        <span className='indicator-label font-size-20 text-center line-height-24'>Retake Photo</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export { SkinAnalysisWrapper }
