import React, { Component } from 'react';
import './Annotation.css';

class EditorComponent extends Component {
  state = {
    data: {
      title: '',
      description: '',
    },
  };

  onChangeHandlerTitle = (event) => {
    const data = {
      title: event.target.value,
      description: this.state.data.description,
    };
    this.setState({
      data,
    });
    this.props.onChange(this.props.annotation, data);
  };

  onChangeHandlerDescription = (event) => {
    const data = {
      title: this.state.data.title,
      description: event.target.value,
    };
    this.setState({
      data,
    });
    this.props.onChange(this.props.annotation, data);
  };

  render() {
    return (
      <div className="annotation-form">
        <input
          type="title"
          onChange={this.onChangeHandlerTitle}
          placeholder="title"
        />
        <textarea
          rows="5"
          cols="50"
          onChange={this.onChangeHandlerDescription}
          placeholder="description"
        />
        <button type="submit" onClick={this.props.onSubmit}>
          Submit
        </button>
      </div>
    );
  }
}

function EditorWrapper(props) {
  const { geometry } = props.annotation;
  if (!geometry) return null;
  return (
    <div
      className="annotation-container"
      style={{
        position: 'absolute',
        left: `${geometry.x}%`,
        top: `${geometry.y + geometry.height}%`,
      }}
    >
      <EditorComponent
        annotation={props.annotation}
        onChange={props.onChange}
        onSubmit={props.onSubmit}
      />
    </div>
  );
}

export default EditorWrapper;
