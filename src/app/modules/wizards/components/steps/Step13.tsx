
import { FC } from 'react'
import { KTIcon } from '../../../../../_metronic/helpers'
import { ErrorMessage, Field } from 'formik'

const Step13: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-gray-900 text-center'>
          You belong to which age group?
        </h2>
      </div>

      <div className='card-body p-0'>
        <div className='card-p mt-n20 position-relative'>
          <div className='row g-0'>
            <div className='col px-6 py-8 rounded-2 me-7 mb-7'>
              <div>
                <Field
                  type='radio'
                  className='btn-check btn-primary text-center'
                  name='ageGroup'
                  value='ageGroup1'
                  id='kt_create_account_form_age_group_1'
                />
                <label
                  className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-block align-items-center mb-10'
                  htmlFor='kt_create_account_form_age_group_1'
                >
                  <span className='fw-bold'>
                    <span className='text-gray-900 fw-bolder fs-4 mb-2 text-center'>Below 18</span>
                  </span>
                </label>
              </div>
            </div>
            <div className='col px-6 py-8 rounded-2 me-7 mb-7'>
              <div>
                <Field
                  type='radio'
                  className='btn-check text-center'
                  name='ageGroup'
                  value='ageGroup2'
                  id='kt_create_account_form_age_group_2'
                />
                <label
                  className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-block align-items-center mb-10'
                  htmlFor='kt_create_account_form_age_group_2'
                >
                  <span className='fw-bold'>
                    <span className='text-gray-900 fw-bolder fs-4 mb-2 text-center'>18 to 24</span>
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className='row g-0'>
            <div className='col px-6 py-8 rounded-2 me-7 mb-7'>
              <div>
                <Field
                  type='radio'
                  className='btn-check text-center'
                  name='ageGroup'
                  value='ageGroup3'
                  id='kt_create_account_form_age_group_3'
                />
                <label
                  className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-block align-items-center mb-10'
                  htmlFor='kt_create_account_form_age_group_3'
                >
                  <span className='fw-bold'>
                    <span className='text-gray-900 fw-bolder fs-4 mb-2 text-center'>25 to 30</span>
                  </span>
                </label>
              </div>
            </div>
            <div className='col px-6 py-8 rounded-2 me-7 mb-7'>
              <div>
                <Field
                  type='radio'
                  className='btn-check text-center'
                  name='ageGroup'
                  value='ageGroup4'
                  id='kt_create_account_form_age_group_4'
                />
                <label
                  className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-block align-items-center mb-10'
                  htmlFor='kt_create_account_form_age_group_4'
                >
                  <span className='fw-bold'>
                    <span className='text-gray-900 fw-bolder fs-4 mb-2 text-center'>30 to 34</span>
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className='row g-0'>
            <div className='col px-6 py-8 rounded-2 me-7 mb-7'>
              <div>
                <Field
                  type='radio'
                  className='btn-check text-center'
                  name='ageGroup'
                  value='ageGroup5'
                  id='kt_create_account_form_age_group_5'
                />
                <label
                  className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-block align-items-center mb-10'
                  htmlFor='kt_create_account_form_age_group_5'
                >
                  <span className='fw-bold'>
                    <span className='text-gray-900 fw-bolder fs-4 mb-2 text-center'>30 to 34</span>
                  </span>
                </label>
              </div>
            </div>
            <div className='col px-6 py-8 rounded-2 me-7 mb-7'>
              <div>
                <Field
                  type='radio'
                  className='btn-check text-center'
                  name='ageGroup'
                  value='ageGroup6'
                  id='kt_create_account_form_age_group_6'
                />
                <label
                  className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-block align-items-center mb-10'
                  htmlFor='kt_create_account_form_age_group_6'
                >
                  <span className='fw-bold'>
                    <span className='text-gray-900 fw-bolder fs-4 mb-2 text-center'>Above 40</span>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='fv-row'>
        <div className='mb-10 row'>
          <button type='submit' className='btn btn-lg btn-primary me-3'>
            <span className='indicator-label'>Next
              <KTIcon iconName='arrow-right' className='fs-3 ms-2 me-0' />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export { Step13 }
