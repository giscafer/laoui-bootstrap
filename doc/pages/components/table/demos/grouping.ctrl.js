export default class GroupingTableDemoCtrl {
    constructor($scope, $http) {
        "ngInject";
        $scope.data =[];
        $scope.options = {
            rowHeight: 50,
            footerHeight: false,
            scrollbarV: true,
            headerHeight: 50,
            forceFillColumns: true,
            columns: [
                { name: 'Athlete', prop: 'athlete', width: 300 },
                { name: 'Country', prop: 'country', group: true },
                { name: 'Year', prop: 'year' },
                { name: 'Sport', prop: 'sport' }
            ]
        };

        $http.get('/data/table/olympics.json').success(function (data) {
            $scope.data = data;
        });

        $scope.groupCountry = function () {
            var col = $scope.options.columns.find(function (c) {
                return c.prop === 'country';
            });

            col.group = !col.group;
        };

        $scope.groupYear = function () {
            var col = $scope.options.columns.find(function (c) {
                return c.prop === 'year';
            });

            col.group = !col.group;
        };


    }
}