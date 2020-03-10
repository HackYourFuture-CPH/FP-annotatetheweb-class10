/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from 'react';
import ShareLink from '../ShareLink/ShareLink.component';
import MediaButtons from '../MediaButtons/MediaButtons.component';
import './ShareLinkDialog.css';

const getUrl = () => {
  const Url = window.location.href;
  return Url;
};

function ShareLinkDialog(props) {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <React.Fragment>
      <div className="dialog-background"></div>
      <div className="shareLink-dialog">
        <ShareLink copyURL={getUrl()} />
        <MediaButtons url={props.copyURL} title={props.title} />
      </div>
    </React.Fragment>
  );
}
export default ShareLinkDialog;
