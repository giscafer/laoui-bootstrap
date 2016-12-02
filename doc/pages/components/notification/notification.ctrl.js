export default class NotificationDemoCtrl{
    constructor($scope,uiNotification){
        "ngInject";
        this._$scope=$scope;
        $scope.primary = function () {
            uiNotification('Primary notification');
        };
        $scope.error = function () {
            uiNotification.error('Error notification');
        }
        $scope.success = function () {
            uiNotification.success('Success notification');
        }
        $scope.info = function () {
            uiNotification.info('Information notification');
        }
        $scope.warning = function () {
            uiNotification.warning('Warning notification');
        }
        $scope.primaryTitle = function () {
            uiNotification({ message: 'Primary notification', title: 'Primary notification' });
        }
        $scope.errorTime = function () {
            uiNotification.error({ message: 'Error notification 1s', delay: 1000 });
        }
        $scope.errorNoTime = function () {
            uiNotification.error({ message: 'Error notification (no timeout)', delay: null });
        }
        $scope.successTime = function () {
            uiNotification.success({ message: 'Success notification 20s', delay: 20000 });
        }
        $scope.errorHtml = function () {
            uiNotification.error({ message: '<b>Error</b> <s>notification</s>', title: '<i>Html</i> <u>message</u>' });
        }
        $scope.successHtml = function () {
            uiNotification.success({ message: 'Success notification<br>Some other <b>content</b><br><a href="https://github.com/alexcrack/angular-ui-notification">This is a link</a><br><img src="https://angularjs.org/img/AngularJS-small.png">', title: 'Html content' });
        }
        $scope.TopLeft = function () {
            uiNotification.success({ message: 'Success Top Left', positionX: 'left' });
        }
        $scope.BottomRight = function () {
            uiNotification.error({ message: 'Error Bottom Right', positionY: 'bottom', positionX: 'right' });
        }
        $scope.BottomLeft = function () {
            uiNotification.warning({ message: 'warning Bottom Left', positionY: 'bottom', positionX: 'left' });
        }
        $scope.TopCenter = function () {
            uiNotification.success({ message: 'Success Top Center', positionX: 'center' });
        }
        $scope.BottomCenter = function () {
            uiNotification.error({ message: 'Error Bottom Center', positionY: 'bottom', positionX: 'center' });
        }
        var promise;
        $scope.setDelayFalse = function() {
            promise = uiNotification.primary({ message: '这是一个不会关闭的通知', delay: false });
        };
        $scope.clear = function() {
            uiNotification.clear(promise);
        };
        $scope.clearAll = function() {
            uiNotification.clearAll();
        };
        $scope.nTitle = "Title from other scope";
        $scope.nClicksLog = [];
        $scope.nClick = function () {
            $scope.nClicksLog.push("Clicked");
        }
        $scope.nElements = ['one', 'two', 'three'];
        $scope.customTemplateScope = function () {
            uiNotification.primary({ message: "Just message", templateUrl: "custom_template.html", scope: $scope });
        }
    }
}