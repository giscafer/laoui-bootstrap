export default class TallRowsTableDemoCtrl {
    constructor($scope, $http) {
        "ngInject";
          $scope.options = {
            rowHeight: 'auto',
            headerHeight: 50,
            footerHeight: false,
            scrollbarV: false,
            columns: [
              { name: "Company", width: 300 },
              { name: "Revenue" },
              { name: "Comments", width:200 }
            ]
          };

          $scope.data = [
            { 'company': 'Acme', 'revenue': '$3,452,342', 'sales': '$3,452,342,353', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non orci libero. Suspendisse aliquam eu magna ac tristique. Suspendisse potenti. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur sem erat, suscipit nec faucibus sed, interdum quis enim. Cras id laoreet dolor. Quisque ex odio, consectetur et neque nec, sagittis tempus erat. Donec at maximus purus. Nulla molestie arcu eros, ac pulvinar ligula mattis in. Nulla ut dolor eu metus dignissim auctor. Phasellus auctor quam quis ullamcorper tincidunt.' },
            { 'company': 'Acme Holdings', 'revenue': '$345,342', 'sales': '$4,452,222,353' },
            { 'company': 'Acme Limited', 'revenue': '$344,442', 'sales': '$10,452,444,353' },
            { 'company': 'Sterling', 'revenue': '$40,443,111', 'sales': '$50,433,777,564', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non orci libero. Suspendisse aliquam eu magna ac tristique. Suspendisse potenti. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur sem erat, suscipit nec faucibus sed, interdum quis enim. Cras id laoreet dolor. Quisque ex odio, consectetur et neque nec, sagittis tempus erat. Donec at maximus purus. Nulla molestie arcu eros, ac pulvinar ligula mattis in. Nulla ut dolor eu metus dignissim auctor. Phasellus auctor quam quis ullamcorper tincidunt.' },
            { 'company': 'Apple', 'revenue': '$1,440,443,111', 'sales': '$999,509,433,777,564' },
            { 'company': 'Apple IBS', 'revenue': '$1,440,443,111', 'sales': '$999,509,433,777,564', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non orci libero. Suspendisse aliquam eu magna ac tristique. Suspendisse potenti. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur sem erat, suscipit nec faucibus sed, interdum quis enim. Cras id laoreet dolor. Quisque ex odio, consectetur et neque nec, sagittis tempus erat. Donec at maximus purus. Nulla molestie arcu eros, ac pulvinar ligula mattis in. Nulla ut dolor eu metus dignissim auctor. Phasellus auctor quam quis ullamcorper tincidunt.' },
            { 'company': 'Apple IBS South', 'revenue': '$1,440,443,111', 'sales': '$999,509,433,777,564' }
          ];

    }
}