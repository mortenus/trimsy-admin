import React from 'react';
import { Form, Input } from 'antd';

import { Button, Block, FormField } from 'components';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
// import validateField from 'utils/validateAuth';
import Link from 'next/link';

import styles from './LoginForm.module.scss';

const onFinish = (values) => {
  console.log('Received values of form: ', values);
};

const LoginForm = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit, isValid, isSubmitting } =
    props;

  return (
    <div>
      <div className={styles.intro}>
        <h2 className={styles[`intro__title`]}>Log in</h2>
        <p className={styles[`intro__description`]}>Please, write your email and password</p>
      </div>
      <section className={styles[`form`]}>
        <Form
          onSubmit={handleSubmit}
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}>
          <FormField
            name="email"
            placeholder="E-Mail"
            Icon={<MailOutlined className="site-form-item-icon" />}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
            errors={errors}
            values={values}
          />
          <FormField
            name="password"
            placeholder="Password"
            type="password"
            Icon={<LockOutlined className="site-form-item-icon" />}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
            errors={errors}
            values={values}
          />
          <Form.Item>
            {isSubmitting && !isValid && <span>Error!</span>}
            <Button
              disabled={isSubmitting && 'black'}
              onClick={handleSubmit}
              type="primary"
              size="small">
              Log in
            </Button>
            {/* <Button onClick={handleGoogleSignIn} type="primary" size="small">
              Log in with Google
            </Button> */}
          </Form.Item>
        </Form>
      </section>
    </div>
  );
};

export default LoginForm;
