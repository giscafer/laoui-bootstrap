# Rate 评分

评分组件。

## 何时使用

对评价进行展示。
对事物进行快速的评级操作

## ui-rating settings

* `max`
  <small class="badge">$</small>
  <small class="badge">C</small>
  _(Default: `5`)_ -
  Changes the number of icons.

* `ng-model`
  <small class="badge">$</small>
  <i class="glyphicon glyphicon-eye-open"></i> -
  The current rate.

* `on-hover(value)`
  <small class="badge">$</small> -
  An optional expression called when user's mouse is over a particular icon.

* `on-leave()`
  <small class="badge">$</small> -
  An optional expression called when user's mouse leaves the control altogether.

* `rating-states`
  <small class="badge">$</small>
  _(Default: `null`)_ -
  An array of objects defining properties for all icons. In default template, `stateOn` & `stateOff` property is used to specify the icon's class.

* `read-only`
  <small class="badge">$</small>
  <i class="icon-eye-open"></i>
  _(Default: `false`)_ -
  Prevent user's interaction.

* `titles`
  <small class="badge">$</small>
  <small class="badge">C</small>
  _(Default: ['one', 'two', 'three', 'four', 'five']`)_ -
  An array of strings defining titles for all icons.

* `enable-reset`
  <small class="badge">$</small>
  _(Default: `true`)_ -
  Clicking the icon of the current rating will reset the rating to 0.

* `state-off`
  <small class="badge">$</small>
  <small class="badge">C</small>
  _(Default: `null`)_ -
  A variable used in the template to specify the state for unselected icons.

* `state-on`
  <small class="badge">$</small>
  <small class="badge">C</small>
  _(Default: `null`)_ -
 	A variable used in the template to specify the state (class, src, etc) for selected icons.

## 代码演示

<div class="row">
  <div class="col-md-5">
   <div>
    <h4>Default</h4>
    <span ui-rating ng-model="rate" max="max" read-only="isReadonly" on-hover="hoveringOver(value)" on-leave="overStar = null" titles="['one','two','three']" aria-labelledby="default-rating"></span>
    <span class="label" ng-class="{'label-warning': percent<30, 'label-info': percent>=30 && percent<70, 'label-success': percent>=70}" ng-show="overStar && !isReadonly">{{percent}}%</span>

    <code style="margin:15px 0;">Rate: <b>{{rate}}</b> - Readonly is: <i>{{isReadonly}}</i> - Hovering over: <b>{{overStar || "none"}}</b></code>

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