import * as Yup from 'yup'

export interface ICreateAccount {
  ageGroup: string
  accountTeamSize: string
  accountName: string
  accountEmail: string
  genderType: string
  pregnancy: string
  skinType: string
  skinSensible: string
  accountPlan: string
  // businessName: string
  termsAccept: false
  // businessDescriptor: string
  // businessType: string
  // businessDescription: string
  // businessEmail: string
  // nameOnCard: string
  // cardNumber: string
  // cardExpiryMonth: string
  // cardExpiryYear: string
  // cardCvv: string
  // saveCard: string
}

const createAccountSchemas = [
  Yup.object({
    accountName: Yup.string().required().label('Account Name'),
  }),
  Yup.object({
    accountEmail: Yup.string().email('Invalid email').required().label('Account Email'),
  }),
  Yup.object({
    ageGroup: Yup.string().required().label('Age group'),
  }),
  Yup.object({
    genderType: Yup.string().required().label('Gender'),
  }),
  Yup.object({
    pregnancy: Yup.string().required().label('Pregnancy'),
  }),
  Yup.object({
    skinType: Yup.string().required().label('Skin Type'),
  }),
  Yup.object({
    skinSensible: Yup.string().required().label('Skin Sensitivity'),
  }),
  Yup.object({
    termsAccept: Yup.bool().oneOf([true],'You need to accept the terms and conditions').required().label('Accept'),
  }),
  // Yup.object({
  //   businessName: Yup.string().required().label('Business Name'),
  //   businessDescriptor: Yup.string().required().label('Shortened Descriptor'),
  //   businessType: Yup.string().required().label('Corporation Type'),
  //   businessEmail: Yup.string().required().label('Contact Email'),
  // }),
  // Yup.object({
  //   nameOnCard: Yup.string().required().label('Name On Card'),
  //   cardNumber: Yup.string().required().label('Card Number'),
  //   cardExpiryMonth: Yup.string().required().label('Expiration Month'),
  //   cardExpiryYear: Yup.string().required().label('Expiration Year'),
  //   cardCvv: Yup.string().required().label('CVV'),
  // }),
]

const inits: ICreateAccount = {
  ageGroup: '',
  accountTeamSize: '50+',
  accountName: '',
  accountEmail: '',
  accountPlan: '1',
  genderType: '',
  pregnancy: '',
  skinType: '',
  skinSensible: '',
  termsAccept: false,
  // businessName: 'Keenthemes Inc.',
  // businessDescriptor: 'KEENTHEMES',
  // businessType: '1',
  // businessDescription: '',
  // businessEmail: 'corp@support.com',
  // nameOnCard: 'Max Doe',
  // cardNumber: '4111 1111 1111 1111',
  // cardExpiryMonth: '1',
  // cardExpiryYear: '2025',
  // cardCvv: '123',
  // saveCard: '1',
}

export {createAccountSchemas, inits}
