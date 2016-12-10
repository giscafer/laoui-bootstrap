export default class SortTableDemoCtrl {
    constructor($scope, $http) {
        "ngInject";
       $scope.data = []

           $scope.options = {
            rowHeight: 50,
            headerHeight: 50,
            footerHeight: false,
            scrollbarV: false,
            sortType: 'multiple', // available options: ['single', 'multiple']
            // onSort: $scope.onColumnSort,
            columns: [{
                name: "Name",
                prop: "name",
                width: 300,
                sort: 'desc',
                sortPriority: 2
              },
              {
                name: "Gender",
                prop: "gender",
                sort: 'asc',
                sortPriority: 1
              },
              {
                name: "Company",
                prop: "companyLink",
                sort: 'asc',
                sortPriority: 3,
                cellRenderer: function() {
                      return '<a target="_blank" href="\{{$cell.link}}">\{{$cell.text}}</a>';
                  },
                sortBy: 'company'
              }
            ]
          };

          $http.get('/data/table/100.json').success(function(data) {
            $scope.data = data.splice(0, 15);
            $scope.data.forEach(person => person.companyLink = {text: person.company, link: 'http://lmgtfy.com/?q=' + person.company})
          });

    }
}