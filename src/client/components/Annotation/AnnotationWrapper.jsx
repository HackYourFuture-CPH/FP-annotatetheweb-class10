import React, { useEffect, useState } from 'react';
import CustomAnnotation from './CustomAnnotation.component';
import { useInterval } from '../../hooks/useInterval';

const onSave = async (data, title, description, screenshotId) => {
  await fetch('http://localhost:3000/api/annotations/', {
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
  });
  return true;
};

async function getScreenshot(url, setLoading, callback) {
  const response = await fetch(url);
  // Check if image exists / is ready
  if (response.status === 200) {
    setLoading(false);
  }
  callback();
}

function AnnotationWrapper(props) {
  const backgroundImage = {
    src: props.screenshotURL,
    alt: 'sample screenshot',
  };
  const [loading, setLoading] = useState(true);
  const [numberOfTries, setnumberOfTries] = useState(0);
  const [errorMessage, seterrorMessage] = useState('');

  const delay = 1000;
  const maxNumberOfTries = 10;

  /**
   *
   * Using useInterval hook to pool for the screenshot to be ready from the server
   * Checking if the status is 200 (ok) and then we stop checking
   * While we check we add a loading component and if it fails to get ready
   * we display a message and the user can try loading the image again
   *
   *  */

  useInterval(
    () => {
      if (numberOfTries >= maxNumberOfTries) {
        setLoading(false);
        seterrorMessage('Screenshot took too long to load');
      }
      getScreenshot(props.screenshotURL, setLoading, () => {
        setnumberOfTries(numberOfTries + 1);
      });
    },
    loading ? delay : null,
  );

  if (loading) {
    return <div>loading screenshot</div>;
  }

  if (errorMessage) {
    return (
      <div>
        {errorMessage}
        <button
          type="button"
          onClick={() => {
            seterrorMessage('');
            setnumberOfTries(0);
            setLoading(true);
          }}
        >
          Try loading it again
        </button>
      </div>
    );
  }

  return (
    <CustomAnnotation
      screenshot={backgroundImage}
      onSave={({ data, title, description }) =>
        onSave(data, title, description, props.screenshotId).then(props.onAnnotationSaved)
      }
      onChange={props.onChange}
      onSubmit={props.onSubmit}
      type={props.type}
      annotations={props.annotations}
      annotation={props.annotation}
      data={props.data}
    />
  );
}

export default AnnotationWrapper;
