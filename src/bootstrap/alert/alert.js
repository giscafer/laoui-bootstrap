var alertTempl=require('../../template/alert/alert.html');
angular.module('ui.bootstrap.alert', [])

.controller('UiAlertController', ['$scope', '$element', '$attrs', '$interpolate', '$timeout', function($scope, $element, $attrs, $interpolate, $timeout) {
  $scope.closeable = !!$attrs.close;
  $element.addClass('alert');
  $attrs.$set('role', 'alert');
  if ($scope.closeable) {
    $element.addClass('alert-dismissible');
  }

  var dismissOnTimeout = angular.isDefined($attrs.dismissOnTimeout) ?
    $interpolate($attrs.dismissOnTimeout)($scope.$parent) : null;

  if (dismissOnTimeout) {
    $timeout(function() {
      $scope.close();
    }, parseInt(dismissOnTimeout, 10));
  }
}])

.directive('uiAlert', function() {
  return {
    controller: 'UiAlertController',
    controllerAs: 'alert',
    restrict: 'AE',
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || alertTempl;
    },
    transclude: true,
    scope: {
      close: '&'
    }
  };
});
