/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import ShareLink from '../ShareLink/ShareLink.component';
import MediaButtons from '../MediaButtons/MediaButtons.component';
import './ShareLinkDialog.css';

function ShareLinkDialog(copyURL = { copyURL }, title = { title }) {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="shareLink-dialog">
      <ShareLink copyURL={copyURL} />
      <MediaButtons url={copyURL} title={title} />
    </div>
  );
}
export default ShareLinkDialog;
