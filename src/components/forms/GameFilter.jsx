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
      inputSize={2}
      name="title"
      label="Title"
      type="text"
      component={BaseInput}
    />
    <Field
      labelSize={2}
      inputSize={2}
      name="genre"
      label="Genre"
      type="text"
      component={BaseInput}
    />
    <Field
      labelSize={2}
      inputSize={2}
      name="subgenre"
      label="Subgenre"
      type="text"
      component={BaseInput}
    />
    <Field
      labelSize={2}
      inputSize={2}
      name="platform_abv"
      label="Platform"
      type="select"
      component={SelectInput}
      options={[{
        label: 'Select...',
        value: '',
      }, {
        label: 'Playstation 4',
        value: 'ps4',
      }, {
        label: 'Xbox One',
        value: 'xbox-one',
      }, {
        label: 'PC',
        value: 'pc',
      }, {
        label: 'Switch',
        value: 'switch',
      }]}
    />

    <FormGroup>
      <Col smOffset={2} sm={2}>
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
