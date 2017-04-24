import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, FormGroup, Col, Button } from 'react-bootstrap';
import BaseInput from '../inputs/BaseInput';
import FileInput from '../inputs/FileInput';

const EditProduct  = (props) => (
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
      component={BaseInput}
    />
    <Field
      name="release_date"
      label="Release Date"
      type="date"
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
    <Field
      name="esrb"
      label="ESRB"
      type="text"
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
      name="subgenre"
      label="Subgenre"
      type="text"
      component={BaseInput}
    />
    <Field
      name="name"
      label="Platform"
      type="text"
      component={BaseInput}
      readOnly
    />
    <Field
      name="image"
      label="Image"
      type="text"
      component={FileInput}
    />
    <Field
      name="price"
      label="Price"
      type="number"
      component={BaseInput}
    />
    <Field
      name="quantity"
      label="Quantity"
      type="number"
      component={BaseInput}
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
  form: 'editProduct',
})(EditProduct);
