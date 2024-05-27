
import { FC } from 'react'
import { KTIcon } from '../../../../../_metronic/helpers'
import { ErrorMessage, Field, useFormikContext } from 'formik'
import './styles.scss'

const Step14: FC = () => {

  const formik = useFormikContext();
  const handleRadioChange = (value: string) => {
    formik.setFieldValue('genderType', value);
    formik.submitForm();
  };

  return (
    <div className='w-100 mb-120 container'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='text-center font-size-24'>
          What is your Biological Gender Identity?
        </h2>
      </div>

      <div className='fv-row'>
        <div className='row'>
          <div className='col d-flex justify-content-center'>
            <Field
              type='radio'
              className='btn-check text-center'
              name='genderType'
              value='male'
              onClick={() => handleRadioChange('male')}
              id='kt_create_account_form_gender_male'
            />
            <label
              className='btn btn-block d-flex align-items-center fixed-width-lg mb-5'
              htmlFor='kt_create_account_form_gender_male'
            >
              <span className='font-size-20 mb-2 text-center'>Male</span>
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='col d-flex justify-content-center'>
            <Field
              type='radio'
              className='btn-check text-center'
              name='genderType'
              value='female'
              onClick={() => handleRadioChange('female')}
              id='kt_create_account_form_gender_female'
            />
            <label
              className='btn btn-block d-flex align-items-center fixed-width-lg mb-5'
              htmlFor='kt_create_account_form_gender_female'
            >
              <span className='font-size-20 mb-2 text-center'>Female</span>
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='col d-flex justify-content-center'>
            <Field
              type='radio'
              className='btn-check text-center'
              name='genderType'
              value='notSure'
              onClick={() => handleRadioChange('notSure')}
              id='kt_create_account_form_gender_not_sure'
            />
            <label
              // className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-block align-items-center mb-10'
              className='btn btn-block d-flex align-items-center fixed-width-lg mb-15'
              htmlFor='kt_create_account_form_gender_not_sure'
            >
              <span className='font-size-20 mb-2 text-center'>Prefer not to say</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Step14 }
