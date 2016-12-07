export default class TableDemoCtrl {
    constructor($scope, $http) {
        "ngInject";
       $scope.data = []

          $scope.optionz = {
            rowHeight: 50,
            headerHeight: 50,
            footerHeight: 50,
            scrollbarV: false,
            columns: [
              { name: "Name", prop: "name" },
              { name: "Gender", prop: "gender" },
              { name: "Company", prop: "company" }
            ],
            columnMode: 'force',
            paging: {
              externalPaging: true,
              size: 10
            }
          };

          $scope.paging = function(offset, size){
            setTimeout(function(){
            $http.get('/data/table/100.json').success(function(d) {

              $scope.optionz.paging.count = d.length;

              var set = d.splice(offset, size);
              // only insert items i don't already have
              set.forEach(function(r, i){
                var idx = i + (offset * size);
                $scope.data[idx] = r;
              });

              console.log('paging!', offset, size)
            });
          }, 200)
          };
    }
}