require('../position/index-nocss.js');
require('../stackedMap');
// require('../../template/modal/window.html');
require('./modal');

var MODULE_NAME = 'ui.bootstrap.module.modal';

angular.module(MODULE_NAME, ['ui.bootstrap.modal']);

module.exports = MODULE_NAME;
