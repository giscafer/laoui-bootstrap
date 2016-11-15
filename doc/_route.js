/**
 * Created by Giscafer
 */
let pageHtml = {};
let templs = require.context("./pages/", true, /^((?!\/unknown\/).)*.html$/);
let ctrls = require.context("./pages/", true, /^((?!\/unknown\/).)*.ctrl.js$/);
templs.keys().forEach(key => {
    pageHtml[key] = templs(key);
});

export default $routeProvider => {
    "ngInject";
    $routeProvider
        .when('/laoui/home', {
            title: 'LaoUI Demo',
            templateUrl: pageHtml['./home/home.html'],
            controller: ctrls('./home/home.ctrl.js').default,
            controllerAs: 'home'
        })
        .when('/components/grid', {
            title: 'grid Demo',
            templateUrl: pageHtml['./components/grid/grid.html'],
            controller: ctrls('./components/grid/grid.ctrl.js').default
        })
        .when('/components/icon', {
            title: 'icon Demo',
            templateUrl: pageHtml['./components/icon/icon.html'],
            controller: ctrls('./components/icon/icon.ctrl.js').default
        })
        .when('/components/alert', {
            title: 'alert Demo',
            templateUrl: pageHtml['./components/alert/alert.html'],
            controller: ctrls('./components/alert/alert.ctrl.js').default
        })
        .when('/components/tabs', {
            title: 'tabs Demo',
            templateUrl: pageHtml['./components/tabs/tabs.html'],
            controller: ctrls('./components/tabs/tabs.ctrl.js').default
        })
        .when('/components/navigation', {
            title: 'navigation Demo',
            templateUrl: pageHtml['./components/navigation/navigation.html'],
            controller: ctrls('./components/navigation/navigation.ctrl.js').default
        })
        .when('/components/edit', {
            title: 'Edit Demo',
            templateUrl: pageHtml['./components/edit/edit.html'],
            controller: ctrls('./components/edit/edit.ctrl.js').default
        })
        .otherwise({
            redirectTo: '/laoui/home'
        });
};
