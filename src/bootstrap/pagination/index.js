require('../paging');
require('../tabindex');
// require('../../template/pagination/pagination.html');
require('./pagination');

var MODULE_NAME = 'ui.bootstrap.module.pagination';

angular.module(MODULE_NAME, ['ui.bootstrap.pagination']);

module.exports = MODULE_NAME;
