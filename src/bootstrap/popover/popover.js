/**
 * The following features are still outstanding: popup delay, animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, and selector delegatation.
 */

var popoverTemp=require('./template/popover.html');
var popoverTemplateTemp=require('./template/popover-template.html');
var popoverHtmlTemp=require('./template/popover-html.html');
angular.module('ui.bootstrap.popover', ['ui.bootstrap.tooltip'])

.directive('uiPopoverTemplatePopup', function() {
  return {
    restrict: 'A',
    scope: { uiTitle: '@', contentExp: '&', originScope: '&' },
    templateUrl: popoverTemplateTemp
  };
})

.directive('uiPopoverTemplate', ['$uiTooltip', function($uiTooltip) {
  return $uiTooltip('uiPopoverTemplate', 'popover', 'click', {
    useContentExp: true
  });
}])

.directive('uiPopoverHtmlPopup', function() {
  return {
    restrict: 'A',
    scope: { contentExp: '&', uiTitle: '@' },
    templateUrl: popoverHtmlTemp
  };
})

.directive('uiPopoverHtml', ['$uiTooltip', function($uiTooltip) {
  return $uiTooltip('uiPopoverHtml', 'popover', 'click', {
    useContentExp: true
  });
}])

.directive('uiPopoverPopup', function() {
  return {
    restrict: 'A',
    scope: { uiTitle: '@', content: '@' },
    templateUrl: popoverTemp
  };
})

.directive('uiPopover', ['$uiTooltip', function($uiTooltip) {
  return $uiTooltip('uiPopover', 'popover', 'click');
}]);
