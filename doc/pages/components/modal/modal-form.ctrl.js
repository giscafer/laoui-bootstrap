export default class ModelFromCtrl{
    constructor($scope,$uiModalInstance, items){
    this.items = items;
    this.selected = {
        item: this.items[0]
    };

    this.ok = function () {
        $uiModalInstance.close(this.selected.item);
    };

    this.cancel = function () {
        $uiModalInstance.dismiss('cancel');
    };
    }
}