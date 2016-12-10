export default class PerfHorzscrollTableDemoCtrl {
    constructor($scope, $http) {
        "ngInject";
        $scope.options = {
            rowHeight: 50,
            headerHeight: 50,
            columnMode: 'force',
            columns: [
              { name: "athlete" },
              { name: "age" },
              { name: "country" },
              { name: "year" },
              { name: "date" },
              { name: "sport" },
              { name: "gold" },
              { name: "silver" },
              { name: "bronze" },
              { name: "total" },
              { name: "athlete" },
              { name: "age" },
              { name: "country" },
              { name: "year" },
              { name: "date" },
              { name: "sport" },
              { name: "gold" },
              { name: "silver" },
              { name: "bronze" },
              { name: "total" },
              { name: "athlete" },
              { name: "age" },
              { name: "country" },
              { name: "year" },
              { name: "date" },
              { name: "sport" },
              { name: "gold" },
              { name: "silver" },
              { name: "bronze" },
              { name: "total" }
            ]
          };

          $http.get('/data/table/olympics.json').success(function(data) {
            $scope.data = data;
          });


    }
}