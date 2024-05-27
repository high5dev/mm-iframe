import { FC, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Step11 } from './steps/Step11'
import { Step12 } from './steps/Step12'
import { Step13 } from './steps/Step13'
import { Step14 } from './steps/Step14'
import { Step15 } from './steps/Step15'
import { Step16 } from './steps/Step16'
import { Step17 } from './steps/Step17'
import { Step18 } from './steps/Step18'
import { StepperComponent } from '../../../../_metronic/assets/ts/components'
import { Form, Formik, FormikValues } from 'formik'
import { createAccountSchemas, ICreateAccount, inits } from './CreateAccountWizardHelper'
import { Toolbar } from '../../../../_metronic/layout/components/toolbar/Toolbar'
import { Content } from '../../../../_metronic/layout/components/Content'
import './steps/styles.scss'

const Horizontal: FC = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const [stepper, setStepper] = useState<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0])
  const [initValues] = useState<ICreateAccount>(inits)
  const [isSubmitButton, setSubmitButton] = useState(false)
  const [ageGroup, setAgeGroup] = useState('');

  const navigate = useNavigate();

  const loadStepper = () => {
    setStepper(StepperComponent.createInsance(stepperRef.current as HTMLDivElement))
  }

  const prevStep = () => {
    if (!stepper) {
      return
    }

    stepper.goPrev()

    setCurrentSchema(createAccountSchemas[stepper.currentStepIndex - 1])

    setSubmitButton(stepper.currentStepIndex === stepper.totalStepsNumber)
  }


  const submitStep = (values: ICreateAccount, actions: FormikValues) => {
    if (!stepper) {
      return
    }

    if (stepper.currentStepIndex !== stepper.totalStepsNumber) {
      console.log(values)
      console.log(stepper)
      stepper.goNext()
    } else {
      alert(values.customerName + '`s result will sent to' + values.customerEmail + ".After Form submitted")
      navigate('/api-to-haut')
      setTimeout(() => {
        navigate('/skin-analysis')
      }, 5000);
      // stepper.goto(1)
      actions.resetForm()
    }

    setSubmitButton(stepper.currentStepIndex === stepper.totalStepsNumber)

    console.log(values);

    setCurrentSchema(createAccountSchemas[stepper.currentStepIndex - 1])
  }

  useEffect(() => {
    if (!stepperRef.current) {
      return
    }

    loadStepper()
  }, [stepperRef])

  return (
    <>
      {/* <Toolbar /> */}
      {/* <Content> */}
        <div className=''>
          {stepper?.currentStepIndex === 1 || stepper?.currentStepIndex === 2 ? (
            <button
              onClick={prevStep}
              type='button'
              className='btn btn-top-back btn-dark align-items-center p-0'
              data-kt-stepper-action='previous'
            >
              <span className='indicator-label font-size-12'>{'<'} Back</span>
            </button>
          ) : (
            <>
            <div
              hidden
              className='btn-top-back-hidden align-items-center'
            >
            </div>
            </>
          )}
          <div className=''>
            <div
              ref={stepperRef}
              className='stepper stepper-pills d-flex flex-column pt-5'
              id='kt_create_account_stepper'
            >
              <div className='stepper-nav mb-5'>
                <div className='stepper-item current' data-kt-stepper-element='nav'>
                  <div className='stepper-wrapper'>
                    <div className='stepper-icon w-15px h-15px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'></span>
                    </div>
                  </div>
                  <div className='stepper-line-horizontal w-10px'></div>
                  {/* <h3 className='stepper-title'>Name</h3> */}
                </div>

                <div className='stepper-item' data-kt-stepper-element='nav'>
                  <div className='stepper-wrapper'>
                    <div className='stepper-icon w-15px h-15px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'></span>
                    </div>
                  </div>
                  {/* <h3 className='stepper-title'>Email</h3> */}
                </div>

                <div className='stepper-item' data-kt-stepper-element='nav'>
                  <div className='stepper-wrapper'>
                    <div className='stepper-icon w-15px h-15px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'></span>
                    </div>
                  </div>
                  {/* <h3 className='stepper-title'>Age Group</h3> */}
                </div>

                <div className='stepper-item' data-kt-stepper-element='nav'>
                  <div className='stepper-wrapper'>
                    <div className='stepper-icon w-15px h-15px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'></span>
                    </div>
                  </div>
                  {/* <h3 className='stepper-title'>Gender</h3> */}
                </div>

                <div className='stepper-item' data-kt-stepper-element='nav'>
                  <div className='stepper-wrapper'>
                    <div className='stepper-icon w-15px h-15px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'></span>
                    </div>
                  </div>
                  {/* <h3 className='stepper-title'>Pregnancy</h3> */}
                </div>

                <div className='stepper-item' data-kt-stepper-element='nav'>
                  <div className='stepper-wrapper'>
                    <div className='stepper-icon w-15px h-15px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'></span>
                    </div>
                  </div>
                  {/* <h3 className='stepper-title'>Skin Type</h3> */}
                </div>

                <div className='stepper-item' data-kt-stepper-element='nav'>
                  <div className='stepper-wrapper'>
                    <div className='stepper-icon w-15px h-15px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'></span>
                    </div>
                  </div>
                  {/* <h3 className='stepper-title'>Skin Sensitivity</h3> */}
                </div>

                <div className='stepper-item' data-kt-stepper-element='nav'>
                  <div className='stepper-wrapper'>
                    <div className='stepper-icon w-15px h-15px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'></span>
                    </div>
                  </div>
                  {/* <h3 className='stepper-title'>Take photos</h3> */}
                </div>
              </div>

              <Formik validationSchema={currentSchema} initialValues={initValues} onSubmit={submitStep}>
                {() => (
                  <Form className='mx-auto mw-600px w-100 pt-15 pb-10' id='kt_create_account_form' placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>

                    <div className='current' data-kt-stepper-element='content'>
                      <Step11 />
                    </div>

                    <div data-kt-stepper-element='content'>
                      <Step12 />
                    </div>


                    <div data-kt-stepper-element='content'>
                      <Step13 />
                    </div>

                    <div data-kt-stepper-element='content'>
                      <Step14 />
                    </div>

                    <div data-kt-stepper-element='content'>
                      <Step15 />
                    </div>

                    <div data-kt-stepper-element='content'>
                      <Step16 />
                    </div>

                    <div data-kt-stepper-element='content'>
                      <Step17 />
                    </div>

                    <div data-kt-stepper-element='content'>
                      <Step18 />
                    </div>

                    <div className='mx-auto mw-600px w-100 pt-2 pb-10'>
                      <div className='mr-2 row button-alignment'>
                        {stepper?.currentStepIndex !== 1 && stepper?.currentStepIndex !== 2 ? (
                          <button
                            onClick={prevStep}
                            type='button'
                            className='btn btn-next-md btn-dark align-items-center'
                            data-kt-stepper-action='previous'
                          >
                            <span className='indicator-label font-size-20'>Back</span>
                          </button>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      {/* </Content> */}
    </>
  )
}

export { Horizontal }
