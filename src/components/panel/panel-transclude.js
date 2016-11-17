export default class PanelHeading {
    constructor() {
        this.require = '?^uiPanel';
        this.link = this.link.bind(this);
    }
    link(scope, element, attrs, controller) {
        scope.$watch(function() {
            return controller[attrs.uiPanelTransclude];
        }, function(heading) {
            if (heading) {
                element.html('');
                element.append(heading);
            }
        });
    }
}
