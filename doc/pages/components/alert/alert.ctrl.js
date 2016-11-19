export default class AlertCtrl {
    constructor($scope, $location, $timeout) {
        "ngInject";
        this._$scope=$scope;
        this.text = "home.ctrl.js";
        this.message = "提示";
        this.description = "传入的值为fontawesome的图标名称";
        this.banner = "这是一个banner！！";
        this.notabanner = "这不是一个banner！！";
    }
    close(e) {
        this.closing = true;
        console.info('click close', e)
    }
    close2(e) {
        this.closing2 = true;
        console.info('click close', e)
    }
}
