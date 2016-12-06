export default class ButtonCtrl {
    constructor($scope,uiNotification) {
        "ngInject";
        this._$scope = $scope;
        this._uiNotification = uiNotification;
        this.singleModel = 1;
        this.radioModel = 'Middle';
        this.checkModel = {
            left: false,
            middle: true,
            right: false
        };
        this.loading=false;
        this._$scope.$watchCollection('checkModel', () => {
            this.checkResults = [];
            angular.forEach(this.checkModel, (value, key) => {
                if (value) {
                    this.checkResults.push(key);
                }
            });
        });
    }
    click(){
        this.loading=!this.loading;
    }
}
