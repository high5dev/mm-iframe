import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import './styles.scss'
import { ImageContainer2 } from './ImageContainer2'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import { useSelector } from 'react-redux';
import { RootState } from "../../store/store";
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LeftArrow from '../home/components/icons/LeftArrow';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 3 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.,
        partialVisibilityGutter: 40
    },
    tablet: {
        breakpoint: { max: 2, min: 1 },
        items: 2,
        slidesToSlide: 2,
        partialVisibilityGutter: 40 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 1, min: 0 },
        items: 1,
        slidesToSlide: 1,
        partialVisibilityGutter: 40 // optional, default to 1.
    }
};


const SkinAnalysisWrapper = () => {
    const score = useSelector((state: RootState) => state.score);
    const customer = useSelector((state: RootState) => state.user)

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/take-selfie', { replace: true });
    };

    const handleForward = () => {
        navigate('/daily-routine', { replace: true });
    };

    const getConcernKeyValue = (concern: Record<string, number>): [string, number] => {
        const key = Object.keys(concern)[0];
        const value = concern[key];
        return [key, value];
    };

    const [primaryConcernKey, primaryConcernValue] = getConcernKeyValue(score.primaryConcern);
    const [secondaryConcernKey, secondaryConcernValue] = getConcernKeyValue(score.secondaryConcern);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1.75,
        slidesToScroll: 1,
    };

    const intl = useIntl()
    return (
        <>
            {/* <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle> */}
            <PageTitle breadcrumbs={[]}>Skin Analysis</PageTitle>

            <div className=''>
                <div className='d-flex align-items-center margin-top-65 font-size-25' style={{ marginBottom: '7px' }}>
                    Skin Analysis
                </div>
            </div>
            <div className='' style={{ marginBottom: '24px' }}>
                <div className='d-flex analysis-table-container'>
                    <div className='analysis-top-row-container'>
                        <div>{score.eyeAge}<br /><span>Eye Age</span></div>
                        <div>{score.age}<br /><span>Perceived Age</span></div>
                        <div>{score.skinTone}<br /><span>Skintone</span></div>
                    </div>
                    <div className='analysis-bottom-row-container'>
                        <div>{primaryConcernKey}<br /><span>Primary Concern</span></div>
                        <div>{secondaryConcernKey}<br /><span>Secondary Concern</span></div>
                    </div>
                </div>
            </div>
            <div className=''>
                <div>
                    {/*
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        centerMode={false}
                        responsive={responsive}
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
                            <ImageContainer2 imageURL={customer?.imageURL} score={score.pigmentation} name='Pigmentation' />
                        </div>
                        <div className=''>
                            <ImageContainer2 imageURL={customer?.imageURL} score={score.hydration} name='Hydration' />
                        </div>
                        <div className=''>
                            <ImageContainer2 imageURL={customer?.imageURL} score={score.lines} name='Lines' />
                        </div>
                        <div className=''>
                            <ImageContainer2 imageURL={customer?.imageURL} score={score.eyeBags} name='Dark Circles' />
                        </div >
                        <div className=''>
                            <ImageContainer2 imageURL={customer?.imageURL} score={score.pores} name='Pores' />
                        </div>
                        <div className=''>
                            <ImageContainer2 imageURL={customer?.imageURL} score={score.redness} name='Redness' />
                        </div >
                        <div className=''>
                            <ImageContainer2 imageURL={customer?.imageURL} score={score.uniformness} name='Uniformness' />
                        </div>
                    </Carousel>
    */}
                    <Slider {...settings}>
                        <div className='image-slide'>
                            <ImageContainer2 imageURL={customer?.imageURL} score={score.acne} name='Acne' />
                        </div >
                        <div className='image-slide'>
                            <ImageContainer2 imageURL={customer?.imageURL} score={score.pigmentation} name='Pigmentation' />
                        </div>
                        <div className='image-slide'>
                            <ImageContainer2 imageURL={customer?.imageURL} score={score.hydration} name='Hydration' />
                        </div>
                        <div className='image-slide'>
                            <ImageContainer2 imageURL={customer?.imageURL} score={score.lines} name='Lines' />
                        </div>
                        <div className='image-slide'>
                            <ImageContainer2 imageURL={customer?.imageURL} score={score.eyeBags} name='Dark Circles' />
                        </div >
                        <div className='image-slide'>
                            <ImageContainer2 imageURL={customer?.imageURL} score={score.pores} name='Pores' />
                        </div>
                        <div className='image-slide'>
                            <ImageContainer2 imageURL={customer?.imageURL} score={score.redness} name='Redness' />
                        </div >
                        <div className='image-slide'>
                            <ImageContainer2 imageURL={customer?.imageURL} score={score.uniformness} name='Uniformness' />
                        </div>
                    </Slider>
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
                        className="btn-next-md align-items-center back-button"
                    >
                        <span className='indicator-label font-size-20 text-center line-height-24'><LeftArrow />Retake</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export { SkinAnalysisWrapper }
