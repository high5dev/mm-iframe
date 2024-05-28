
import { FC, useEffect, useState } from 'react'
import { KTIcon } from '../../../../../_metronic/helpers'
import { ErrorMessage, Field, useFormikContext } from 'formik'
import { toAbsoluteUrl } from '../../../../../_metronic/helpers'
import './styles.scss';

const Step17: FC = () => {

  const [isChecked, setIsChecked] = useState(false)
  const handleRadioChange = (value: string) => {
    setIsChecked(true);
  };

  const formik = useFormikContext();
  return (
    <div className='w-100 container'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='text-center font-size-24'>
          Is your skin sensitive?
        </h2>
      </div>

      <div className='fv-row'>
        <div className='row'>
          <div className='col d-flex justify-content-center'>
            <Field
              type='radio'
              className='btn-check text-center'
              name='skinSensible'
              value='sensitive'
              checked={isChecked}
              id='kt_create_account_form_skin_sensitive_yes'
            />
            <label
              className='btn btn-block d-flex align-items-center fixed-width-lg mb-5'
              htmlFor='kt_create_account_form_skin_sensitive_yes'
            >
                <span className='font-size-20 mb-2 text-cente'>Yes</span>
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='col d-flex justify-content-center'>
            <Field
              type='radio'
              className='btn-check text-center'
              name='skinSensible'
              value='notSensitive'
              checked={isChecked}
              id='kt_create_account_form_skin_sensitive_no'
            />
            <label
              className={'btn btn-block d-flex align-items-center fixed-width-lg mb-5' + (isChecked ? 'btn-checked': '')}
              htmlFor='kt_create_account_form_skin_sensitive_no'
            >

                <span className='font-size-20 mb-2 text-cente'>No</span>
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='col d-flex justify-content-center'>
            <Field
              type='radio'
              className='btn-check text-center visually-hidden'
              name='skinSensible'
              value='sometimesSensible'
              checked={isChecked}
              id='kt_create_account_form_skin_sensitive_sometimes'
            />
            <label
              className='btn btn-block d-flex align-items-center fixed-width-lg mb-5'
              htmlFor='kt_create_account_form_skin_sensitive_sometimes'
            >
                <span className='font-size-20 mb-2 text-cente'>Sometimes</span>
            </label>
          </div>
        </div>
        {/* <div className='text-danger mt-2'>
          <ErrorMessage name='skinSensible' />
        </div> */}

        <div className='row button-alignment justify-content-center mt-16 mb-5'>
            <button type='submit' className='btn btn-lg btn-primary align-items-center w-203 rounded-0'>
              <span className='indicator-label font-size-20'>Take a selfie
              </span>
            </button>
        </div>
      </div>
    </div>
  )
}

export { Step17 }
