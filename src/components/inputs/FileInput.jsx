import React, { Component } from 'react';
import { FormGroup, Col, ControlLabel } from 'react-bootstrap';
import Dropzone from 'react-dropzone';

class FileInput extends Component {
  onChange = (files) => {
    const file = files[0];
    const { onChange } = this.props.input;
    onChange(file);
  }

  render() {
    const { labelSize, inputSize, input, label } = this.props;
    return (
      <FormGroup controlId={input.name}>
        <Col componentClass={ControlLabel} sm={labelSize || 3}>
          {label}
        </Col>
        <Col sm={inputSize || 7}>
          <Dropzone className="dropzone-upload" onDrop={this.onChange}>
            {input.value && input.value.preview ?
              <img
                className="dropzone-image"
                alt=""
                id={input.name}
                src={input.value.preview}
              /> :
              input.value ?
              <img
                className="dropzone-image"
                alt=""
                id={input.name}
                src={input.value}
              />:
              <div> Drop a picture </div>}
          </Dropzone>
        </Col>
      </FormGroup>
    );
  }
}

export default FileInput;
