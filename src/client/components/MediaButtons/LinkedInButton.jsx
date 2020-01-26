import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { LinkedinShareButton, LinkedinIcon } from 'react-share';

const LinkedButton =({ url, title })=> {
    return (
      <div >
        {url && (
          <LinkedinShareButton url={url} quote={title} >
            <LinkedinIcon size={40} round />
          </LinkedinShareButton>
        )}
      </div>
    );
  }
  export default LinkedButton;