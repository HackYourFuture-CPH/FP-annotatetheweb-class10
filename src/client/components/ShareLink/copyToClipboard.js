function writeToClipboardOnPermission(text) {
  navigator.permissions
    .query({ name: 'clipboard-write' })
    .then((result) => {
      if (result.state === 'granted' || result.state === 'prompt') {
        writeToClipboard(text);
      } else {
        console.log("Don't have permissions to use clipboard", result.state);
      }
    })
    .catch((err) => {
      console.log('Error! Requesting permission', err);
    });
}

function writeToClipboard(text) {
  return navigator.clipboard.writeText(text);
}

window.writeToClipboard = writeToClipboard;

export default writeToClipboardOnPermission;
