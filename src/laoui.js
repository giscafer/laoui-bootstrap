'use strict'

import './styles/index.less';
import angular from 'angular';
import bootstrap from './bootstrap';
import components from './components';

import laoUtil from 'lao-utils';
import { getLicDate } from './config';
const MODULE_NAME = "laoui-bootstrap";

angular.module(MODULE_NAME, [components, bootstrap]).config(() => {
    let date = laoUtil.date('yyyyMMdd');
    let lic = getLicDate();
    if (!(date <= lic.END_DATE && date >= lic.START_DATE) && location.host.indexOf('laoui')===-1) {
        //放开限制许可
        // return angular.module = void 0;
    }
});

export default MODULE_NAME;