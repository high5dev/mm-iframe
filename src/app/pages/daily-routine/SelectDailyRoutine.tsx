import { useIntl } from 'react-intl'
import { useNavigate } from 'react-router-dom';
// import { CardItem } from '../../../_metronic/partials/content/cards/CardItem'
import { PageTitle } from '../../../_metronic/layout/core'
import { RoutineModel } from './RoutineModels'
import clsx from 'clsx'
import { useState, useEffect } from 'react'
import { toAbsoluteUrl } from '../../../_metronic/helpers/AssetHelpers'
import './styles.scss';
import { CardItem } from './CardItem'
import { CardItem2 } from './CardItem2'
import { CardItem3 } from './CardItem3'
import { Nav } from 'react-bootstrap'
import { Tab } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../store/store"


const SelectDailyRoutinePage = () => {
    const score = useSelector((state: RootState) => state.score);
    const customer = useSelector((state: RootState) => state.user)

    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/skin-analysis', { replace: true });
    };

    useEffect(()=> {
        console.log(score)
        console.log(customer)
    })
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
                    Hi, customer
                </div>
                <span className='font-size-14 ms-1 font-weight-400'>Based on your Primary 2 concerns (concern 1 & concern 2), AI has picked the best daily routine for you.</span>
            </div>
            <div>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <div className='d-flex justify-content-center font-size-20'>Your Daily Routine</div>
                    <div className='d-flex justify-content-center '>
                        <Nav variant="pills" className="d-flex border-primary border" justify style={{ width: "max-content" }}>
                            <Nav.Item className='mx-0 font-size-16'>
                                <Nav.Link eventKey="first">Essentials</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='mx-0 font-size-16'>
                                <Nav.Link eventKey="second">Boosters</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <CardItem productIndex='Product 1' productName='item1' whenTouse='22:60 AM' price='$1.5' />
                            <CardItem productIndex='Product 2' productName='item2' whenTouse='22:60 AM' price='$1.7' />
                            <CardItem3 className='' />
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <CardItem productIndex='Step 1' productName='item1' whenTouse='22:60 AM' price='$1.5' />
                            <CardItem productIndex='Step 2' productName='item2' whenTouse='23:60 AM' price='$1.7' />
                            <CardItem productIndex='Step 3' productName='item3' whenTouse='00:60 AM' price='$1.9' />
                            <CardItem productIndex='Step 4' productName='item4' whenTouse='03:60 AM' price='$2.3' />
                            <CardItem productIndex='Step 5' productName='item5' whenTouse='06:60 AM' price='$2.5' />
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </div>
            <div className=''>
                <span className='d-flex justify-content-center text-center font-size-18'>You may also like</span>
                <div className='row'>
                    <div className='col py-8 rounded-2  mb-7 mr-1'>
                        <CardItem2 className='' />
                    </div>
                    <div className='col py-8 rounded-2  mb-7 ml-1'>
                        <CardItem2 className='' />
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
