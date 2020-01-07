import React, { Component } from 'react';
import Annotation from 'react-image-annotation';
import ContainerWrapper from './ContainerWrapper';

class CustomAnnotation extends Component {
  state = {
    annotations: [],
    annotation: {},
    data: {},
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
    console.log(this.state.data);
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
    console.log(this.state.data);
  };

  render() {
    return (
      <div className="App">
        <Annotation
          src={this.props.screenshot.src}
          alt={this.props.screenshot.alt}
          annotations={this.state.annotations}
          type={this.state.type}
          value={this.state.annotation}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          renderEditor={() => (
            <ContainerWrapper
              onChange={this.onChange}
              annotation={this.state.annotation}
              description={this.description}
              title={this.title}
              onSubmit={this.onSubmit}
            />
          )}
        />
      </div>
    );
  }
}

export default CustomAnnotation;
