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

  showDialog = () => {
    const dialog = document.querySelector('.shareLink-dialog');
    if (this.state.showDialog) {
      this.setState({ showDialog: false });
      console.log('dialog closed');
      dialog.style.display = 'none';
    } else {
      this.setState({ showDialog: true });
      console.log('dialog open');
      dialog.style.display = 'block';
    }
  };

  render() {
    return (
      <button
        type="button"
        className={this.props.buttonClasses}
        onClick={() => this.showDialog()}
      >
        <FontAwesomeIcon
          icon={this.props.icon}
          size="lg"
          className={this.props.fontClasses}
          fixedWidth
        />
        <ShareLinkDialog />
      </button>
    );
  }
}

export default Button;
