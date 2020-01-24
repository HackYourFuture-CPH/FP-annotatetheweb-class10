import React from 'react';
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