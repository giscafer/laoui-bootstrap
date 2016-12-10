export default class BasicTableDemoCtrl {
  constructor($scope, $http) {
    "ngInject";
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
          
          angular.extend($scope, {
              onRowDblClick: onRowDblClick 
          });
          
          function onRowDblClick(row) {
              console.log('Row Double Clicked', row);
          }

          $http.get('/data/table/100.json').success(function(data) {
            $scope.data = data;
          });
  }
}