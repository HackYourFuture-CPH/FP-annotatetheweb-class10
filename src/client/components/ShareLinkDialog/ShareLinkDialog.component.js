/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import ShareLink from '../ShareLink/ShareLink.component';
import MediaButtons from '../MediaButtons/MediaButtons.component';
import './ShareLinkDialog.css';

function ShareLinkDialog(props) {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="shareLink-dialog">
      <ShareLink copyURL={props.copyURL}/>
      <MediaButtons url={props.copyURL} title={props.title} />
    </div>
  );
}
export default ShareLinkDialog;
