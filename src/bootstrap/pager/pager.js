var pagerTemplateUrl=require('./template/pager.html');

angular.module('ui.bootstrap.pager', ['ui.bootstrap.paging', 'ui.bootstrap.tabindex'])

.controller('UiPagerController', ['$scope', '$attrs', 'uiPaging', 'uiPagerConfig', function($scope, $attrs, uiPaging, uiPagerConfig) {
  $scope.align = angular.isDefined($attrs.align) ? $scope.$parent.$eval($attrs.align) : uiPagerConfig.align;

  uiPaging.create(this, $scope, $attrs);
}])

.constant('uiPagerConfig', {
  itemsPerPage: 10,
  previousText: '« Previous',
  nextText: 'Next »',
  align: true
})

.directive('uiPager', ['uiPagerConfig', function(uiPagerConfig) {
  return {
    scope: {
      totalItems: '=',
      previousText: '@',
      nextText: '@',
      ngDisabled: '='
    },
    require: ['uiPager', '?ngModel'],
    restrict: 'A',
    controller: 'UiPagerController',
    controllerAs: 'pager',
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || pagerTemplateUrl;
    },
    link: function(scope, element, attrs, ctrls) {
      element.addClass('pager');
      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      if (!ngModelCtrl) {
        return; // do nothing if no ng-model
      }

      paginationCtrl.init(ngModelCtrl, uiPagerConfig);
    }
  };
}]);
