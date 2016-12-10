export default class ScrollTableDemoCtrl {
    constructor($scope, $http) {
        "ngInject";
        $scope.options = {
            rowHeight: 50,
            headerHeight: 50,
            footerHeight: false,
            columns: [
                { name: "Name", prop: "name", width: 200 },
                { name: "Gender", prop: "gender", width: 200 },
                { name: "Company", prop: "company", width: 200 },
                { name: "Department", prop: "dept", width: 200 },
                { name: "Age", prop: "age", width: 200 },
                { name: "Clearance", prop: "clearance", width: 200 },
                { name: "Date of Birth", prop: "dob", width: 200 }
            ]
        };

        $scope.data = [];

        for (var i = 0; i < 10; i++) {
            $scope.data.push({
                "name": "Ethel Price",
                "gender": "female",
                "company": "Enersol",
                "dept": "Human Resources",
                "age": i,
                "dob": "Wed May 27 2015 18:08:22 GMT-0400 (EDT)",
                "clearance": "Top Secret"
            })
        };
    }
}