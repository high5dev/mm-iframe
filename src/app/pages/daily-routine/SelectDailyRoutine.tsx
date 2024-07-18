import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Tab, Nav } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import clsx from 'clsx';
import { RootState } from '../../store/store';
import { RoutineModel } from './RoutineModels';
import { CardItem } from './CardItem';
import { CardItem2 } from './CardItem2';
import { CardItem3 } from './CardItem3';
import './styles.scss';

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
    const concern = useSelector((state: RootState) => state.score);
    const customer = useSelector((state: RootState) => state.user);

    const filterDuplicates = (products1: RoutineModel[], products2: RoutineModel[]) => {
        const handles = new Set(products1.map(product => product.handle));
        return [...products1, ...products2.filter(product => !handles.has(product.handle))];
    };

    const treatment = filterDuplicates(
        product?.primaryConcernProduct?.Treatment || [],
        product?.secondaryConcernProduct?.Treatment || []
    );
    const cleanse = filterDuplicates(
        product?.primaryConcernProduct?.Cleanser || [],
        product?.secondaryConcernProduct?.Cleanser || []
    );
    const toner = filterDuplicates(
        product?.primaryConcernProduct?.Toner || [],
        product?.secondaryConcernProduct?.Toner || []
    );
    const moisturize = filterDuplicates(
        product?.primaryConcernProduct?.Moisturizer || [],
        product?.secondaryConcernProduct?.Moisturizer || []
    );
    const spf = filterDuplicates(
        product?.primaryConcernProduct?.Sunscreen || [],
        product?.secondaryConcernProduct?.Sunscreen || []
    );

    const getConcernKeyValue = (concern: Record<string, number>): [string, number] => {
        const key = Object.keys(concern)[0];
        const value = concern[key];
        return [key, value];
    };

    const [primaryConcernKey, primaryConcernValue] = getConcernKeyValue(concern.primaryConcern);
    const [secondaryConcernKey, secondaryConcernValue] = getConcernKeyValue(concern.secondaryConcern);

    const navigate = useNavigate();

    useEffect(() => {
        console.log(treatment[0]);
        console.log(treatment[1]);
    });

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
                <span className='font-size-14 ms-1 font-weight-400'>
                    Based on your Primary 2 concerns ({primaryConcernKey} & {secondaryConcernKey}), AI has picked the best daily routine for you.
                </span>
            </div>
            <div>
                <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
                    <div className='d-flex justify-content-center font-size-20'>Your Daily Routine</div>
                    <div className='d-flex justify-content-center '>
                        <Nav variant='pills' className='d-flex border-primary border' justify style={{ width: 'max-content' }}>
                            <Nav.Item className='mx-0 font-size-16'>
                                <Nav.Link eventKey='first'>Must&nbsp;Have</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='mx-0 font-size-16'>
                                <Nav.Link eventKey='second'>Essentials</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                    <Tab.Content>
                        <Tab.Pane eventKey='first'>
                            {treatment[0] && (
                                <CardItem
                                    productIndex='Product 1'
                                    imageSrc={treatment[0].imageUri}
                                    productName={treatment[0].title}
                                    whenTouse={treatment[0].whenToUse}
                                    price={treatment[0].price}
                                    productLink={`https://beminimalist.co/products/${treatment[0].handle}`}
                                />
                            )}
                            {treatment[1] && (
                                <CardItem
                                    productIndex='Product 2'
                                    imageSrc={treatment[1].imageUri}
                                    productName={treatment[1].title}
                                    whenTouse={treatment[1].whenToUse}
                                    price={treatment[1].price}
                                    productLink={`https://beminimalist.co/products/${treatment[1].handle}`}
                                />
                            )}
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
                                customTransition='all .5'
                                transitionDuration={500}
                                containerClass='carousel-container'
                                removeArrowOnDeviceType={['tablet', 'mobile']}
                                dotListClass='custom-dot-list-style'
                                rewind={true}
                                itemClass='carousel-item-padding-10-px'
                            >
                                {treatment.slice(2).map((item, index) => (
                                    <div key={index}>
                                        <CardItem3 imageSrc={item.imageUri} productName={item.title} concern={primaryConcernKey} />
                                    </div>
                                ))}
                            </Carousel>
                        </Tab.Pane>
                        <Tab.Pane eventKey='second'>
                            {cleanse[0] && (
                                <CardItem
                                    productIndex='Step 1: Cleanse'
                                    imageSrc={cleanse[0].imageUri}
                                    productName={cleanse[0].title}
                                    whenTouse={cleanse[0].whenToUse}
                                    price={cleanse[0].price}
                                    productLink={`https://beminimalist.co/products/${cleanse[0].handle}`}
                                />
                            )}
                            {cleanse[1] && cleanse[1].handle !== cleanse[0]?.handle && (
                                <CardItem
                                    imageSrc={cleanse[1].imageUri}
                                    productName={cleanse[1].title}
                                    whenTouse={cleanse[1].whenToUse}
                                    price={cleanse[1].price}
                                    productLink={`https://beminimalist.co/products/${cleanse[1].handle}`}
                                />
                            )}
                            {toner[0] && (
                                <CardItem
                                    productIndex='Step 2: Tone'
                                    imageSrc={toner[0].imageUri}
                                    productName={toner[0].title}
                                    whenTouse={toner[0].whenToUse}
                                    price={toner[0].price}
                                    productLink={`https://beminimalist.co/products/${toner[0].handle}`}
                                />
                            )}
                            {toner[1] && toner[1].handle !== toner[0]?.handle && (
                                <CardItem
                                    imageSrc={toner[1].imageUri}
                                    productName={toner[1].title}
                                    whenTouse={toner[1].whenToUse}
                                    price={toner[1].price}
                                    productLink={`https://beminimalist.co/products/${toner[1].handle}`}
                                />
                            )}
                            {treatment[0] && (
                                <CardItem
                                    productIndex='Step 3: Treatment'
                                    imageSrc={treatment[0].imageUri}
                                    productName={treatment[0].title}
                                    whenTouse={treatment[0].whenToUse}
                                    price={treatment[0].price}
                                    productLink={`https://beminimalist.co/products/${treatment[0].handle}`}
                                />
                            )}
                            {treatment[1] && treatment[1].handle !== treatment[0]?.handle && (
                                <CardItem
                                    imageSrc={treatment[1].imageUri}
                                    productName={treatment[1].title}
                                    whenTouse={treatment[1].whenToUse}
                                    price={treatment[1].price}
                                    productLink={`https://beminimalist.co/products/${treatment[1].handle}`}
                                />
                            )}
                            {moisturize[0] && (
                                <CardItem
                                    productIndex='Step 4: Moisturize'
                                    imageSrc={moisturize[0].imageUri}
                                    productName={moisturize[0].title}
                                    whenTouse={moisturize[0].whenToUse}
                                    price={moisturize[0].price}
                                    productLink={`https://beminimalist.co/products/${moisturize[0].handle}`}
                                />
                            )}
                            {moisturize[1] && moisturize[1].handle !== moisturize[0]?.handle && (
                                <CardItem
                                    imageSrc={moisturize[1].imageUri}
                                    productName={moisturize[1].title}
                                    whenTouse={moisturize[1].whenToUse}
                                    price={moisturize[1].price}
                                    productLink={`https://beminimalist.co/products/${moisturize[1].handle}`}
                                />
                            )}
                            {spf[0] && (
                                <CardItem
                                    productIndex='Step 5: SPF'
                                    imageSrc={spf[0].imageUri}
                                    productName={spf[0].title}
                                    whenTouse={spf[0].whenToUse}
                                    price={spf[0].price}
                                    productLink={`https://beminimalist.co/products/${spf[0].handle}`}
                                />
                            )}
                            {spf[1] && spf[1].handle !== spf[0]?.handle && (
                                <CardItem
                                    imageSrc={spf[1].imageUri}
                                    productName={spf[1].title}
                                    whenTouse={spf[1].whenToUse}
                                    price={spf[1].price}
                                    productLink={`https://beminimalist.co/products/${spf[1].handle}`}
                                />
                            )}
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </div>
            <div className=''>
                <span className='d-flex justify-content-center text-center font-size-18'>You may also like</span>
                <div className='row'>
                    <div className='col py-8 rounded-2 mb-7 mr-1'>
                        {toner[0] && (
                            <CardItem2
                                imageSrc={toner[0].imageUri}
                                productName={toner[0].title}
                                whenTouse={toner[0].whenToUse}
                                price={toner[0].price}
                                productLink={`https://beminimalist.co/products/${toner[0].handle}`}
                            />
                        )}
                    </div>
                    <div className='col py-8 rounded-2 mb-7 ml-1'>
                        {cleanse[1] && (
                            <CardItem2
                                imageSrc={cleanse[1].imageUri}
                                productName={cleanse[1].title}
                                whenTouse={cleanse[1].whenToUse}
                                price={cleanse[1].price}
                                productLink={`https://beminimalist.co/products/${cleanse[1].handle}`}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

const SelectDailyRoutineWrapper = () => {
    const intl = useIntl();
    return (
        <>
            {/* <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.DASHBOARD' })}</PageTitle> */}
            <SelectDailyRoutinePage />
        </>
    );
};

export { SelectDailyRoutineWrapper };
