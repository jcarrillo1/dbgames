import React from 'react';
import { Field, reduxForm, FieldArray } from 'redux-form';
import { Form, FormGroup, Col, Button } from 'react-bootstrap';
import BaseInput from '../inputs/BaseInput';
import TextAreaInput from '../inputs/TextAreaInput';
import AddProducts from './AddProducts';

const validate = values => {
  const errors = {}
  if (!values.title) {
    errors.title = 'Required';
  }
  if (!values.description) {
    errors.description = 'Required';
  }
  if (!values.release_date) {
    errors.release_date = 'Required';
  }
  return errors
}

const ProductEntry  = (props) => (
  <Form horizontal onSubmit={props.handleSubmit(props.onSubmit)}>
    <Field
      name="title"
      label="Title"
      type="text"
      component={BaseInput}
    />
    <Field
      name="description"
      label="Description"
      type="text"
      component={TextAreaInput}
    />
    <Field
      name="release_date"
      label="Release Date"
      type="date"
      component={BaseInput}
    />
    <Field
      name="developer"
      label="Developer"
      type="text"
      component={BaseInput}
    />
    <Field
      name="publisher"
      label="Publisher"
      type="text"
      component={BaseInput}
    />
    <Field
      name="esrb"
      label="ESRB"
      type="text"
      component={BaseInput}
    />
    <Field
      name="genre"
      label="Genre"
      type="text"
      component={BaseInput}
    />
    <Field
      name="subgenre"
      label="Subgenre"
      type="text"
      component={BaseInput}
    />
    <FieldArray name="products" component={AddProducts}/>
    <FormGroup>
      <Col smOffset={3} sm={7}>
        <Button type="submit" disabled={props.sending}>
          Add Products
        </Button>
      </Col>
    </FormGroup>
  </Form>
);

export default reduxForm({
  form: 'productEntry',
  validate,
})(ProductEntry);
