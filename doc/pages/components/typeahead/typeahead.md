<script type="text/ng-template" id="customTemplate.html">
  <a>
      <img ng-src="http://upload.wikimedia.org/wikipedia/commons/thumb/{{match.model.flag}}" width="16">
      <span ng-bind-html="match.label | uiTypeaheadHighlight:query"></span>
  </a>
</script>

<script type="text/ng-template" id="customPopupTemplate.html">
  <div class="custom-popup-wrapper"
     ng-style="{top: position().top+'px', left: position().left+'px'}"
     style="display: block;"
     ng-show="isOpen() && !moveInProgress"
     aria-hidden="{{!isOpen()}}">
    <p class="message">select location from drop down.</p>

    <ul class="dropdown-menu" role="listbox">
      <li class="ui-typeahead-match" ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }"
        ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{::match.id}}">
        <div ui-typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>
      </li>
    </ul>
  </div>
</script>

<div class='container-fluid typeahead-demo'>

<h4>Static arrays</h4>
<p>Model: {{ctrl.selected | json}}</p>
<input type="text" ng-model="ctrl.selected" ui-typeahead="state for state in ctrl.states | filter:$viewValue | limitTo:8" class="form-control">

<h4>Asynchronous results</h4>
<p>Model: {{ctrl.asyncSelected | json}}</p>
<input type="text" ng-model="ctrl.asyncSelected" placeholder="Locations loaded via $http" ui-typeahead="address for address in ctrl.getLocation($viewValue)" typeahead-loading="ctrl.loadingLocations" typeahead-no-results="ctrl.noResults" class="form-control">
<i ng-show="ctrl.loadingLocations" class="glyphicon glyphicon-refresh"></i>
<div ng-show="ctrl.noResults">
  <i class="glyphicon glyphicon-remove"></i> No Results Found
</div>

<h4>ngModelOptions support</h4>
<p>Model: {{ctrl.ngModelOptionsSelected | json}}</p>
<input type="text" ng-model="ctrl.ngModelOptionsSelected" ng-model-options="ctrl.modelOptions" ui-typeahead="state for state in ctrl.states | filter:$viewValue | limitTo:8" class="form-control">

<h4>Custom templates for results</h4>
<p>Model: {{ctrl.customSelected | json}}</p>
<input type="text" ng-model="ctrl.customSelected" placeholder="Custom template" ui-typeahead="state as state.name for state in ctrl.statesWithFlags | filter:{name:$viewValue}" typeahead-template-url="customTemplate.html" class="form-control" typeahead-show-hint="true" typeahead-min-length="0">

<h4>Custom popup templates for typeahead's dropdown</h4>
<p>Model: {{ctrl.customPopupSelected | json}}</p>
<input type="text" ng-model="ctrl.customPopupSelected" placeholder="Custom popup template" ui-typeahead="state as state.name for state in ctrl.statesWithFlags | filter:{name:$viewValue}" typeahead-popup-template-url="customPopupTemplate.html" class="form-control">
</div>

---

Typeahead is a AngularJS version of [Bootstrap v2's typeahead plugin](http://getbootstrap.com/2.3.2/javascript.html#typeahead).
This directive can be used to quickly create elegant typeaheads with any form text input.

It is very well integrated into AngularJS as it uses a subset of the
[select directive](http://docs.angularjs.org/api/ng.directive:select) syntax, which is very flexible. Supported expressions are:

* _label_ for _value_ in _sourceArray_
* _select_ as _label_ for _value_ in _sourceArray_

The `sourceArray` expression can use a special `$viewValue` variable that corresponds to the value entered inside the input.

This directive works with promises, meaning you can retrieve matches using the `$http` service with minimal effort.

### ui-typeahead settings

## 属性

| 成员       | 说明             | 类型               | 默认值       |
|-----------|-----------------|--------------------|-------------|
| ng-model  | Assignable angular expression to data-bind to | - |   -  |
| ng-model-options     | Options for ng-model (see [ng-model-options directive](https://docs.angularjs.org/api/ng/directive/ngModelOptions)). Currently supports the `debounce` and `getterSetter` options.  |  |  -  |
| typeahead-append-to   | Should the typeahead popup be appended to an element instead of the parent element? | boolean |   `null`    |
| typeahead-append-to-body  | 是否将下拉框的代码插入<body>中。默认插入到当前元素的父级元素中。用于处理下拉框所在容器overflow:hidden情况。 | boolean |   `false`      |
| typeahead-editable  |  Should it restrict model values to the ones selected from the popup only? | boolean |   `true`      |
| typeahead-focus-first  |  是否默认选择下拉框中第一行 | boolean |   `true`      |
| typeahead-focus-on-select  |  当输入框 `onFocus` 时触发自动完成功能 | boolean |   `true`      |
| typeahead-input-formatter  |  Format the ng-model result after selection | - |   `undefined`      |
| typeahead-is-open  | Binding to a variable that indicates if the dropdown is open. | - |   `angular.noop`      |
| typeahead-loading | 当数据为异步加载时绑定一个变量，控制是否显示loading图标 | - |   `angular.noop`      |
| typeahead-min-length | 触发自动完成所需最小字符数。. Must be greater than or equal to 0. | - |   `1`     |
| typeahead-no-results |绑定一个变量，控制是否显示“无结果”的提示信息。| - |   `angular.noop`     |
| typeahead-popup-template-url | 自定义下拉框模版Url | - |   -   |
| typeahead-select-on-blur | 当输入框 onBlur 时选中高亮的一条结果 | - |   `false`   |
| typeahead-select-on-exact | 当用户所输入的文字和结果完全匹配时，自动选中完全匹配的结果 | - |   `false`   |
| typeahead-show-hint |  Show hint when the first option matches. | - |   `false`   |
| typeahead-template-url |  自定义单条结果模版Url | - |   `./template/typeahead-match.html`  |
| typeahead-wait-ms |  延迟时间 | - |  `0`   |
| ui-typeahead | 所筛选的对象，使用 AngularJS select指令相同的语法 (see [select directive](http://docs.angularjs.org/api/ng.directive:select)). | -|  -   |


## 方法

| 成员       | 说明             | 类型               | 默认值       |
|-----------|-----------------|--------------------|-------------|
| typeahead-should-select($event)  | A callback executed when a `keyup` event that might trigger a selection occurs. Selection will only occur if this function returns true. | Function |  `null` |
| typeahead-on-select($item, $model, $label, $event)  |   当选中结果后触发该事件。 $event 可以为空 | Function |  `null` |



**Notes**

If a custom template for the popup is used, the wrapper selector used for the match items is the `ui-typeahead-match` class.

