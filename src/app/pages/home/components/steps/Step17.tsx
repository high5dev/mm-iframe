
import { FC, useEffect, useState } from 'react'
import { KTIcon } from '../../../../../_metronic/helpers'
import { ErrorMessage, Field, useFormikContext } from 'formik'
import { toAbsoluteUrl } from '../../../../../_metronic/helpers'
import './styles.scss';

const Step17: FC = () => {

  const [isChecked, setIsChecked] = useState<string | null>(null);
  const handleRadioChange = (value: string) => {
    setIsChecked(value);
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
              name='skinSensitivity'
              value='sensitive'
              checked={isChecked === 'sensitive'}
              id='kt_create_account_form_skin_sensitive_yes'
              onChange={() => handleRadioChange('sensitive')}
            />
            <label
              className='btn btn-block d-flex align-items-center fixed-width-lg-md mb-5 btn-203-66'
              htmlFor='kt_create_account_form_skin_sensitive_yes'
            >
                <span className='font-size-20 mb-2 text-center'>Yes</span>
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='col d-flex justify-content-center'>
            <Field
              type='radio'
              className='btn-check text-center'
              name='skinSensitivity'
              value='notSensitive'
              checked={isChecked === 'notSensitive'}
              id='kt_create_account_form_skin_sensitive_no'
              onChange={() => handleRadioChange('notSensitive')}
            />
            <label
              className='btn btn-block d-flex align-items-center fixed-width-lg-md mb-5 btn-203-66'
              htmlFor='kt_create_account_form_skin_sensitive_no'
            >

                <span className='font-size-20 mb-2 text-center'>No</span>
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='col d-flex justify-content-center'>
            <Field
              type='radio'
              className='btn-check text-center visually-hidden'
              name='skinSensitivity'
              value='sometimesSensible'
              checked={isChecked === 'sometimesSensible'}
              id='kt_create_account_form_skin_sensitive_sometimes'
              onChange={() => handleRadioChange('sometimesSensible')}
            />
            <label
              className='btn btn-block d-flex align-items-center fixed-width-lg-md btn-203-66 mb-5'
              htmlFor='kt_create_account_form_skin_sensitive_sometimes'
            >
                <span className='font-size-20 mb-2 text-center'>Sometimes</span>
            </label>
          </div>
        </div>
        {/* <div className='text-danger mt-2'>
          <ErrorMessage name='skinSensitivity' />
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
