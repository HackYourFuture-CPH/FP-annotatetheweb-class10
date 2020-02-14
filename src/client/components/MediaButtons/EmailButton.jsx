import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {    EmailShareButton, EmailIcon, } from 'react-share';

const EmailButton =({ url, title })=> {
    return (
      <div >
        {url && (
          < EmailShareButton url={url} quote={title} >
            <EmailIcon size={40} round />
          </EmailShareButton>
        )}
      </div>
    );
  }
  export default EmailButton;