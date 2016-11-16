
# ui-alert 警报信息

`ui-alert`指令可以通过静态和动态模型数据(使用ng-repeat指令)生成警报信息（alerts），。

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
        <button type="button" class='btn btn-default' ng-click="addAlert()">Add Alert</button>
      </div>
    </div>
    <div class="col-md-7">
      <ui-tabset>
      <ui-tab>
          <ui-tab-heading>HTML</ui-tab-heading>
          
          <pre><code class="lang-html"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text/ng-template"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"alert.html"</span>&gt;</span><span class="javascript">
               &lt;div ng-transclude&gt;<span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
            </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ui-alert</span> <span class="hljs-attr">ng-repeat</span>=<span class="hljs-string">"alert in alerts"</span> <span class="hljs-attr">ng-class</span>=<span class="hljs-string">"'alert-' + (alert.type || 'warning')"</span> <span class="hljs-attr">close</span>=<span class="hljs-string">"closeAlert($index)"</span>&gt;</span></span><span class="hljs-template-variable">{{alert.msg}}</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ui-alert</span> <span class="hljs-attr">template-url</span>=<span class="hljs-string">"alert.html"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background-color:#fa39c3;color:white"</span>&gt;</span>A happy alert!<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">'btn btn-default'</span> <span class="hljs-attr">ng-click</span>=<span class="hljs-string">"addAlert()"</span>&gt;</span>Add Alert<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
          </code></pre>
         
      </ui-tab>
      <ui-tab>
          <ui-tab-heading>JavaScript</ui-tab-heading>
          
       <pre><code class="lang-js">    export <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AlertCtrl</span> </span>{
      constructor($scope, $location, $timeout) {
          <span class="hljs-string">"ngInject"</span>;
          $scope.alerts = [
              { type: <span class="hljs-string">'danger'</span>, msg: <span class="hljs-string">'Oh snap! Change a few things up and try submitting again.'</span> },
              { type: <span class="hljs-string">'success'</span>, msg: <span class="hljs-string">'Well done! You successfully read this important alert message.'</span> }
            ];

            $scope.addAlert = <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span> </span>{
              $scope.alerts.push({msg: <span class="hljs-string">'Another alert!'</span>});
            };

            $scope.closeAlert = <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">(index)</span> </span>{
              $scope.alerts.splice(index, <span class="hljs-number">1</span>);
            };
      }
  }
  </code></pre>
         
      </ui-tab>
      </ui-tabset>
    </div>
</div>


<!-- <div style="display:none"> -->

```html
<div>
  <script type="text/ng-template" id="alert.html">
 	<div ng-transclude></div>
  </script>
  <div ui-alert ng-repeat="alert in alerts" ng-class="'alert-' + (alert.type || 'warning')" close="closeAlert($index)">{{alert.msg}}</div>
  <div ui-alert template-url="alert.html" style="background-color:#fa39c3;color:white">A happy alert!</div>
  <button type="button" class='btn btn-default' ng-click="addAlert()">Add Alert</button>
</div>

```


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


<!-- </div> -->