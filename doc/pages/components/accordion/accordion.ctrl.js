export default class AccordionCtrl {
    constructor($scope) {
    	this._$scope=$scope;
       this.oneAtATime = true;

       this.groups = [{
            title: 'Dynamic Group Header - 1',
            content: 'Dynamic Group Body - 1'
        }, {
            title: 'Dynamic Group Header - 2',
            content: 'Dynamic Group Body - 2'
        }];

       this.items = ['Item 1', 'Item 2', 'Item 3'];

       this.addItem = ()=>{
           let newItemNo =this.items.length + 1;
           this.items.push('Item ' + newItemNo);
        };

       this.status = {
            isCustomHeaderOpen: false,
            isFirstOpen: true,
            isFirstDisabled: false
        };
    }
}
