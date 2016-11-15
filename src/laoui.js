'use strict'

import './styles/index.less';
import angular from 'angular';
import bootstrap from './bootstrap';
import components from './components';
const MODULE_NAME="laoui-bootstrap";

angular.module(MODULE_NAME,[components,bootstrap]);

export default MODULE_NAME;