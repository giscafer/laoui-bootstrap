class Controller {
    constructor($scope, $state) {
        "ngInject";
        // 默认选中的tab id
        $scope.activeId = 'about';

        // 选项卡列表
        $scope.tabList = [{
            'id': 'home',
            'heading': '首页',
            'content': 'Volutpat montes per est. Sociosqu orci pharetra. Eros fermentum cursus. Orci cras justo aliquet tristique. Sed. Leo erat morbi, quam rutrum.'
        }, {
            'id': 'help',
            'heading': '帮助信息',
            'content': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
        }, {
            'id': 'about',
            'heading': '关于我们',
            'content': 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.'
        }, {
            'id': 'home',
            'heading': '演示文档',
            'content': 'Volutpat montes per est. Sociosqu orci pharetra. Eros fermentum cursus. Orci cras justo aliquet tristique. Sed. Leo erat morbi, quam rutrum.'
        }, {
            'id': 'help',
            'heading': '相关资源',
            'content': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
        }, {
            'id': 'help',
            'heading': '监控中心',
            'content': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
        }];

        // 插入新的选项卡
        $scope.insertTab = function() {
            $scope.tabList.push({
                'id': 'info',
                'heading': '资源配置',
                'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                'active': true
            });
        };

        // 删除选项卡
        $scope.removeTab = function(tab) {
            var index = $scope.tabList.indexOf(tab);
            $scope.tabList.splice(index, 1);
        };

        // 当选中选项卡触发回调函数
        $scope.selectTab = function(tab) {
            console.log('打开选项卡:' + tab.heading);
        };

        // 当取消选中选项卡触发回调函数
        $scope.deselectTab = function(tab) {
            console.log('取消选中选项卡:' + tab.heading);
        };




        /*
            路由选项卡
         */
        // 监听路由地址变化
        $scope.$watch(function() {
            return $state.current.name;
        }, function() {
            $scope.currentRouter = $state.current.name;
        });

        // 导航路由
        $scope.routers = [
            { title:'表格页面', route: 'components/tabs.tab1' },
            { title:'表单页面', route: 'components/tabs.tab2' },
            { title:'富编辑器页面', route: 'components/tabs.tab3' },
            { title:'源代码页面', route: 'components/tabs.tab4' }
        ];

        // 默认显示的Tabs
        $scope.defaultRouteTabs = [
            { title:'表格页面', route: 'components/tabs.tab1' }
        ];

        // 路由跳转
        $scope.routeGo = function(tab) {
            $state.go(tab.route, tab.params);
        };

        // 移除选项卡
        $scope.removeRouteTab = function(tab) {
            var _tab = _.findWhere($scope.tabs, {
                route: tab.route
            });
            var index = $scope.tabs.indexOf(_tab);
            $scope.tabs.splice(index, 1);
        };

        // 添加选项卡
        $scope.addRouteTab = function(event) {
            var route = angular.element(event.target).attr('ui-sref');
            angular.forEach($scope.defaultRouteTabs, function(tab) {
                tab.active = false;
            });

            var _tab = _.findWhere($scope.defaultRouteTabs, {
                route: route
            });

            if(!_tab) {
                $scope.defaultRouteTabs.push({
                    title: event.target.innerHTML,
                    route: route,
                    active: true
                });
            } else {
                _tab.active = true;
            }
        };
    }
}

export default Controller;
