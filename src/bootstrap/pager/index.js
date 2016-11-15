require('../paging');
require('../tabindex');
// require('../../template/pager/pager.html');
require('./pager');

var MODULE_NAME = 'ui.bootstrap.module.pager';

angular.module(MODULE_NAME, ['ui.bootstrap.pager']);

module.exports = MODULE_NAME;
