require('./template/carousel.html');
require('./template/slide.html');
require('./carousel');

var MODULE_NAME = 'ui.bootstrap.module.carousel';

angular.module(MODULE_NAME, ['ui.bootstrap.carousel']);

module.exports = MODULE_NAME;
