import React from 'react';

export const AnnotationContext = React.createContext();

export class AnnotationProvider extends React.Component {
  state = {
    annotationId: null,
  };

  updateAnnotationId = (annotationId) => {
    this.setState((prevState) => ({ ...prevState, annotationId }))
  };

  componentDidMount() {

  }

  render() {
    // console.log('13from context', this.state.annotationId)
    return (
      <AnnotationContext.Provider
        value={{
          state: this.state,
          updateAnnotationId: this.updateAnnotationId
        }}
        
      >
        {this.props.children}
      </AnnotationContext.Provider>
    );
  }
}

export const AnnotationConsumer = AnnotationContext.Consumer;
