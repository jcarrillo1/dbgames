import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, FormGroup, Col, Button } from 'react-bootstrap';
import BaseInput from '../inputs/BaseInput';

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.first_name) {
    errors.first_name = 'Required';
  }
  if (!values.last_name) {
    errors.last_name = 'Required';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  if (!values.password_check ) {
    errors.password_check = 'Required';
  }
  if (values.password_check !== values.password) {
    errors.password_check = 'Passwords do not match';
  }
  return errors
}

const SignUp  = (props) => (
  <Form horizontal onSubmit={props.handleSubmit(props.onSubmit)}>
    <Field
      name="first_name"
      label="First Name"
      type="text"
      component={BaseInput}
    />
    <Field
      name="last_name"
      label="Last Name"
      type="text"
      component={BaseInput}
    />
    <Field
      name="email"
      label="Email"
      type="email"
      component={BaseInput}
    />
    <Field
      name="password"
      label="Password"
      type="password"
      component={BaseInput}
    />
    <Field
      name="password_check"
      label="Reenter Password"
      type="password"
      component={BaseInput}
    />
    <FormGroup>
      <Col smOffset={3} sm={7}>
        <Button type="submit">
          Sign Up
        </Button>
      </Col>
    </FormGroup>
  </Form>
);

export default reduxForm({
  form: 'signUp',
  validate,
})(SignUp);
