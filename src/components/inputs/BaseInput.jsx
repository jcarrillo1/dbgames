import React from 'react';
import {
  FormGroup,
  FormControl,
  Col,
  ControlLabel,
} from 'react-bootstrap';

const BaseInput = (field) => (
  <FormGroup controlId={field.input.name}>
    <Col componentClass={ControlLabel} sm={field.labelSize || 3}>
      {field.label}
    </Col>
    <Col sm={field.inputSize || 7}>
      <FormControl type={field.type} {...field.input} readOnly={field.readOnly} />
    </Col>
  </FormGroup>
);

export default BaseInput;
