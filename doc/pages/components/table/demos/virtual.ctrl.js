export default class VirtualTableDemoCtrl {
    constructor($scope, $http) {
        "ngInject";
        $scope.options = {
            rowHeight: 50,
            headerHeight: 50,
            columnMode: 'flex',
            columns: [
                { name: "Name", prop: "name", flexGrow: 2, template: '<span>{{$cell}}</span>' },
                { name: "Gender", prop: "gender", flexGrow: 1 },
                { name: "Company", prop: "address.state", flexGrow: 1 }
            ]
        };

        $http.get('/data/table/complex-100000.json').success(function (data) {
            $scope.data = data;
        });

    }
}