export default class MultiSelectTableDemoCtrl {
    constructor($scope, $http) {
        "ngInject";
        $scope.options = {
            rowHeight: 50,
            footerHeight: false,
            scrollbarV: false,
            headerHeight: 50,
            selectable: true,
            multiSelect: true,
            columns: [
                { name: "Name", prop: "name", width: 300 },
                { name: "Gender", prop: "gender" },
                { name: "Company", prop: "company" }
            ]
        };

        $scope.options2 = {
            rowHeight: 50,
            footerHeight: false,
            scrollbarV: false,
            headerHeight: 50,
            selectable: true,
            multiSelect: true,
            multiSelectOnShift: true,
            columns: [
                { name: "Name", prop: "name", width: 300 },
                { name: "Gender", prop: "gender" },
                { name: "Company", prop: "company" }
            ]
        };

        $scope.options3 = {
            rowHeight: 50,
            footerHeight: false,
            scrollbarV: true,
            headerHeight: 50,
            selectable: true,
            multiSelect: true,
            columns: [
                { name: "Name", prop: "name", width: 300 },
                { name: "Gender", prop: "gender" },
                { name: "Company", prop: "company" }
            ]
        };

        $scope.selected = [];
        $scope.selected2 = [];
        $scope.selected3 = [];

        $scope.onSelect = function (row) {
            console.log('ROW SELECTED!', row);
        }

        $scope.onRowClick = function (row) {
            console.log('ROW CLICKED', row);
        }

        $http.get('/data/table/100.json').success(function (data) {
            $scope.data = data.splice(0, 10);
        });
    }
}