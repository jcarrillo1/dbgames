import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, FormGroup, Col, Button } from 'react-bootstrap';
import BaseInput from '../inputs/BaseInput';


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
})(SignUp);
