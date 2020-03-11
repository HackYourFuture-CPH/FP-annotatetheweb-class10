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
    if (hasDialog) {
      if (this.state.showDialog) {
        this.setState({ showDialog: false });
        dialog.style.display = 'none';
        dialogBackground.style.display = 'none';
      } else {
        this.setState({ showDialog: true });
        dialog.style.display = 'block';
        dialogBackground.style.display = 'block';
      }
    }
    console.log('clicked');
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
        {this.props.hasDialog ? (
          <React.Fragment>
            <div className="dialog-background" onClick={() => this.showDialog(this.props.hasDialog)}></div>
            <ShareLinkDialog />
          </React.Fragment>
        ) : null}
      </React.Fragment>
    );
  }
}

export default Button;
