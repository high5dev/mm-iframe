import React, { FC } from 'react'
import { KTIcon } from '../../../../../_metronic/helpers'
import { ErrorMessage, Field } from 'formik'
import './styles.scss'

const Step12: FC = () => {
  return (
    <div className='w-100 container'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='text-center font-size-24'>To share the results with you, please share your email Id</h2>
      </div>

      <div className='d-flex justify-content-center fv-row mb-120'>
        <Field
          type='text'
          className='rounded-input-box form-control form-control-lg border-bottom-only'
          name='email'
          placeholder="Email ID"
        />
        {/* <div className='text-danger mt-2'>
          <ErrorMessage name='email' />
        </div> */}
      </div>
      <div className='mb-10 row button-alignment'>
        <button type='submit' className='btn btn-next-md btn-primary align-items-center'>
          <span className='indicator-label font-size-20'>Next
          </span>
        </button>
      </div>
    </div>
  )
}

export { Step12 }
