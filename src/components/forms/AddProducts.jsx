import React from 'react';
import { Field } from 'redux-form';
import { FormGroup, Row, Col, Button } from 'react-bootstrap';
import BaseInput from '../inputs/BaseInput';

const AddProducts = ({
  fields,
  meta: { touched, error, submitFailed },
}) => (
  <div>

    {fields.map((product, index) =>
      <div key={index}>
        <Row>
          <Col smOffset={3} sm={4}><h4>Product #{index + 1}</h4></Col>
          <Col sm={3}>
            <Button
              bsStyle="danger"
              style={{float:'right'}}
              type="button"
              onClick={() => fields.remove(index)}
            >
              Remove Product
            </Button>
          </Col>
        </Row>

        <Field
          name={`${product}.platform_name`}
          type="text"
          component={BaseInput}
          label="Platform Name"
        />
        <Field
          name={`${product}.platform_abv`}
          type="text"
          component={BaseInput}
          label="Platform Abv."
        />
        <Field
          name={`${product}.price`}
          type="number"
          component={BaseInput}
          label="Price"
        />
        <Field
          name={`${product}.image`}
          type="text"
          component={BaseInput}
          label="Image"
        />
        <Field
          name={`${product}.quantity`}
          type="number"
          component={BaseInput}
          label="quantity"
        />
      </div>
    )}
    <FormGroup>
      <Col smOffset={3} sm={7}>
        <Button
          bsStyle="primary"
          type="button"
          onClick={() => fields.push({})}
        >
          Add a Product
        </Button>
      </Col>
    </FormGroup>
  </div>
)

export default AddProducts;
