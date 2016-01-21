
var shell = require('shelljs');

module.exports = function (config, done) {
  if (shell.exec(config.admin.generateCommand).code === 0) {
    done(null);
  } else {
    done(true);
  };
}
