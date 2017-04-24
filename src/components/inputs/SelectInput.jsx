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
      <FormControl
        componentClass="select"
        placeholder="select"
        {...field.input}
        readOnly={field.readOnly}
      >
        {field.options && field.options.length && field.options.map((option, index) =>
          <option key={index} value={option.value}>{option.label}</option>
        )}
      </FormControl>
    </Col>
  </FormGroup>
);

export default BaseInput;
