export default class TemplateTableDemoCtrl {
    constructor($scope, $http) {
        "ngInject";
        $scope.options = {
            rowHeight: 50,
            headerHeight: 50,
            footerHeight: false,
            scrollbarV: false,
            columns: [
                {
                    name: "Name",
                    prop: "name",
                    width: 300,
                    cellRenderer: function ($scope) {
                        return '<div><img width="30" height="30" src="http://thecatapi.com/api/images/get?format=src&type=gif"> <strong>{{$cell}}</strong></div>';
                    }
                },
                {
                    name: "Gender",
                    prop: "gender",
                    headerRenderer: function (scope, elm) {
                        return '<strong>moo</strong>';
                    },
                    cellRenderer: function (scope, elm) {
                        displayGraphExample(elm[0], 300, 30, "basis", true, 1000, 1000);
                    }
                },
                {
                    name: "Company",
                    prop: "company",
                    cellDataGetter: function (val) {
                        return new Date().getSeconds() + ' seconds';
                    }
                }
            ]
        };

        $http.get('/data/table/100.json').success(function (data) {
            $scope.data = data.splice(0, 15);
        });
    }
}