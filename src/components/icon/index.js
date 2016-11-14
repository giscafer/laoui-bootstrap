'use strict'

import IconTemp from './icon.html';
import classNames from 'classnames';

export default class Icon {
    constructor() {
        this.replace = true;
        this.restrict = 'EA';
        this.scope = {
            type: '='
        };
        this.templateUrl = IconTemp;
    }
    controller($scope, $element, $attrs) {
        "ngInject";
        let {
            iconCls = '',
            // prefixCls='lauicon',//ant样式icon
            prefixCls = 'fa', //fontawesome样式
            type = 'message',
            spin,
            classname = ''
        } = $attrs;
        const classString = classNames({
            [`${prefixCls}`]: true,
            [`${prefixCls}-spin`]: !!spin || type === 'loading',
            [`${prefixCls}-${type}`]: true,
            [classname]: true,
        });
        $attrs.$set('role', 'icon');
        $scope.iconCls = classString;
    }
    static factory() {
        return new Icon();
    }
}
