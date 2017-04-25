import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, FormGroup, Col, Button } from 'react-bootstrap';
import BaseInput from '../inputs/BaseInput';

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  return errors
}

const Login  = (props) => (
  <Form horizontal onSubmit={props.handleSubmit(props.onSubmit)}>
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
    <FormGroup>
      <Col smOffset={3} sm={7}>
        <Button type="submit">
          Login
        </Button>
      </Col>
    </FormGroup>
  </Form>
);

export default reduxForm({
  form: 'login',
  validate,
})(Login);
