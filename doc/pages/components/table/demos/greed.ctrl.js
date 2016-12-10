export default class GreedTableDemoCtrl {
    constructor($scope, $http) {
        "ngInject";
        $scope.options = {
            rowHeight: 50,
            footerHeight: false,
            headerHeight: 50,
            scrollbarV: false,
            columnMode: 'flex',
            columns: [
                { name: "Name", prop: "name", flexGrow: 2 },
                { name: "Gender", prop: "gender" },
                { name: "Company", prop: "company", flexGrow: 1 }
            ]
        };

        $http.get('/data/table/100.json').success(function (data) {
            $scope.data = data.splice(0, 10);
        });
    }
}