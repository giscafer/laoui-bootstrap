# Pager 分页

一个轻量级的上一页/下一页分页指令

### ui-pager 属性


| 成员       | 说明             | 类型               | 默认值       |
|-----------|-----------------|--------------------|-------------|
| align   | 每个链接到双方是否对齐。   | boolean | `true`       |
| items-per-page    | 每页记录数。值小于1表示所有记录在一页展示  | number |  `10`    |
| next-text   | 下一页按钮文本  | number |  `Next »`   |
| previous-text   | 上一页按钮文本  | number |  `« Previous`  |
| ng-disabled  | 禁用分页组件  | number |  `false` |
| num-pages  | 一个可选的表达式指定要显示的页面总数  | number |  `angular.noop` |
| template-url  | 自定义模板路径  | string |  - |
| total-items | 总记录数  | number |  - |


## 代码演示

<div class="bs-example">
<div>
  <h4>Pager</h4>
  <code>You are currently on page {{currentPage}}</code>
  <ul ui-pager total-items="totalItems" ng-model="currentPage"></ul>
</div>
</div>
<ui-clipboard clipboard-target="pager-code"></ui-clipboard>
<div class="highlight" id="pager-code">
  <pre>
  <div>
  <h4>Pager</h4>
  <pre>You are currently on page {{currentPage}}</pre>
  <ul ui-pager total-items="totalItems" ng-model="currentPage"></ul>
</div>
  </pre>
</div>

controller代码：

<ui-clipboard clipboard-target="pager-code"></ui-clipboard>
<div class="highlight" id="pager-code">
  <pre>
import ClipboardCtrl from '../../common/clipboard.ctrl.js';
export default class PagerDemoCtrl  extends ClipboardCtrl{
  constructor($scope, uiNotification) {
    "ngInject";
    super(uiNotification);
    $scope.totalItems = 64;
    $scope.currentPage = 4;
  }
}
  </pre>
</div>