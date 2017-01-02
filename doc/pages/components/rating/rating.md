# Rate 评分

评分组件。

## 何时使用

对评价进行展示。
对事物进行快速的评级操作

## ui-rating 属性

| 成员       | 说明             | 类型               | 默认值       |
|-----------|-----------------|--------------------|-------------|
| max  | 图标数量  | number | `5`  |
| ng-model   | 当前分数值  | number | - |
| on-hover(value) | 可选回调，鼠标悬浮在图标上触发回调方法  | Function |  - |
| on-leave() | 可选回调，鼠标离开完全控制时触发  | Function |  - |
| rating-states |  一个图标的对象数组，`stateOn` & `stateOff` 属性来指明图标的样式 | Array |  `null` |
| read-only | 标题作为标签(可访问性)  | blean | `false` |
| titles | 一个字符串数组，为所有图标定义的标题  | Array | `['one', 'two', 'three', 'four', 'five']` |
| enable-reset | 可重置评分为0 | string | `true` |
| state-off | 未选择图标样式  | string |  `null` |
| state-on | 选中图标样式  | string | `null` |


## 代码演示

<div class="row">
  <div class="col-md-5">
   <div>
    <h4>Default</h4>
    <span ui-rating ng-model="rate" max="max" read-only="isReadonly" on-hover="hoveringOver(value)" on-leave="overStar = null" titles="['one','two','three']" aria-labelledby="default-rating"></span>
    <span class="label" ng-class="{'label-warning': percent<30, 'label-info': percent>=30 && percent<70, 'label-success': percent>=70}" ng-show="overStar && !isReadonly">{{percent}}%</span>
    <br><code style="margin:15px 0;">Rate: <b>{{rate}}</b> - Readonly is: <i>{{isReadonly}}</i> - Hovering over: <b>{{overStar || "none"}}</b></code> <br>
    <button type="button" class="btn btn-sm btn-danger" ng-click="rate = 0" ng-disabled="isReadonly">Clear</button>
    <button type="button" class="btn btn-sm btn-default" ng-click="isReadonly = ! isReadonly">Toggle Readonly</button>
    <hr />
    <h4>Custom icons</h4>
    <div ng-init="x = 5"><span ui-rating ng-model="x" max="15" state-on="'glyphicon-ok-sign'" state-off="'glyphicon-ok-circle'" aria-labelledby="custom-icons-1"></span> <b>(<i>Rate:</i> {{x}})</b></div>
    <div ng-init="y = 2"><span ui-rating ng-model="y" rating-states="ratingStates" aria-labelledby="custom-icons-2"></span> <b>(<i>Rate:</i> {{y}})</b></div>
</div>
  </div>
  <div class="col-md-7">
    <ui-tabset>
  <ui-tab heading="HTML">
   <pre>
  <div>
    <h4>Default</h4>
    <span ui-rating ng-model="rate" max="max" read-only="isReadonly" on-hover="hoveringOver(value)" on-leave="overStar = null" titles="['one','two','three']" aria-labelledby="default-rating"></span>
    <span class="label" ng-class="{'label-warning': percent<30, 'label-info': percent>=30 && percent<70, 'label-success': percent>=70}" ng-show="overStar && !isReadonly">{{percent}}%</span>
    <pre style="margin:15px 0;">Rate: <b>{{rate}}</b> - Readonly is: <i>{{isReadonly}}</i> - Hovering over: <b>{{overStar || "none"}}</b></pre>
    <button type="button" class="btn btn-sm btn-danger" ng-click="rate = 0" ng-disabled="isReadonly">Clear</button>
    <button type="button" class="btn btn-sm btn-default" ng-click="isReadonly = ! isReadonly">Toggle Readonly</button>
    <hr />
    <h4>Custom icons</h4>
    <div ng-init="x = 5"><span ui-rating ng-model="x" max="15" state-on="'glyphicon-ok-sign'" state-off="'glyphicon-ok-circle'" aria-labelledby="custom-icons-1"></span> <b>(<i>Rate:</i> {{x}})</b></div>
    <div ng-init="y = 2"><span ui-rating ng-model="y" rating-states="ratingStates" aria-labelledby="custom-icons-2"></span> <b>(<i>Rate:</i> {{y}})</b></div>
</div>
   </pre>
  </ui-tab>
  <ui-tab heading="Controller">
   <pre>
  export default class RatingDemoCtrl {
  constructor($scope) {
    "ngInject";
    $scope.rate = 7;
    $scope.max = 10;
    $scope.isReadonly = false;
    $scope.hoveringOver = function (value) {
      $scope.overStar = value;
      $scope.percent = 100 * (value / $scope.max);
    };
    $scope.ratingStates = [
      { stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle' },
      { stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty' },
      { stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle' },
      { stateOn: 'glyphicon-heart' },
      { stateOff: 'glyphicon-off' }
    ];
  }
}
   </pre>
  </ui-tab>
</ui-tabset>
  </div>
</div>