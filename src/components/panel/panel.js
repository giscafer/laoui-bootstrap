'use strict'
import templateUrl from './template/panel.html';
import classNames from 'classnames';
import existAttr from '../_util/existAttr';

export default class Panel {
    constructor() {
        this.replace = true;
        this.transclude = true;
        this.scope = {
            type: '=',
            heading: '=',
            shadow: '=?',
            border: '=?'
        };
        this.templateUrl = templateUrl;
        this.link = this.link.bind(this);
    }
    link(scope, element, attrs) {
        let { prefixCls = "panel",uiprefixCls = "ui-panel", type = '', noborder, classname } = attrs;

        scope.classes = classNames({
            [`${prefixCls}`]: true,
            //不指定样式时，header背景白色，且无border
            [`${uiprefixCls}-default`]:!type,
            [`${prefixCls}-${type}`]: !!type,
            [`${uiprefixCls}-noborder`]: existAttr(noborder),
            classname: classname
        });

        if (angular.isDefined(scope.border) && scope.border) {
            element.addClass('panel-border');
        }

        if (angular.isDefined(scope.shadow) && !scope.shadow) {
            element.addClass('panel-flat');
        }
    }
    controller($scope) {
        "ngInject";
        this.setHeading = function(element) {
            this.heading = element;
            $scope.heading = true;
        };
    }
    static factory() {
        return new Panel();
    }
}
