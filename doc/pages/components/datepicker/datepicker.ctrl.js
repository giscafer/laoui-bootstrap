import ClipboardCtrl from '../../common/clipboard.ctrl.js';
export default class datepickerPopupDemoCtrl extends ClipboardCtrl{
    constructor($scope,uiNotification) {
          "ngInject";
          super(uiNotification)
        // 禁止选择周末
        this.disabled = function (date) {
            var date = new Date(parseInt(date));
            return date.getDay() === 6 || date.getDay() === 0;
        };
    }
}


