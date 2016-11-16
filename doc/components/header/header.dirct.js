import templateUrl from './header.html';

export default class HeaderDirective {
    constructor() {
        this.replace = true;
        this.controllerAs = 'hd';
        this.scope = {};
        this.templateUrl = templateUrl;
    }
    controller($scope, $location) {
        "ngInject";
        $scope.$watch(() => {
            return $location.path();
        }, () => {
            let path = $location.path();
            let pathList = path.split('/');
            if (pathList.length > 1) {
                this.currentPath = pathList[1];
            }
        });
    }
    static factory() {
        return new HeaderDirective();
    }
}
