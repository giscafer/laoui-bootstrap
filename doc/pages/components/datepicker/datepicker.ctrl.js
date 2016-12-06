export default class datepickerPopupDemoCtrl {
    constructor($scope) {
          "ngInject";
        // 禁止选择周末
        this.disabled = function (date) {
            var date = new Date(parseInt(date));
            return date.getDay() === 6 || date.getDay() === 0;
        };
    }
}


