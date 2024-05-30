
import { FC } from 'react'
import { KTIcon } from '../../../../../_metronic/helpers'
import { ErrorMessage, Field, useFormikContext} from 'formik'
import './styles.scss'

const Step15: FC = () => {

  const { setFieldValue, submitForm, values } = useFormikContext<{ pregnancy: string }>();

  const handleButtonClick = (value: string) => {
    setFieldValue('pregnancy', value);
    submitForm();
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
            <button
              type='button'
              className={`btn btn-block d-flex align-items-center fixed-width-lg btn-203-66 mb-5 ${values.pregnancy === 'pregnant' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => handleButtonClick('pregnant')}
            >
              <span className='font-size-20 mb-2 text-center'>Yes</span>
            </button>
          </div>
        </div>
        <div className='row'>
          <div className='col d-flex justify-content-center'>
            <button
              type='button'
              className={`btn btn-block d-flex align-items-center fixed-width-lg btn-203-66 mb-5 ${values.pregnancy === 'notPregnant' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => handleButtonClick('notPregnant')}
            >
              <span className='font-size-20 mb-2 text-center'>No</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Step15 }
