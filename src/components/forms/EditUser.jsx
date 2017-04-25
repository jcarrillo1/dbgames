import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, FormGroup, Col, Button } from 'react-bootstrap';
import BaseInput from '../inputs/BaseInput';
import SelectInput from '../inputs/SelectInput';

const EditUser  = (props) => (
  <Form horizontal onSubmit={props.handleSubmit(props.onSubmit)}>
    <Field
      name="email"
      label="Email"
      type="text"
      component={BaseInput}
      readOnly
    />
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
      name="role"
      label="Role"
      type="select"
      component={SelectInput}
      options={[{
        label: 'Admin',
        value: 'admin',
      }, {
        label: 'Employee',
        value: 'employee',
      }, {
        label: 'Customer',
        value: 'customer',
      }]}
    />
    <FormGroup>
      <Col smOffset={3} sm={7}>
        <Button type="submit">
          Update
        </Button>
      </Col>
    </FormGroup>
  </Form>
);

export default reduxForm({
  form: 'editUser',
})(EditUser);
