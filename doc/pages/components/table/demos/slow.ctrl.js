export default class SlowTableDemoCtrl {
    constructor($scope, $http,$timeout) {
        "ngInject";
        $scope.options = {
            rowHeight: 50,
            footerHeight: false,
            headerHeight: 50,
            scrollbarV: false,
            emptyMessage: 'Nothing to show...',
            columns: [
                { name: "Name", prop: "name", width: 300 },
                { name: "Gender", prop: "gender" },
                { name: "Company", prop: "company" }
            ]
        };

        // pass undefined to show a loading message
        $scope.data = undefined;

        $timeout(function () {
            $http.get('/data/table/100.json').success(function (data) {
                $scope.data = data;
            });
        }, 5000);

    }
}