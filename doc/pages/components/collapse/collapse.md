# Collapse 折叠面板

**ui-collapse** 可以简单的 显示和隐藏 元素（内置css动画）


## 属性、方法
 
 
| 成员       | 说明             | 类型               | 默认值       |
|-----------|-----------------|--------------------|-------------|
| collapsed()   |  当元素折叠`后`触发的回调方法  | Function |  -   |
| collapsing()   |  当元素折叠`前`触发的回调方法，如果表达式返回的是一个promise对象，则动画会在promise resolves后执行，如果返回的是rejected，则会取消折叠动作  | Function |  -   |
| expanded()   | 当元素展开`后`触发的回调方法   | boolean | `false`   |
| expanding()  |  当元素展开`前`触发的回调方法，如果表达式返回的是一个promise对象，则动画会在promise resolves后执行，如果返回的是rejected，则会取消展开动作 | Function |  -   |
| ui-collapse   | 控制元素是否折叠 | - | false  |
| horizontal | 可选属性，控制是否水平 | string | -  |



## 代码演示

<div class="bs-example">
<style>
  .horizontal-collapse {
    height: 70px;
  }
  .navbar-collapse.in {
    overflow-y: hidden;
  }
</style>
<div>
<p>当window宽度像素小于 768 会展示mobile的菜单按钮</p>
<nav class="navbar navbar-default" role="navigation">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" ng-click="ctrl.isNavCollapsed = !ctrl.isNavCollapsed">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="javascript:void(0)">A menu</a>
    </div>
    <div class="collapse navbar-collapse" ui-collapse="ctrl.isNavCollapsed">
        <ul class="nav navbar-nav">
            <li><a href="javascript:void(0)">Link 1</a></li>
            <li><a href="javascript:void(0)">Link 2</a></li>
        </ul>
    </div>
</nav>
<hr>
<button type="button" class="btn btn-default" ng-click="ctrl.isCollapsed = !ctrl.isCollapsed">Toggle collapse Vertically</button>
<hr>
<div ui-collapse="ctrl.isCollapsed">
    <div class="well well-lg">Some content</div>
</div>

<button type="button" class="btn btn-default" ng-click="ctrl.isCollapsedHorizontal = !ctrl.isCollapsedHorizontal">Toggle collapse Horizontally</button>
<hr>
<div class="horizontal-collapse" ui-collapse="ctrl.isCollapsedHorizontal" horizontal>
<div class="well well-lg">Some content</div>
</div>
</div>
</div>
<ui-clipboard></ui-clipboard>
<div class="highlight">
  <pre>
  <style>
  .horizontal-collapse {
    height: 70px;
  }
  .navbar-collapse.in {
    overflow-y: hidden;
  }
</style>
<div>
<p>当window宽度像素小于 768 会展示mobile的菜单按钮</p>
<nav class="navbar navbar-default" role="navigation">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" ng-click="ctrl.isNavCollapsed = !ctrl.isNavCollapsed">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="javascript:void(0)">A menu</a>
    </div>
    <div class="collapse navbar-collapse" ui-collapse="ctrl.isNavCollapsed">
        <ul class="nav navbar-nav">
            <li><a href="javascript:void(0)">Link 1</a></li>
            <li><a href="javascript:void(0)">Link 2</a></li>
        </ul>
    </div>
</nav>
<hr>
<button type="button" class="btn btn-default" ng-click="ctrl.isCollapsed = !ctrl.isCollapsed">Toggle collapse Vertically</button>
<hr>
<div ui-collapse="ctrl.isCollapsed">
    <div class="well well-lg">Some content</div>
</div>

<button type="button" class="btn btn-default" ng-click="ctrl.isCollapsedHorizontal = !ctrl.isCollapsedHorizontal">Toggle collapse Horizontally</button>
<hr>
<div class="horizontal-collapse" ui-collapse="ctrl.isCollapsedHorizontal" horizontal>
<div class="well well-lg">Some content</div>
</div>
</div>
  </pre>
</div>
