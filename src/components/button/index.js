
import templateUrl from './template/button.html';
import splitObject from '../_util/splitObject';
import classNames from 'classnames';

export default class ButtonDirective {
    constructor() {
        this.restrict = "EA";
        this.replace = true;
        this.transclude = true;
        this.templateUrl = templateUrl;
        this.scope = {
            iconType: '=',
            onClick: '&'
        }
    }
    controller($scope, $element, $attrs) {
        "ngInject";
        const props = $attrs;
        const [{ type='button', shape, size, className='', icon, loading, prefixCls = "btn" }, others] = splitObject(props,
            ['type','shape', 'size', 'className', 'icon', 'loading']);

        const iconType = loading ? true : false;

        // large => lg
        // small => sm
        const sizeCls = ({
            large: 'lg',
            small: 'sm',
            xsmall: 'xs',
        })[size] || '';
        const iconCls=classNames({
            ['fa']: true,
            [`fa-${icon}`]: !!icon,
            ['fa-spin']: !!loading
        });
        const classes = classNames({
            [prefixCls]: true,
            [`${prefixCls}-${type}`]: type.replace('button',''),
            [`${prefixCls}-${shape}`]: shape,
            [`${prefixCls}-${sizeCls}`]: sizeCls,
            // [`${prefixCls}-icon-only`]: icon,
            [className]: className,
        });
        $scope.iconType=iconType;
        $scope.iconCls=iconCls;
        $scope.classes=classes;
        $scope.others=others;
    }
    static factory(){
       return  new ButtonDirective();
    }
}