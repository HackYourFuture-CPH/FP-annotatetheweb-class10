const chalk = require('chalk');

const styles = {
  log: chalk.bold,
  info: chalk.bold.blue,
  error: chalk.bold.red,
  warn: chalk.bold.yellow,
  success: chalk.bold.green,
};

module.exports = {
  log(message, ...args) {
    // eslint-disable-next-line no-console
    console.log(styles.log(` 💡  ${message}`, ...args));
  },

  info(message, ...args) {
    // eslint-disable-next-line no-console
    console.log(styles.info(` ℹ️  ${message}`, ...args));
  },

  error(err, stack = false, ...args) {
    // eslint-disable-next-line no-console
    console.log(styles.error(` ❗  ${err}`, ...args));
    if (stack && err.stack)
      // eslint-disable-next-line no-console
      console.log(styles.error(` ❗ ${err.stack}`, ...args));
  },

  warn(message, ...args) {
    // eslint-disable-next-line no-console
    console.log(styles.warn(` ⚠️  ${message}`, ...args));
  },

  success(message, ...args) {
    // eslint-disable-next-line no-console
    console.log(styles.success(` ✅  ${message}`, ...args));
  },
};
