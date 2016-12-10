export default class TreeTableDemoCtrl {
    constructor($scope, $http) {
        "ngInject";
        $scope.options = {
            rowHeight: 50,
            footerHeight: false,
            scrollbarV: true,
            headerHeight: 50,
            columnMode: 'flex',
            columns: [
                {
                    name: "Company",
                    prop: "company",
                    flexGrow: 2,
                    isTreeColumn: true,
                    relationProp: 'parentCompany'
                },
                {
                    name: "Revenue",
                    flexGrow: 1,
                    prop: "revenue"
                },
                {
                    name: "Sales",
                    flexGrow: 1,
                    prop: "sales"
                }
            ]
        };

        $scope.expanded = {
            'Acme': true
        };

        $scope.treeToggled = function (row, cell) {
            console.log('toggled!')
        };

        $scope.data = [{
            'company': 'Apple',
            'revenue': '$1,440,443,111',
            'sales': '$999,509,433,777,564'
        }, {
            'company': 'Apple IBS',
            'revenue': '$1,440,443,111',
            'sales': '$999,509,433,777,564',
            parentCompany: 'Apple'
        }, {
            'company': 'Apple XYZ',
            'revenue': '$1,440,443,111',
            'sales': '$999,509,433,777,564',
            parentCompany: 'Apple'
        },
        {
            'company': 'Apple IBS South1',
            'revenue': '$1,440,443,111',
            'sales': '$999,509,433,777,564',
            parentCompany: 'Apple IBS'
        },
        {
            'company': 'Apple IBS South1 ABC',
            'revenue': '$1,440,443,111',
            'sales': '$999,509,433,777,564',
            parentCompany: 'Apple IBS South1'
        },
        {
            'company': 'Apple IBS South1 CDE',
            'revenue': '$1,440,443,111',
            'sales': '$999,509,433,777,564',
            parentCompany: 'Apple IBS South1'
        },
        {
            'company': 'Apple IBS South2',
            'revenue': '$1,440,443,111',
            'sales': '$999,509,433,777,564',
            parentCompany: 'Apple IBS'
        },
        {
            'company': 'Apple XYZ South1',
            'revenue': '$1,440,443,111',
            'sales': '$999,509,433,777,564',
            parentCompany: 'Apple XYZ'
        },
        {
            'company': 'Apple XYZ South2',
            'revenue': '$1,440,443,111',
            'sales': '$999,509,433,777,564',
            parentCompany: 'Apple XYZ'
        }];
    }
}