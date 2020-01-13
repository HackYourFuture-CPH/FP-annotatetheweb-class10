import React from 'react';
import CustomAnnotation from './CustomAnnotation.component';

const backgroundImage = {
  src:
    'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  alt: 'sample screenshot',
};
const onSave = (data, title, description) => {
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
      fk_screenshot_id: 19,
    }),
  });
};

function ContainerWrapper() {
  return (
    <div>
      <CustomAnnotation
        screenshot={backgroundImage}
        onSave={({ data, title, description }) =>
          onSave(data, title, description)
        }
      />
    </div>
  );
}

export default ContainerWrapper;
