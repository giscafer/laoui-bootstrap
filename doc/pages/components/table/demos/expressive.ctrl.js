export default class ExpressiveTableDemoCtrl {
    constructor($scope, $http) {
        "ngInject";
        $scope.vs = [1]

        $scope.changeIt = function () {
            $scope.vs[0] = 2;
        }

        $scope.options = {
            rowHeight: 50,
            footerHeight: false,
            headerHeight: 50,
            columnMode: 'flex',
            scrollbarV: false,
            selectable: false
        };

        $scope.options2 = {
            rowHeight: 50,
            headerHeight: 50,
            footerHeight: false,
            scrollbarV: false,
            selectable: false
        };

        $scope.monkey = "iz"

        $http.get('/data/table/100.json').success(function (data) {
            $scope.data = data.splice(0, 5);
        });

    }
}