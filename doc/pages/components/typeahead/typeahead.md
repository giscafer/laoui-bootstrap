
# Typeahead 自动完成

输入框自动完成功能。

## 何时使用

需要自动完成时。


## 属性

<code>&lt;ui-typeahead /&gt;</code> 指令可以用来快速创建优雅Typeahead（自动完成）与任何形式的文本输入。

它很好融入AngularJS使用选择指令语法的一个子集，它是非常灵活的。支持表达式:

* _label_ for _value_ in _sourceArray_
* _select_ as _label_ for _value_ in _sourceArray_


`sourceArray`的表达式可以使用一个特殊的`$viewValue`变量对应于输入的值再输入。

该指令支撑于`promises`，意味着你可以轻易的使用 `$http` 服务


| 成员       | 说明             | 类型               | 默认值       |
|-----------|-----------------|--------------------|-------------|
| ng-model  | `data-bind` 数据绑定表达式 | - |   -  |
| ng-model-options     | `ng-model`选项 (see [ng-model-options directive](https://docs.angularjs.org/api/ng/directive/ngModelOptions)). 目前支持 `debounce` and `getterSetter` 属性选项  |  |  -  |
| typeahead-append-to   | 下拉框append对象，取代原有的parent | boolean |   `null`    |
| typeahead-append-to-body  | 是否将下拉框的代码插入&lt;body&gt;中。默认插入到当前元素的父级元素中。用于处理下拉框所在容器overflow:hidden情况。 | boolean |   `false`      |
| typeahead-editable  |  是否只能选择，不能输入 | boolean |   `true`      |
| typeahead-focus-first  |  是否默认选择下拉框中第一行 | boolean |   `true`      |
| typeahead-focus-on-select  |  当输入框 `onFocus` 时触发自动完成功能 | boolean |   `true`      |
| typeahead-input-formatter  |  格式化选择后 ng-model 结果 | - |   `undefined`      |
| typeahead-is-open  | 控制下拉是否开着的。 | - |   `angular.noop`      |
| typeahead-loading | 当数据为异步加载时绑定一个变量，控制是否显示loading图标 | - |   `angular.noop`      |
| typeahead-min-length | 触发自动完成所需最小字符数。大于等于0 | - |   `1`     |
| typeahead-no-results |绑定一个变量，控制是否显示“无结果”的提示信息。| - |   `angular.noop`     |
| typeahead-popup-template-url | 自定义下拉框模版Url | - |   -   |
| typeahead-select-on-blur | 当输入框 onBlur 时选中高亮的一条结果 | - |   `false`   |
| typeahead-select-on-exact | 当用户所输入的文字和结果完全匹配时，自动选中完全匹配的结果 | - |   `false`   |
| typeahead-show-hint |  当匹配的第一个选项显示提示 | - |   `false`   |
| typeahead-template-url |  自定义单条结果模版Url | - |   -  |
| typeahead-wait-ms |  延迟时间 | - |  `0`   |
| ui-typeahead | 所筛选的对象，使用 AngularJS select指令相同的语法 (see [select directive](http://docs.angularjs.org/api/ng.directive:select)). | -|  -   |


## 方法

| 成员       | 说明             | 类型               | 默认值       |
|-----------|-----------------|--------------------|-------------|
| typeahead-should-select($event)  | 当选择时，按键 `keyup` 事件触发此回调函数 | Function |  `null` |
| typeahead-on-select($item, $model, $label, $event)  |   当选中结果后触发该事件。 $event 可以为空 | Function |  `null` |


**提示**

如果使用自定义弹出的模板,使用的包装选择器匹配项为`ui-typeahead-match`类。

## 实例


<div class="bs-example">
<div class="row">
<div class="col-md-5">
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

<h4>静态数组</h4>
<p>Model: {{ctrl.selected | json}}</p>
<input type="text" ng-model="ctrl.selected" ui-typeahead="state for state in ctrl.states | filter:$viewValue | limitTo:8" class="form-control">

<h4>异步结果</h4>
<p>Model: {{ctrl.asyncSelected | json}}</p>
<input type="text" ng-model="ctrl.asyncSelected" placeholder="Locations loaded via $http" ui-typeahead="address for address in ctrl.getLocation($viewValue)" typeahead-loading="ctrl.loadingLocations" typeahead-no-results="ctrl.noResults" class="form-control">
<i ng-show="ctrl.loadingLocations" class="glyphicon glyphicon-refresh"></i>
<div ng-show="ctrl.noResults">
<i class="glyphicon glyphicon-remove"></i> No Results Found
</div>

<h4>ngModelOptions 支持</h4>
<p>Model: {{ctrl.ngModelOptionsSelected | json}}</p>
<input type="text" ng-model="ctrl.ngModelOptionsSelected" ng-model-options="ctrl.modelOptions" ui-typeahead="state for state in ctrl.states | filter:$viewValue | limitTo:8" class="form-control">

<h4>自定义结果模板</h4>
<p>Model: {{ctrl.customSelected | json}}</p>
<input type="text" ng-model="ctrl.customSelected" placeholder="Custom template" ui-typeahead="state as state.name for state in ctrl.statesWithFlags | filter:{name:$viewValue}" typeahead-template-url="customTemplate.html" class="form-control" typeahead-show-hint="true" typeahead-min-length="0">

<h4>自定义下拉弹出模板</h4>
<p>Model: {{ctrl.customPopupSelected | json}}</p>
<input type="text" ng-model="ctrl.customPopupSelected" placeholder="Custom popup template" ui-typeahead="state as state.name for state in ctrl.statesWithFlags | filter:{name:$viewValue}" typeahead-popup-template-url="customPopupTemplate.html" class="form-control">
</div>
</div>
<div class="col-md-7">
<ui-tabset style="max-height:700px;overflow:auto">
    <ui-tab heading="HTML">
<pre>
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
<h4>静态数组</h4>
<p>Model: {{ctrl.selected | json}}</p>
<input type="text" ng-model="ctrl.selected" ui-typeahead="state for state in ctrl.states | filter:$viewValue | limitTo:8" class="form-control">

<h4>异步结果</h4>
<p>Model: {{ctrl.asyncSelected | json}}</p>
<input type="text" ng-model="ctrl.asyncSelected" placeholder="Locations loaded via $http" ui-typeahead="address for address in ctrl.getLocation($viewValue)" typeahead-loading="ctrl.loadingLocations" typeahead-no-results="ctrl.noResults" class="form-control">
<i ng-show="ctrl.loadingLocations" class="glyphicon glyphicon-refresh"></i>
<div ng-show="ctrl.noResults">
  <i class="glyphicon glyphicon-remove"></i> No Results Found
</div>

<h4>ngModelOptions 支持</h4>
<p>Model: {{ctrl.ngModelOptionsSelected | json}}</p>
<input type="text" ng-model="ctrl.ngModelOptionsSelected" ng-model-options="ctrl.modelOptions" ui-typeahead="state for state in ctrl.states | filter:$viewValue | limitTo:8" class="form-control">

<h4>自定义结果模板</h4>
<p>Model: {{ctrl.customSelected | json}}</p>
<input type="text" ng-model="ctrl.customSelected" placeholder="Custom template" ui-typeahead="state as state.name for state in ctrl.statesWithFlags | filter:{name:$viewValue}" typeahead-template-url="customTemplate.html" class="form-control" typeahead-show-hint="true" typeahead-min-length="0">

<h4>自定义下拉弹出模板</h4>
<p>Model: {{ctrl.customPopupSelected | json}}</p>
<input type="text" ng-model="ctrl.customPopupSelected" placeholder="Custom popup template" ui-typeahead="state as state.name for state in ctrl.statesWithFlags | filter:{name:$viewValue}" typeahead-popup-template-url="customPopupTemplate.html" class="form-control">
</div>
</pre>
</ui-tab>
<ui-tab heading="Controller">
<pre>
export default class TypeaheadCtrl{
  constructor($scope, $http){
    this._selected=null;
    this._$scope=$scope;
    this.selected = undefined;
    this.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    // Any function returning a promise object can be used to load values asynchronously
    this.getLocation = function(val) {
      return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: val,
          sensor: false
        }
      }).then(function(response){
        return response.data.results.map(function(item){
          return item.formatted_address;
        });
      });
    };

    this.ngModelOptionsSelected = function(value) {
      if (arguments.length) {
        this._selected = value;
      } else {
        return this._selected;
      }
    };

    this.modelOptions = {
      debounce: {
        default: 500,
        blur: 250
      },
      getterSetter: true
    };

    this.statesWithFlags = [{'name':'Alabama','flag':'5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png'},{'name':'Alaska','flag':'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png'},{'name':'Arizona','flag':'9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png'},{'name':'Arkansas','flag':'9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png'},{'name':'California','flag':'0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png'},{'name':'Colorado','flag':'4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png'},{'name':'Connecticut','flag':'9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png'},{'name':'Delaware','flag':'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png'},{'name':'Florida','flag':'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png'},{'name':'Georgia','flag':'5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png'},{'name':'Hawaii','flag':'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png'},{'name':'Idaho','flag':'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png'},{'name':'Illinois','flag':'0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png'},{'name':'Indiana','flag':'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png'},{'name':'Iowa','flag':'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png'},{'name':'Kansas','flag':'d/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png'},{'name':'Kentucky','flag':'8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png'},{'name':'Louisiana','flag':'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png'},{'name':'Maine','flag':'3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png'},{'name':'Maryland','flag':'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png'},{'name':'Massachusetts','flag':'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png'},{'name':'Michigan','flag':'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png'},{'name':'Minnesota','flag':'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png'},{'name':'Mississippi','flag':'4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png'},{'name':'Missouri','flag':'5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png'},{'name':'Montana','flag':'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png'},{'name':'Nebraska','flag':'4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png'},{'name':'Nevada','flag':'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png'},{'name':'New Hampshire','flag':'2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png'},{'name':'New Jersey','flag':'9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png'},{'name':'New Mexico','flag':'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png'},{'name':'New York','flag':'1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png'},{'name':'North Carolina','flag':'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png'},{'name':'North Dakota','flag':'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png'},{'name':'Ohio','flag':'4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png'},{'name':'Oklahoma','flag':'6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png'},{'name':'Oregon','flag':'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png'},{'name':'Pennsylvania','flag':'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png'},{'name':'Rhode Island','flag':'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png'},{'name':'South Carolina','flag':'6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png'},{'name':'South Dakota','flag':'1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png'},{'name':'Tennessee','flag':'9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png'},{'name':'Texas','flag':'f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png'},{'name':'Utah','flag':'f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png'},{'name':'Vermont','flag':'4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png'},{'name':'Virginia','flag':'4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png'},{'name':'Washington','flag':'5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png'},{'name':'West Virginia','flag':'2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png'},{'name':'Wisconsin','flag':'2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png'},{'name':'Wyoming','flag':'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png'}];
  }
}

</pre>
</ui-tab>
</ui-tabset>
</div>
</div>
</div>