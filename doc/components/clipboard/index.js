import templateUrl from './clipboard.html';
export default class Clipboard{
	constructor(){
		this.replace=true;
		this.restrict="EA";
		this.scope={
			clipboardTarget:'='
		}
		this.templateUrl=templateUrl;
	}
	controller($scope, $element, $attrs){
		"ngInject";
		const props = $attrs;
		$scope.clipboardTarget=props['clipboardTarget']
		$element.find('span').attr('data-clipboard-target','#'+$scope.clipboardTarget)
	}
	static factory(){
		return new Clipboard();
	}
}