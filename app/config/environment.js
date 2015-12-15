var _ = require('lodash');

var localEnvVars = {
  TITLE:      'local_city',
  SAFE_TITLE: 'local_city'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
