export default class BasicTableDemoCtrl {
    constructor($scope, $http) {
        "ngInject";
        $scope.options = {
            rowHeight: 50,
            headerHeight: 50,
            footerHeight: false,
            columns: [{
                name: "Name",
                prop: "name",
                width: 200
            }, {
                name: "Company",
                prop: "company",
                width: 200,
                template: `<i>{{$cell}}</i>`
            }]
        };

        $http.get('/data/table/100.json').success(function (data) {
            $scope.data = data;
        });
    }
}