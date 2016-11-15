require('../tooltip/index-nocss.js');
// require('../../template/popover/popover.html');
// require('../../template/popover/popover-html.html');
// require('../../template/popover/popover-template.html');
require('./popover');

var MODULE_NAME = 'ui.bootstrap.module.popover';

angular.module(MODULE_NAME, ['ui.bootstrap.popover']);

module.exports = MODULE_NAME;
