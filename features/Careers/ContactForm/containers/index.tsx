import { withFormik } from 'formik';
import { axios } from 'core';

import validateForm from 'utils/validate';
import ContactForm from '../components';

interface TValues {
  fullname: string;
  email: string;
  type: string;
}

const ContactFormWrapper = withFormik({
  mapPropsToValues: () => ({
    fullname: '',
    email: '',
    type: 'Career Opportunities',
  }),
  validate: (values: TValues) => {
    const errors = {};

    validateForm({ values, errors });

    return errors;
  },
  handleSubmit: (values: TValues, { setSubmitting, setStatus, resetForm }) => {
    console.log(values);
    setSubmitting(true);

    // remove unnecessary spacing the end
    if (values.fullname.match(/\s$/)?.[0]) {
      values.fullname = values.fullname.slice(0, -1);
    }

    axios
      .post('https://secure.trimsy.org/careers', values)
      //   .post('http://localhost:3001/careers', values)
      .then((res) => {
        setSubmitting(false);
        resetForm();
        setStatus('success');

        setTimeout(() => {
          setStatus(null);
        }, 5000);
      })
      .catch((err) => {
        setSubmitting(false);
        setStatus('fail');

        setTimeout(() => {
          setStatus(null);
        }, 5000);
      });
  },
  enableReinitialize: true,
  //   validateOnChange: false,

  displayName: 'ContactFormWrapper',
})(ContactForm);

export default ContactFormWrapper;
