import { Formik, FormikHelpers } from 'formik';
import { useContext } from 'react';

import { signupSchema } from '../../../common/validation/signin';
import { InputEmail, LinkTo, SignInBtn } from '../../styles';
import { StorageContext } from '../../../common/context/storage';
import { useLoginByEmailMutation } from '../../../../store/apis/sessionAPI';

export const SignInForm = () => {
  const [login, { data }] = useLoginByEmailMutation();
  const { updateActiveEmail } = useContext(StorageContext);

  const onSubmit = (
    values: {
      email: string;
      isPrivacyAccepted: boolean;
    },
    formikHelpers: FormikHelpers<{
      email: string;
      isPrivacyAccepted: boolean;
    }>,
  ) => {
    login({
      checkbox: values.isPrivacyAccepted,
      email: values.email,
    });
    updateActiveEmail(values.email);

    formikHelpers.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ email: '', isPrivacyAccepted: false }}
        validationSchema={signupSchema}
        onSubmit={onSubmit}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form id="signupForm" className="w-full" onSubmit={handleSubmit}>
            <div className="w-full px-7">
              <InputEmail
                type="email"
                id="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && (
                <p className="text-red-500 ml-4">{errors.email}</p>
              )}
            </div>
            <div className="flex mt-2 w-full items-center flex-col">
              <div>
                <input
                  type="checkbox"
                  id="isPrivacyAccepted"
                  name="isPrivacyAccepted"
                  checked={values.isPrivacyAccepted}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                />
                <label className="ml-2" htmlFor="privacyCheckbox">
                  I agree to the{' '}
                  <LinkTo
                    href="https://www.didactic.ai/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer">
                    Privacy Policy
                  </LinkTo>
                </label>
              </div>
              {errors.isPrivacyAccepted && touched.isPrivacyAccepted && (
                <p className="text-red-500">{errors.isPrivacyAccepted}</p>
              )}
            </div>
            <div className="flex w-full justify-center">
              <SignInBtn type="submit" id="submit" disabled={isSubmitting}>
                Submit
              </SignInBtn>
            </div>
            {data?.success && (
              <div className="flex w-full justify-center">
                <p className="text-lg text-blue-500 mt-3 font-normal">
                  Please check your email to continue.
                </p>
              </div>
            )}
          </form>
        )}
      </Formik>
    </>
  );
};
