export default class PerfTableDemoCtrl {
    constructor($scope, $http) {
        "ngInject";
          var options = {
            headerHeight: 50,
            rowHeight: 50,
            columns: [
              { name: "Name", prop: "name", width: 300 },
              { name: "Gender", prop: "gender" },
              { name: "Company", prop: "address.state" }
            ]
          };


          $scope.options1 = angular.copy(options);
          $scope.options2 = angular.copy(options);
          $scope.options3 = angular.copy(options);
          $scope.options4 = angular.copy(options);
          $scope.options5 = angular.copy(options);
          $scope.options6 = angular.copy(options);
          $scope.options7 = angular.copy(options);
          $scope.options8 = angular.copy(options);
          $scope.options9 = angular.copy(options);
          $scope.options10 = angular.copy(options);

          $http.get('/data/table/complex-100000.json').success(function(data) {
            $scope.data = data;
          });


    }
}