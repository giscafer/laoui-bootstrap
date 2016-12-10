export default class ForceTableDemoCtrl {
    constructor($scope, $http) {
        "ngInject";
        var big = [
            { name: "Department", prop: "dept", width: 200 },
            { name: "Clearance", prop: "clearance", width: 200 },
            { name: "Date of Birth", prop: "dob", width: 200 }
        ];

        var small = [
            { name: "Age", prop: "age", width: 100, canAutoResize: false },
            { name: "Name", prop: "name", width: 200 },
            { name: "Gender", prop: "gender", width: 200 },
            { name: "Company", prop: "company", width: 200 }
        ];

        $scope.optionz = {
            rowHeight: 50,
            footerHeight: false,
            headerHeight: 50,
            scrollbarV: false,
            selectable: false,
            columns: small,
            columnMode: 'force'
        };

        $scope.small = function (n) {
            $scope.optionz.columns.splice(3, $scope.optionz.columns.length)
        };

        $scope.big = function (n) {
            $scope.optionz.columns.push.apply($scope.optionz.columns, big);
        };


        $http.get('/data/table/columns.json').success(function (data) {
            $scope.data = data;
        });
    }
}