import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useUser } from '../../Context/RegistrationForm/UserProvider';
import { GoogleLogin } from 'react-google-login';

const GOOGLE_CLIENT_ID = '510913333166-572m5vph8k41aqifc8evkhksa5fl9kf8.apps.googleusercontent.com';

const SignupForm = ({ isFormVisible, toggleFormVisibility }) => {
  const navigate = useNavigate();
  const { updateUser } = useUser();

  const handleGoogleLogin = async (response) => {
    const { profileObj } = response;
    const { givenName, email, imageUrl } = profileObj;

    updateUser({ name: givenName, email, imageUrl });

    toggleFormVisibility();
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      {isFormVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded w-96">
            <Formik
              initialValues={{
                userName: '',
                email: '',
                password: '',
                confirmPassword: '',
              }}
              validationSchema={Yup.object({
                userName: Yup.string()
                  .max(15, 'Must be 15 characters or less')
                  .required('Required'),
                email: Yup.string().email('Invalid email address').required('Required'),
                password: Yup.string()
                  .min(8, 'Password must be at least 8 characters')
                  .required('Required'),
                confirmPassword: Yup.string()
                  .oneOf([Yup.ref('password'), null], 'Passwords must match')
                  .required('Required'),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  const registrationError = false;

                  if (registrationError) {
                  } else {
                    updateUser({ name: values.userName, email: values.email });
                    toggleFormVisibility();
                    navigate('/');
                  }

                  setSubmitting(false);
                }, 400);
              }}
              validateOnMount
            >
              {({ isValid }) => (
                <Form>

                  <div className="mb-4">
                    <label htmlFor="userName" className="block mb-2 text-sm font-semibold text-gray-700">
                      Username:
                    </label>
                    <Field name="userName" type="text" className="w-full border p-2 mb-4" />
                    {isValid && <div className='text-green-600 text-sm'>Good</div>}
                    <ErrorMessage name="userName" className="text-red-600 text-sm" component='div'/>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-700">
                      Email:
                    </label>
                    <Field name="email" type="email" className="w-full border p-2 mb-4" />
                    {isValid && <div className='text-green-600 text-sm'>Good</div>}
                    <ErrorMessage name="email" className="text-red-600 text-sm" component='div'/>
                  </div>

                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-semibold text-gray-700">Password:</label>
                    <Field name="password" type="password" className="w-full border p-2 mb-4" />
                    {isValid && <div className='text-green-600 text-sm'>Good</div>}
                    <ErrorMessage name="password" className="text-red-600 text-sm" component='div'/>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block mb-2 text-sm font-semibold text-gray-700">
                      Confirm Password
                    </label>
                    <Field name="confirmPassword" type="password" className="w-full border p-2 mb-4" />
                    {isValid && <div className='text-green-600 text-sm'>Good</div>}
                    <ErrorMessage name="confirmPassword" className="text-red-600 text-sm" component='div'/>
                  </div>

                  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    submit
                  </button>

                </Form>
              )}
            </Formik>
            <GoogleLogin
              clientId={GOOGLE_CLIENT_ID}
              buttonText="Sign in with Google"
              onSuccess={handleGoogleLogin}
              onFailure={() => {
                console.log('Google Sign-In failed.');
              }}
              cookiePolicy={'single_host_origin'}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupForm;

