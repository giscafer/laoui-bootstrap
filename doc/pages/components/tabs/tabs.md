# Tabs  标签页

选项卡切换组件。

## 何时使用

提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

## 如何使用

使用`< ui-tabset >`标签包含`< ui-tab >`组合成一组tabs页


## 属性

### ui-tabset 属性

 
| 成员       | 说明             | 类型               | 默认值       |
|-----------|-----------------|--------------------|-------------|
| active   |  指定默认激活的标签页 | string |  -   |
| justified  |  标签和容器是否有一致的宽度，自适应窗口宽度  | boolean |  `false`  |
| template-url | 自定义模板路径   | string |  -   |
| type  |  导航类型 | 'tabs' 或 'pills' |  `tabs`  |
| vertical  | 垂直模式 | - | `false`  |
| horizontal | 可选属性，控制是否水平 | string | -  |

### ui-tab 属性

 
| 成员       | 说明             | 类型               | 默认值       |
|-----------|-----------------|--------------------|-------------|
| classes   |  一个 space-separated CSS classes 可选的字符串 。 | string |  -   |
| deselect()  |  当tab deactivated的时候调用的回调函数，参数`$event` 和 `$selectedIndex`中，可以使用`$event.preventDefault()` 来阻止tab动作，`$selectedIndex` 可以指定哪个tab页展开显示 | function |  -  |
| template-url | 自定义模板路径   | string |  -   |
| disable  |  是否禁用 | boolean |  `false`  |
| select()  | 可选表达式，当tab激活时触发，支持`$event`参数 | - | - |
| index | tab页索引值，必须唯一 | string & number | -  |


### Tabset heading

可以使用`< ui-tab-heading >` 或者`head属性`，或HTML来创建Tabset的heading


## 代码演示

<style type="text/css">
  form.tab-form-demo .tab-pane {
    margin: 20px 20px;
  }
</style>

  
### 基本tab页使用

<div class="bs-example">
<div>
  <p>点击按钮切换tab页的active状态</p>
  <p>
    <button type="button" class="btn btn-default btn-sm" ng-click="active = 1">Select second tab</button>
    <button type="button" class="btn btn-default btn-sm" ng-click="active = 2">Select third tab</button>
    <button type="button" class="btn btn-default btn-sm" ng-click="tabs[1].disabled = ! tabs[1].disabled">Enable / Disable third tab</button>
  </p>
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
</div>
</div>
<ui-clipboard></ui-clipboard>
<div class="highlight">
  <pre>
    
<div>
    <p>点击按钮切换tab页的active状态</p>
  <p>
    <button type="button" class="btn btn-default btn-sm" ng-click="active = 1">Select second tab</button>
    <button type="button" class="btn btn-default btn-sm" ng-click="active = 2">Select third tab</button>
    <button type="button" class="btn btn-default btn-sm" ng-click="tabs[1].disabled = ! tabs[1].disabled">Enable / Disable third tab</button>
  </p>
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
</div>
  </pre>
</div>


### `type="pills"`类型

<div class="bs-example">
<div>
  <ui-tabset active="activePill" vertical="true" type="pills">
    <ui-tab index="0" heading="HTML5 文档类型">
		<div>
			Bootstrap 使用到的某些 HTML 元素和 CSS 属性需要将页面设置为 HTML5 文档类型。在你项目中的每个页面都要参照下面的格式进行设置。
		</div>
		<code>
			<!DOCTYPE html>
			<html lang="zh-CN">
			  ...
			</html>
		</code>
    </ui-tab>
    <ui-tab index="1" heading="移动设备优先">
		<div>
			在 Bootstrap 2 中，我们对框架中的某些关键部分增加了对移动设备友好的样式。而在 Bootstrap 3 中，我们重写了整个框架，使其一开始就是对移动设备友好的。这次不是简单的增加一些可选的针对移动设备的样式，而是直接融合进了框架的内核中。也就是说，Bootstrap 是移动设备优先的。针对移动设备的样式融合进了框架的每个角落，而不是增加一个额外的文件。

			为了确保适当的绘制和触屏缩放，需要在<code><head> </code>之中添加 viewport 元数据标签。
		</div>
    </ui-tab>
  </ui-tabset>
</div>
<hr>
</div>
<ui-clipboard></ui-clipboard>
<div class="highlight">
  <pre>
<div>
  <ui-tabset active="activePill" vertical="true" type="pills">
    <ui-tab index="0" heading="HTML5 文档类型">
		<div>
			Bootstrap 使用到的某些 HTML 元素和 CSS 属性需要将页面设置为 HTML5 文档类型。在你项目中的每个页面都要参照下面的格式进行设置。
		</div>
		<code>
			<!DOCTYPE html>
			<html lang="zh-CN">
			  ...
			</html>
		</code>
    </ui-tab>
    <ui-tab index="1" heading="移动设备优先">
		<div>
			在 Bootstrap 2 中，我们对框架中的某些关键部分增加了对移动设备友好的样式。而在 Bootstrap 3 中，我们重写了整个框架，使其一开始就是对移动设备友好的。这次不是简单的增加一些可选的针对移动设备的样式，而是直接融合进了框架的内核中。也就是说，Bootstrap 是移动设备优先的。针对移动设备的样式融合进了框架的每个角落，而不是增加一个额外的文件。
			为了确保适当的绘制和触屏缩放，需要在<code><head> </code>之中添加 viewport 元数据标签。
		</div>
    </ui-tab>
  </ui-tabset>
</div>
  </pre>
</div>

### `justified="true"`类型

<div class="bs-example">
<div>
  <ui-tabset active="activeJustified" justified="true">
    <ui-tab index="0" heading="Justified">Justified content</ui-tab>
    <ui-tab index="1" heading="SJ">Short Labeled Justified content</ui-tab>
    <ui-tab index="2" heading="Long Justified">Long Labeled Justified content</ui-tab>
  </ui-tabset>
</div>
<hr>
</div>
<ui-clipboard></ui-clipboard>
<div class="highlight">
<pre>
  <ui-tabset active="activeJustified" justified="true">
    <ui-tab index="0" heading="Justified">Justified content</ui-tab>
    <ui-tab index="1" heading="SJ">Short Labeled Justified content</ui-tab>
    <ui-tab index="2" heading="Long Justified">Long Labeled Justified content</ui-tab>
  </ui-tabset>
</pre>
</div>

### Tabbed pills with CSS classes

<div class="bs-example">
 <ui-tabset type="pills" style="background:#fff">
    <ui-tab heading="Default Size">Tab 1 content</ui-tab>
    <ui-tab heading="Small Button" classes="btn-sm">Tab 2 content</ui-tab>
  </ui-tabset>
  <hr>
</div>
<ui-clipboard></ui-clipboard>
<div class="highlight">
  <pre>
 <ui-tabset type="pills">
    <ui-tab heading="Default Size">Tab 1 content</ui-tab>
    <ui-tab heading="Small Button" classes="btn-sm">Tab 2 content</ui-tab>
  </ui-tabset>
  </pre>
</div>

### Tabs using nested forms

<div class="bs-example">
<div>
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
<hr>
</div>
<ui-clipboard></ui-clipboard>
<div class="highlight">
  <pre>
<div>
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
  </pre>
</div>


