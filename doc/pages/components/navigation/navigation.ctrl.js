import menus from './components.js';
export default class NavigationCtrl{
	constructor($scope,$location,$timeout){
		"ngInject";
		this.menus=menus;
		console.info(this.menus);
	}
}