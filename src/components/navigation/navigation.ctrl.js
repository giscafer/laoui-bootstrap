'use strict'
import classNames from 'classnames';

export default class NavigationCtrl {
    constructor($scope, $location) {
        "ngInject";
        //动态获取css样式
        $scope.getClass = (link) => {
            return classNames({
                [`lau-menu-submenu lau-menu-submenu-${$scope.mode}`]: link.children && link.children.length,
                'lau-menu-submenu-active': $scope.currentUrl == link.link && link.children && link.children.length,
                'lau-menu-item': !link.children || !link.children.length
            });
        }
        $scope.$watch(() => {
            return $location.path();
        }, () => {
            $scope.currentUrl = '#' + $location.path();
        });
    }
}
