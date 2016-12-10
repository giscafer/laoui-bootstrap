export default class CheckBoxTableDemoCtrl {
    constructor($scope, $http) {
        "ngInject";
        $scope.options = {
            rowHeight: 50,
            headerHeight: 50,
            footerHeight: false,
            scrollbarV: false,
            checkboxSelection: true,
            selectable: true,
            multiSelect: true,
            columns: [
                { name: "Name", prop: "name", width: 300, isCheckboxColumn: true, headerCheckbox: true },
                { name: "Gender", prop: "gender" },
                { name: "Company", prop: "company" }
            ]
        };

        $scope.onSelect = function (row) {
            console.log('ROW SELECTED!', row);
        }

        $scope.onRowClick = function (row) {
            console.log('ROW CLICKED', row);
        }

        $scope.selected = [];

        $http.get('/data/table/100.json').success(function (data) {
            $scope.data = data.splice(0, 10);
        });
    }
}