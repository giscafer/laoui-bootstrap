export default class VirtualPagingDemoCtrl {
  constructor($scope, $http) {
    "ngInject";
       $scope.data = [];

          $scope.optionz = {
            rowHeight: 50,
            headerHeight: 50,
            footerHeight: 50,
            columns: [
              { name: "Name", prop: "name" },
              { name: "Gender", prop: "gender" },
              { name: "Company", prop: "company" }
            ],
            columnMode: 'force',
            paging: {
              externalPaging: true,
              loadingIndicator: true
            }
          };

          $scope.paging = function(offset, size){
            $scope.optionz.paging.loadingIndicator = true;

               setTimeout(()=>{
                    $http.get('/data/table/100.json').success(function(d) {
                        console.log(d)
                        $scope.optionz.paging.count = d.length;

                        var set = d.splice(offset, size);
                        // only insert items i don't already have
                        set.forEach(function(r, i){
                            var idx = i + (offset * size);
                        $scope.$apply(()=>{
                                $scope.data[idx] = r;
                        })
                        });

                        console.log('paging!', offset, size)
                        $scope.optionz.paging.loadingIndicator = false;

                });
            }, 800)
         };

         
  }
}