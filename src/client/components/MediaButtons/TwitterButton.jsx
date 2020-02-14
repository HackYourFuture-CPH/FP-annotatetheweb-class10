import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {    TwitterShareButton, TwitterIcon } from 'react-share';

const TwitterButton =({ url, title })=> {
    return (
      <div >
        {url && (
          <TwitterShareButton url={url} quote={title} >
            <TwitterIcon size={40} round />
          </TwitterShareButton>
        )}
      </div>
    );
  }
  export default TwitterButton;










