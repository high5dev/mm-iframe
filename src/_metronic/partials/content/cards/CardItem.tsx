
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { IconUserModel } from '../../../../app/modules/profile/ProfileModels'
import { toAbsoluteUrl } from '../../../helpers'

type Props = {
  icon: string
  badgeColor: string
  status: string
  statusColor: string
  title: string
  description: string
  date: string
  budget: string
  progress: number
  users?: Array<IconUserModel>
}

const CardItem: FC<Props> = ({
  icon,
  title,
  description,
  date,
  budget,
}) => {
  return (
    <div className='card border border-2 border-gray-300 border-hover'    >
      <div className='card-body p-9'>
        <div className='row'>
          <div className='row g-0'>
            <div className='col px-6 py-8 rounded-2 me-7 mb-7'>
            <img src={toAbsoluteUrl(icon)} alt='card2' className='p-3' />
            </div>
            <div className='col px-6 py-8 rounded-2 me-7 mb-7'>
              <div className='fs-3 fw-bolder text-gray-900'>{title}</div>
              <div className='d-flex flex-wrap mb-5'>
                  <div className='fs-6 text-gray-800 fw-bolder'>{date}</div>
                  <div className='fs-6 text-gray-800 fw-bolder'>{budget}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { CardItem }
