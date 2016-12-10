/**
 * Created by Giscafer
 */
let pageHtml = {};
let templs = require.context("./", true, /^((?!\/unknown\/).)*.html$/);
let ctrls = require.context("./", true, /^((?!\/unknown\/).)*.ctrl.js$/);
templs.keys().forEach(key => {
    pageHtml[key] = templs(key);
});

export default ($stateProvider, $urlRouterProvider) => {
    "ngInject";
    $urlRouterProvider
        .otherwise(($injector, $location) => {
            $location.path('/components/table');
        });
    $stateProvider
        .state('table', {
            url: '/components/table',
            templateUrl: pageHtml['./table.html'],
            controller: ctrls('./table.ctrl.js').default,
            controllerAs: 'ctrl'
        })
       
        .state('table.action-links', {
            title: 'Table action-links Demo',
            url: '/action-links',
            templateUrl: pageHtml['./demos/action-links.html'],
            controller: ctrls('./demos/action-links.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('table.basic', {
            title: 'Table Basic Demo',
            url: '/basic',
            templateUrl: pageHtml['./demos/basic.html'],
            controller: ctrls('./demos/basic.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        

};
