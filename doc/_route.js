/**
 * Created by Giscafer
 */
let pageHtml = {};
let templs = require.context("./pages/", true, /^((?!\/unknown\/).)*.html$/);
let ctrls = require.context("./pages/", true, /^((?!\/unknown\/).)*.ctrl.js$/);
templs.keys().forEach(key => {
    pageHtml[key] = templs(key);
});

export default ($stateProvider, $urlRouterProvider) => {
    "ngInject";
    $urlRouterProvider
        .otherwise(($injector, $location) => {
            $location.path('/laoui/home');
        });
    $stateProvider
        .state('home', {
            title: 'LaoUI Demo',
            url: '/laoui/home',
            templateUrl: pageHtml['./home/home.html'],
            controller: ctrls('./home/home.ctrl.js').default,
            controllerAs: 'home'
        })
        .state('grid', {
            title: 'grid Demo',
            url: '/components/grid',
            templateUrl: pageHtml['./components/grid/grid.html'],
            controller: ctrls('./components/grid/grid.ctrl.js').default
        })
        .state('icon', {
            title: 'icon Demo',
            url: '/components/icon',
            templateUrl: pageHtml['./components/icon/icon.html'],
            controller: ctrls('./components/icon/icon.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('alert', {
            title: 'alert Demo',
            url: '/components/alert',
            templateUrl: pageHtml['./components/alert/alert.html'],
            controller: ctrls('./components/alert/alert.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('tabs', {
            title: 'tabs Demo',
            url: '/components/tabs',
            templateUrl: pageHtml['./components/tabs/tabs.html'],
            controller: ctrls('./components/tabs/tabs.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('panel', {
            title: 'panel Demo',
            url: '/components/panel',
            templateUrl: pageHtml['./components/panel/panel.html'],
            controller: ctrls('./components/panel/panel.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('navigation', {
            title: 'navigation Demo',
            url: '/components/navigation',
            templateUrl: pageHtml['./components/navigation/navigation.html'],
            controller: ctrls('./components/navigation/navigation.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('edit', {
            title: 'Edit Demo',
            url: '/components/edit',
            templateUrl: pageHtml['./components/edit/edit.html'],
            controller: ctrls('./components/edit/edit.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('typeahead', {
            title: 'typeahead Demo',
            url: '/components/typeahead',
            templateUrl: pageHtml['./components/typeahead/typeahead.html'],
            controller: ctrls('./components/typeahead/typeahead.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('accordion', {
            title: 'accordion Demo',
            url: '/components/accordion',
            templateUrl: pageHtml['./components/accordion/accordion.html'],
            controller: ctrls('./components/accordion/accordion.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('button', {
            title: 'button Demo',
            url: '/components/button',
            templateUrl: pageHtml['./components/button/button.html'],
            controller: ctrls('./components/button/button.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('carousel', {
            title: 'carousel Demo',
            url: '/components/carousel',
            templateUrl: pageHtml['./components/carousel/carousel.html'],
            controller: ctrls('./components/carousel/carousel.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('collapse', {
            title: 'collapse Demo',
            url: '/components/collapse',
            templateUrl: pageHtml['./components/collapse/collapse.html'],
            controller: ctrls('./components/collapse/collapse.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('datepicker', {
            title: '日期选择器',
            url: '/components/datepicker',
            templateUrl: pageHtml['./components/datepicker/datepicker.html'],
            controller: ctrls('./components/datepicker/datepicker.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('notification', {
            title: 'notification Demo',
            url: '/components/notification',
            templateUrl: pageHtml['./components/notification/notification.html'],
            controller: ctrls('./components/notification/notification.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('modal', {
            url: '/components/modal',
            templateUrl: pageHtml['./components/modal/modal.html'],
            controller: ctrls('./components/modal/modal.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('ui-grid', {
            url: '/components/ui-grid',
            templateUrl: pageHtml['./components/tableGrid/uiGrid.html'],
            controller: ctrls('./components/tableGrid/uiGrid.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('pager', {
            url: '/components/pager',
            templateUrl: pageHtml['./components/pager/pager.html'],
            controller: ctrls('./components/pager/pager.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('pagination', {
            url: '/components/pagination',
            templateUrl: pageHtml['./components/pagination/pagination.html'],
            controller: ctrls('./components/pagination/pagination.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('progressbar', {
            url: '/components/progressbar',
            templateUrl: pageHtml['./components/progressbar/progressbar.html'],
            controller: ctrls('./components/progressbar/progressbar.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('rating', {
            url: '/components/rating',
            templateUrl: pageHtml['./components/rating/rating.html'],
            controller: ctrls('./components/rating/rating.ctrl.js').default,
            controllerAs: 'ctrl'
        })
        .state('popover', {
            url: '/components/popover',
            templateUrl: pageHtml['./components/popover/popover.html'],
            controller: ctrls('./components/popover/popover.ctrl.js').default,
            controllerAs: 'ctrl'
        })

};
