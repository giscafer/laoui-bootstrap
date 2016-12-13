export default class ModelComponentCtrl {
    constructor($scope) {
        this.templateUrl = 'myModalContent.html';
        this.bindings = {
            resolve: '<',
            close: '&',
            dismiss: '&'
        }
    }
    controller() {
        this.$onInit = function () {
            this.items = this.resolve.items;
            this.selected = {
                item: this.items[0]
            };
        };

        this.ok = function () {
            this.close({ $value: this.selected.item });
        };

        this.cancel = function () {
            this.dismiss({ $value: 'cancel' });
        };
    }
}