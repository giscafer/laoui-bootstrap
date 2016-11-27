
# Accordion 手风琴

可以折叠/展开的内容区域。


## 何时使用

- 对复杂区域进行分组和隐藏，保持页面的整洁。
- 手风琴 是一种特殊的折叠面板，只允许单个内容区域展开。

## 如何使用

  <code>&lt;ui-accordion /&gt;</code> 与 <code>&lt;ui-accordion-group /&gt;</code> 嵌套创建一个手风琴容器

## 指令属性

### ui-accordion

| 成员       | 说明             | 类型               | 默认值       |
|-----------|-----------------|--------------------|-------------|
| close-others    | 控制是否在展开的时候关闭其他面板   | boolean |  true      | 
| is-compact    |  是否是紧靠模式 | boolean |  false    |
| template-url      | 自定义模板路径，覆盖默认的模板 | string |   -      |


### ui-accordion-group

| 成员       | 说明             | 类型               | 默认值       |
|-----------|-----------------|--------------------|-------------|
| heading  | group的头部标题(点击标题字体可以触发折叠展开)   | boolean |  none      | 
| is-disabled    | 禁用group面板 | boolean |   false   |
| is-open    | 默认是否展开 | boolean |   false   |
| template-url  | 自定义模板路径，覆盖默认的模板 | string |   -   |


### Accordion heading

 在`ui-accordion-group`组件上，可以使用`heading`属性或者 `<ui-accordion-heading/>` 指令元素创建group的header

如果你为 `ui-accordion-group`创建一个自定义模板, 你将需要使用`ui-accordion-header`来创建header (e.g. `<div ui-accordion-header></div>`).


## 代码演示

### 默认样式

<div class="row">
  <div class="col-md-5">
  <script type="text/ng-template" id="group-template.html">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title" style="color:#fa39c3">
          <a href tabindex="0" class="accordion-toggle" ng-click="ctrl.toggleOpen()" ui-accordion-transclude="heading">
            <span ui-accordion-header ng-class="{'text-muted': ctrl.isDisabled}">
              {{heading}}
            </span>
          </a>
        </h4>
      </div>
      <div class="panel-collapse collapse" ui-collapse="!ctrl.isOpen">
        <div class="panel-body" style="text-align: right" ng-transclude></div>
      </div>
    </div>
  </script>

  <p>
    <button type="button" class="btn btn-default btn-sm" ng-click="ctrl.status.open = !ctrl.status.open">Toggle last panel</button>
    <button type="button" class="btn btn-default btn-sm" ng-click="ctrl.status.isFirstDisabled = ! ctrl.status.isFirstDisabled">Enable / Disable first panel</button>
  </p>

  <div class="checkbox">
    <label>
      <input type="checkbox" ng-model="ctrl.oneAtATime">
      Open only one at a time
    </label>
  </div>
  <ui-accordion close-others="ctrl.oneAtATime">
    <div ui-accordion-group  heading="Static Header, initially expanded" is-open="ctrl.status.isFirstOpen" is-disabled="ctrl.status.isFirstDisabled">
      This content is straight in the template.
    </div>
    <div ui-accordion-group  heading="{{group.title}}" ng-repeat="group in ctrl.groups">
      {{group.content}}
    </div>
    <div ui-accordion-group  heading="Dynamic Body Content">
      <p>The body of the ui-accordion group grows to fit the contents</p>
      <button type="button" class="btn btn-default btn-sm" ng-click="ctrl.addItem()">Add Item</button>
      <div ng-repeat="item in ctrl.items">{{item}}</div>
    </div>
    <div ui-accordion-group  heading="Custom template" template-url="group-template.html">
      Hello
    </div>
    <div ui-accordion-group  is-open="ctrl.status.isCustomHeaderOpen" template-url="group-template.html">
      <ui-accordion-heading>
        Custom template with custom header template <i class="pull-right glyphicon" ng-class="{'glyphicon-chevron-down': ctrl.status.isCustomHeaderOpen, 'glyphicon-chevron-right': !ctrl.status.isCustomHeaderOpen}"></i>
      </ui-accordion-heading>
      World
    </div>
    <div ui-accordion-group class="panel-danger" heading="Delete account">
      <p>Please, to delete your account, click the button below</p>
      <button class="btn btn-danger">Delete</button>
    </div>
    <div ui-accordion-group  is-open="ctrl.status.open">
      <ui-accordion-heading>
        I can have markup, too! <i class="pull-right glyphicon" ng-class="{'glyphicon-chevron-down': ctrl.status.open, 'glyphicon-chevron-right': !ctrl.status.open}"></i>
      </ui-accordion-heading>
      This is just some content to illustrate fancy headings.
    </div>
  </ui-accordion>
  </div>
  <div class="col-md-7">
