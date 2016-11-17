import templateUrlTabs  from './tabs.view.html';
import templateUrlTabs1 from './tabs-1.view.html';
import templateUrlTabs2 from './tabs-2.view.html';
import templateUrlTabs3 from './tabs-3.view.html';
import templateUrlTabs4 from './tabs-4.view.html';
import controller       from './tabs.controller';

export default function config($stateProvider) {
    "ngInject";

    $stateProvider.state('components/tabs', {
        url: '/components/tabs',
        controller: controller,
        controllerAs: 'vm',
        templateUrl: templateUrlTabs
    }).state('components/tabs.tab1', {
        url: '/1',
        templateUrl: templateUrlTabs1
    }).state('components/tabs.tab2', {
        url: '/2',
        templateUrl: templateUrlTabs2
    }).state('components/tabs.tab3', {
        url: '/3',
        templateUrl: templateUrlTabs3
    }).state('components/tabs.tab4', {
        url: '/4',
        templateUrl: templateUrlTabs4
    });
}


/** WEBPACK FOOTER **
 ** ./app/scripts/doc/pages/components/tabs/tabs.router.js
 **/