require('../collapse');
require('../tabindex');
var accordiongroupHtml=require('../../template/accordion/accordion-group.html');
var accordionHtml=require('../../template/accordion/accordion.html');
require('./accordion');

var MODULE_NAME = 'ui.bootstrap.module.accordion';

angular.module(MODULE_NAME, ['ui.bootstrap.accordion', accordionHtml, accordiongroupHtml]);

module.exports = MODULE_NAME;
