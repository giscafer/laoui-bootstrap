/**
 * UiAlertController
 */
import classNames from 'classnames';
import laoUtils from 'lao-utils';
import existAttr from '../_util/existAttr';

export default class UiAlertController {
    constructor($scope, $element, $attrs, $interpolate, $timeout) {
        "ngInject";
        this._$scope = $scope;
        this._$attrs = $attrs;
        this._$element = $element;
        this._$attr = $attrs.$attr;
        this._$interpolate = $interpolate;
        this._$timeout = $timeout;
        this.render();
    }
    render() {
        let {
            closable,
            closing,
            close,
            type = 'warning',
            prefixCls = 'ui-alert',
            closetext,
            showicon,
            banner,
            classname = '',
            style,
            dismissontimeout
        } = this._$attrs;

        closable = !!close || !!dismissontimeout || existAttr(closable);
        banner=existAttr(banner);
        showicon=existAttr(showicon) || banner;// banner has default Icon
        // banner icon is default warning
        type = banner ? 'warning' : type;
        let iconType = '';
        switch (type) {
          case 'success':
            iconType = 'check-circle';
            break;
          case 'info':
            iconType = 'info-circle';
            break;
          case 'error':
            iconType = 'cross-circle';
            break;
          case 'warning':
            iconType = 'exclamation-circle';
            break;
          default:
            iconType = 'default';
        }
        // use outline icon in alert with description
        if (!!this._$scope.description) {
          iconType += '-o';
        }
        let iconCls='fa fa-'+iconType+' '+prefixCls+'-icon';
        
        let alertCls = classNames({
          [prefixCls]: true,
          [`${prefixCls}-${type}`]: true,
          [`${prefixCls}-with-description`]: !!this._$scope.description,
          [`${prefixCls}-no-icon`]: !showicon,
          [`${prefixCls}-banner`]: banner,
          [classname]: !!classname,
        });
        //setting class
        let _value={
           closetext:closetext,
           showIcon:showicon,
           iconCls:iconCls,
           alertCls:alertCls,
           messageCls:`${prefixCls}-message`,
           descriptionCls:`${prefixCls}-description`,
           closeCls:`${prefixCls}-close-icon`,
           closable:closable
        };
        laoUtils.extend(this._$scope,_value);
        this._$attrs.$set('role', 'alert');
        
        //close alert while dismissOnTimeout is privide
        var dismissOnTimeout = angular.isDefined(dismissontimeout) ?
            this._$interpolate(dismissontimeout)(this._$scope.$parent) : null;
        if (dismissOnTimeout) {
            this._$timeout(() => {
                this.close();
            }, parseInt(dismissOnTimeout, 10));
        }
    }
    close() {
        this._$scope.closing = true;
    }
}
