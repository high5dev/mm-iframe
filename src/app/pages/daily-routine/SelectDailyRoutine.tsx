import { useIntl } from 'react-intl'
import { useNavigate } from 'react-router-dom';
// import { CardItem } from '../../../_metronic/partials/content/cards/CardItem'
import { PageTitle } from '../../../_metronic/layout/core'
import { RoutineModel } from './RoutineModels'
import Carousel from "react-multi-carousel";
import clsx from 'clsx'
import { useEffect } from 'react'
import { toAbsoluteUrl } from '../../../_metronic/helpers/AssetHelpers'
import './styles.scss';
import { CardItem } from './CardItem'
import { CardItem2 } from './CardItem2'
import { CardItem3 } from './CardItem3'
import { Nav } from 'react-bootstrap'
import { Tab } from 'react-bootstrap'
import { useSelector } from 'react-redux';
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

const SelectDailyRoutinePage = () => {
    const product = useSelector((state: RootState) => state.product);
    const concern = useSelector((state: RootState) => state.score)
    const customer = useSelector((state: RootState) => state.user);

    const treatment1 = product?.primaryConcernProduct?.Treatment || [];
    const treatment2 = product?.secondaryConcernProduct?.Treatment || [];

    const cleanse1 = product?.primaryConcernProduct?.Cleanser || [];
    const cleanse2 = product?.secondaryConcernProduct?.Cleanser || [];
    const toner1 = product?.primaryConcernProduct?.Toner || [];
    const toner2 = product?.secondaryConcernProduct?.Toner || [];
    const moisturize1 = product?.primaryConcernProduct?.Moisturizer || [];
    const moisturize2 = product?.secondaryConcernProduct?.Moisturizer || [];
    const spf1 = product?.primaryConcernProduct?.Sunscreen || [];
    const spf2 = product?.secondaryConcernProduct?.Sunscreen || [];



    const getConcernKeyValue = (concern: Record<string, number>): [string, number] => {
        const key = Object.keys(concern)[0];
        const value = concern[key];
        return [key, value];
    };

    const [primaryConcernKey, primaryConcernValue] = getConcernKeyValue(concern.primaryConcern);
    const [secondaryConcernKey, secondaryConcernValue] = getConcernKeyValue(concern.secondaryConcern);

    const navigate = useNavigate();

    useEffect(() => {
        console.log(treatment1[0])
        console.log(treatment2[0])
    })

    const handleBack = () => {
        navigate('/skin-analysis', { replace: true });
    };
    return (
        <>
            <div className='d-flex flex-wrap flex-stack mb-6'>
                <div className='d-flex flex-wrap'>
                    <button
                        onClick={handleBack}
                        className='btn btn-top-back align-items-center p-0'
                        data-bs-target='#kt_modal_create_project'
                    >
                        {'<'}Back
                    </button>
                </div>
            </div>
            <div className='d-flex flex-wrap flex-stack mb-6'>
                <div className='my-2 font-size-14 font-weight-400'>
                    Hi, {customer.name}
                </div>
                <span className='font-size-14 ms-1 font-weight-400'>Based on your Primary 2 concerns ({primaryConcernKey} & {secondaryConcernKey}), AI has picked the best daily routine for you.</span>
            </div>
            <div>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <div className='d-flex justify-content-center font-size-20'>Your Daily Routine</div>
                    <div className='d-flex justify-content-center '>
                        <Nav variant="pills" className="d-flex border-primary border" justify style={{ width: "max-content" }}>
                            <Nav.Item className='mx-0 font-size-16'>
                                <Nav.Link eventKey="first">Must&nbsp;Have</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='mx-0 font-size-16'>
                                <Nav.Link eventKey="second">Essentials</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <CardItem productIndex='Product 1' imageSrc={treatment1[0].imageUri} productName={treatment1[0].title} whenTouse={treatment1[0].whenToUse} price={treatment1[0].price} />
                            <CardItem productIndex='Product 2' imageSrc={treatment2[0].imageUri} productName={treatment2[0].title} whenTouse={treatment2[0].whenToUse} price={treatment2[0].price} />
                            <Carousel
                                swipeable={true}
                                showDots={true}
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
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                dotListClass="custom-dot-list-style"
                                rewind={true}
                                itemClass="carousel-item-padding-10-px"
                            >
                                <div className=''>
                                    <CardItem3 imageSrc={treatment2[0].imageUri} productName={treatment2[0].title} concern={primaryConcernKey}/>
                                </div >
                                <div className=''>
                                    <CardItem3 imageSrc={treatment2[0].imageUri} productName={treatment2[0].title} concern={secondaryConcernKey}/>
                                </div>
                            </Carousel>

                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            {/* Check if cleanse1[0] exists before accessing its properties */}
                            {cleanse1[0] && (
                                <CardItem productIndex='Step 1: Cleanse' imageSrc={cleanse1[0].imageUri} productName={cleanse1[0].title} whenTouse={cleanse1[0].whenToUse} price={cleanse1[0].price} />
                            )}
                            {/* Check if toner1[0] exists before accessing its properties */}
                            {toner1[0] && (
                                <CardItem productIndex='Step 2: Tone' imageSrc={toner1[0].imageUri} productName={toner1[0].title} whenTouse={toner1[0].whenToUse} price={toner1[0].price} />
                            )}
                            {/* Check if mustHave1[0] exists before accessing its properties */}
                            {treatment1[0] && (
                                <CardItem productIndex='Step 3: Treatment' imageSrc={treatment1[0].imageUri} productName={treatment1[0].title} whenTouse={treatment1[0].whenToUse} price={treatment1[0].price} />
                            )}
                            {/* Check if moisturize1[0] exists before accessing its properties */}
                            {moisturize1[0] && (
                                <CardItem productIndex='Step 4: Moisturize' imageSrc={moisturize1[0].imageUri} productName={moisturize1[0].title} whenTouse={moisturize1[0].whenToUse} price={moisturize1[0].price} />
                            )}
                            {/* Check if spf1[0] exists before accessing its properties */}
                            {spf1[0] && (
                                <CardItem productIndex='Step 5: SPF' imageSrc={spf1[0].imageUri} productName={spf1[0].title} whenTouse={spf1[0].whenToUse} price={spf1[0].price} />
                            )}
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </div>
            <div className=''>
                <span className='d-flex justify-content-center text-center font-size-18'>You may also like</span>
                <div className='row'>
                    <div className='col py-8 rounded-2  mb-7 mr-1'>
                        <CardItem2 imageSrc={toner1[0].imageUri} productName={toner1[0].title} whenTouse={toner1[0].whenToUse} price={toner1[0].price} />
                    </div>
                    <div className='col py-8 rounded-2  mb-7 ml-1'>
                        <CardItem2 imageSrc={cleanse2[0].imageUri} productName={cleanse2[0].title} whenTouse={cleanse2[0].whenToUse} price={cleanse2[0].price} />
                    </div>
                </div>
            </div>
        </>
    )
}

