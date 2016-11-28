angular.module('ui.bootstrap.demo').controller('DateParserDemoCtrl', function ($scope, uiDateParser) {
  $scope.format = 'yyyy/MM/dd';
  $scope.date = new Date();
});
