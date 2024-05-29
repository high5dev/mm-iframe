import * as Yup from 'yup'

export interface ICreateAccount {
  age: string
  name: string
  email: string
  gender: string
  pregnancy: string
  skinType: string
  skinSensitivity: string
  termsAccept: false
}

const createAccountSchemas = [
  Yup.object({
    name: Yup.string().required().label('Account Name'),
  }),
  Yup.object({
    email: Yup.string().email('Invalid email').required().label('Account Email'),
  }),
  Yup.object({
    age: Yup.string().required().label('Age group'),
  }),
  Yup.object({
    gender: Yup.string().required().label('Gender'),
  }),
  Yup.object({
    pregnancy: Yup.string().required().label('Pregnancy'),
  }),
  Yup.object({
    skinType: Yup.string().required().label('Skin Type'),
  }),
  Yup.object({
    skinSensitivity: Yup.string().required().label('Skin Sensitivity'),
  }),
  Yup.object({
    termsAccept: Yup.bool().oneOf([true],'You need to accept the terms and conditions').required().label('Accept'),
  }),
]

const inits: ICreateAccount = {
  age: '',
  name: '',
  email: '',
  gender: '',
  pregnancy: '',
  skinType: '',
  skinSensitivity: '',
  termsAccept: false,
}

export {createAccountSchemas, inits}
