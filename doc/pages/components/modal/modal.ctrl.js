
// Please note that $uiModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uiModal service used above.
import ModalInstanceCtrl from './modal-form.ctrl.js';

// Please note that the close and dismiss bindings are from $uiModalInstance.
import ModelComponentCtrl from './modal.component.js';

export default class ModelDemoCtrl {
    constructor($scope, $timeout, $http, $uiModal, $document, $log) {
        "ngInject";
        this.items = ['item1', 'item2', 'item3'];

        this.animationsEnabled = true;

        this.open = function (size, parentSelector) {
            let parentElem = parentSelector ?
                angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
            let modalInstance = $uiModal.open({
                animation: this.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'myModalContent.html',
                controller: ModalInstanceCtrl,
                controllerAs: 'objFrom',
                size: size,
                appendTo: parentElem,
                resolve: {
                    items: () => {
                        return this.items;
                    }
                }
            });

            modalInstance.result.then((selectedItem) => {
                this.selected = selectedItem;
            }, () => {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        this.openComponentModal = function () {
            let modalInstance = $uiModal.open({
                animation: this.animationsEnabled,
                component: ModelComponentCtrl,//有问题
                resolve: {
                    items: () => {
                        return this.items;
                    }
                }
            });

            modalInstance.result.then((selectedItem) => {
                this.selected = selectedItem;
            }, () => {
                $log.info('modal-component dismissed at: ' + new Date());
            });
        };

        this.openMultipleModals = () => {
            $uiModal.open({
                animation: this.animationsEnabled,
                ariaLabelledBy: 'modal-title-bottom',
                ariaDescribedBy: 'modal-body-bottom',
                templateUrl: 'stackedModal.html',
                size: 'sm',
                controller: function ($scope) {
                    $scope.name = 'bottom';
                }
            });

            $uiModal.open({
                animation: this.animationsEnabled,
                ariaLabelledBy: 'modal-title-top',
                ariaDescribedBy: 'modal-body-top',
                templateUrl: 'stackedModal.html',
                size: 'sm',
                controller: function ($scope) {
                    $scope.name = 'top';
                }
            });
        };

        this.toggleAnimation = () => {
            this.animationsEnabled = !this.animationsEnabled;
        };
    }

}
