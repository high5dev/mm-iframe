import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import { Content } from '../../../_metronic/layout/components/Content'
import { toAbsoluteUrl } from '../../../_metronic/helpers'
import './styles.scss'
import { ImageContainer } from './ImageContainer'
import { ImageContainer2 } from './ImageContainer2'
import { ImageContainer3 } from './ImageContainer3'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const SkinAnalysisPage = () => (
    <>
        <div className=''>
            <div className='d-flex align-items-center margin-top-65 font-size-25 margin-left-20'>
                Skin Analysis
            </div>
        </div>
        <div className=''>
            <div className='card-319-90 margin-left-20 d-flex'>
                <div className='d-flex align-items-center justify-content-center font-size-18'>Eye Age, Perceived Age & Skin tone</div>
            </div>
        </div>
        <div className=''>
            <div>
                <Carousel
                    swipeable={true}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={10000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <div  className='d-flex justify-content-center'>
                        <ImageContainer />
                    </div >
                    <div  className='d-flex justify-content-center'>
                        <ImageContainer2 />
                    </div>
                    <div  className='d-flex justify-content-center'>
                        <ImageContainer3 />
                    </div>
                </Carousel>
                {/* <ImageContainer />
                <ImageContainer /> */}
            </div>
        </div>
        <div className=''>
            <div className='row button-alignment justify-content-center pt-15 mb-5'>
                <a
                    href="/daily-routine"
                    className="btn btn-lg btn-primary align-items-center w-203 rounded-0"
                >
                    <span className='indicator-label font-size-20'>Your Routine
                    </span>

                </a>
            </div>
            <div className='mt-10 row button-alignment justify-content-center mb-15'>
                <a
                    href="/"
                    className="btn-next-md align-items-center"
                >
                    <span className='indicator-label font-size-20 text-center'>Retake Photo</span>
                </a>
            </div>
        </div>



    </>
)

const SkinAnalysisWrapper = () => {
    const intl = useIntl()
    return (
        <>
            {/* <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle> */}
            <PageTitle breadcrumbs={[]}>Skin Analysis</PageTitle>
            <SkinAnalysisPage />
        </>
    )
}

export { SkinAnalysisWrapper }
