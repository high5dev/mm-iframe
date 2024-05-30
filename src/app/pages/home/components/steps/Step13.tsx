
import { FC } from 'react'
import { ErrorMessage, Field, useFormikContext } from 'formik'
import './styles.scss'

const Step13: FC = () => {

  const { setFieldValue, handleSubmit, values } = useFormikContext<{ age: string }>();

  const handleButtonClick = (value: string) => {
    setFieldValue('age', value, false);
    handleSubmit();
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
              <button
                type='button'
                className={`btn btn-block d-block align-items-center fixed-width ${values.age === 'below18' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => handleButtonClick('below18')}
              >
                <span className='font-size-20 mb-2 text-center'>Below 18</span>
              </button>
            </div>
            <div className='col-auto pb-8 rounded-2'>
              <button
                type='button'
                className={`btn btn-block d-block align-items-center fixed-width ${values.age === '18to24' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => handleButtonClick('18to24')}
              >
                <span className='font-size-20 mb-2 text-center'>18 to 24</span>
              </button>
            </div>
          </div>
          <div className='row g-0'>
            <div className='col pb-8 rounded-2'>
              <button
                type='button'
                className={`btn btn-block d-block align-items-center fixed-width ${values.age === '25to30' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => handleButtonClick('25to30')}
              >
                <span className='font-size-20 mb-2 text-center'>25 to 30</span>
              </button>
            </div>
            <div className='col-auto pb-8 rounded-2'>
              <button
                type='button'
                className={`btn btn-block d-block align-items-center fixed-width ${values.age === '30to34' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => handleButtonClick('30to34')}
              >
                <span className='font-size-20 mb-2 text-center'>30 to 34</span>
              </button>
            </div>
          </div>
          <div className='row g-0'>
            <div className='col pb-8 rounded-2'>
              <button
                type='button'
                className={`btn btn-block d-block align-items-center fixed-width ${values.age === '34to40' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => handleButtonClick('34to40')}
              >
                <span className='font-size-20 mb-2 text-center'>34 to 40</span>
              </button>
            </div>
            <div className='col-auto pb-8 rounded-2'>
              <button
                type='button'
                className={`btn btn-block d-block align-items-center fixed-width ${values.age === 'above40' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => handleButtonClick('above40')}
              >
                <span className='font-size-20 mb-2 text-center'>Above 40</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Step13 }
