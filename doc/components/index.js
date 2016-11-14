'use strict'
//Basic
import Header from './header/header.dirct.js';
import Sidebar from './sidebar/sidebar.dirct.js';

const MODULE_NAME = "laoui.doc.components";

angular.module(MODULE_NAME, [])
    .directive('uiSidebar', Sidebar.factory)
    .directive('uiHeader', Header.factory);

export default MODULE_NAME;

