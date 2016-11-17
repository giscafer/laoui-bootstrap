'use strict'
import templateUrl from './template/panel.html';
import classNames from 'classnames';

export default class Panel {
    constructor() {
        this.replace = true;
        this.transclude = true;
        this.scope = {
            type: '=',
            heading: '@',
            shadow: '=?',
            border: '=?'
        };
        this.templateUrl = templateUrl;
        this.link = this.link.bind(this);
    }
    link(scope, element, attrs) {
        let { prefixCls = "panel", type = 'default', classname } = attrs;

        scope.classes = classNames({
            [`${prefixCls}`]: true,
            [`${prefixCls}-${type}`]: true,
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
