
<header id="page-header clearfix"> <h2><i class="fa fa-puzzle-piece"></i>警报信息</h2> <ol class="breadcrumb"> <li> <a href="#">首页</a> </li> <li> <a href="#">Web组件</a> </li> <li class="active"> <strong>警报信息</strong> </li> </ol> </header>
# ui-alert 警报信息

<p class="lead"><code>ui-alert</code>指令可以通过静态和动态模型数据(使用 ng-repeat 指令)生成警告信息（alerts）</p>

<!-- <ui-alert class="alert-info">alert-info</ui-alert>
<div ui-alert>alert-info</div> -->

## 属性

* `close()`
  <small class="badge">$</small> - `alert` 关闭触发回调函数，如果此属性存在，`alert`将显示关闭按钮

* `dismiss-on-timeout`
  _(Default: `none`)_ - 指定时间（单位：ms），在指定时间之后，`alert`自动关闭，此属性需要 `close` 属性支持。

* `template-url`
  _(Default: `../../template/alert/alert.html`)_ -
  自定义信息模板url，可以覆盖组件默认的模板

## demo
<div class="row">
<div class="col-md-5">
<div>
<script type="text/ng-template" id="alert.html">
  <div ng-transclude></div>
</script>

<div ui-alert ng-repeat="alert in alerts" ng-class="'alert-' + (alert.type || 'warning')" close="closeAlert($index)">{{alert.msg}}</div>
<div ui-alert template-url="alert.html" style="background-color:#fa39c3;color:white">A happy alert!</div>
<button type="button" class='btn btn-info' ng-click="addAlert()">Add Alert</button>
</div>
</div>
<div class="col-md-7">
<ui-tabset>
<ui-tab>
<ui-tab-heading>HTML</ui-tab-heading>

<pre>
  <div>
    <script type="text/ng-template" id="alert.html">
    <div ng-transclude></div>
    </script>
    <div ui-alert ng-repeat="alert in alerts" ng-class="'alert-' + (alert.type || 'warning')" close="closeAlert($index)">{{alert.msg}}</div>
    <div ui-alert template-url="alert.html" style="background-color:#fa39c3;color:white">A happy alert!</div>
    <button type="button" class='btn btn-default' ng-click="addAlert()">Add Alert</button>
  </div>
</pre>

</ui-tab>
<ui-tab>
<ui-tab-heading>JavaScript</ui-tab-heading>

<pre>
export default class AlertCtrl {
  constructor($scope, $location, $timeout) {
    "ngInject";
    $scope.alerts = [
        { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
        { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
      ];

      $scope.addAlert = function() {
        $scope.alerts.push({msg: 'Another alert!'});
      };

      $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
      };
  }
}
</pre>

</ui-tab>
</ui-tabset>
</div>
</div>
