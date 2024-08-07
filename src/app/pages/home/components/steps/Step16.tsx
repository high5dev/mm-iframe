
import { FC, useState } from 'react'
import { KTIcon } from '../../../../../_metronic/helpers'
import { ErrorMessage, Field, useFormikContext } from 'formik'
import { toAbsoluteUrl } from '../../../../../_metronic/helpers'
import './styles.scss'

const Step16: FC = () => {

  const { setFieldValue, handleSubmit, values } = useFormikContext<{ skinType: string }>();

  const handleButtonClick = (value: string) => {
    setFieldValue('skinType', value);
    setTimeout(() => {
      handleSubmit();
    }, 0);
  };

  return (
    <div className='w-100 mb-120 container'>
      <div className='pb-7 pb-lg-15 text-center font-size-24'>
        Your Skin Type?
      </div>

      <div className='fv-row'>
        <div className='row'>
          <div className='col d-flex justify-content-center'>
            <button
              type='button'
              className={`btn btn-block d-flex align-items-center fixed-width-xlg mb-5 ${values.skinType === 'Dry' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => handleButtonClick('Dry')}
            >
              <img alt='Logo' src={toAbsoluteUrl('media/skin-types/icon-1.jpg')} className='h-78px w-82px' />
              <span className='d-flex d-flex align-items-center mr-1 w-100 font-size-20 mb-2 justify-content-center '>Dry</span>
            </button>
          </div>
        </div>
        <div className='row'>
          <div className='col d-flex justify-content-center'>
            <button
              type='button'
              className={`btn btn-block d-flex align-items-center fixed-width-xlg mb-5 ${values.skinType === 'Normal' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => handleButtonClick('Normal')}
            >
              <img alt='Logo' src={toAbsoluteUrl('media/skin-types/icon-2.jpg')} className='h-78px w-82px' />
              <span className='d-flex d-flex align-items-center mr-1 w-100 font-size-20 mb-2 justify-content-center '>Normal</span>
            </button>
          </div>
        </div>
        <div className='row'>
          <div className='col d-flex justify-content-center'>
            <button
              type='button'
              className={`btn btn-block d-flex align-items-center fixed-width-xlg mb-5 ${values.skinType === 'combination' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => handleButtonClick('combination')}
            >
              <img alt='Logo' src={toAbsoluteUrl('media/skin-types/icon-3.jpg')} className='h-78px w-82px' />
              <span className='d-flex d-flex align-items-center mr-1 w-100 font-size-20 mb-2 justify-content-center '>Oily / Combination</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Step16 }
