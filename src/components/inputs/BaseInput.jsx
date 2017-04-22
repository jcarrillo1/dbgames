import React from 'react';
import {
  FormGroup,
  FormControl,
  Col,
  ControlLabel,
} from 'react-bootstrap';

const BaseInput = (field) => (
  <FormGroup controlId={field.input.name}>
    <Col componentClass={ControlLabel} sm={3}>
      {field.label}
    </Col>
    <Col sm={7}>
      <FormControl type={field.type} {...field.input} readOnly={field.readOnly} />
    </Col>
  </FormGroup>
);

export default BaseInput;
