import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, FormGroup, Col, Button } from 'react-bootstrap';
import BaseInput from '../inputs/BaseInput';
import SelectInput from '../inputs/SelectInput'
/**
 * title, genre, subgenre, max_price, min_price, platform_name, platform_abv
 */

const GameFilter  = (props) => (
  <Form onSubmit={props.handleSubmit(props.onSubmit)}>
    <Field
      labelSize={2}
      inputSize={8}
      name="search"
      label="Search Users"
      type="text"
      component={BaseInput}
    />
    <FormGroup>
      <Col sm={2}>
        <Button type="submit">
          Filter
        </Button>
      </Col>
    </FormGroup>
  </Form>
);

export default reduxForm({
  form: 'gameFilter',
})(GameFilter);
