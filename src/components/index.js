'use strict'
//Basic
import Icon from './icon';
import { Row, Col } from './grid';
//Views
import Alert from './alert';
import TextAngular from './edit';
//Navigation
import Navigation from './navigation';

const MODULE_NAME = "laoui.components";

angular.module(MODULE_NAME, [TextAngular])
    //Basic
    .directive('uiRow', Row.factory)
    .directive('uiCol', Col.factory)
    .directive('uiIcon', Icon.factory)
    //Views
    .directive('uiAlert', Alert.factory)
    //Navigation
    .directive('uiNavigation', Navigation.factory);


export default MODULE_NAME;
