import NavigationTemp from './template/navigation.html';
import NavigationCtrl from './navigation.ctrl.js';
import classNames from 'classnames';

export default class Navigation {
    constructor($location, $timeout) {
        this.replace = true;
        this.transclude = true;
        this.scope = {
            links: '='
        };
        this.controller = NavigationCtrl;
        this.templateUrl = NavigationTemp;
        this._$location = $location;
        this._$timeout = $timeout;
        this.link = this.link.bind(this);
    }
    link(scope, element, attrs) {
        let { prefixCls='ui-navigation',mode='vertical', theme='light', classname='', type } = attrs;
        scope.classes = classNames({
            [`${prefixCls}`]:true,
            [`${prefixCls}-${mode}`]:true,
            [`${prefixCls}-${mode}-${theme}`]:true,
            classname:classname
        })
        if (mode.includes('vertical')) {
            element.delegate('li', 'click', function(e) {
                let $this = angular.element(this);
                let $toCloseItems;
                if ($this.hasClass('collapsed')) {
                    let children = $this.find('> ul > li');
                    let ulHeight = 12; 
                    angular.forEach(children, function(obj, index) {
                        ulHeight += obj.clientHeight;
                    });
                    $toCloseItems = $this.siblings('li.expanded');
                    $this.addClass('expanded').removeClass('collapsed').find('> ul').height(ulHeight);
                    let $ul = angular.element(this).find('> ul');

                    setTimeout(function() {
                        $ul.height('auto');
                    }, 200);
                } else if ($this.hasClass('expanded')) {
                    // 关闭展开
                    $toCloseItems = $this;
                }

                angular.forEach($toCloseItems, function(item) {
                    let $item = angular.element(item);
                    let $itemUl = $item.find('> ul');
                    $item.removeClass('expanded').addClass('collapsed');
                    $itemUl.height($itemUl.height()).height(0);
                });

                e.stopPropagation();
            });

            scope.$watch('links', function() {
                if (scope.links) {
                    setTimeout(function() {
                        let activedLink = element.find('li.active');
                        activedLink.parents('.link-root').trigger('click');
                    }, 0);
                }
            });
        } else {
            element.delegate('li', 'mouseenter', function() {
                let child = angular.element(this).find('> ul');
                if (child.length > 0) {
                    child.fadeIn(100);
                }
            });

            element.delegate('li', 'mouseleave', function() {
                let child = angular.element(this).find('> ul');
                if (child.length > 0) {
                    child.fadeOut(100);
                }
            });

            scope.$watch('links', function() {
                setTimeout(function() {
                    let activedLink = element.find('li.active');
                    activedLink.parents('li').last().addClass('active');
                }, 200);
            });
        }
    }
    static factory($location, $timeout) {
        "ngInject";
        return new Navigation($location, $timeout)
    }
}
