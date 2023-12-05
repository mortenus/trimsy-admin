import { withFormik } from 'formik';
import { axios } from 'core';

import validateForm from 'utils/validate';
import ContactForm from '../components';
import { v4 as uuidv4 } from 'uuid';

interface TValues {
  fullname: string;
  email: string;
  description: string;
  productType: string;
}

interface EnhancedFormProps {
  productType: string;
}

const ContactFormContainer = withFormik({
  mapPropsToValues: ({ productType }: EnhancedFormProps) => ({
    fullname: '',
    email: '',
    description: '',
    productType: productType,
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
      //   .post('http://localhost:3001/form', values)
      .then((res) => {
        setSubmitting(false);
        resetForm();
        setStatus('success');

        const submissionToken = uuidv4();

        localStorage.setItem('formSubmissionToken', submissionToken);
        localStorage.setItem('formSubmissionEmail', values.email);
        setSubmitting(false);

        window.location.href = `/development/services/${values.productType}/success?authToken=${submissionToken}`;

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

  displayName: 'ContactForm',
})(ContactForm);

export default ContactFormContainer;
