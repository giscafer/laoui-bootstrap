'use strict'

import NavigationTemp from './navigation.html';
import NavigationCtrl from './navigation.ctrl.js';
import classNames from 'classnames';
import laoUtils from 'lao-utils';

export default class Navigation {
    constructor($location) {
        this.replace = true;
        this.transclude = true;
        this.scope = {
            links: '='
        };
        this.controller = NavigationCtrl;
        this.templateUrl = NavigationTemp;
        this._$location = $location;
        this.link = this.link.bind(this);
    }
    link(scope, element, attrs) {
        let _location = this._$location;

        /**
         * mode: inline | horizontal | vertical
         * @type {String}
         */
        let { prefixCls = 'lau-menu', mode = 'inline', theme = 'light', classname, style } = attrs;

        let classes = classNames({
            [prefixCls]: true,
            [`${prefixCls}-${mode}`]: true,
            [`${prefixCls}-${theme}`]: true,
            [`${prefixCls}-root`]: true,
            [classname]: classname

        });
        let subclasses = classNames({
            [prefixCls]: true,
            [`${prefixCls}-${mode}`]: true,
            [`${prefixCls}-sub`]: true,
            [`${prefixCls}-hidden`]: true
        });
        let _value = {
            mode: mode,
            style: style,
            classes: classes,
            subclasses: subclasses,

            menuItemCls: prefixCls + '-item',
            menuItemActiveCls: prefixCls + '-item-active',

            submenuCls: prefixCls + '-submenu',
            submenuTitleCls: prefixCls + '-submenu-title',
            submenuActiveCls: prefixCls + '-submenu-active',
            submenuInlineCls: prefixCls + '-submenu-inline ',

            menuItemGroupCls: prefixCls + '-item-group',
            menuItemGroupTitleCls: prefixCls + '-item-group-title',
            menuItemSelectedCls: prefixCls + '-item-selected'
        };
        laoUtils.extend(scope, _value);
        if (mode.includes('inline')) {

            element.delegate('li', 'click', e => {
                e.stopPropagation();
                let $this = angular.element(e.srcElement || e.target);
                //子菜单，如果有链接，则跳转
                let isMenuItem = $this.attr('role') === 'menuitem';
                if (isMenuItem || $this.parent().attr('role') === 'menuitem') {
                    //高亮选择
                    let $elem = isMenuItem ? $this : $this.parent();
                    $elem.parents('.lau-menu').find('li').removeClass(_value['menuItemSelectedCls']);
                    $elem.addClass(_value['menuItemSelectedCls']);
                    //跳转链接
                    let path = $this.attr('link');
                    if (laoUtils.isExpect(path)) {
                        setTimeout(() => {
                            scope.$apply(() => {
                                _location.path(path);
                            });
                        });
                    }

                    return;
                }

                let $parent, $child, $toCloseItems, menuOpenCls = _value['submenuCls'] + '-open';
                if ($this.hasClass(_value['submenuCls']) || $this.hasClass(_value['submenuTitleCls'])) {
                    $parent = $this.parent();
                } else {
                    $parent = $this.parents('.' + _value['submenuCls']);
                    $toCloseItems = $this;
                }

                if ($parent.hasClass(menuOpenCls)) {
                    $parent.removeClass(menuOpenCls)
                    $child = $parent.find('> ul')
                    if ($child.length > 0) {
                        $child.fadeOut(100);
                    }
                } else {
                    $parent.addClass(menuOpenCls)
                    $child = $parent.find('> ul')

                    if ($child.length > 0) {
                        $child.fadeIn(100);
                    }
                }
            });

            scope.$watch('links', () => {
                if (scope.links) {
                    setTimeout(() => {
                        var activedLink = element.find('li.active');
                        if (activedLink.length) {
                            activedLink.parents('.link-root').trigger('click');
                        }

                    }, 0);
                }
            });
        } else { //vertical、horizontal
            element.delegate('li', 'mouseenter', () => {
                var child = angular.element(this).find('> ul');
                if (child.length > 0) {
                    child.fadeIn(100);
                }
            });
            element.delegate('li', 'mouseleave', () => {
                var child = angular.element(this).find('> ul');
                if (child.length > 0) {
                    child.fadeOut(100);
                }
            });
            scope.$watch('links', () => {
                setTimeout(() => {
                    var activedLink = element.find('li.active');
                    if (activedLink.length) {
                        activedLink.parents('li').last().addClass('active');
                    }
                }, 200);
            });
        }
    }

    static factory($location) {
        "ngInject";
        return new Navigation($location);
    }
}
