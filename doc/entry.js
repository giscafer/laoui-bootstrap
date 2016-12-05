/**
 * Created by Giscafer
 */
import './styles/index.less';
import angular from 'angular';
import ngRoute from 'angular-route';
import uirouter from 'angular-ui-router';
import route from './_route.js';
import services from './services/index.js';
import components from './components';

angular.module('laoui-bootstrap.doc', ['ngRoute',uirouter,'laoui-bootstrap','datePicker',services,components])
    .constant('uibPaginationConfig', {
        firstText: '<<',
        previousText: '<',
        nextText: '>',
        lastText: '>>',
        boundaryLinks: true,
        directionLinks: true,
        maxSize: 5
    })
    .config(function(uiNotificationProvider) {
        uiNotificationProvider.setOptions({
            delay: 10000,
            startTop: 20,
            startRight: 10,
            verticalSpacing: 20,
            horizontalSpacing: 20,
            positionX: 'right',
            positionY: 'bottom'
        });
    })
    .config(route)
    .config(['$httpProvider', function($httpProvider){
        $httpProvider.interceptors.push('httpInterceptor');
    }])
    .run(['$window', '$rootScope', '$location',($window, $rootScope, $location) => {
        $window.angular=angular;
        $window.$ = angular.element;
        $rootScope.title="LaoUI Demo"
        $rootScope.$on('$routeChangeSuccess', function(event, next, current) {
        });
    }]);