const SelectDailyRoutineWrapper = () => {
    const intl = useIntl()
    return (
        <>
            {/* <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle> */}
            <SelectDailyRoutinePage />
        </>
    )
}

export { SelectDailyRoutineWrapper }

const users1: Array<RoutineModel> = [
    { name: 'Emma Smith', image: 'media/avatars/300-6.jpg' },
    { name: 'Rudy Stone', image: 'media/avatars/300-1.jpg' },
    { name: 'Susan Redwood', price: 'S', whenToUse: 'primary' },
]

const users2 = [
    { name: 'Alan Warden', price: 'A', whenToUse: 'warning' },
    { name: 'Brian Cox', image: 'media/avatars/300-5.jpg' },
]

const users3 = [
    { name: 'Mad Masy', image: 'media/avatars/300-6.jpg' },
    { name: 'Cris Willson', image: 'media/avatars/300-1.jpg' },
    { name: 'Mike Garcie', price: 'M', whenToUse: 'info' },
]

const users4 = [
    { name: 'Nich Warden', price: 'N', whenToUse: 'warning' },
    { name: 'Rob Otto', price: 'R', whenToUse: 'success' },
]

const users5 = [
    { name: 'Francis Mitcham', image: 'media/avatars/300-20.jpg' },
    { name: 'Michelle Swanston', image: 'media/avatars/300-7.jpg' },
    { name: 'Susan Redwood', price: 'S', whenToUse: 'primary' },
]

const users6 = [
    { name: 'Emma Smith', image: 'media/avatars/300-6.jpg' },
    { name: 'Rudy Stone', image: 'media/avatars/300-1.jpg' },
    { name: 'Susan Redwood', price: 'S', whenToUse: 'primary' },
]

const users7 = [
    { name: 'Meloday Macy', image: 'media/avatars/300-2.jpg' },
    { name: 'Rabbin Watterman', price: 'S', whenToUse: 'success' },
]

const users8 = [
    { name: 'Emma Smith', image: 'media/avatars/300-6.jpg' },
    { name: 'Rudy Stone', image: 'media/avatars/300-1.jpg' },
    { name: 'Susan Redwood', price: 'S', whenToUse: 'primary' },
]

const users9 = [
    { name: 'Meloday Macy', image: 'media/avatars/300-2.jpg' },
    { name: 'Rabbin Watterman', price: 'S', whenToUse: 'danger' },
]
