import React from 'react';
import {
  FormGroup,
  FormControl,
  Col,
  ControlLabel,
  HelpBlock,
} from 'react-bootstrap';

const BaseInput = (field) => (
  <FormGroup controlId={field.input.name} validationState={field.meta && field.meta.touched && field.meta.error ? 'error' : null}>
    <Col componentClass={ControlLabel} sm={field.labelSize || 3}>
      {field.label}
    </Col>
    <Col sm={field.inputSize || 7}>
      <FormControl type={field.type} {...field.input} readOnly={field.readOnly} />
    </Col>
    {field.meta && field.meta.touched && field.meta.error && (
      <Col smOffset={field.labelSize || 3} sm={field.inputSize || 7}>
      <HelpBlock>{field.meta.error}</HelpBlock>
    </Col>
    )}
  </FormGroup>
);

export default BaseInput;
