angular.module('ui.bootstrap.demo').controller('PositionDemoCtrl', function ($scope, $window, $uiPosition) {

    $scope.elemVals = {};
    $scope.parentScrollable = true;
    $scope.parentRelative = true;

    $scope.getValues = function() {
      var divEl = $window.document.querySelector('#posdemodiv');
      var btnEl = $window.document.querySelector('#posdemobtn');

      var offsetParent = $uiPosition.offsetParent(divEl);
      $scope.elemVals.offsetParent = 'type: ' + offsetParent.tagName + ', id: ' + offsetParent.id;

      var scrollParent = $uiPosition.scrollParent(divEl);
      $scope.elemVals.scrollParent = 'type: ' + scrollParent.tagName + ', id: ' + scrollParent.id;

      $scope.scrollbarWidth = $uiPosition.scrollbarWidth();

      $scope.elemVals.position = $uiPosition.position(divEl);

      $scope.elemVals.offset = $uiPosition.offset(divEl);

      $scope.elemVals.viewportOffset = $uiPosition.viewportOffset(divEl);

      $scope.elemVals.positionElements = $uiPosition.positionElements(btnEl, divEl, 'auto bottom-left');
    };
});