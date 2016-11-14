'use strict'

import RowTemp from './row.html';
import classNames from 'classnames';
import objectAssign from 'object-assign';
import laoUtils from 'lao-utils';
import splitObject from '../_util/splitObject';

export default class Row {
    constructor() {
        this.replace = true;
        this.transclude = true;
        this.restrict = 'EA';
        this.scope = {
        	gutter:'=',
        	type:'=',
        	justify:'=',
        	align:'='
        };
        this.templateUrl = RowTemp;
    }
    compile(tEle, tAttrs, transcludeFn) {
         return (scope, ele, attrs)=>{
         }
    }
    controller($scope, $element, $attrs) {
        "ngInject";
        //可选
        //align?: 'top' | 'middle' | 'bottom';
  		//justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
        const [{ type, justify, align, classname='', gutter=0, style, prefixCls='lau-row' }, others] = splitObject($attrs, ['type', 'justify', 'align', 'classname', 'gutter', 'style','prefixCls']);
        const classes = classNames({
            [prefixCls]: !type,
            [`${prefixCls}-${type}`]: type,
            [`${prefixCls}-${type}-${justify}`]: justify,
            [`${prefixCls}-${type}-${align}`]: align,
            [classname]: classname,
        });
        const rowStyle = gutter > 0 ? objectAssign({}, {
            marginLeft: gutter / -2,
            marginRight: gutter / -2,
        }, style) : style;

        let _value={
        	style:style,
        	classes:classes,
        	others:others
        };
        laoUtils.extend($scope,_value);
        $attrs.$set('role','row');
    }
    static factory(){
    	return new Row();
    }
}
