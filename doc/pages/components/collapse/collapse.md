<style>
  .horizontal-collapse {
    height: 70px;
  }
  .navbar-collapse.in {
    overflow-y: hidden;
  }
</style>
**uib-collapse** provides a simple way to hide and show an element with a css transition

### uib-collapse settings

* `collapsed()`
  <small class="badge">$</small> -
  An optional expression called after the element finished collapsing.

* `collapsing()`
  <small class="badge">$</small> -
  An optional expression called before the element begins collapsing.
  If the expression returns a promise, animation won't start until the promise resolves.
  If the returned promise is rejected, collapsing will be cancelled.

* `expanded()`
  <small class="badge">$</small> -
  An optional expression called after the element finished expanding.

* `expanding()`
  <small class="badge">$</small> -
  An optional expression called before the element begins expanding.
  If the expression returns a promise, animation won't start until the promise resolves.
  If the returned promise is rejected, expanding will be cancelled.

* `uib-collapse`
  <small class="badge">$</small>
  <i class="glyphicon glyphicon-eye-open"></i>
  _(Default: `false`)_ -
  Whether the element should be collapsed or not.

* `horizontal`
  <small class="badge">$</small> -
  An optional attribute that permit to collapse horizontally.

### Known Issues

When using the `horizontal` attribute with this directive, keep in mind that due to how CSS can reflow as the collapse element goes from 0px to its desired end width, this cause result in issues with a changing height. This can cause animations to not appear to run. The best way around this is to set a fixed height via CSS on the horizontal collapse element so that this situation does not occur, and so the animation can run as expected.

## 代码演示

<style>
  .horizontal-collapse {
    height: 70px;
  }
  .navbar-collapse.in {
    overflow-y: hidden;
  }
</style>
<div>
<p>Resize window to less than 768 pixels to display mobile menu toggle button.</p>
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
