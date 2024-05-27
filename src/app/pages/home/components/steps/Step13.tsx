
import { FC } from 'react'
import { KTIcon } from '../../../../../_metronic/helpers'
import { ErrorMessage, Field, useFormikContext } from 'formik'
import './styles.scss'

const Step13: FC = () => {

  const formik = useFormikContext();
  const handleRadioChange = (value: string) => {
    formik.setFieldValue('ageGroup', value);
    formik.submitForm();
  };
  return (
    <div className='w-100 mb-120 container'>
      <div className='pb-10 pb-lg-15 mb-5'>
        <h2 className='text-center font-size-24'>
          You belong to which age group?
        </h2>
      </div>
      <div className='p-0'>
        <div className='mt-n10 position-relative'>
          <div className='row g-0'>
            <div className='col pb-8 rounded-2'>
              <Field
                type='radio'
                className='btn-check text-center'
                name='ageGroup'
                value='below18'
                onClick={() => handleRadioChange('below18')}
                id='kt_create_account_form_age_group_1'
              />
              <label
                className='btn btn-block d-block align-items-center fixed-width'
                htmlFor='kt_create_account_form_age_group_1'
              >
                <span className='font-size-20 mb-2 text-center'>Below 18</span>
              </label>
            </div>
            <div className='col-auto pb-8 rounded-2'>
              <Field
                type='radio'
                className='btn-check text-center'
                name='ageGroup'
                value='18to24'
                onClick={() => handleRadioChange('18to24')}
                id='kt_create_account_form_age_group_2'
              />
              <label
                className='btn btn-block d-block align-items-center fixed-width'
                htmlFor='kt_create_account_form_age_group_2'
              >
                <span className='font-size-20 mb-2 text-center'>18 to 24</span>
              </label>
            </div>
          </div>
          <div className='row g-0'>
            <div className='col pb-8 rounded-2'>
              <Field
                type='radio'
                className='btn-check text-center'
                name='ageGroup'
                value='25to30'
                onClick={() => handleRadioChange('25to30')}
                id='kt_create_account_form_age_group_3'
              />
              <label
                className='btn btn-block d-block align-items-center fixed-width'
                htmlFor='kt_create_account_form_age_group_3'
              >
                <span className='font-size-20 mb-2 text-center'>25 to 30</span>
              </label>
            </div>
            <div className='col-auto pb-8 rounded-2'>
              <Field
                type='radio'
                className='btn-check text-center'
                name='ageGroup'
                value='30to34'
                onClick={() => handleRadioChange('30to34')}
                id='kt_create_account_form_age_group_4'
              />
              <label
                className='btn btn-block d-block align-items-center fixed-width'
                htmlFor='kt_create_account_form_age_group_4'
              >
                <span className='font-size-20 mb-2 text-center'>30 to 34</span>
              </label>
            </div>
          </div>
          <div className='row g-0'>
            <div className='col pb-8 rounded-2'>
              <Field
                type='radio'
                className='btn-check text-center'
                name='ageGroup'
                value='34to40'
                onClick={() => handleRadioChange('34to40')}
                id='kt_create_account_form_age_group_5'
              />
              <label
                className='btn btn-block d-block align-items-center fixed-width'
                htmlFor='kt_create_account_form_age_group_5'
              >
                <span className='font-size-20 mb-2 text-center'>34 to 40</span>
              </label>
            </div>
            <div className='col-auto pb-8 rounded-2'>
              <Field
                type='radio'
                className='btn-check text-center'
                name='ageGroup'
                value='above40'
                onClick={() => handleRadioChange('above40')}
                id='kt_create_account_form_age_group_6'
              />
              <label
                className='btn btn-block d-block align-items-center fixed-width'
                htmlFor='kt_create_account_form_age_group_6'
              >
                <span className='font-size-20 mb-2 text-center'>Above 40</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Step13 }
