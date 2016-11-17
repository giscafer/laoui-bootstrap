'use strict'
import templateUrl from './template/panel.html';

export default class Panel {
    constructor() {
        this.replace = true;
        this.transclude = true;
        this.scope = {
            heading: '@',
            shadow: '=?',
            border: '=?'
        };
        this.templateUrl = templateUrl;
        this.link=this.link.bind(this);
    }
    link(scope, element, attrs) {
        if (angular.isDefined(scope.border) && scope.border) {
            element.addClass('panel-border');
        }

        if (angular.isDefined(scope.shadow) && !scope.shadow) {
            element.addClass('panel-flat');
        }
    }
    controller($scope) {
        "ngInject";
        this.setHeading = function(element) {
            this.heading = element;
            $scope.heading = true;
        };
    }
}
