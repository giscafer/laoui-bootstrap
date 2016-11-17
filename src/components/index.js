'use strict'

//Views
// import TextAngular from './edit';
//Navigation
import Navigation from './navigation';
//Panel
import { Panel, PanelHeading, PanelTransclude } from './panel';

const MODULE_NAME = "laoui.bootstrap.components";

angular.module(MODULE_NAME, [])
    //Navigation
    .directive('uiNavigation', Navigation.factory);
    //Panel
    .directive('uiPanel', Panel.factory);
    .directive('uiPanelHeading', PanelHeading.factory);
    .directive('uiPanelTransclude', PanelTransclude.factory);


export default MODULE_NAME;
