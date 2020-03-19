import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShareLinkDialog from '../ShareLinkDialog/ShareLinkDialog.component';

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDialog: false,
    };
  }

  showDialog = (hasDialog) => {
    const dialog = document.querySelector('.shareLink-dialog');
    const dialogBackground = document.querySelector('.dialog-background');
    const screenshot = document.querySelector('.lmGPCf');
    const screenshotTools = document.querySelectorAll('.inYJUn');
    // If button is given a dialog
    if (hasDialog) {
      // If dialog is already open -> close it, by clicking on the background do not display dialog, dialog-bg.
      // I also needed to change screenshot positions/displays, since by they were covering the dialog
      if (this.state.showDialog) {
        this.setState({ showDialog: false });
        dialog.style.display = 'none';
        dialogBackground.style.display = 'none';
        screenshot.style.position = 'relative';
        screenshotTools.forEach((tool) => {
          tool.style.display = 'block';
        });
      } else {
        // Open dialog
        this.setState({ showDialog: true });
        dialog.style.display = 'block';
        dialogBackground.style.display = 'block';
        screenshot.style.position = 'static';
        screenshotTools.forEach((tool) => {
          tool.style.display = 'none';
        });
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <button
          type="button"
          className={this.props.buttonClasses}
          onClick={() => this.showDialog(this.props.hasDialog)}
        >
          <FontAwesomeIcon
            icon={this.props.icon}
            size="lg"
            className={this.props.fontClasses}
            fixedWidth
          />
        </button>
        {/* Only active buttons can open dialog */}
        {this.props.hasDialog ? (
          <React.Fragment>
            <div
              className="dialog-background"
              onClick={() => this.showDialog(this.props.hasDialog)}
            />
            <ShareLinkDialog />
          </React.Fragment>
        ) : null}
      </React.Fragment>
    );
  }
}

export default Button;
