import * as Yup from 'yup';

export const signupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  isPrivacyAccepted: Yup.boolean().oneOf(
    [true],
    'Please accept Privacy Policy before start',
  ),
});
