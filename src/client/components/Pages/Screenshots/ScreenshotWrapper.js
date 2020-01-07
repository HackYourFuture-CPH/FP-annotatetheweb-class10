import React from 'react';
import styled, { keyframes } from 'styled-components';
import Editor from './Editor';
const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const Container = styled.div`
  background: white;
  border-radius: 2px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin-top: 16px;
  transform-origin: top left;
  animation: ${fadeInScale} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`;

class EditorComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value }, () => { this.props.onChange(this.props.annotation, this.state) });
  };

  render() {
    console.log('props from wrapper', this.props)
    console.log('state from wrapper', this.state)

    const { annotation, onSubmit } = this.props;
    return (
      <div>
        <input
          type="text"
          onChange={this.onChangeHandler}
          name="title"
          placeholder="enter a title"
        ></input>
        <textarea
          rows="4"
          cols="50"
          onChange={this.onChangeHandler}
          name="description"
          placeholder="enter a description"
        ></textarea>
        <button onClick={onSubmit}>Submit</button>
      </div>
    );
  }
}

function ScreenshotWrapper(props) {
  const { geometry } = props.annotation;
  if (!geometry) return null;
  return (
    <Container
      className={props.className}
      style={{
        position: 'absolute',
        left: `${geometry.x}%`,
        top: `${geometry.y + geometry.height}%`,
        ...props.style,
      }}
    >
      <EditorComponent {...props} />
    </Container>
  );
}

Editor.defaultProps = {
  className: '',
  style: {},
};

export default ScreenshotWrapper;
