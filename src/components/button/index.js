
import templateUrl from './template/button.html';
import splitObject from '../_util/splitObject';
import existAttr from '../_util/existAttr';
import classNames from 'classnames';

export default class ButtonDirective {
    constructor() {
        this.restrict = "EA";
        this.replace = true;
        this.transclude = true;
        this.templateUrl = templateUrl;
        this.scope = {
            onClick: '&',
            loading:'='
        }
    }
    controller($scope, $element, $attrs) {
        "ngInject";
        const props = $attrs;
        const [{ type='button', shape, size, classname='', icon, loading, prefixCls = "btn" }, others] = splitObject(props,
            ['type','shape', 'size', 'classname', 'icon', 'loading']);

        const showIcon = icon ? true : false;

        // large => lg
        // small => sm
        const sizeCls = ({
            large: 'lg',
            small: 'sm',
            xsmall: 'xs',
        })[size] || '';
        const iconCls=classNames({
            ['fa']: true,
            [`fa-${icon}`]: showIcon,
            ['fa-spin']: loading==true || loading==='true'
        });
        const classes = classNames({
            [prefixCls]: true,
            [`${prefixCls}-${type}`]: type.replace('button',''),
            [`${prefixCls}-${shape}`]: shape,
            [`${prefixCls}-${sizeCls}`]: sizeCls,
            // [`${prefixCls}-icon-only`]: icon,
            [classname]: classname,
        });
        $scope.showIcon=showIcon;
        $scope.iconCls=iconCls;
        $scope.classes=classes;
        $scope.others=others;
        $scope.handleClick=()=>{
            $scope.onClick();
            //监测变化更改状态
            setTimeout(()=>{
                $scope.$apply(()=>{
                    changeLoading();
                })
            })
        }
        //确保
        function changeLoading(){
            const iconCls=classNames({
                ['fa']: true,
                [`fa-${icon}`]: showIcon,
                ['fa-spin']: $scope.loading==true || $scope.loading==='true'
            });
            $scope.iconCls=iconCls;
        }
    }
    
    static factory(){
       return  new ButtonDirective();
    }
}