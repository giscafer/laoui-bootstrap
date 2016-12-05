/**代码复制 */

export default class ClipboardCtrl{
    constructor(uiNotification){
        "ngInject";
		let clipboard = new Clipboard('.btn-clipboard');
        clipboard.on('success',  (e)=>{
			uiNotification.info({message:'代码复制成功',delay:1500,replaceMessage:true})
			e.clearSelection();
		});
		clipboard.on('error',  (e)=>{
			uiNotification.error({message:'代码复制失败',delay:1500,replaceMessage:true})
		});
    }
}