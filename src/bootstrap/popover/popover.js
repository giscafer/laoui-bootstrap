/**
 * The following features are still outstanding: popup delay, animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, and selector delegatation.
 */
angular.module('ui.bootstrap.popover', ['ui.bootstrap.tooltip'])

.directive('uiPopoverTemplatePopup', function() {
  return {
    restrict: 'A',
    scope: { uiTitle: '@', contentExp: '&', originScope: '&' },
    templateUrl: '../../template/popover/popover-template.html'
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
    templateUrl: '../../template/popover/popover-html.html'
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
    templateUrl: '../../template/popover/popover.html'
  };
})

.directive('uiPopover', ['$uiTooltip', function($uiTooltip) {
  return $uiTooltip('uiPopover', 'popover', 'click');
}]);
