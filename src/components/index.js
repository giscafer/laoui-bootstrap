'use strict'
//general
import Icon from './icon';
import Button from './button';
import { Panel, PanelHeading, PanelTransclude } from './panel';
//Layout
import { Row, Col } from './grid';
//Data Entry
import TextAngular from './editor';
import Datepicker from './datepicker';
//Navigation
import Navigation from './navigation';
//Data Display
//Feedback
import Alert from './alert';
import Notification from './notification';

const MODULE_NAME = "laoui.bootstrap.components";

angular.module(MODULE_NAME, [TextAngular,Notification,Datepicker])
	//general
	.directive('uiIcon', Icon.factory)
	.directive('uiButton', Button.factory)
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
