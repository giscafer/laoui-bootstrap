'use strict'

import ColTemp from './col.html';
import classNames from 'classnames';
import objectAssign from 'object-assign';
import laoUtils from 'lao-utils';
import splitObject from '../_util/splitObject';

export default class Col {
    constructor() {
        this.replace = true;
        this.transclude = true;
        this.restrict = 'EA';
        this.scope = {
            span: '=',
            order: '=',
            offset: '=',
            push: '=',
            pull: '=',
            xs: '=',
            sm: '=',
            md: '=',
            lg: '='
        };
        this.templateUrl = ColTemp;
    }
    controller($scope, $element, $attrs) {
        "ngInject";
        const props = $attrs;
        const [{ span, order, offset, push, pull, classname = '',prefixCls = 'lau-col' }, others] = splitObject(props, ['span', 'order', 'offset', 'push', 'pull', 'classname','prefixCls']);
        let sizeClassObj = {};
        ['xs', 'sm', 'md', 'lg'].forEach(size => {
            let sizeProps= {};
            if (typeof props[size] === 'number') {
                sizeProps.span = props[size];
            } else if (typeof props[size] === 'object') {
                sizeProps = props[size] || {};
            }

            delete others[size];

            sizeClassObj = objectAssign({}, sizeClassObj, {
                [`${prefixCls}-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
                [`${prefixCls}-${size}-order-${sizeProps.order}`]: sizeProps.order,
                [`${prefixCls}-${size}-offset-${sizeProps.offset}`]: sizeProps.offset,
                [`${prefixCls}-${size}-push-${sizeProps.push}`]: sizeProps.push,
                [`${prefixCls}-${size}-pull-${sizeProps.pull}`]: sizeProps.pull,
            });
        });
        const classes = classNames(objectAssign({}, {
            [`${prefixCls}-${span}`]: span !== undefined,
            [`${prefixCls}-order-${order}`]: order,
            [`${prefixCls}-offset-${offset}`]: offset,
            [`${prefixCls}-push-${push}`]: push,
            [`${prefixCls}-pull-${pull}`]: pull,
            [classname]: !!classname,
        }, sizeClassObj));

        let _value = {
            classes: classes,
            others: others
        };
        laoUtils.extend($scope, _value);
        $attrs.$set('role', 'col');
    }
    static factory() {
        return new Col();
    }
}
