import templateUrl from './clipboard.html';
export default class Clipboard{
	constructor(){
		this.replace=true;
		this.restrict="E";
		this.templateUrl=templateUrl;
	}
	controller(scope,element,attrs){

	}
	static factory(){
		return new Clipboard();
	}
}