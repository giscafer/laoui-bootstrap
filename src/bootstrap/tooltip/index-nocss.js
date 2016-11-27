require('../position/index-nocss.js');
require('../stackedMap');

require('./tooltip');

var MODULE_NAME = 'ui.bootstrap.module.tooltip';

angular.module(MODULE_NAME, ['ui.bootstrap.tooltip']);

module.exports = MODULE_NAME;
