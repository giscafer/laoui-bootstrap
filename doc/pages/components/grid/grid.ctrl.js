import ClipboardCtrl from '../../common/clipboard.ctrl.js';
export default class GridCtrl extends ClipboardCtrl{
	constructor($scope,uiNotification) {
		"ngInject";
		super(uiNotification);
	}
}
