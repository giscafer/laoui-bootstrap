export default class SingleSelectTableDemoCtrl {
    constructor($scope, $http) {
        "ngInject";
        $scope.options = {
            rowHeight: 50,
            footerHeight: false,
            scrollbarV: false,
            headerHeight: 50,
            selectable: true,
            multiSelect: false,
            columns: [
              { name: "Name", prop: "name", width: 300 },
              { name: "Gender", prop: "gender" },
              { name: "Company", prop: "company" }
            ]
          };

          $scope.selected = {};

          $scope.onSelect = function(row){
            $scope.selected=row
          }

          $scope.onRowClick = function(row){
            console.log('ROW CLICKED', row);
          }

          $http.get('/data/table/100.json').success((data)=>{
            $scope.data = data.splice(0, 10);
          });
    }
}