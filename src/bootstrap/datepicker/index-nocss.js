require('../dateparser');
require('../isClass');
// require('../../template/datepicker/datepicker.html');
// require('../../template/datepicker/day.html');
// require('../../template/datepicker/month.html');
// require('../../template/datepicker/year.html');
require('./datepicker');

var MODULE_NAME = 'ui.bootstrap.module.datepicker';

angular.module(MODULE_NAME, ['ui.bootstrap.datepicker']);

module.exports = MODULE_NAME;
