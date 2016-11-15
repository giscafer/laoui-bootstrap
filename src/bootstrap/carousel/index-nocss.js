require('../../template/carousel/carousel.html');
require('../../template/carousel/slide.html');
require('./carousel');

var MODULE_NAME = 'ui.bootstrap.module.carousel';

angular.module(MODULE_NAME, ['ui.bootstrap.carousel']);

module.exports = MODULE_NAME;
