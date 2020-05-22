import React, { Component } from 'react';
import Annotation from 'react-image-annotation';
import EditorWrapper from './EditorWrapper';

class CustomAnnotation extends Component {
  constructor(props) {
    super(props);   

    this.state = {
      annotations: [],
      annotation: {},
      data: {},
    };    
  }

  componentDidMount() {
    const annotations = this.props.annotations.map(item => {
      const annotation = {};
      annotation.data = {
        id: item.annotation_id,
        description: item.description,
        title: item.title
      };
      annotation.geometry = item.area;
      return annotation;
    })
    this.setState({ annotations })
  }
  
  // state = {
  //   annotations: [],
  //   annotation: {},
  //   data: {},
  // };

  onChange = (annotation, value = {}) => {
    this.setState({
      annotation,
      data: {
        title: value.title,
        description: value.description,
        id: Math.random() * 1000,
      },
    });
  };

  onSubmit = (isClancelClicked) => {
    const { annotation, annotations } = this.state;
    let { data } = this.state;
    if (isClancelClicked === 'clicked') {
      data = {};
    }
    if (data.title || data.description) {
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
    } else {
      this.setState({
        annotation: {},
      });
    }

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
