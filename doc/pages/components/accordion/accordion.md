
# Accordion 手风琴/折叠面板

可以折叠/展开的内容区域。


## 何时使用

- 对复杂区域进行分组和隐藏，保持页面的整洁。
- 手风琴 是一种特殊的折叠面板，只允许单个内容区域展开。

## 如何使用

  <code>&lt;ui-accordion /&gt;</code> 与 <code>&lt;ui-accordion-group /&gt;</code> 嵌套创建一个手风琴容器

The **accordion directive** builds on top of the collapse directive to provide a list of items, with collapsible bodies that are collapsed or expanded by clicking on the item's header.

The body of each accordion group is transcluded into the body of the collapsible element.

### ui-accordion settings

* `close-others`
  <small class="badge">$</small>
  <small class="badge">C</small>
  _(Default: `true`)_ -
  Control whether expanding an item will cause the other items to close.

* `template-url`
  _(Default: `template/accordion/accordion.html`)_ -
  Add the ability to override the template used on the component.

### ui-accordion-group settings

* `heading`
  _(Default: `none`)_ -
  The clickable text on the group's header. You need one to be able to click on the header for toggling.

* `is-disabled`
  <small class="badge">$</small>
  <i class="glyphicon glyphicon-eye-open"></i>
  _(Default: `false`)_ -
   Whether the accordion group is disabled or not.

* `is-open`
  <small class="badge">$</small>
  <i class="glyphicon glyphicon-eye-open"></i>
  _(Default: `false`)_ -
  Whether accordion group is open or closed.

* `template-url`
  _(Default: `../../template/accordion/accordion-group.html`)_ -
  Add the ability to override the template used on the component.

### Accordion heading

Instead of the `heading` attribute on the `ui-accordion-group`, you can use an `ui-accordion-heading` element inside a group that will be used as the group's header.

If you're using a custom template for the `ui-accordion-group`, you'll need to have an element for the heading to be transcluded into using `ui-accordion-header` (e.g. `<div ui-accordion-header></div>`).

### Known issues

To use clickable elements within the accordion, you have to override the accordion-group template to use div elements instead of anchor elements, and add `cursor: pointer` in your CSS. This is due to browsers interpreting anchor elements as the target of any click event, which triggers routing when certain elements such as buttons are nested inside the anchor element.

If custom classes on the accordion-group element are desired, one needs to either modify the template to remove the `ng-class` usage in the accordion-group template and use ng-class on the accordion-group element (not recommended), or use an interpolated expression in the class attribute, i.e. `<ui-accordion-group class="{{customClass()}}"></ui-accordion-group>`.


<div class="not-markdown">
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

  <ui-accordion  class="margin-bottom-20" is-compact='true'>
    <ui-accordion-group is-open="true" heading="列表一" >
        Duis donec aptent. Eros aliquam torquent hendrerit quisque taciti. Mi magnis diam curae; malesuada tempus. Hendrerit turpis est natoque maecenas tellus euismod etiam nullam. Torquent ridiculus euismod parturient pretium malesuada, malesuada viverra, ante dictum nisi feugiat nisl facilisis suspendisse. Maecenas. At purus fames rutrum rutrum commodo facilisi augue tempus ultricies, bibendum, hymenaeos curabitur, consectetuer integer. Turpis interdum nullam sed semper sem tincidunt dis. Eget ad. Egestas ligula leo aptent auctor Ultrices massa nullam nullam blandit penatibus urna torquent primis vel risus varius pretium nonummy adipiscing mattis dolor. Volutpat. Nonummy cum eros maecenas sed tristique adipiscing gravida litora cursus. Scelerisque luctus.
    </ui-accordion-group>
    <ui-accordion-group heading="列表二">
        Duis donec aptent. Eros aliquam torquent hendrerit quisque taciti. Mi magnis diam curae; malesuada tempus. Hendrerit turpis est natoque maecenas tellus euismod etiam nullam. Torquent ridiculus euismod parturient pretium malesuada, malesuada viverra, ante dictum nisi feugiat nisl facilisis suspendisse. Maecenas. At purus fames rutrum rutrum commodo facilisi augue tempus ultricies, bibendum, hymenaeos curabitur, consectetuer integer. Turpis interdum nullam sed semper sem tincidunt dis. Eget ad. Egestas ligula leo aptent auctor Ultrices massa nullam nullam blandit penatibus urna torquent primis vel risus varius pretium nonummy adipiscing mattis dolor. Volutpat. Nonummy cum eros maecenas sed tristique adipiscing gravida litora cursus. Scelerisque luctus.
    </ui-accordion-group>
    <ui-accordion-group>
        <ui-accordion-heading is-open="true"><em>列表三</em></ui-accordion-heading>
        Duis donec aptent. Eros aliquam torquent hendrerit quisque taciti. Mi magnis diam curae; malesuada tempus. Hendrerit turpis est natoque maecenas tellus euismod etiam nullam. Torquent ridiculus euismod parturient pretium malesuada, malesuada viverra, ante dictum nisi feugiat nisl facilisis suspendisse. Maecenas. At purus fames rutrum rutrum commodo facilisi augue tempus ultricies, bibendum, hymenaeos curabitur, consectetuer integer. Turpis interdum nullam sed semper sem tincidunt dis. Eget ad. Egestas ligula leo aptent auctor Ultrices massa nullam nullam blandit penatibus urna torquent primis vel risus varius pretium nonummy adipiscing mattis dolor. Volutpat. Nonummy cum eros maecenas sed tristique adipiscing gravida litora cursus. Scelerisque luctus.
    </ui-accordion-group>
</ui-accordion>
</div>
