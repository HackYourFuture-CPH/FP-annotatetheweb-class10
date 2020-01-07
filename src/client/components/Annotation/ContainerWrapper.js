import React from 'react';
import './Container.css';

const EditorComponent = (props) => {
  const onChangeHandler = (event) => {
    console.log(event.target.value);
    props.onChange(props.annotation, event.target.value);
  };

  const { onSubmit } = props;

  return (
    <div>
      <input
        type="text"
        onChange={onChangeHandler}
        placeholder="enter a value"
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
    <ContainerWrapper
      className="container-div"
      style={{
        position: 'absolute',
        left: `${geometry.x}%`,
        top: `${geometry.y + geometry.height}%`,
      }}
    >
      <EditorComponent annotation={props.annotation} />
    </ContainerWrapper>
  );
}

export default ContainerWrapper;
