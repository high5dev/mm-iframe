import { useIntl } from 'react-intl'
// import { CardItem } from '../../../_metronic/partials/content/cards/CardItem'
import { PageTitle } from '../../../_metronic/layout/core'
import { RoutineModel } from './RoutineModels'
import clsx from 'clsx'
import { useState } from 'react'
import { toAbsoluteUrl } from '../../../_metronic/helpers/AssetHelpers'
import './styles.scss';
import { CardItem } from './CardItem'
import { CardItem2 } from './CardItem2'
import { CardItem3 } from './CardItem3'
import { Nav } from 'react-bootstrap'
import { Tab } from 'react-bootstrap'


const SelectDailyRoutinePage = () => {
    const [tab, setTab] = useState('Essentials')

    return (
        <>
            <div className='d-flex flex-wrap flex-stack mb-6'>
                <div className='d-flex flex-wrap'>
                    <a
                        href='/skin-analysis'
                        className='btn btn-top-back align-items-center p-0'
                        data-bs-target='#kt_modal_create_project'
                    >
                        {'<'}Back
                    </a>
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
            <div className='row g-5 g-xl-8'>
                <div className='card-p position-relative'>
                    <span className='d-flex text-center'>You may also like</span>
                    <div className='row g-0'>
                        <div className='col py-8 rounded-2  me-7 mb-7'>
                            <CardItem2 className='' />
                        </div>
                        <div className='col py-8 rounded-2  me-7 mb-7'>
                            <CardItem2 className='' />
                        </div>
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
