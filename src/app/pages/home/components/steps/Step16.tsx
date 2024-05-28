
import { FC, useState } from 'react'
import { KTIcon } from '../../../../../_metronic/helpers'
import { ErrorMessage, Field, useFormikContext } from 'formik'
import { toAbsoluteUrl } from '../../../../../_metronic/helpers'
import './styles.scss'

const Step16: FC = () => {

  const formik = useFormikContext();
  const handleRadioChange = (value: string) => {
    formik.setFieldValue('skinType', value);
    formik.submitForm();
  };

  return (
    <div className='w-100 mb-120 container'>
      <div className='pb-7 pb-lg-15 text-center font-size-24'>
        Your Skin Type?
      </div>

      <div className='fv-row'>
        <div className='row'>
          <div className='col d-flex justify-content-center'>
            <Field
              type='radio'
              className='btn-check text-center'
              name='skinType'
              value='dry'
              onClick={() => handleRadioChange('dry')}
              id='kt_create_account_form_skin_type_dry'
            />
            <label
              className='btn btn-block d-flex align-items-center fixed-width-xlg mb-5'
              htmlFor='kt_create_account_form_skin_type_dry'
            >
                <img alt='Logo' src={toAbsoluteUrl('media/skin-types/dry.jpg')} className='h-78px w-82px' />
                <span className='d-flex d-flex align-items-center mr-1 w-100 font-size-20 mb-2 justify-content-center '>Dry Skin</span>
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='col d-flex justify-content-center'>
            <Field
              type='radio'
              className='btn-check text-center'
              name='skinType'
              value='normal'
              onClick={() => handleRadioChange('normal')}
              id='kt_create_account_form_skin_type_normal'
            />
            <label
              className='btn btn-block d-flex align-items-center fixed-width-xlg mb-5'
              htmlFor='kt_create_account_form_skin_type_normal'
            >
              <img alt='Logo' src={toAbsoluteUrl('media/skin-types/normal.jpg')}
                className='h-78px w-82px' />
              <span className='d-flex d-flex align-items-center mr-1 w-100 font-size-20 mb-2 justify-content-center '>Normal Skin</span>
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='col d-flex justify-content-center'>
            <Field
              type='radio'
              className='btn-check text-center'
              name='skinType'
              value='combination'
              onClick={() => handleRadioChange('combination')}
              id='kt_create_account_form_skin_type_combination'
            />
            <label
              className='btn btn-block d-flex align-items-center fixed-width-xlg mb-5'
              htmlFor='kt_create_account_form_skin_type_combination'
            >
              <img alt='Logo' src={toAbsoluteUrl('media/skin-types/combination.jpg')}
                className='h-78px w-82px' />
              <span className='d-flex d-flex align-items-center mr-1 w-100 font-size-20 mb-2 justify-content-center '>Oily / Combination Skin</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Step16 }
