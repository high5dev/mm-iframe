
import { FC } from 'react'
import { KTIcon } from '../../../../../_metronic/helpers'
import { ErrorMessage, Field, useFormikContext } from 'formik'
import './styles.scss'

const Step14: FC = () => {

  const { setFieldValue, handleSubmit, values } = useFormikContext<{ gender: string }>();

  const handleButtonClick = (value: string) => {
    setFieldValue('gender', value);
    setTimeout(() => {
      handleSubmit();
    }, 0);
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
            <button
              type='button'
              className={`btn btn-block d-flex align-items-center fixed-width-lg btn-203-66 mb-5 ${values.gender === 'male' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => handleButtonClick('male')}
            >
              <span className='font-size-20 mb-2 text-center'>Male</span>
            </button>
          </div>
        </div>
        <div className='row'>
          <div className='col d-flex justify-content-center'>
            <button
              type='button'
              className={`btn btn-block d-flex align-items-center fixed-width-lg btn-203-66 mb-5 ${values.gender === 'female' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => handleButtonClick('female')}
            >
              <span className='font-size-20 mb-2 text-center'>Female</span>
            </button>
          </div>
        </div>
        <div className='row'>
          <div className='col d-flex justify-content-center'>
            <button
              type='button'
              className={`btn btn-block d-flex align-items-center fixed-width-lg btn-203-66 mb-5 ${values.gender === 'notSure' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => handleButtonClick('notSure')}
            >
              <span className='font-size-20 mb-2 text-center'>Prefer not to say</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Step14 }
