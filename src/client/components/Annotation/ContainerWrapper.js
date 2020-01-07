import React from 'react';
import './Container.css';

const EditorComponent = (props) => {
  const onChangeHandler = (event) => {
    props.onChange(props.annotation, event.target.value);
  };
  const { onSubmit } = props;
  return (
    <div>
      <input type="text" onChange={onChangeHandler} placeholder="title" />
      <textarea
        rows="5"
        cols="50"
        // onChange={onChangeHandler}
        placeholder="description"
      />
      <button type="submit" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

function ContainerWrapper(props) {
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

export default ContainerWrapper;
