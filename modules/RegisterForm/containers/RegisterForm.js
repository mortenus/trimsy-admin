import { withFormik } from 'formik';
import { withRouter } from 'next/router';

import RegisterForm from '../components/RegisterForm';
import { v4 as uuidv4 } from 'uuid';

// import { userActions } from 'redux/actions';
import validateFunc from 'utils/validate';
import axios from 'core/blog/axios';
import { useRouter } from 'next/router';

// import store from 'redux/store';

const RegisterFormContainer = withFormik({
  mapPropsToValues: () => ({
    email: '',
    fullname: '',
    password: '',
    password_2: '',
  }),
  validate: (values) => {
    const errors = {};

    validateFunc({ isAuth: false, values, errors });

    return errors;
  },
  handleSubmit: (values, { setSubmitting, props }) => {
    const { router } = props;

    axios
      .post('http://localhost:3001/user/signup', values)
      .then(() => {
        console.log('Success');
        const submissionToken = uuidv4();

        localStorage.setItem('formSubmissionToken', submissionToken);
        localStorage.setItem('formSubmissionEmail', values.email);

        console.log('REroute');
        router.push(`/auth/signup/success?authToken=${submissionToken}`);
      })
      .catch(() => {
        // setSubmitting(false);
      });
    // store
    //   .dispatch(userActions.fetchUserRegister(values))
    //   .then(({ status }) => {
    //     if (status === 'success') {
    //       setTimeout(() => {
    //         props.history.push('/');
    //       }, 50);
    //     }
    //     setSubmitting(false);
    //   })
    //   .catch(() => {
    //     setSubmitting(false);
    //   });
  },
  displayName: 'RegisterForm',
})(RegisterForm);

export default withRouter(RegisterFormContainer);
