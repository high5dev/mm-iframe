
import { FC, useState } from 'react'
import { KTIcon } from '../../../../../_metronic/helpers'
import { ErrorMessage, Field } from 'formik'
import { toAbsoluteUrl } from '../../../../../_metronic/helpers'

const Step18: FC = () => {

  const [isChecked, setIsChecked] = useState(false)

  const checkHandler = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className='w-100 container'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-center font-size-16'>
          How to take your picture for skin analysis?
        </h2>
      </div>

      <div className='fv-row'>
        <div className='row'>
          <div className='col-md-12'>
            {/* <Field
              type='radio'
              className='btn-check'
              name='skinSensible'
              value='dry'
              id='kt_create_account_form_skin_sensitive_yes'
            /> */}
            <span
              className='p-7 d-flex align-items-center mb-10'
              // htmlFor='kt_create_account_form_skin_sensitive_yes'
            >
              <img alt='Logo' src={toAbsoluteUrl('media/camera-guide/image 14.png')}
                className='h-50px h-lg-50px' /> &nbsp;&nbsp;&nbsp;
              <span className='d-block fw-bold text-start'>
                <span className='font-size-16 d-block  mb-2'>Take a natural picture</span>
                <span className='font-size-12'>
                  Remove make-up. Take-off your glasses. Pull your hair back & tie it.
                </span>
              </span>
            </span>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            {/* <Field
              type='radio'
              className='btn-check'
              name='skinSensible'
              value='normal'
              id='kt_create_account_form_skin_sensitive_no'
            /> */}
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10'
              htmlFor='kt_create_account_form_skin_sensitive_no'
            >
              <img alt='Logo' src={toAbsoluteUrl('media/camera-guide/image 15.png')}
                className='h-50px h-lg-50px' /> &nbsp;&nbsp;&nbsp;
              <span className='d-block fw-bold text-start'>
                <span className='font-size-16 d-block  mb-2'>Ensure it's a well-list face</span>
                <span className='font-size-12 '>
                  Enhance the accuracy of results by clicking the picture in natural light or well-lit space
                </span>
              </span>
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            {/* <Field
              type='radio'
              className='btn-check'
              name='skinSensible'
              value='combination'
              id='kt_create_account_form_skin_sensitive_sometimes'
            /> */}
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10'
              htmlFor='kt_create_account_form_skin_sensitive_sometimes'
            >
              <img alt='Logo' src={toAbsoluteUrl('media/camera-guide/image 12.png')}
                className='h-50px h-lg-50px' /> &nbsp;&nbsp;&nbsp;
              <span className='d-block fw-bold text-start'>
                <span className='font-size-16 d-block  mb-2'>Align your face</span>
                <span className='font-size-12 '>
                  Place your face inside the outline
                </span>
              </span>
            </label>
          </div>
        </div>
        <div className='d-flex flex-stack'>

          <div className='d-flex'>
          <label className='form-check form-check-sm form-check-custom form-check-solid me-5'>
              <Field type="checkbox" name="termsAccept"/>
              <div className='form-check-label font-size-9 text-dark'>
                By clicking the box and clicking the “Proceed” button below, I agree to the &nbsp;
                <span className='text-decoration-underline'>Minimalist’s terms & Conditions</span>, 
                and I expressly consent to the scanning and save my image, face, facial geometry, and biometric data.
              </div>
          </label>
            {/* <label className='form-check form-check-sm form-check-custom form-check-solid me-5'>
              <input className='form-check-input' type='checkbox' value='1' checked={isChecked} onChange={checkHandler} />
              <span className='form-check-label'>By clicking the box and clicking the “Proceed” button below, I agree to the Minimalist’s terms & Conditions, and I expressly consent to the scanning and save my image, face, facial geometry, and biometric data.</span>
            </label> */}
          </div>
        </div>
        {/* <div className='text-danger mt-2'>
          <ErrorMessage name='termsAccept' />
        </div> */}

        <div className='mt-10 row justify-content-center'>
          <button type='submit' className='btn btn-md btn-primary w-203 h-55 rounded-0'>
            <span className='indicator-label font-size-20'>Proceed
              {/* <KTIcon iconName='arrow-right' className='fs-3 ms-2 me-0' /> */}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export { Step18 }
