import * as yup from 'yup';
export const validationSchema = yup.object().shape({
    name: yup
   .string()
   .matches(/^[a-zA-Z]/, 'Only letters')
   .required('Username is required')
   .min(4, 'Username must be at least 4 characters')
   .max(20, 'Username must not exceed 20 characters'),

   email: yup
   .string()
   .required('Email is required')
   .email('Invalid email address'),

   country: yup
   .string()
   .matches(/^[a-zA-Z0-9_]+$/, 'Only letters, numbers, and underscores are allowed')
   .required('Username is required'),
   
   city: yup
   .string()
   .matches(/^[a-zA-Z0-9_]+$/, 'Only letters, numbers, and underscores are allowed')
   .required('Username is required'),

   password: yup
   .string()
   .required('Password is required')
   .min(8, 'Password must be at least 8 characters')
   .matches(
     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
     'Password must contain at least one uppercase letter, one lowercase letter, and one digit'
   ),

   confirmPassword: yup
   .string()
   .oneOf([yup.ref('password'), null], 'passwords didnot match')
   .required('Confirm Password is required'),
});