require('../collapse');
require('../tabindex');

require('./accordion');

var MODULE_NAME = 'ui.bootstrap.module.accordion';

angular.module(MODULE_NAME, ['ui.bootstrap.accordion']);

module.exports = MODULE_NAME;
