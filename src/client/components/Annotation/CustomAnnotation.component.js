import React, { Component } from 'react';
import Annotation from 'react-image-annotation';
import ContainerWrapper from './ContainerWrapper';

class CustomAnnotation extends Component {
  state = {
    annotations: [],
    annotation: {},
    data: {},
    image: this.props.screenshot,
  };

  onChange = (annotation, text) => {
    console.log(text);
    this.setState({
      annotation,
      data: {
        content: text,
        id: Math.random() * 1000,
      },
    });
  };

  onSubmit = () => {
    const { geometry } = this.state.annotation;
    this.setState({
      annotation: {},
      annotations: this.state.annotations.concat({
        geometry,
        data: this.state.data,
      }),
    });
  };

  render() {
    console.log(this.state.annotations);
    const { image } = this.state;
    return (
      <div className="App">
        <Annotation
          src={image.src}
          alt="Two pebbles anthropomorphized holding hands"
          annotations={this.state.annotations}
          type={this.state.type}
          value={this.state.annotation}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          renderEditor={() => (
            <ContainerWrapper
              onChange={this.onChange}
              annotation={this.state.annotation}
              onSubmit={this.onSubmit}
            />
          )}
        />
      </div>
    );
  }
}

export default CustomAnnotation;
