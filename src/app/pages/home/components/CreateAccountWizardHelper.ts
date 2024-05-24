import * as Yup from 'yup'

export interface ICreateAccount {
  ageGroup: string
  customerName: string
  customerEmail: string
  genderType: string
  pregnancy: string
  skinType: string
  skinSensible: string
  termsAccept: false
}

const createAccountSchemas = [
  Yup.object({
    customerName: Yup.string().required().label('Account Name'),
  }),
  Yup.object({
    customerEmail: Yup.string().email('Invalid email').required().label('Account Email'),
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
]

const inits: ICreateAccount = {
  ageGroup: '',
  customerName: '',
  customerEmail: '',
  genderType: '',
  pregnancy: '',
  skinType: '',
  skinSensible: '',
  termsAccept: false,
}

export {createAccountSchemas, inits}
