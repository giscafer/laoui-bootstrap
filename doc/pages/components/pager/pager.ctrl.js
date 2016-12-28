import ClipboardCtrl from '../../common/clipboard.ctrl.js';
export default class PagerDemoCtrl  extends ClipboardCtrl{
  constructor($scope, uiNotification) {
    "ngInject";
    super(uiNotification);
    $scope.totalItems = 64;
    $scope.currentPage = 4;
  }
}