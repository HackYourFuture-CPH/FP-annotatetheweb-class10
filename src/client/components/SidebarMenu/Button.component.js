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
    if (hasDialog) {
      if (this.state.showDialog) {
        this.setState({ showDialog: false });
        dialog.style.display = 'none';
      } else {
        this.setState({ showDialog: true });
        dialog.style.display = 'block';
      }
    }
  };

  render() {
    return (
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
        {this.props.hasDialog ? <ShareLinkDialog /> : null}
      </button>
    );
  }
}

export default Button;
