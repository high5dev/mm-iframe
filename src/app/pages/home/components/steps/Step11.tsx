import React, { FC } from 'react'
import { KTIcon } from '../../../../../_metronic/helpers'
import { ErrorMessage, Field } from 'formik'
import Slider from "react-slick";
import './styles.scss'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Step11: FC = () => {
  return (
    <div className='w-100 container'>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
      <div className='pb-10 pb-lg-15'>
        <h2 className='text-center font-size-24'>Hi there,<br /><br />Please share your Name?</h2>
      </div>

      <div className='d-flex justify-content-center mb-10 fv-row'>
        <Field
          type='text'
          className='rounded-input-box form-control form-control-lg border-bottom-only justify-content-center'
          name='name'
          placeholder="Name"
        />
        {/* <div className='text-danger mt-2'>
          <ErrorMessage name='name' />
        </div> */}
      </div>
      <div className='mb-10 row button-alignment'>
        <button type='submit' className='btn btn-lg btn-primary btn-next-lg align-items-center'>
          <span className='indicator-label font-size-20'>Submit
          </span>
        </button>
      </div>
    </div>
  )
}

export { Step11 }
