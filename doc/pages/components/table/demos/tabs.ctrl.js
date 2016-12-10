export default class TabsTableDemoCtrl {
    constructor($scope, $http) {
        "ngInject";
        $scope.active = 'tab1';

        $scope.isActive = function (name) {
            return {
                'active': name === $scope.active
            }
        };

        $scope.options = {
            rowHeight: 50,
            headerHeight: 50,
            footerHeight: false,
            scrollbarV: false,
            selectable: false,
            columns: [
                { name: "Name", width: 300 },
                { name: "Gender" },
                { name: "Company" }
            ]
        };

        $http.get('/data/table/100.json').success(function (data) {
            $scope.data = data;
        });
    }
}