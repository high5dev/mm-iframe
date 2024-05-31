
import { FC, useState } from 'react'
import { KTIcon } from '../../../../../_metronic/helpers'
import { ErrorMessage, Field } from 'formik'
import { toAbsoluteUrl } from '../../../../../_metronic/helpers'
import "./styles.scss"

interface Step18Props {
  prevStep: () => void;
}

const Step18: FC<Step18Props> = ({ prevStep }) => {

  const [isChecked, setIsChecked] = useState(false)

  const checkHandler = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className='w-100 background-image-container'
      style={{ backgroundImage: `url('${toAbsoluteUrl('media/minimalist/image 16.png')}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Overlay with reduced opacity */}
      <div className='overlay' style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgb(255 255 255 / 70%)' }}></div>
      <div className='content position-relative' style={{ zIndex: 1 }}>
        <a
          href="#"
          onClick={prevStep}
          className='mb-5 d-flex justify-content-end'
        >
          <img alt='Logo' src={toAbsoluteUrl('media/minimalist/close.png')}
            className="img-42-42" />
        </a>
        <div className='pb-10 pb-lg-15'>
          <h2 className='text-center font-size-16'>
            How to take your picture for skin analysis?
          </h2>
        </div>

        <div className='fv-row' style={{ padding: "10px" }}>
          <div className='row'>
            <div className='col-md-12'>
              <span
                className='d-flex align-items-center mb-10'
              >
                <img alt='Logo' src={toAbsoluteUrl('media/camera-guide/image 14.png')}
                  className='img-63-66' /> &nbsp;&nbsp;&nbsp;
                <span className='d-block text-start' style={{ padding: "15px" }}>
                  <span className='font-size-16 d-block mb-2'>Take a natural picture</span>
                  <span className='font-size-12'>
                    Remove make-up. Take-off your glasses. Pull your hair back & tie it.
                  </span>
                </span>
              </span>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <span
                className='d-flex align-items-center mb-10'
              >
                <img alt='Logo' src={toAbsoluteUrl('media/camera-guide/image 15.png')}
                  className='img-63-66' /> &nbsp;&nbsp;&nbsp;
                <span className='d-block text-start' style={{ padding: "15px" }}>
                  <span className='font-size-16 d-block  mb-2'>Ensure it's a well-list face</span>
                  <span className='font-size-12 '>
                    Enhance the accuracy of results by clicking the picture in natural light or well-lit space
                  </span>
                </span>
              </span>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <span
                className='d-flex align-items-center mb-10'
              >
                <img alt='Logo' src={toAbsoluteUrl('media/camera-guide/image 12.png')}
                  className='img-63-66' /> &nbsp;&nbsp;&nbsp;
                <span className='d-block text-start' style={{ padding: "15px" }}>
                  <span className='font-size-16 d-block  mb-2'>Align your face</span>
                  <span className='font-size-12 '>
                    Place your face inside the outline
                  </span>
                </span>
              </span>
            </div>
          </div>
          <div className='d-flex flex-stack'>

            <div className='d-flex'>
              <label className='form-check form-check-sm form-check-custom form-check-solid me-5'>
                <Field type="checkbox" name="termsAccept" />
                <div className='form-check-label font-size-9 text-dark'>
                  By clicking the box and clicking the “Proceed” button below, I agree to the &nbsp;
                  <span className='text-decoration-underline'>Minimalist’s terms & Conditions</span>,
                  and I expressly consent to the scanning and save my image, face, facial geometry, and biometric data.
                </div>
              </label>
            </div>
          </div>

          <div className='mt-10 row justify-content-center'>
            <button type='submit' className='btn btn-md btn-primary w-203 h-55 rounded-0'>
              <span className='indicator-label font-size-20'>Proceed
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Step18 }
