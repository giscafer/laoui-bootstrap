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
        .state('table.sort', {
            title: 'Table sort Demo',
            url: '/sort',
            templateUrl: pageHtml['./demos/sort.html'],
            controller: ctrls('./demos/sort.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('table.tall-rows', {
            title: 'Table tall Demo',
            url: '/tall-rows',
            templateUrl: pageHtml['./demos/tall.html'],
            controller: ctrls('./demos/tall.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('table.paging', {
            title: 'Table paging Demo',
            url: '/paging',
            templateUrl: pageHtml['./demos/paging.html'],
            controller: ctrls('./demos/paging.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('table.virtual-paging', {
            title: 'Table virtual-paging Demo',
            url: '/virtual-paging',
            templateUrl: pageHtml['./demos/virtual-paging.html'],
            controller: ctrls('./demos/virtual-paging.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('table.scroll', {
            title: 'Table scroll Demo',
            url: '/scroll',
            templateUrl: pageHtml['./demos/scroll.html'],
            controller: ctrls('./demos/scroll.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('table.filters', {
            title: 'Table filters Demo',
            url: '/filters',
            templateUrl: pageHtml['./demos/filters.html'],
            controller: ctrls('./demos/filters.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('table.tabs', {
            title: 'Table tabs Demo',
            url: '/tabs',
            templateUrl: pageHtml['./demos/tabs.html'],
            controller: ctrls('./demos/tabs.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('table.inline-editing', {
            title: 'Table inline-editing Demo',
            url: '/inline-editing',
            templateUrl: pageHtml['./demos/inline-editing.html'],
            controller: ctrls('./demos/inline-editing.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('table.updating', {
            title: 'Table updating Demo',
            url: '/updating',
            templateUrl: pageHtml['./demos/updating.html'],
            controller: ctrls('./demos/updating.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('table.empty', {
            title: 'Table empty Demo',
            url: '/empty',
            templateUrl: pageHtml['./demos/empty.html'],
            controller: ctrls('./demos/empty.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('table.slow', {
            title: 'Table slow Demo',
            url: '/slow',
            templateUrl: pageHtml['./demos/slow.html'],
            controller: ctrls('./demos/slow.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('table.expressive', {
            title: 'Table expressive Demo',
            url: '/expressive',
            templateUrl: pageHtml['./demos/expressive.html'],
            controller: ctrls('./demos/expressive.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('table.templates', {
            title: 'Table templates Demo',
            url: '/templates',
            templateUrl: pageHtml['./demos/templates.html'],
            controller: ctrls('./demos/templates.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('table.cell-templates', {
            title: 'Table cell-templates Demo',
            url: '/cell-templates',
            templateUrl: pageHtml['./demos/cell-templates.html'],
            controller: ctrls('./demos/cell-templates.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('table.single-select', {
            title: 'Table single-select Demo',
            url: '/single-select',
            templateUrl: pageHtml['./demos/single-select.html'],
            controller: ctrls('./demos/single-select.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('table.multi-select', {
            title: 'Table multi-select Demo',
            url: '/multi-select',
            templateUrl: pageHtml['./demos/multi-select.html'],
            controller: ctrls('./demos/multi-select.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('table.checkboxes', {
            title: 'Table checkboxes Demo',
            url: '/checkboxes',
            templateUrl: pageHtml['./demos/checkboxes.html'],
            controller: ctrls('./demos/checkboxes.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('table.greed', {
            title: 'Table greed Demo',
            url: '/greed',
            templateUrl: pageHtml['./demos/greed.html'],
            controller: ctrls('./demos/greed.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('table.force', {
            title: 'Table force Demo',
            url: '/force',
            templateUrl: pageHtml['./demos/force.html'],
            controller: ctrls('./demos/force.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        

};
