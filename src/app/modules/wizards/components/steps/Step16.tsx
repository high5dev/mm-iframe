
import { FC } from 'react'
import { KTIcon } from '../../../../../_metronic/helpers'
import { ErrorMessage, Field } from 'formik'
import { toAbsoluteUrl } from '../../../../../_metronic/helpers'

const Step16: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-center text-gray-900'>
          Your Skin Type?
        </h2>
      </div>

      <div className='fv-row'>
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-5'>
            <Field
              type='radio'
              className='btn-check text-center'
              name='skinType'
              value='dry'
              id='kt_create_account_form_skin_type_dry'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-block align-items-center mb-10'
              htmlFor='kt_create_account_form_skin_type_dry'
            >
              <img alt='Logo' src={toAbsoluteUrl('media/skin-types/dry.jpg')}
                className='h-35px h-lg-35px' />

              <span className='fw-bold'>
                <span className='text-gray-900 fw-bolder fs-4 mb-2 text-center'>Dry Skin</span>
              </span>
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-5'>
            <Field
              type='radio'
              className='btn-check text-center'
              name='skinType'
              value='normal'
              id='kt_create_account_form_skin_type_normal'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-block align-items-center mb-10'
              htmlFor='kt_create_account_form_skin_type_normal'
            >
              <img alt='Logo' src={toAbsoluteUrl('media/skin-types/normal.jpg')}
                className='h-35px h-lg-35px' />

              <span className='fw-bold'>
                <span className='text-gray-900 fw-bolder fs-4 mb-2 text-center'>Normal Skin</span>
              </span>
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-5'>
            <Field
              type='radio'
              className='btn-check text-center'
              name='skinType'
              value='combination'
              id='kt_create_account_form_skin_type_combination'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-block mb-10'
              htmlFor='kt_create_account_form_skin_type_combination'
            >
              <img alt='Logo' src={toAbsoluteUrl('media/skin-types/combination.jpg')}
                className='h-35px h-lg-35px' />

              <span className='fw-bold'>
                <span className='text-gray-900 fw-bolder fs-4 mb-2 text-center'>Oily/Combination Skin</span>
              </span>
            </label>
          </div>
        </div>
        <div className='text-danger mt-2'>
          <ErrorMessage name='skinType' />
        </div>
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

export { Step16 }
