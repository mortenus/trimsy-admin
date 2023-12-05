import { withFormik } from 'formik';
import { axios } from 'core';

import validateForm from 'utils/validate';
import ContactFormOverflow from '../components';

interface TValues {
  fullname: string;
  email: string;
  description: string;
}

const ContactFormOverflowContainer = withFormik({
  mapPropsToValues: () => ({
    fullname: '',
    email: '',
    description: '',
  }),
  validate: (values: TValues) => {
    const errors = {};

    validateForm({ values, errors });

    return errors;
  },
  handleSubmit: (values: TValues, { setSubmitting, setStatus, resetForm }) => {
    setSubmitting(true);

    axios
      .post('https://secure.trimsy.org/form', values)
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

  displayName: 'ContactFormOverflow',
})(ContactFormOverflow);

export default ContactFormOverflowContainer;
