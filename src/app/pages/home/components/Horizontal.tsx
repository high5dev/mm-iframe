import { FC, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types';
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
// import ProgressSteps from "./steps/StepProgress"
import { Toolbar } from '../../../../_metronic/layout/components/toolbar/Toolbar'
import { Content } from '../../../../_metronic/layout/components/Content'
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { StepIconProps } from '@mui/material';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import './steps/styles.scss'
import { right } from '@popperjs/core';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../../store/store"
import { setUser } from '../../../store/slices/custermInfoSlice';

const ColorlibConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 3,
    left: 'calc(-50% + 3px)',
    right: 'calc(50% + 3px)',

  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(0,0,0) 0%,rgb(0,0,0) 50%,rgb(0,0,0) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(0,0,0) 0%,rgb(0,0,0) 50%,rgb(0,0,0) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 5,
    border: 'solid 1px black',
    backgroundColor: '#ffffff',
    borderRadius: 1,
  },
}));

interface QontoStepIconRootProps {
  ownerState: { active?: boolean; completed?: boolean };
}

const ColorlibStepIconRoot = styled('div')<QontoStepIconRootProps>(({ ownerState }) => ({
  backgroundColor: '#ffffff',
  zIndex: 1,
  color: '#fff',
  width: 11,
  height: 11,
  border: 'solid 1px black',
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(0,0,0) 0%, rgb(0,0,0) 50%, rgb(0,0,0) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(0,0,0) 0%, rgb(0,0,0) 50%, rgb(0,0,0) 100%)',
  }),
}));

interface ColorlibStepIconProps extends StepIconProps {
  active?: boolean;
  completed?: boolean;
}
const ColorlibStepIcon: React.FC<ColorlibStepIconProps> = (props) => {
  const { active, completed, className } = props;

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {/* Icons can be added here */}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  className: PropTypes.string,
};


const steps = [
  'Step 1',
  'Step 2',
  'Step 3',
  'Step 4',
  'Step 5',
  'Step 6',
  'Step 7',
  'Step 8',
];

const Horizontal: FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [stepper, setStepper] = useState<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0])
  const [initValues] = useState<ICreateAccount>(inits)
  const [isSubmitButton, setSubmitButton] = useState(false)

  const customer = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleNext = (values: ICreateAccount, actions: FormikValues) => {
    if (activeStep === steps.length - 1) {
      dispatch(setUser({
        name: values.name,
        email: values.email,
        age: values.age,
        gender: values.gender,
        pregnancy: values.pregnancy,
        skinType: values.skinType,
        skinSensitivity: values.skinSensitivity
      }))
      navigate('/take-selfie',{ replace: true });
      actions.resetForm();
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setCurrentSchema(createAccountSchemas[activeStep + 1]);
      if (activeStep === 3 && values.gender === 'Male') {
        values.pregnancy = 'No';
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setCurrentSchema(createAccountSchemas[activeStep + 2]);
      }
    }
    setSubmitButton(activeStep === steps.length - 1);
  };

  const handleBack = () => {
    if (activeStep === 0) {
      alert("The previous step isn't implemented yet");
    } else if (activeStep === 5) {
      setActiveStep(3); // Set to Step 14
      setCurrentSchema(createAccountSchemas[3]); // Set schema for Step 14
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      setCurrentSchema(createAccountSchemas[activeStep - 1]);
    }
  };


  return (
    <>
      {/* <Toolbar /> */}
      <div className=''>
        {activeStep === 0 || activeStep === 1 ? (
          <button
            onClick={handleBack}
            type='button'
            className='btn btn-top-back align-items-center p-0'
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
        <Stepper className='mt-10 mb-10' alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
            </Step>
          ))}
        </Stepper>
        <Formik validationSchema={currentSchema} initialValues={initValues} onSubmit={handleNext}>
          {({ values }) => (
            <Form className='form-wrapper' placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              {activeStep === 0 && <Step11 />}
              {activeStep === 1 && <Step12 />}
              {activeStep === 2 && <Step13 />}
              {activeStep === 3 && <Step14 />}
              {activeStep === 4 && <Step15 />}
              {activeStep === 5 && <Step16 />}
              {activeStep === 6 && <Step17 />}
              {activeStep === 7 && <Step18 prevStep={handleBack} />}
              <div className='mx-auto mw-600px w-100 pt-2 pb-10'>
                <div className='mr-2 row button-alignment'>
                  {activeStep !== 0 && activeStep !== 1 && activeStep !== 7 ? (
                    <button
                      onClick={handleBack}
                      type='button'
                      className='btn-next-md align-items-center'
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
    </>
  )
}

export { Horizontal }
