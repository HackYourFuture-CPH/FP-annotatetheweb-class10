import React, { Component } from 'react';
import Annotation from 'react-image-annotation';
import EditorWrapper from './EditorWrapper';

class CustomAnnotation extends Component {
  
  render() {
    return (
      <div className="App">
        <Annotation
          src={this.props.screenshot.src}
          alt={this.props.screenshot.alt}
          annotations={this.props.annotations}
          type={this.props.type}
          value={this.props.annotation}
          onChange={this.props.onChange}
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
              onChange={this.props.onChange}
              annotation={this.props.annotation}
              description={this.description}
              title={this.title}
              onSubmit={this.props.onSubmit}
            />
          )}
        />
      </div>
    );
  }
}

export default CustomAnnotation;
