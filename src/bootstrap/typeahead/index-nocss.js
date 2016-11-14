require('../debounce');
require('../position/index-nocss.js');
require('../../template/typeahead/typeahead-match.html');
require('../../template/typeahead/typeahead-popup.html');
require('./typeahead');

var MODULE_NAME = 'ui.bootstrap.module.typeahead';

angular.module(MODULE_NAME, ['ui.bootstrap.typeahead', 'uib/template/typeahead/typeahead-match.html', 'uib/template/typeahead/typeahead-popup.html']);

module.exports = MODULE_NAME;
