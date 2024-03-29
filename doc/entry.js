/**
 * Created by Giscafer
 */
import './styles/index.less';
import angular from 'angular';
// import ngRoute from 'angular-route';
import uirouter from 'angular-ui-router';
import route from './_route.js';
import tableRoute from './pages/components/table/table.route.js';
import services from './services/index.js';
import components from './components';

angular.module('laoui-bootstrap.doc', ['ui.router', 'laoui-bootstrap', services, components])
    .constant('uibPaginationConfig', {
        firstText: '<<',
        previousText: '<',
        nextText: '>',
        lastText: '>>',
        boundaryLinks: true,
        directionLinks: true,
        maxSize: 5
    })
    .config(['uiNotificationProvider', (uiNotificationProvider) => {
        uiNotificationProvider.setOptions({
            delay: 10000,
            startTop: 20,
            startRight: 10,
            verticalSpacing: 20,
            horizontalSpacing: 20,
            positionX: 'right',
            positionY: 'bottom'
        });
    }])
    .config(route)
    .config(tableRoute)
    .config(['$httpProvider', ($httpProvider) => {
        $httpProvider.interceptors.push('httpInterceptor');
    }])
    .run(['$window', '$rootScope', '$location', ($window, $rootScope, $location) => {
        $window.angular = angular;
        $window.$ = angular.element;
        $rootScope.title = "LaoUI Demo"
        $rootScope.$on('$routeChangeSuccess', (event, next, current) => {
        });
    }]);