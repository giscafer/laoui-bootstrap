export default class ButtonCtrl {
    constructor($scope) {
        this._$scope = $scope;
        this.singleModel = 1;
        this.radioModel = 'Middle';
        this.checkModel = {
            left: false,
            middle: true,
            right: false
        };
        this._$scope.$watchCollection('checkModel', () => {
            this.checkResults = [];
            angular.forEach(this.checkModel, (value, key) => {
                if (value) {
                    this.checkResults.push(key);
                }
            });
        });
    }
}
