import templateUrl from './sidebar.html';
import navData from './nav-data.js';
export default class SideBarDirective {
    constructor() {
        this.replace = true
        this.templateUrl = templateUrl;
    }
    controller($rootScope, $scope, $location) {
        "ngInject";
        $scope.$watch(() => {
            return $location.path();
        }, function() {
            $scope.links = navData;
        });
    }
    static factory() {
        return new SideBarDirective();
    }
}
