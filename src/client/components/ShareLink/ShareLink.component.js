/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import writeToClipboardOnPermission from './copyToClipboard';
import './ShareLink.css';

class ShareLink extends Component {
  state = { copyURL: this.props.copyURL };

  handleCopyClick = () => {
    writeToClipboardOnPermission(this.state.copyURL);
  };

  handleInputUrlChange = (e) => {
    const copyURL = e.target.value;
    this.setState({
      copyURL,
    });
  };

  render() {
    return (
      <div className="shareLink-viaLink">
        <label>
          <div className="shareLink-viaLink-label">Share Link</div>
          <input
            name="shareLink"
            type="text"
            value={this.state.copyURL}
            className="shareLink-viaLink-input"
            onChange={this.handleInputUrlChange}
          />
        </label>
        <div
          className="shareLink-viaLink-btnCopy"
          onClick={this.handleCopyClick}
        >
          <span>Copy</span>
        </div>
      </div>
    );
  }
}

export default ShareLink;
