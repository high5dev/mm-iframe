
import { FC } from 'react'
import { KTIcon } from '../../../../../_metronic/helpers'
import { ErrorMessage, Field } from 'formik'
import './styles.scss'

const Step1: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='d-flex align-items-center text-gray-900 font-size-24'>
          You belong to which age group?
        </h2>
      </div>

      <div className='fv-row'>
        <div className='row'>
          <div className='col-md-4'>
            <Field
              type='radio'
              className='btn-check'
              name='ageGroup'
              value='ageGroup1'
              id='kt_create_account_form_age_group_1'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10'
              htmlFor='kt_create_account_form_age_group_1'
            >

              <span className='d-block fw-bold text-center'>
                <span className='text-gray-900 fw-bolder d-block fs-4 mb-2'>Below 18</span>
              </span>
            </label>
          </div>

          <div className='col-md-4'>
            <Field
              type='radio'
              className='btn-check'
              name='ageGroup'
              value='ageGroup2'
              id='kt_create_account_form_age_group_2'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'
              htmlFor='kt_create_account_form_age_group_2'
            >

              <span className='d-block fw-bold text-start'>
                <span className='text-gray-900 fw-bolder d-block fs-4 mb-2'>18 to 24</span>
              </span>
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <Field
              type='radio'
              className='btn-check'
              name='ageGroup'
              value='ageGroup3'
              id='kt_create_account_form_age_group_3'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10'
              htmlFor='kt_create_account_form_age_group_3'
            >

              <span className='d-block fw-bold text-center'>
                <span className='text-gray-900 fw-bolder d-block fs-4 mb-2'>25 to 30</span>
              </span>
            </label>
          </div>

          <div className='col-md-4'>
            <Field
              type='radio'
              className='btn-check'
              name='ageGroup'
              value='ageGroup4'
              id='kt_create_account_form_age_group_4'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'
              htmlFor='kt_create_account_form_age_group_4'
            >

              <span className='d-block fw-bold text-start'>
                <span className='text-gray-900 fw-bolder d-block fs-4 mb-2'>30 to 34</span>
              </span>
            </label>
          </div>
        </div><div className='row'>
          <div className='col-md-4'>
            <Field
              type='radio'
              className='btn-check'
              name='ageGroup'
              value='ageGroup5'
              id='kt_create_account_form_age_group_5'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10'
              htmlFor='kt_create_account_form_age_group_5'
            >

              <span className='d-block fw-bold text-center'>
                <span className='text-gray-900 fw-bolder d-block fs-4 mb-2'>34 to 40</span>
              </span>
            </label>
          </div>

          <div className='col-md-4'>
            <Field
              type='radio'
              className='btn-check'
              name='ageGroup'
              value='ageGroup6'
              id='kt_create_account_form_age_group_6'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'
              htmlFor='kt_create_account_form_age_group_6'
            >

              <span className='d-block fw-bold text-start'>
                <span className='text-gray-900 fw-bolder d-block fs-4 mb-2'>Above 40</span>
              </span>
            </label>
          </div>
        </div>
        <div className='text-danger mt-2'>
          <ErrorMessage name='ageGroup' />
        </div>
      </div>
    </div>
  )
}

export { Step1 }
