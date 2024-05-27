
import { FC } from 'react'
import { KTIcon } from '../../../../../_metronic/helpers'
import { ErrorMessage, Field, useFormikContext} from 'formik'
import './styles.scss'

const Step15: FC = () => {

  const formik = useFormikContext();
  const handleRadioChange = (value: string) => {
    formik.setFieldValue('pregnancy', value);
    formik.submitForm();
  };

  return (
    <div className='w-100 mb-120 container'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='text-center font-size-24'>
          Are You Pregnant?
        </h2>
      </div>

      <div className='fv-row'>
        <div className='row'>
          <div className='col d-flex justify-content-center'>
            <Field
              type='radio'
              className='btn-check text-center'
              name='pregnancy'
              value='pregnant'
              onChange={() => handleRadioChange('pregnant')}
              id='kt_create_account_form_pregnancy_yes'
            />
            <label
              className='btn btn-block d-flex align-items-center fixed-width-lg mb-5'
              htmlFor='kt_create_account_form_pregnancy_yes'
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
              name='pregnancy'
              value='notPregnant'
              onChange={() => handleRadioChange('notPregnant')}
              id='kt_create_account_form_pregnancy_not'
            />
            <label
              className='btn btn-block d-flex align-items-center fixed-width-lg mb-5'
              htmlFor='kt_create_account_form_pregnancy_not'
            >
              <span className='font-size-20 mb-2 text-cente'>No</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Step15 }
