AngularJS version of the tabs directive.

### ui-tabset settings

* `active`
  <i class="glyphicon glyphicon-eye-open"></i>
  _(Default: `Index of first tab`)_ -
  Active index of tab. Setting this to an existing tab index will make that tab active.

* `justified`
  <small class="badge">$</small>
  _(Default: `false`)_ -
  Whether tabs fill the container and have a consistent width.

  * `template-url`
  _(Default: `../../template/tabs/tabset.html`)_ -
  A URL representing the location of a template to use for the main component.

* `type`
  _(Defaults: `tabs`)_ -
  Navigation type. Possible values are 'tabs' and 'pills'.

* `vertical`
  <small class="badge">$</small>
  _(Default: `false`)_ -
  Whether tabs appear vertically stacked.

### ui-tab settings

* `classes`
  <small class="badge">$</small> -
   An optional string of space-separated CSS classes.

* `deselect()`
  <small class="badge">$</small> -
  An optional expression called when tab is deactivated. Supports `$event` and `$selectedIndex` in template for expression. You may call `$event.preventDefault()` in this event handler to prevent a tab change from occurring. The `$selectedIndex` can be used to determine which tab was attempted to be opened.

* `disable`
  <small class="badge">$</small>
  <i class="glyphicon glyphicon-eye-open"></i>
  _(Default: `false`)_ -
  Whether tab is clickable and can be activated.

* `heading` -
  Heading text.

* `index` -
  Tab index. Must be unique number or string.

* `select()`
  <small class="badge">$</small> -
  An optional expression called when tab is activated. Supports $event in template for expression.

* `template-url`
  _(Default: `../../template/tabs/tab.html`)_ -
  A URL representing the location of a template to use for the tab heading.

### Tabset heading

Instead of the `heading` attribute on the `ui-tabset`, you can use an `ui-tab-heading` element inside a tabset that will be used as the tabset's header. There you can use HTML as well.

### Known issues

To use clickable elements within the tab, you have override the tab template to use div elements instead of anchor elements, and replicate the desired styles from Bootstrap's CSS. This is due to browsers interpreting anchor elements as the target of any click event, which triggers routing when certain elements such as buttons are nested inside the anchor element.


## demo

<style type="text/css">
  form.tab-form-demo .tab-pane {
    margin: 20px 20px;
  }
</style>

<div>
  <p>Select a tab by setting active binding to true:</p>
  <p>
    <button type="button" class="btn btn-default btn-sm" ng-click="active = 1">Select second tab</button>
    <button type="button" class="btn btn-default btn-sm" ng-click="active = 2">Select third tab</button>
    <button type="button" class="btn btn-default btn-sm" ng-click="tabs[1].disabled = ! tabs[1].disabled">Enable / Disable third tab</button>
  </p>
  <br>
  <br>
  <hr/>

  <ui-tabset active="active">
    <ui-tab index="0" heading="static title">
		static content
    </ui-tab>
    <ui-tab index="$index + 1" ng-repeat="tab in tabs" heading="{{tab.title}}" disable="tab.disabled">
      {{tab.content}}
    </ui-tab>
    <ui-tab index="3" select="alertMe()">
      <ui-tab-heading>
        <i class="glyphicon glyphicon-bell"></i> Alert!
      </ui-tab-heading>
      I've got an HTML heading, and a select callback. Pretty cool!
    </ui-tab>
  </ui-tabset>
<br>
  <hr />

  <ui-tabset active="activePill" vertical="true" type="pills">
    <ui-tab index="0" heading="HTML5 文档类型">
		<div>
			Bootstrap 使用到的某些 HTML 元素和 CSS 属性需要将页面设置为 HTML5 文档类型。在你项目中的每个页面都要参照下面的格式进行设置。
		</div>
		<pre>
			<!DOCTYPE html>
			<html lang="zh-CN">
			  ...
			</html>
		</pre>
    </ui-tab>
    <ui-tab index="1" heading="移动设备优先">
		<div>
			在 Bootstrap 2 中，我们对框架中的某些关键部分增加了对移动设备友好的样式。而在 Bootstrap 3 中，我们重写了整个框架，使其一开始就是对移动设备友好的。这次不是简单的增加一些可选的针对移动设备的样式，而是直接融合进了框架的内核中。也就是说，Bootstrap 是移动设备优先的。针对移动设备的样式融合进了框架的每个角落，而不是增加一个额外的文件。

			为了确保适当的绘制和触屏缩放，需要在<code><head> </code>之中添加 viewport 元数据标签。
		</div>
    </ui-tab>
  </ui-tabset>
<br>
  <hr />

  <ui-tabset active="activeJustified" justified="true">
    <ui-tab index="0" heading="Justified">Justified content</ui-tab>
    <ui-tab index="1" heading="SJ">Short Labeled Justified content</ui-tab>
    <ui-tab index="2" heading="Long Justified">Long Labeled Justified content</ui-tab>
  </ui-tabset>
<br>
  <hr />

  Tabbed pills with CSS classes
  <ui-tabset type="pills">
    <ui-tab heading="Default Size">Tab 1 content</ui-tab>
    <ui-tab heading="Small Button" classes="btn-sm">Tab 2 content</ui-tab>
  </ui-tabset>
<br>
  <hr />

  Tabs using nested forms:
  <form name="outerForm" class="tab-form-demo">
    <ui-tabset active="activeForm">
      <ui-tab index="0" heading="Form Tab">
        <ng-form name="nestedForm">
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" required ng-model="model.name"/>
          </div>
        </ng-form>
      </ui-tab>
      <ui-tab index="1" heading="Tab One">
        Some Tab Content
      </ui-tab>
      <ui-tab index="2" heading="Tab Two">
        More Tab Content
      </ui-tab>
    </ui-tabset>
  </form>
  Model:
  <pre>{{ model | json }}</pre>
  Nested Form:
  <pre>{{ outerForm.nestedForm | json }}</pre>
</div>
