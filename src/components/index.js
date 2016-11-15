'use strict'

//Views
// import TextAngular from './edit';
//Navigation
import Navigation from './navigation';

const MODULE_NAME = "laoui.bootstrap.components";

angular.module(MODULE_NAME, [])
    //Navigation
    .directive('uiNavigation', Navigation.factory);


export default MODULE_NAME;
