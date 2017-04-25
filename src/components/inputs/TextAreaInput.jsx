import React from 'react';
import {
  FormGroup,
  FormControl,
  Col,
  ControlLabel,
} from 'react-bootstrap';

const TextAreaInput = (field) => (
  <FormGroup controlId={field.input.name}>
    <Col componentClass={ControlLabel} sm={field.labelSize || 3}>
      {field.label}
    </Col>
    <Col sm={field.inputSize || 7}>
      <FormControl componentClass="textarea" {...field.input} readOnly={field.readOnly} />
    </Col>
  </FormGroup>
);

export default TextAreaInput;
