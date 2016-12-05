import ClipboardCtrl from '../../common/clipboard.ctrl.js';
export default class TabsCtrl extends ClipboardCtrl{
    constructor($scope,$window,uiNotification) {
        "ngInject";
        super(uiNotification);
        $scope.tabs = [
            { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
            { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true }
        ];

        $scope.alertMe = function() {
            setTimeout(function() {
                $window.alert('You\'ve selected the alert tab!');
            });
        };

        $scope.model = {
            name: 'Tabs'
        };

       
    }
}
