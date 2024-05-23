import { FC, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Step1 } from './steps/Step1'
import { Step2 } from './steps/Step2'
import { Step3 } from './steps/Step3'
import { Step4 } from './steps/Step4'
import { Step5 } from './steps/Step5'
import { Step11 } from './steps/Step11'
import { Step12 } from './steps/Step12'
import { Step13 } from './steps/Step13'
import { Step14 } from './steps/Step14'
import { Step15 } from './steps/Step15'
import { Step16 } from './steps/Step16'
import { Step17 } from './steps/Step17'
import { Step18 } from './steps/Step18'
import { KTIcon } from '../../../../_metronic/helpers'
import { StepperComponent } from '../../../../_metronic/assets/ts/components'
import { Form, Formik, FormikValues } from 'formik'
import { createAccountSchemas, ICreateAccount, inits } from './CreateAccountWizardHelper'
import { Toolbar } from '../../../../_metronic/layout/components/toolbar/Toolbar'
import { Content } from '../../../../_metronic/layout/components/Content'

const Horizontal: FC = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const [stepper, setStepper] = useState<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0])
  const [initValues] = useState<ICreateAccount>(inits)
  const [isSubmitButton, setSubmitButton] = useState(false)
  const [isSelfieButton, setSelfiButton] = useState(false)

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (checked: any) => {
    setIsChecked(checked);
  };

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
      stepper.goNext()
    } else {
      alert("Form" +values+ "will be submitted")
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
      <Content>
        <div className='card'>
          <div className='card-body'>
            <div
              ref={stepperRef}
              className='stepper stepper-links stepper-pills d-flex flex-column pt-15'
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
                  <Form className='mx-auto mw-600px w-100 pt-15 pb-10' id='kt_create_account_form' placeholder={undefined}>

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

                    <div className='mx-auto mw-600px w-100 pt-15 pb-10'>
                      <div className='mr-2 row'>
                        {/* <div className='col-md-4'></div> */}
                        {/* <div className='col-md-4'> */}
                        <button
                          onClick={prevStep}
                          type='button'
                          className='btn btn-lg btn-light-primary me-3'
                          data-kt-stepper-action='previous'
                        >
                          <KTIcon iconName='arrow-left' className='fs-4 me-1' />
                          Back
                        </button>
                        {/* </div> */}
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </Content>
    </>
  )
}

export { Horizontal }