<ui-tabset style="max-height:500px;overflow:auto">
<ui-tab heading="HTML">
<pre>
  <script type="text/ng-template" id="group-template.html">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title" style="color:#fa39c3">
          <a href tabindex="0" class="accordion-toggle" ng-click="toggleOpen()" ui-accordion-transclude="heading">
            <span ui-accordion-header ng-class="{'text-muted': isDisabled}">
              {{heading}}
            </span>
          </a>
        </h4>
      </div>
      <div class="panel-collapse collapse" ui-collapse="!isOpen">
        <div class="panel-body" style="text-align: right" ng-transclude></div>
      </div>
    </div>
  </script>

  <p>
    <button type="button" class="btn btn-default btn-sm" ng-click="status.open = !status.open">Toggle last panel</button>
    <button type="button" class="btn btn-default btn-sm" ng-click="status.isFirstDisabled = ! status.isFirstDisabled">Enable / Disable first panel</button>
  </p>

  <div class="checkbox">
    <label>
      <input type="checkbox" ng-model="oneAtATime">
      Open only one at a time
    </label>
  </div>
  <ui-accordion close-others="oneAtATime">
    <div ui-accordion-group  heading="Static Header, initially expanded" is-open="status.isFirstOpen" is-disabled="status.isFirstDisabled">
      This content is straight in the template.
    </div>
    <div ui-accordion-group  heading="{{group.title}}" ng-repeat="group in groups">
      {{group.content}}
    </div>
    <div ui-accordion-group  heading="Dynamic Body Content">
      <p>The body of the ui-accordion group grows to fit the contents</p>
      <button type="button" class="btn btn-default btn-sm" ng-click="addItem()">Add Item</button>
      <div ng-repeat="item in items">{{item}}</div>
    </div>
    <div ui-accordion-group  heading="Custom template" template-url="group-template.html">
      Hello
    </div>
    <div ui-accordion-group  is-open="status.isCustomHeaderOpen" template-url="group-template.html">
      <ui-accordion-heading>
        Custom template with custom header template <i class="pull-right glyphicon" ng-class="{'glyphicon-chevron-down': status.isCustomHeaderOpen, 'glyphicon-chevron-right': !status.isCustomHeaderOpen}"></i>
      </ui-accordion-heading>
      World
    </div>
    <div ui-accordion-group class="panel-danger" heading="Delete account">
      <p>Please, to delete your account, click the button below</p>
      <button class="btn btn-danger">Delete</button>
    </div>
    <div ui-accordion-group  is-open="status.open">
      <ui-accordion-heading>
        I can have markup, too! <i class="pull-right glyphicon" ng-class="{'glyphicon-chevron-down': status.open, 'glyphicon-chevron-right': !status.open}"></i>
      </ui-accordion-heading>
      This is just some content to illustrate fancy headings.
    </div>
  </ui-accordion>
