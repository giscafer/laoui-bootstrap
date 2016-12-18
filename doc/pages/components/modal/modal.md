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

The scope associated with modal's content is augmented with:

* `$close(result)`
  _(Type: `function`)_ -
  A method that can be used to close a modal, passing a result.

* `$dismiss(reason)`
  _(Type: `function`)_ -
  A method that can be used to dismiss a modal, passing a reason.

Those methods make it easy to close a modal window without a need to create a dedicated controller.

Also, when using `bindToController`, you can define an `$onInit` method in the controller that will fire upon initialization.

---

Events fired:

* `$uiUnscheduledDestruction` -
  This event is fired if the $scope is destroyed via unexpected mechanism, such as it being passed in the modal options and a $route/$state transition occurs. The modal will also be dismissed.

* `modal.closing` -
  This event is broadcast to the modal scope before the modal closes. If the listener calls preventDefault() on the event, then the modal will remain open.
  Also, the `$close` and `$dismiss` methods returns true if the event was executed. This event also includes a parameter for the result/reason and a boolean that indicates whether the modal is being closed (true) or dismissed.

##### UI Router resolves

If one wants to have the modal resolve using [UI Router's](https://github.com/angular-ui/ui-router) pre-1.0 resolve mechanism, one can call `$uiResolve.setResolver('$resolve')` in the configuration phase of the application. One can also provide a custom resolver as well, as long as the signature conforms to UI Router's [$resolve](http://angular-ui.github.io/ui-router/site/#/api/ui.router.util.$resolve).

When the modal is opened with a controller, a `$resolve` object is exposed on the template with the resolved values from the resolve object. If using the component option, see details on how to access this object in component section of the modal documentation.


## 代码演示


<div  class="modal-demo">
    <script type="text/ng-template" id="myModalContent.html">
        <div class="modal-header">
            <h3 class="modal-title" id="modal-title">I'm a modal!</h3>
        </div>
        <div class="modal-body" id="modal-body">
            <ul>
                <li ng-repeat="item in ctrl.items">
                    <a href="#" ng-click="$event.preventDefault(); ctrl.selected.item = item">{{ item }}</a>
                </li>
            </ul>
            Selected: <b>{{ ctrl.selected.item }}</b>
        </div>
        <div class="modal-footer">
            <button class="btn btn-primary" type="button" ng-click="objFrom.ok()">OK</button>
            <button class="btn btn-warning" type="button" ng-click="objFrom.cancel()">Cancel</button>
        </div>
    </script>
    <script type="text/ng-template" id="stackedModal.html">
        <div class="modal-header">
            <h3 class="modal-title" id="modal-title-{{name}}">The {{name}} modal!</h3>
        </div>
        <div class="modal-body" id="modal-body-{{name}}">
            Having multiple modals open at once is probably bad UX but it's technically possible.
        </div>
    </script>

    <button type="button" class="btn btn-default" ng-click="ctrl.open()">Open me!</button>
    <button type="button" class="btn btn-default" ng-click="ctrl.open('lg')">Large modal</button>
    <button type="button" class="btn btn-default" ng-click="ctrl.open('sm')">Small modal</button>
    <button type="button" 
        class="btn btn-default" 
        ng-click="ctrl.open('sm', '.modal-parent')">
            Modal appended to a custom parent
    </button>
    <button type="button" class="btn btn-default" ng-click="ctrl.toggleAnimation()">Toggle Animation ({{ ctrl.animationsEnabled }})</button>
    <!--<button type="button" class="btn btn-default" ng-click="ctrl.openComponentModal()">Open a component modal!</button>-->
    <button type="button" class="btn btn-default" ng-click="ctrl.openMultipleModals()">
        Open multiple modals at once 
    </button>
    <div ng-show="ctrl.selected">Selection from a modal: {{ ctrl.selected }}</div>
    <div class="modal-parent">
    </div>
</div>
