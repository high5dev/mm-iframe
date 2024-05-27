import React, { FC } from 'react'
import { KTIcon } from '../../../../../_metronic/helpers'
import { ErrorMessage, Field } from 'formik'
import './styles.scss'

const Step11: FC = () => {
  return (
    <div className='w-100 container'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='text-center font-size-24'>Hi there,<br /><br />Please share your Name?</h2>
      </div>

      <div className='d-flex justify-content-center mb-10 fv-row'>
        <Field
          type='text'
          className='form-control form-control-lg border-bottom-only justify-content-center'
          name='customerName'
        />
        {/* <div className='text-danger mt-2'>
          <ErrorMessage name='customerName' />
        </div> */}
      </div>
      <div className='mb-10 row button-alignment'>
        <button type='submit' className='btn btn-lg btn-primary btn-next-lg align-items-center'>
          <span className='indicator-label font-size-20'>Next
          </span>
        </button>
      </div>
    </div>
  )
}

export { Step11 }
