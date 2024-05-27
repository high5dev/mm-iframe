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

const SelectDailyRoutinePage = () => {
    const [tab, setTab] = useState('Essentials')

    return (
        <>
            <div className='d-flex flex-wrap flex-stack mb-6'>
                <div className='d-flex flex-wrap my-2'>
                    <a
                        href='/skin-analysis'
                        className='btn btn-top-back align-items-center p-0'
                        data-bs-target='#kt_modal_create_project'
                    >
                        Back
                    </a>
                </div>
            </div>
            <div className='d-flex flex-wrap flex-stack mb-6'>
                <h3 className='fw-bolder my-2'>
                    Hi, customer
                </h3>
            </div>
            <div className='d-flex flex-wrap flex-stack mb-6'>
                <span className='fs-6 text-gray-500 fw-bold ms-1'>Based on your Primary 2 concerns (concern 1 & concern 2), AI has picked the best daily routine for you.</span>
            </div>
            <div className='card'>
                <div className='card-header card-header-stretch overflow-auto'>
                    <ul
                        className='nav nav-stretch nav-pills nav-line-tabs fw-bold border-transparent flex-nowrap'
                        role='tablist'
                    >
                        <li className='nav-item'>
                            <a
                                className={clsx(`nav-link cursor-pointer`, { active: tab === 'Essentials' })}
                                onClick={() => setTab('Essentials')}
                                role='tab'
                            >
                                Essentials
                            </a>
                        </li>

                        <li className='nav-item'>
                            <a
                                className={clsx(`nav-link cursor-pointer`, { active: tab === 'Boosters' })}
                                onClick={() => setTab('Boosters')}
                                role='tab'
                            >
                                Boosters
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='card-body'>
                    <div className='tab-content pt-3'>
                        <div className={clsx('tab-pane', { active: tab === 'Essentials' })}>
                            <div className='card'>
                                <CardItem productIndex='Product 1' productName='item1' whenTouse='22:60 AM' price='$1.5' />
                                <div className='separator mb-4'></div>
                                <CardItem productIndex='Product 2' productName='item2' whenTouse='22:60 AM' price='$1.7' />
                                <div className='separator mb-4'></div>
                                <CardItem3 className=''/>
                            </div>
                        </div>
                    </div>
                    <div className='tab-content pt-3'>
                        <div className={clsx('tab-pane', { active: tab === 'Boosters' })}>
                            <div className='card'>
                                <CardItem productIndex='Step 1' productName='item1' whenTouse='22:60 AM' price='$1.5' />
                                <div className='separator mb-4'></div>
                                <CardItem productIndex='Step 2' productName='item2' whenTouse='23:60 AM' price='$1.7' />
                                <div className='separator mb-4'></div>
                                <CardItem productIndex='Step 3' productName='item3' whenTouse='00:60 AM' price='$1.9' />
                                <div className='separator mb-4'></div>
                                <CardItem productIndex='Step 4' productName='item4' whenTouse='03:60 AM' price='$2.3' />
                                <div className='separator mb-4'></div>
                                <CardItem productIndex='Step 5' productName='item5' whenTouse='06:60 AM' price='$2.5' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-header card-header-stretch overflow-auto'>
                    <ul
                        className='nav nav-stretch nav-pills nav-line-tabs fw-bold border-transparent flex-nowrap'
                        role='tablist'
                    >
                        <li className='nav-item'>
                            <a
                                className={clsx(`nav-link cursor-pointer`, { active: tab === 'Essentials' })}
                                onClick={() => setTab('Essentials')}
                                role='tab'
                            >
                                
                            </a>
                        </li>

                        <li className='nav-item'>
                            <a
                                className={clsx(`nav-link cursor-pointer`, { active: tab === 'Boosters' })}
                                onClick={() => setTab('Boosters')}
                                role='tab'
                            >
                                
                            </a>
                        </li>
                    </ul>
                </div>
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
