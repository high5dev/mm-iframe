import React, { FC } from 'react'
import { KTIcon } from '../../../../../_metronic/helpers'
import { ErrorMessage, Field } from 'formik'

const Step12: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-gray-900 text-center'>To share the results with you, please share your email Id?</h2>
      </div>

      <div className='mb-10 fv-row'>
        <Field
          type='text'
          className='form-control form-control-lg border-bottom-only'
          name='customerEmail'
        />
        {/* <div className='text-danger mt-2'>
          <ErrorMessage name='customerEmail' />
        </div> */}
      </div>
      <div className='mb-10 row'>
        <button type='submit' className='btn btn-lg btn-primary me-3'>
          <span className='indicator-label'>Next
          </span>
        </button>
      </div>
    </div>
  )
}

export { Step12 }
