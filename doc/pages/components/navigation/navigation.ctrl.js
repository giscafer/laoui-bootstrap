import menus from './components.js';
import data2 from './data2.js';
export default class NavigationCtrl{
	constructor($scope,$location,$timeout){
		"ngInject";
		this.menus=menus;
		this.data2=data2;
		// console.info(this.menus);
	}
}