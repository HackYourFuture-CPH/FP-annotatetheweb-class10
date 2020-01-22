import React from 'react';
import CustomAnnotation from './CustomAnnotation.component';

const onSave = (data, title, description, screenshotId) => {
  fetch('http://localhost:3000/api/annotations/', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      description,
      area: data,
      fk_screenshot_id: screenshotId,
    }),
  }).catch((error) => {
    throw error;
  });
};

function AnnotationWrapper(props) {
  const backgroundImage = {
    src: props.screenshotURL,
    alt: 'sample screenshot',
  };

  return (
    <CustomAnnotation
      screenshot={backgroundImage}
      onSave={({ data, title, description }) =>
        onSave(data, title, description, props.screenshotId)
      }
    />
  );
}

export default AnnotationWrapper;
