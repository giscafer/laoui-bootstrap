export default class PinsTableDemoCtrl {
    constructor($scope, $http) {
        "ngInject";
        // demonstrates event delegation
        document.getElementById("datatable").addEventListener("click", function (e) {
            // e.target is the clicked element!
            // If it was a list item
            if (e.target && e.target.classList.contains('delete-btn')) {
                e.preventDefault();
                e.stopPropagation();
                var elm = angular.element(e.target);
                console.log('Event delegation:', elm.scope())
            }
        });

        // demonstrates binding a scope of the controller
        $scope.clicker = function (value) {
            console.log('Scope event:', value)
        }

        $scope.options = {
            rowHeight: 50,
            footerHeight: false,
            headerHeight: 50,
            columns: [
                { name: "Name", prop: "name", width: 100 },
                { name: "Gender", prop: "gender", width: 150, frozenLeft: true },
                { name: "Company", prop: "company", width: 200, frozenLeft: true },
                { name: "Department", prop: "dept", width: 200 },
                { name: "Age", prop: "age", width: 200 },
                { name: "Clearance", prop: "clearance", width: 200 },
                { name: "Date of Birth", prop: "dob", width: 200 },
                {
                    width: 80,
                    frozenRight: true,
                    sortable: false,
                    cellRenderer: function (scope, elm) {
                        scope.clicker = $scope.clicker;
                        return '<a href="#" class="util-col delete-btn" ng-click="clicker(value)" style="font-size:10px;">Delete</a>';
                    },
                    headerRenderer: function () {
                        return '<span class="icon-filter util-col" title="Utilities"></span>'
                    }
                }
            ]
        };

        $scope.isPinned = function () {
            var gcol = $scope.options.columns.find(function (c) {
                return c.prop === 'gender';
            })
            return gcol.frozenLeft;
        };

        $scope.togglePin = function () {
            var gcol = $scope.options.columns.find(function (c) {
                return c.prop === 'gender';
            })

            gcol.frozenLeft = !gcol.frozenLeft;
            console.log('toggled pin', gcol)
        };

        $http.get('/data/table/columns.json').success(function (data) {
            $scope.data = data.splice(0, 10);
        });


    }
}