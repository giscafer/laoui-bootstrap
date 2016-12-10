export default class ColumnAddTableDemoCtrl {
    constructor($scope, $http) {
        "ngInject";
        $scope.all = [
            { name: "Name", prop: "name", width: 200 },
            { name: "Gender", prop: "gender", width: 200 },
            { name: "Company", prop: "company", width: 200 },
            { name: "Department", prop: "dept", width: 200 },
            { name: "Age", prop: "age", width: 200 },
            { name: "Clearance", prop: "clearance", width: 200 },
            { name: "Date of Birth", prop: "dob", width: 200 }
        ];

        $scope.cur = [
            { name: "Name", prop: "name", width: 200 },
            { name: "Gender", prop: "gender", width: 200 },
            { name: "Company", prop: "company", width: 200 }
        ];

        $scope.options = {
            rowHeight: 50,
            headerHeight: 50,
            footerHeight: false,
            scrollbarV: false,
            selectable: false,
            columns: $scope.cur,
            columnMode: 'force'
        };

        $scope.$watch('cur', function (n) {
            console.log('columns changed', n)
        }, true)

        $http.get('/data/table/columns.json').success(function (data) {
            $scope.data = data;
        });

    }
}