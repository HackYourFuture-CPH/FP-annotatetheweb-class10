import React, { Component } from 'react';
import Annotation from 'react-image-annotation';
import EditorWrapper from './EditorWrapper';

class CustomAnnotation extends Component {
  state = {
    annotations: [],
    annotation: {},
    data: {},
  };

  onChange = (annotation, value = {}) => {
    if (value.title !== undefined && value.description !== undefined) {
      this.setState({
        annotation,
        data: {
          title: value.title,
          description: value.description,
          id: Math.random() * 1000,
        },
      });
    } else {
      this.setState({ annotation });
    }
  };

  onSubmit = () => {
    const { annotation, annotations, data } = this.state;
    this.setState(
      {
        annotation: {},
        annotations: annotations.concat({
          geometry: annotation.geometry,
          data: { ...data },
        }),
      },
      // () => {
      //   localStorage.setItem(
      //     'annotations',
      //     JSON.stringify(this.state.annotations),
      //   );
      // },
    );

    this.props.onSave({
      data: annotation.geometry,
      title: data.title,
      description: data.description,
    });
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
          renderContent={({ annotation }) => {
            const { geometry } = annotation;
            return (
              <div
                key={annotation.data.id}
                style={{
                  background: 'black',
                  color: 'white',
                  padding: 10,
                  position: 'absolute',
                  fontSize: 12,
                  left: `${geometry.x}%`,
                  top: `${geometry.y + geometry.height}%`,
                }}
              >
                <div>{annotation.data.title}</div>
                {annotation.data && annotation.data.text}
              </div>
            );
          }}
          renderEditor={() => (
            <EditorWrapper
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
