export default class PanelTransclude {
    constructor() {
        this.transclude = true;
        this.replace = true;
        this.require = '^uiPanel';
        this.link = this.link.bind(this);
    }
    link(scope, element, attrs, panelCtrl, transclude) {
        panelCtrl.setHeading(transclude(scope, angular.noop));
    }
    static factory(){
        return new PanelTransclude();
    }
}
