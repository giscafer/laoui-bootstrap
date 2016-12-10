export default class ActionLinksDemoCtrl {
    constructor($scope, $http) {
        "ngInject";
        $scope.tableOptions = {
            footerHeight: false,
            scrollbarV: false,
            rowHeight: 'auto',
            columnMode: 'flex',
            headerHeight: 40,
            emptyMessage: 'No data available'
        };

        $scope.destroyApp = function (row) {
            console.log('deleting', row);
            $scope.data.splice($scope.data.indexOf(row), 1);
        }

        $scope.display = function (row) {
            console.log(row);
        }

        $http.get('/data/table/100.json').success(function (data) {
            $scope.data = data;
        });

    }
}