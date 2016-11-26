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
            controller: ctrls('./components/icon/icon.ctrl.js').default,
            controllerAs:'ctrl'
        })
        .when('/components/alert', {
            title: 'alert Demo',
            templateUrl: pageHtml['./components/alert/alert.html'],
            controller: ctrls('./components/alert/alert.ctrl.js').default,
            controllerAs:'ctrl'
        })
        .when('/components/tabs', {
            title: 'tabs Demo',
            templateUrl: pageHtml['./components/tabs/tabs.html'],
            controller: ctrls('./components/tabs/tabs.ctrl.js').default,
            controllerAs:'ctrl'
        })
        .when('/components/tabs1', {
            title: 'tabs Demo',
            templateUrl: pageHtml['./components/tabs1/tabs.html'],
            controller: ctrls('./components/tabs1/tabs.ctrl.js').default,
            controllerAs:'ctrl'
        })
        .when('/components/panel', {
            title: 'panel Demo',
            templateUrl: pageHtml['./components/panel/panel.html'],
            controller: ctrls('./components/panel/panel.ctrl.js').default,
            controllerAs:'ctrl'
        })
        .when('/components/navigation', {
            title: 'navigation Demo',
            templateUrl: pageHtml['./components/navigation/navigation.html'],
            controller: ctrls('./components/navigation/navigation.ctrl.js').default,
            controllerAs:'ctrl'
        })
        .when('/components/edit', {
            title: 'Edit Demo',
            templateUrl: pageHtml['./components/edit/edit.html'],
            controller: ctrls('./components/edit/edit.ctrl.js').default,
            controllerAs:'ctrl'
        })
        .when('/components/typeahead', {
            title: 'typeahead Demo',
            templateUrl: pageHtml['./components/typeahead/typeahead.html'],
            controller: ctrls('./components/typeahead/typeahead.ctrl.js').default,
            controllerAs:'ctrl'
        })
        .when('/components/accordion', {
            title: 'accordion Demo',
            templateUrl: pageHtml['./components/accordion/accordion.html'],
            controller: ctrls('./components/accordion/accordion.ctrl.js').default,
            controllerAs:'ctrl'
        })
        .when('/components/button', {
            title: 'button Demo',
            templateUrl: pageHtml['./components/button/button.html'],
            controller: ctrls('./components/button/button.ctrl.js').default,
            controllerAs:'ctrl'
        })
        .when('/components/carousel', {
            title: 'carousel Demo',
            templateUrl: pageHtml['./components/carousel/carousel.html'],
            controller: ctrls('./components/carousel/carousel.ctrl.js').default,
            controllerAs:'ctrl'
        })
        .otherwise({
            redirectTo: '/laoui/home'
        });
};
