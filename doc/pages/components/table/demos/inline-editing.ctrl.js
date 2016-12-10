export default class EditingTableDemoCtrl {
    constructor($scope, $http) {
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
                cellRenderer: function($scope){
                  return '<div><div ng-dblclick="editing = true" ng-show="!editing"><strong>{{$cell}}</strong></div><div><input ng-show="editing" type="text" ng-model="$cell" ng-change="changed($cell, $row, $column)" ng-blur="editing = false" /></div>';
                }
              },
              {
                name: "Gender",
                prop: "gender"
              },
              {
                name: "Company",
                prop: "company"
              }
            ]
          };

         $http.get('/data/table/100.json').success(function (data) {
            $scope.data = data.splice(0, 15);
          });

          $scope.$watch('data', function(){
            $scope.code = JSON.stringify($scope.data, null, 2)
          }, true)

          $scope.changed = function(cellVal, row, col){
            var idx = $scope.data.indexOf(row);
            row[col.prop] = cellVal;
            $scope.data[idx] = row;
          }

    }
}