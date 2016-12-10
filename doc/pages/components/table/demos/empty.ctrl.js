export default class EmptyTableDemoCtrl {
    constructor($scope, $http) {
        "ngInject";
        $scope.options = {
            rowHeight: 50,
            footerHeight: false,
            headerHeight: 50,
            scrollbarV: false,
            emptyMessage: 'Nothing to show...',
            columns: [
                { name: "Name", prop: "name", width: 300 },
                { name: "Gender", prop: "gender" },
                { name: "Company", prop: "company" }
            ]
        };

        $scope.data = [];

        $scope.loadData = function () {
            $http.get('/data/table/100.json').success(function (data) {
                $scope.data.push.apply($scope.data, data);
            });
        };

        $scope.clearData = function () {
            $scope.data.splice(0, $scope.data.length);
        }
    }
}