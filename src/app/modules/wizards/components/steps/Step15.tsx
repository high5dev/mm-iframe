
import { FC } from 'react'
import { KTIcon } from '../../../../../_metronic/helpers'
import { ErrorMessage, Field } from 'formik'

const Step15: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-center text-gray-900'>
          Are you Pregnant?
        </h2>
      </div>

      <div className='fv-row'>
        <div className='row'>
          <div className='col-md-4'></div>
          <div className='col-md-4'>
            <Field
              type='radio'
              className='btn-check text-center'
              name='pregnancy'
              value='pregnant'
              id='kt_create_account_form_pregnancy_yes'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-block align-items-center mb-10'
              htmlFor='kt_create_account_form_pregnancy_yes'
            >

              <span className='fw-bold'>
                <span className='text-gray-900 fw-bolder fs-4 mb-2 text-center'>Yes</span>
              </span>
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'></div>
          <div className='col-md-4'>
            <Field
              type='radio'
              className='btn-check text-center'
              name='pregnancy'
              value='notPregnant'
              id='kt_create_account_form_pregnancy_not'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-block align-items-center mb-10'
              htmlFor='kt_create_account_form_pregnancy_not'
            >

              <span className='fw-bold'>
                <span className='text-gray-900 fw-bolder fs-4 mb-2 text-center'>No</span>
              </span>
            </label>
          </div>
        </div>
        {/* <div className='text-danger mt-2'>
          <ErrorMessage name='pregnancy' />
        </div> */}
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

export { Step15 }
