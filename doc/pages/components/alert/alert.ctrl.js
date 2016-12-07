import ClipboardCtrl from '../../common/clipboard.ctrl.js';
export default class AlertCtrl extends ClipboardCtrl{
    constructor($scope, $location, $timeout,uiNotification) {
        "ngInject";
        super(uiNotification)
        this._$scope=$scope;
        this.text = "home.ctrl.js";
        this.message = "提示";
        this.description = "传入的值为fontawesome的图标名称";
        this.banner = "这是一个banner！！";
        this.notabanner = "这不是一个banner！！";
        this.success="Success Text"
        this.error="Error Text"
        this.info="Info Text"
        this.warning="Warning Text"
    }
    close(e) {
        this.closing = true;
        console.info('click close', e)
    }
    close2(e) {
        this.closing2 = true;
        console.info('click close', e)
    }
    close3(e) {
        this.closing3 = true;
        console.info('click close', e)
    }
}
