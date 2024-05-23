import { useIntl } from 'react-intl'
import { CardItem } from '../../../_metronic/partials/content/cards/CardItem'
import { PageTitle } from '../../../_metronic/layout/core'
import { RoutineModel } from './RoutineModels'

const SelectDailyRoutinePage = () => (
    <>
        <div className='d-flex flex-wrap flex-stack mb-6'>
            <div className='d-flex flex-wrap my-2'>
                <a
                    href='/skin-analysis'
                    className='btn btn-primary btn-sm'
                    data-bs-toggle='modal'
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
            <span className='fs-6 text-gray-500 fw-bold ms-1'>Based on your Primary 2 concerns (concern 1 & concern 2), AI has picked the best daily routine for you</span>
        </div>

        {/* <div className='row g-6 g-xl-9'>
            <div className='col-md-6 col-xl-4'>
                <CardItem
                    icon='media/svg/brand-logos/plurk.svg'
                    badgeColor='primary'
                    status='In Progress'
                    statusColor='primary'
                    title='Fitnes App'
                    description='CRM App application to HR efficiency'
                    date='November 10, 2021'
                    budget='$284,900.00'
                    progress={50}
                    users={users1}
                />
            </div>

            <div className='col-md-6 col-xl-4'>
                <CardItem
                    icon='media/svg/brand-logos/disqus.svg'
                    badgeColor='info'
                    status='Pending'
                    statusColor='info'
                    title='Leaf CRM'
                    description='CRM App application to HR efficiency'
                    date='May 10, 2021'
                    budget='$36,400.00'
                    progress={30}
                    users={users2}
                />
            </div>

            <div className='col-md-6 col-xl-4'>
                <CardItem
                    icon='media/svg/brand-logos/figma-1.svg'
                    badgeColor='success'
                    status='Completed'
                    statusColor='success'
                    title='Atica Banking'
                    description='CRM App application to HR efficiency'
                    date='Mar 14, 2021'
                    budget='$605,100.00'
                    progress={100}
                    users={users3}
                />
            </div>

            <div className='col-md-6 col-xl-4'>
                <CardItem
                    icon='media/svg/brand-logos/sentry-3.svg'
                    badgeColor='info'
                    status='Pending'
                    statusColor='info'
                    title='Finance Dispatch'
                    description='CRM App application to HR efficiency'
                    date='Mar 14, 2021'
                    budget='$605,100.00'
                    progress={60}
                    users={users4}
                />
            </div>

            <div className='col-md-6 col-xl-4'>
                <CardItem
                    icon='media/svg/brand-logos/xing-icon.svg'
                    badgeColor='primary'
                    status='In Progress'
                    statusColor='primary'
                    title='9 Degree'
                    description='CRM App application to HR efficiency'
                    date='Mar 14, 2021'
                    budget='$605,100.00'
                    progress={40}
                    users={users5}
                />
            </div>

            <div className='col-md-6 col-xl-4'>
                <CardItem
                    icon='media/svg/brand-logos/tvit.svg'
                    badgeColor='primary'
                    status='In Progress'
                    statusColor='primary'
                    title='9 Degree'
                    description='CRM App application to HR efficiency'
                    date='Mar 14, 2021'
                    budget='$605,100.00'
                    progress={70}
                    users={users6}
                />
            </div>

            <div className='col-md-6 col-xl-4'>
                <CardItem
                    icon='media/svg/brand-logos/aven.svg'
                    badgeColor='primary'
                    status='In Progress'
                    statusColor='primary'
                    title='Buldozer CRM'
                    description='CRM App application to HR efficiency'
                    date='Mar 14, 2021'
                    budget='$605,100.00'
                    progress={70}
                    users={users7}
                />
            </div>

            <div className='col-md-6 col-xl-4'>
                <CardItem
                    icon='media/svg/brand-logos/treva.svg'
                    badgeColor='danger'
                    status='Overdue'
                    statusColor='danger'
                    title='Aviasales App'
                    description='CRM App application to HR efficiency'
                    date='Mar 14, 2021'
                    budget='$605,100.00'
                    progress={10}
                    users={users8}
                />
            </div>

            <div className='col-md-6 col-xl-4'>
                <CardItem
                    icon='media/svg/brand-logos/kanba.svg'
                    badgeColor='success'
                    status='Completed'
                    statusColor='success'
                    title='Oppo CRM'
                    description='CRM App application to HR efficiency'
                    date='Mar 14, 2021'
                    budget='$605,100.00'
                    progress={100}
                    users={users9}
                />
            </div>
        </div> */}
    </>
)

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
