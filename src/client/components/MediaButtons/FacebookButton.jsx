import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FacebookShareButton, FacebookIcon } from 'react-share';

const FacebookButton =({ url, title })=> {
    return (
      <div >
        {url && (
          <FacebookShareButton url={url} quote={title} >
            <FacebookIcon size={40} round />
          </FacebookShareButton>
        )}
      </div>
    );
  }
  export default FacebookButton;