</pre>
</ui-tab>
<ui-tab heading="Controller">
<pre>
  export default class AccordionCtrl {
    constructor($scope) {
    	this._$scope=$scope;
       this.oneAtATime = true;

       this.groups = [{
            title: 'Dynamic Group Header - 1',
            content: 'Dynamic Group Body - 1'
        }, {
            title: 'Dynamic Group Header - 2',
            content: 'Dynamic Group Body - 2'
        }];

       this.items = ['Item 1', 'Item 2', 'Item 3'];

       this.addItem = ()=>{
           let newItemNo =this.items.length + 1;
           this.items.push('Item ' + newItemNo);
        };

       this.status = {
            isCustomHeaderOpen: false,
            isFirstOpen: true,
            isFirstDisabled: false
        };
    }
}
 </pre>
</ui-tab>
 </ui-tabset>
</div>
</div>

### 紧靠样式

添加<code>is-compact='true'</code>控制紧靠样式

<div class="row">
<div class="col-md-5">
  <ui-accordion is-compact='true'>
      <ui-accordion-group is-open="true" heading="Understanding CSRF" >
          The Express team's csrf and csurf modules frequently have issues popping up concerned about our usage of cryptographic functions. 
          These concerns are unwarranted due to a misunderstanding of how CSRF tokens work. So here's a quick run down!
          Read this and still have questions? Want to tell us we're wrong? Open an issue!
      </ui-accordion-group>
      <ui-accordion-group heading="How does a CSRF attack work?">
          On their own (phishing site), an attacker could create an AJAX button or form that creates a request against your site:
          <pre>
          <form action="https://my.site.com/me/something-destructive" method="POST">
            <button type="submit">Click here for free money!</button>
          </form>
          </pre>
          This is worse with AJAX as the attacker could use other methods like DELETE as well as read the result.
          This is particularly important when the user has some sort of session with very personal details on your site. 
          If this is in the context of a technologically illiterate user, there might be some inputs for credit card and social security info.
      </ui-accordion-group>
      <ui-accordion-group>
          <ui-accordion-heading is-open="true"><em>How to mitigate CSRF attacks?</em></ui-accordion-heading>
          This is where the salt comes along. The BREACH attack is pretty simple: if the server sends the same or very similar response over HTTPS+gzip multiple times,
          an attacker could guess the contents of response body (making HTTPS utterly useless). Solution? Make each response a tiny bit different.
      </ui-accordion-group>
   </ui-accordion>
</div>
<div class="col-md-7">
  <ui-tabset style="max-height:400px;overflow:auto"> 
  <ui-tab heading="HTML">
  <pre>
    <ui-accordion is-compact='true'>
      <ui-accordion-group is-open="true" heading="Understanding CSRF" >
          The Express team's csrf and csurf modules frequently have issues popping up concerned about our usage of cryptographic functions. 
          These concerns are unwarranted due to a misunderstanding of how CSRF tokens work. So here's a quick run down!
          Read this and still have questions? Want to tell us we're wrong? Open an issue!
      </ui-accordion-group>
      <ui-accordion-group heading="How does a CSRF attack work?">
          On their own (phishing site), an attacker could create an AJAX button or form that creates a request against your site:
          <pre>
          <form action="https://my.site.com/me/something-destructive" method="POST">
            <button type="submit">Click here for free money!</button>
          </form>
          </pre>
          This is worse with AJAX as the attacker could use other methods like DELETE as well as read the result.
          This is particularly important when the user has some sort of session with very personal details on your site. 
          If this is in the context of a technologically illiterate user, there might be some inputs for credit card and social security info.
      </ui-accordion-group>
      <ui-accordion-group>
          <ui-accordion-heading is-open="true"><em>How to mitigate CSRF attacks?</em></ui-accordion-heading>
          This is where the salt comes along. The BREACH attack is pretty simple: if the server sends the same or very similar response over HTTPS+gzip multiple times,
          an attacker could guess the contents of response body (making HTTPS utterly useless). Solution? Make each response a tiny bit different.
      </ui-accordion-group>
    </ui-accordion>
  </pre>
  </ui-tab>
</ui-tabset>
</div>
</div>
