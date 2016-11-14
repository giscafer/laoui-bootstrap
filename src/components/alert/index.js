'use strict'

import UiAlertController from './alert.ctrl.js';
import UiAlertTemp from './alert.html';

export default class UiAlert {
    constructor() {
        this.replace = true;
        // this.controllerAs = 'alert';
        this.controller = UiAlertController;
        // this.transclude = true,
        this.restrict = 'EA';
        this.scope = {
            close: '&',
            closing:'=',
            message:'=',
            description:'=',
            showicon:'='
        };
        this.templateUrl = UiAlertTemp;
    }
    static factory() {
        return new UiAlert();
    }
}
