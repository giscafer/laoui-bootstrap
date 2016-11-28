'use strict'
//general
import Icon from './icon';
import { Panel, PanelHeading, PanelTransclude } from './panel';
//Layout
import { Row, Col } from './grid';
//Data Entry
import TextAngular from './editor';
//Navigation
import Navigation from './navigation';
//Data Display
//Feedback
import Alert from './alert';

const MODULE_NAME = "laoui.bootstrap.components";

angular.module(MODULE_NAME, [TextAngular])
	//general
	.directive('uiIcon', Icon.factory)
    //Layout
    .directive('uiRow', Row.factory)
    .directive('uiCol', Col.factory)
	//Panel
    .directive('uiPanel', Panel.factory)
    .directive('uiPanelHeading', PanelHeading.factory)
    .directive('uiPanelTransclude', PanelTransclude.factory)
    //Feedback
    .directive('uiAlert', Alert.factory)
    //Navigation
    .directive('uiNavigation', Navigation.factory);
    


export default MODULE_NAME;
