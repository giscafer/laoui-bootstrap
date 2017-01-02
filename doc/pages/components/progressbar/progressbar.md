# Progress 进度条

展示操作的当前进度。

## 何时使用

在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。

当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过2秒时；

当需要显示一个操作完成的百分比时。

## 如何使用

支持`< ui-progress >`内置多个`<ui-bar>`元素或一个 `<ui-progressbar>`的元素可选的`max`属性和过渡动画。

## 属性

### ui-progressbar 属性


| 成员       | 说明             | 类型               | 默认值       |
|-----------|-----------------|--------------------|-------------|
| value   | 当前进度条完成的值   | number |  -      |
| type  | 样式类型，可自定义  | string（ `success`, `info`, `warning`, `danger`） | `null`   |
| max  | 进度条最大值  | number | `100`  |
| animate   | 进度条变动时是否带动画效果  | boolean |  `true` |
| title | 标题作为标签(可访问性)  | string |  `progressbar` |

  
### ui-progress 属性



| 成员       | 说明             | 类型               | 默认值       |
|-----------|-----------------|--------------------|-------------|
| max  | 进度条最大值  | number | `100`  |
| animate   | 进度条变动时是否带动画效果  | boolean |  `true` |
| title | 标题作为标签(可访问性)  | string |  `progressbar` |

  
### ui-bar 属性

| 成员       | 说明             | 类型               | 默认值       |
|-----------|-----------------|--------------------|-------------|
| value   | 当前进度条完成的值   | number |  -      |
| type  | 样式类型，可自定义  | string（ `success`, `info`, `warning`, `danger`） | `null`   |
| title | 标题作为标签(可访问性)  | string |  `progressbar` |


## 代码演示

<div class="row">
    <h3>Static</h3>
    <div class="row">
        <div class="col-sm-4"><ui-progressbar value="55"></ui-progressbar></div>
        <div class="col-sm-4"><ui-progressbar class="progress-striped" value="22" type="warning">22%</ui-progressbar></div>
        <div class="col-sm-4"><ui-progressbar class="progress-striped active" max="200" value="166" type="danger"><i>166 / 200</i></ui-progressbar></div>
    </div>
    <hr />
    <h3>Dynamic <button type="button" class="btn btn-sm btn-primary" ng-click="random()">Randomize</button></h3>
    <ui-progressbar max="max" value="dynamic"><span style="color:white; white-space:nowrap;">{{dynamic}} / {{max}}</span></ui-progressbar>
    <small><em>No animation</em></small>
    <ui-progressbar animate="false" value="dynamic" type="success"><b>{{dynamic}}%</b></ui-progressbar>
    <small><em>Object (changes type based on value)</em></small>
    <ui-progressbar class="progress-striped active" value="dynamic" type="{{type}}">{{type}} <i ng-show="showWarning">!!! Watch out !!!</i></ui-progressbar>
    <hr />
    <h3>Stacked <button type="button" class="btn btn-sm btn-primary" ng-click="randomStacked()">Randomize</button></h3>
    <ui-progress><ui-bar ng-repeat="bar in stacked track by $index" value="bar.value" type="{{bar.type}}"><span ng-hide="bar.value < 5">{{bar.value}}%</span></ui-bar></ui-progress>
</div>
<div class="row  no-markdown">
<ui-tabset style="height:500px;overflow:auto">
  <ui-tab heading="HTML">
    <pre>
      <div>
          <h3>Static</h3>
          <div class="row">
              <div class="col-sm-4"><ui-progressbar value="55"></ui-progressbar></div>
              <div class="col-sm-4"><ui-progressbar class="progress-striped" value="22" type="warning">22%</ui-progressbar></div>
              <div class="col-sm-4"><ui-progressbar class="progress-striped active" max="200" value="166" type="danger"><i>166 / 200</i></ui-progressbar></div>
          </div>
          <hr />
          <h3>Dynamic <button type="button" class="btn btn-sm btn-primary" ng-click="random()">Randomize</button></h3>
          <ui-progressbar max="max" value="dynamic"><span style="color:white; white-space:nowrap;">{{dynamic}} / {{max}}</span></ui-progressbar>
          <small><em>No animation</em></small>
          <ui-progressbar animate="false" value="dynamic" type="success"><b>{{dynamic}}%</b></ui-progressbar>
          <small><em>Object (changes type based on value)</em></small>
          <ui-progressbar class="progress-striped active" value="dynamic" type="{{type}}">{{type}} <i ng-show="showWarning">!!! Watch out !!!</i></ui-progressbar>
          <hr />
          <h3>Stacked <button type="button" class="btn btn-sm btn-primary" ng-click="randomStacked()">Randomize</button></h3>
          <ui-progress><ui-bar ng-repeat="bar in stacked track by $index" value="bar.value" type="{{bar.type}}"><span ng-hide="bar.value < 5">{{bar.value}}%</span></ui-bar></ui-progress>
      </div>
    </pre>
  </ui-tab>
  <ui-tab heading="Controller">
 <pre>
      export default class ProgressDemoCtrl {
        constructor($scope) {
          "ngInject";
          $scope.max = 200;
          $scope.random = function () {
            var value = Math.floor(Math.random() * 100 + 1);
            var type;
            if (value < 25) {
              type = 'success';
            } else if (value < 50) {
              type = 'info';
            } else if (value < 75) {
              type = 'warning';
            } else {
              type = 'danger';
            }
            $scope.showWarning = type === 'danger' || type === 'warning';
            $scope.dynamic = value;
            $scope.type = type;
          };
          $scope.random();
          $scope.randomStacked = function () {
            $scope.stacked = [];
            var types = ['success', 'info', 'warning', 'danger'];
            for (var i = 0, n = Math.floor(Math.random() * 4 + 1); i < n; i++) {
              var index = Math.floor(Math.random() * 4);
              $scope.stacked.push({
                value: Math.floor(Math.random() * 30 + 1),
                type: types[index]
              });
            }
          };
          $scope.randomStacked();
        }
      }
 </pre>
</ui-tab>
</ui-tabset>
</div>