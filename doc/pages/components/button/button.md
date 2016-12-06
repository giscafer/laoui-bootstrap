# Button 按钮

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 如何使用

- `ui-button` 指令可以快速创建一个带图标的按钮
- 可以使用`ui-btn-checkbox`属性来控制一组按钮行为类似 checkboxes，或使用 `ui-btn-radio`属性控制一组按钮行为类似域 radio buttons

## 属性

### `ui-button` 属性

| 成员       | 说明             | 类型               | 默认值       |
|-----------|-----------------|--------------------|-------------|
| type  | 按钮类型，可选`primary`、`info`、`error`、`default`、`ghost`、`dashed`   | string |    -    | 
| icon  | 按钮图标类型 | string |   -  |
| size   | 按钮大小，可选`large`、`small`、`xsmall`、默认是正常大小 | string |   -   |
| loading | 图标是否旋转，旋转过程按钮disabled状态，还有前提是icon图标是可以旋转| string |   -   |
| className | 提供额外样式，类名| string |   -   |

### `ui-btn-checkbox` 属性


| 成员 	| 默认值	| 描述	| 
| -------| ----| ---| 
| btn-checkbox-false	| `false`	|   设置值为未选中（unchecked）状态	| 
| btn-checkbox-true	| `true`	|   设置值为选中（checked）状态	| 
| ng-model		|  -		| 模型绑定对象	| 


### `ui-btn-radio` 属性

| 成员 	| 默认值	| 描述	| 
| -------| ----| ---| 
| ng-model		|  -		| 模型绑定对象	| 
| ui-btn-radio	| -	|   赋值给`ng-model`的值	| 
| ui-uncheckable	| `null`	|   根据给定的值来决定 `uncheckable` 属性是否存在	| 
| uncheckable	| -	|  radio按钮是否可以选中	| 

  
### 附加的属性设置 `uiButtonConfig`

| 成员 	| 默认值	| 描述	| 
| -------| ----| ---| 
| activeClass		|  `active`		| 选中按钮样式	| 
| toggleEvent	| `click` | 用于切换按钮的事件 | 

## 代码演示

### `ui-button`举例


<ui-button type="primary" icon="download">下载</ui-button>
<ui-button type="primary" icon="spinner" on-click="ctrl.click()" loading="ctrl.loading">点我旋转</ui-button>
<ui-button type="primary" icon="github"></ui-button>
<ui-button type="primary" icon="refresh" loading="true">刷新中</ui-button>
<p>
<ui-button type="primary"  size="large" >超大</ui-button>
<ui-button type="primary"  >正常</ui-button>
<ui-button type="primary"  size="small">较小</ui-button>
<ui-button type="primary"  size="xsmall">特小</ui-button>
</p>


### `ui-btn-checkbox`和`ui-btn-radio`举例

<div class="bs-example">
<div>
    <h4>Single toggle</h4>
    <pre>{{ctrl.singleModel}}</pre>
    <button type="button" class="btn btn-primary" ng-model="ctrl.singleModel" ui-btn-checkbox btn-checkbox-true="1" btn-checkbox-false="0">
        Single Toggle
    </button>
    <h4>Checkbox</h4>
    <pre>Model: {{ctrl.checkModel}}</pre>
    <pre>Results: {{ctrl.checkResults}}</pre>
    <div class="btn-group">
        <label class="btn btn-primary" ng-model="ctrl.checkModel.left" ui-btn-checkbox>Left</label>
        <label class="btn btn-primary" ng-model="ctrl.checkModel.middle" ui-btn-checkbox>Middle</label>
        <label class="btn btn-primary" ng-model="ctrl.checkModel.right" ui-btn-checkbox>Right</label>
    </div>
    <h4>Radio &amp; Uncheckable Radio</h4>
    <pre>{{ctrl.radioModel || 'null'}}</pre>
    <div class="btn-group">
        <label class="btn btn-primary" ng-model="ctrl.radioModel" ui-btn-radio="'Left'">Left</label>
        <label class="btn btn-primary" ng-model="ctrl.radioModel" ui-btn-radio="'Middle'">Middle</label>
        <label class="btn btn-primary" ng-model="ctrl.radioModel" ui-btn-radio="'Right'">Right</label>
    </div>
    <div class="btn-group">
        <label class="btn btn-success" ng-model="ctrl.radioModel" ui-btn-radio="'Left'" uncheckable>Left</label>
        <label class="btn btn-success" ng-model="ctrl.radioModel" ui-btn-radio="'Middle'" uncheckable>Middle</label>
        <label class="btn btn-success" ng-model="ctrl.radioModel" ui-btn-radio="'Right'" ui-uncheckable="ctrl.uncheckable">Right</label>
    </div>
    <div>
        <button class="btn btn-default" ng-click="ctrl.uncheckable = !ctrl.uncheckable">
            Toggle uncheckable
        </button>
    </div>
</div>
</div>
<ui-clipboard clipboard-target="clipboard1"></ui-clipboard>
<div class="highlight" id="clipboard1">
<pre>
<div>
    <h4>Single toggle</h4>
    <pre>{{ctrl.singleModel}}</pre>
    <button type="button" class="btn btn-primary" ng-model="ctrl.singleModel" ui-btn-checkbox btn-checkbox-true="1" btn-checkbox-false="0">
        Single Toggle
    </button>
    <h4>Checkbox</h4>
    <pre>Model: {{ctrl.checkModel}}</pre>
    <pre>Results: {{ctrl.checkResults}}</pre>
    <div class="btn-group">
        <label class="btn btn-primary" ng-model="ctrl.checkModel.left" ui-btn-checkbox>Left</label>
        <label class="btn btn-primary" ng-model="ctrl.checkModel.middle" ui-btn-checkbox>Middle</label>
        <label class="btn btn-primary" ng-model="ctrl.checkModel.right" ui-btn-checkbox>Right</label>
    </div>
    <h4>Radio &amp; Uncheckable Radio</h4>
    <pre>{{ctrl.radioModel || 'null'}}</pre>
    <div class="btn-group">
        <label class="btn btn-primary" ng-model="ctrl.radioModel" ui-btn-radio="'Left'">Left</label>
        <label class="btn btn-primary" ng-model="ctrl.radioModel" ui-btn-radio="'Middle'">Middle</label>
        <label class="btn btn-primary" ng-model="ctrl.radioModel" ui-btn-radio="'Right'">Right</label>
    </div>
    <div class="btn-group">
        <label class="btn btn-success" ng-model="ctrl.radioModel" ui-btn-radio="'Left'" uncheckable>Left</label>
        <label class="btn btn-success" ng-model="ctrl.radioModel" ui-btn-radio="'Middle'" uncheckable>Middle</label>
        <label class="btn btn-success" ng-model="ctrl.radioModel" ui-btn-radio="'Right'" ui-uncheckable="ctrl.uncheckable">Right</label>
    </div>
    <div>
        <button class="btn btn-default" ng-click="ctrl.uncheckable = !ctrl.uncheckable">
            Toggle uncheckable
        </button>
    </div>
</div>

</pre>
</div>