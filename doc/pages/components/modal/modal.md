# Modal对话框

模态对话框。

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
或者是通过弹窗自定义html内容，满足一下业务处理需要。

## 如何使用

依赖注入服务 `$uiModal`， 提供一个模板template和controller，使用`open(options)`方法创建一个模态弹窗


## 属性

### $uiModal's open function

#### options parameter


| 成员       | 说明             | 类型               | 默认值       |
|-----------|-----------------|--------------------|-------------|
| animation    | 是否显示动画效果   | boolean | `true`       |
| appendTo      | 将模态弹窗显示在element元素上| Type: `angular.element`, Default: `body`: Example: `$document.find('aside').eq(0)` |   `body`    |
| ariaDescribedBy     |详情见[`aria-describedby`](https://www.w3.org/TR/wai-aria/states_and_properties#aria-describedby)  | string |`my-modal-description`     |
| ariaLabelledBy   | 详情见[`aria-labelledby`](https://www.w3.org/TR/wai-aria/states_and_properties#aria-labelledby)    | string | `start`        |
| backdrop   |  控制是否有背景掩膜 : `true` (default), `false` (no backdrop), `'static'` (点击背景关闭窗口)   | boolean、string | `true`       |
| backdropClass   | 背景样式.   | string | -     |
| bindToController   |  当使用`controllerAs`属性并设为`true`时, 将会绑定 $scope的属性到此controller   | boolean | `false`  |
| controller   | modal instance（弹窗实例对象）控制器，控制器可依赖注入 `$uiModalInstance` 服务，该服务即为modal instance   | Type: `function、string、array`, Example: `MyModalController` | `false`  |
| controllerAs   |  controller替代别名   | Type: `string`, Example: `ctrl` | -  |
| keyboard   |  设定弹窗是否可以通过`ESC`键关闭   | boolean | `true` |
| openedClass   |  弹窗打开时，body 样式 | string | `modal-open` |
| resolve   |  传参给窗口controller作为本地参数属性，作用和路由router的`resolve`属性一样 | Object |  -  |
| scope   |  modal的scope作用域对象 | $scope |  `$rootScope`  |
| size   |  窗体尺寸大小 | string，可选值有`sm`,`lg`,`md` |  `lg`  |
| template   |  替代modal内容的自定义模板 | string |  -  |
| templateUrl   |  modal内容模板路径 | string |  -  |
| windowClass   |  模态弹窗模板CSS样式 | string |  -  |
| windowTemplateUrl   |  模态弹窗自定义模板 | string |  -  |
| windowTopClass   |  顶部模态弹窗样式（弹两个弹窗时） | string |  -  |


> 全局的模态弹窗属性配置可以通过`$uiModalProvider.options`来设置


#### return

 `open` 方法返回一个弹窗实例（modal instance）, 改实例有以下属性

| 成员       | 说明             | 类型               | 默认值       |
|-----------|-----------------|--------------------|-------------|
| close(result)    | 关闭窗口，并返回`result`，支持promise   | function | `true`       |
| dismiss(result)    | dismiss窗口，并返回`reason`，支持promise   | function | `true`       |
| result   | 方法close或dismiss执行返回的promise对象   | promise |  -  |
| opened   | 当modal弹窗打开后，并且内容模板加载完成和接收所有变量参数时   | promise |  -  |
| closed   | 当modal弹窗关闭并且动画结束 | promise |  -  |
| rendered   | 当modal弹窗渲染时| promise |  -  |


---

与模态的内容相关联的 `scope` 扩充:

| 成员       | 说明             | 类型               | 默认值       |
|-----------|-----------------|--------------------|-------------|
| $close(result)    | 关闭窗口，并返回`result`，支持promise   | function | `true`       |
| $dismiss(result)    | dismiss窗口，并返回`reason`，支持promise   | function | `true`       |

> 在不需要创建一个controller时，这些方法可以关闭弹窗
> 此外，在使用`bindToController`时，可以在控制器controller里边定义一个`$onInit`方法，该方法在控制器初始化的时候执行


---

Events fired:

* `$uiUnscheduledDestruction` -
  该事件在$scope被意想不到的机制破坏时, 比如在$route/$state转变时. 窗口将会dismiss.

* `modal.closing` -
  事件再modal关闭前广播`broadcast`给modal的scope作用域. 如果监听器中调用`preventDefault()`方法, 则modal弹窗还会维持（不关闭）.
  并且,  `$close`和 `$dismiss` 方法返回`true`。


## 代码演示


<div class="bs-example">
<div  class="modal-demo">
<script type="text/ng-template" id="stackedModal.html">
    <div class="modal-header">
        <h3 class="modal-title" id="modal-title-{{name}}">The {{name}} modal!</h3>
    </div>
    <div class="modal-body" id="modal-body-{{name}}">
        Having multiple modals open at once is probably bad UX but it's technically possible.
    </div>
</script>

<button type="button" class="btn btn-default" ng-click="ctrl.open()">点击弹窗!</button>
<button type="button" class="btn btn-default" ng-click="ctrl.open('lg')">大弹窗</button>
<button type="button" class="btn btn-default" ng-click="ctrl.open('sm')">小弹窗</button>
<button type="button" 
    class="btn btn-default" 
    ng-click="ctrl.open('sm', '.modal-parent')">
        Modal appended to a custom parent
</button>
<button type="button" class="btn btn-default" ng-click="ctrl.toggleAnimation()">是否有动画 ({{ ctrl.animationsEnabled }})</button>
<!--<button type="button" class="btn btn-default" ng-click="ctrl.openComponentModal()">Open a component modal!</button>-->
<button type="button" class="btn btn-default" ng-click="ctrl.openMultipleModals()">
    一次打开多个弹窗
</button>
<div ng-show="ctrl.selected">Selection from a modal: {{ ctrl.selected }}</div>
<div class="modal-parent">
</div>
</div>
</div>
<div class="row">
    <ui-tabset style="height:500px;overflow-y:auto">
        <ui-tab heading="modal.ctrl.js">
            <pre>
                
// Please note that $uiModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uiModal service used above.
import ModalInstanceCtrl from './modal-form.ctrl.js';
// import ModalContentHtml from './modal-form.html';

// Please note that the close and dismiss bindings are from $uiModalInstance.
import ModelComponentCtrl from './modal.component.js';

export default class ModelDemoCtrl {
    constructor($scope, $timeout, $http, $uiModal, $document, $log) {
        "ngInject";
        this.items = ['item1', 'item2', 'item3'];

        this.animationsEnabled = true;

        this.open = function (size, parentSelector) {
            let parentElem = parentSelector ?
                angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
            let modalInstance = $uiModal.open({
                animation: this.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: ModalContentHtml,
                controller: ModalInstanceCtrl,
                controllerAs: 'objFrom',
                size: size,
                appendTo: parentElem,
                resolve: {
                    items: () => {
                        return this.items;
                    }
                }
            });

            modalInstance.result.then((selectedItem) => {
                this.selected = selectedItem;
            }, () => {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        /**this.openComponentModal = function () {
            let modalInstance = $uiModal.open({
                animation: this.animationsEnabled,
                component: ModelComponentCtrl,//有问题
                resolve: {
                    items: () => {
                        return this.items;
                    }
                }
            });

            modalInstance.result.then((selectedItem) => {
                this.selected = selectedItem;
            }, () => {
                $log.info('modal-component dismissed at: ' + new Date());
            });
        };*/

        this.openMultipleModals = () => {
            $uiModal.open({
                animation: this.animationsEnabled,
                ariaLabelledBy: 'modal-title-bottom',
                ariaDescribedBy: 'modal-body-bottom',
                templateUrl: 'stackedModal.html',
                size: 'sm',
                controller: function ($scope) {
                    $scope.name = 'bottom';
                }
            });

            $uiModal.open({
                animation: this.animationsEnabled,
                ariaLabelledBy: 'modal-title-top',
                ariaDescribedBy: 'modal-body-top',
                templateUrl: 'stackedModal.html',
                size: 'sm',
                controller: function ($scope) {
                    $scope.name = 'top';
                }
            });
        };

        this.toggleAnimation = () => {
            this.animationsEnabled = !this.animationsEnabled;
        };
    }

}

            </pre>
        </ui-tab>
        <ui-tab heading="modal-form.ctrl.js">
             <pre>
export default class ModelFromCtrl{
    constructor($scope,$uiModalInstance, items){
    this.items = items;
    this.selected = {
        item: this.items[0]
    };

    this.ok = function () {
        $uiModalInstance.close(this.selected.item);
    };

    this.cancel = function () {
        $uiModalInstance.dismiss('cancel');
    };
    }
}
            </pre>
        </ui-tab>
        <ui-tab heading="modal-form.html">
             <pre>
<div class="modal-header">
    <h3 class="modal-title" id="modal-title">I'm a modal!</h3>
</div>
<div class="modal-body" id="modal-body">
    <ul>
        <li ng-repeat="item in objFrom.items">
            <a href="#" ng-click="$event.preventDefault(); objFrom.selected.item = item">{{ item }}</a>
        </li>
    </ul>
    Selected: <b>{{ objFrom.selected.item }}</b>
</div>
<div class="modal-footer">
    <button class="btn btn-primary" type="button" ng-click="objFrom.ok()">OK</button>
    <button class="btn btn-warning" type="button" ng-click="objFrom.cancel()">Cancel</button>
</div>
            </pre>
        </ui-tab>
    </ui-tabset>
</div>

>注： modal-form.ctrl.js为弹窗的控制器、modal-form.html是弹窗模板文件