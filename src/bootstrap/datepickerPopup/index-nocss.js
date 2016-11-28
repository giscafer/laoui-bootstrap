require('../datepicker/index-nocss.js');
require('../position/index-nocss.js');
require('./popup.js');

var MODULE_NAME = 'ui.bootstrap.module.datepickerPopup';

angular.module(MODULE_NAME, ['ui.bootstrap.datepickerPopup', 'ui.bootstrap.module.datepicker']);

module.exports = MODULE_NAME;
