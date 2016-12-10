export default class UpdatingTableDemoCtrl {
    constructor($scope, $http) {
        "ngInject";
        $scope.options = {
            rowHeight: 50,
            headerHeight: 50,
            footerHeight: false,
            scrollbarV: false,
            selectable: false,
            columns: [{
                name: "Name",
                prop: "name",
                width: 300,
                cellRenderer: function () {
                    return '<div>{{$cell}}</div>';
                }
            }, {
                name: "Image",
                prop: "imgSrc",
                cellRenderer: function () {
                    return '<div><img width="30" height="30" ng-src="{{$cell}}"></div>';
                }
            }, {
                name: "Company",
                prop: "company",
                cellDataGetter: function (val) {
                    return new Date().getSeconds() + ' seconds';
                }
            }]
        };

        $http.get('/data/table/100.json').success(function (data) {
            var subData = data.splice(0, 5);

            for (var i = 0; i < subData.length; i++) {
                subData[i].imgSrc = 'http://code-maven.com/img/angularjs.png';
            }

            $scope.data = subData;
        });

        $scope.change = function () {
            for (var i = 0; i < $scope.data.length; i++) {
                $scope.data[i].imgSrc = 'https://avatars2.githubusercontent.com/u/8676711?v=3&s=40';
            }
        }

    }
}