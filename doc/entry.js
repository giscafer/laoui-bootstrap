/**
 * Created by Giscafer
 */
import './styles/index.less';
import angular from 'angular';
import ngRoute from 'angular-route';
import route from './_route.js';
import services from './services/index.js';
import components from './components';

angular.module('laoui-bootstrap.doc', ['ngRoute','laoui-bootstrap',services,components])
    .constant('uibPaginationConfig', {
        firstText: '<<',
        previousText: '<',
        nextText: '>',
        lastText: '>>',
        boundaryLinks: true,
        directionLinks: true,
        maxSize: 5
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