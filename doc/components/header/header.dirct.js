import templateUrl from './header.html';

export default class HeaderDirective{
	constructor(){
		this.replace=true;
		this.templateUrl=templateUrl;
	}
	static factory(){
		return new HeaderDirective();
	}
}