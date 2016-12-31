
# Popover气泡卡片

点击/鼠标移入元素，弹出气泡式的卡片浮层。

## 何时使用

当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。
和 Tooltip 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。


A lightweight, extensible directive for fancy popover creation. The popover
directive supports multiple placements, optional transition animation, and more.

Like the Bootstrap jQuery plugin, the popover **requires** the tooltip
module.

__Note to mobile developers__:  Please note that while popovers may work correctly on mobile devices (including tablets),
  we have made the decision to not officially support such a use-case because it does not make sense from a UX perspective.

There are three versions of the popover: `ui-popover` and `ui-popover-template`, and `ui-popover-html`:

* `ui-popover` -
  Takes text only and will escape any HTML provided for the popover body.
* `ui-popover-html`
  <small class="badge">$</small> -
  Takes an expression that evaluates to an HTML string. Note that this HTML is not compiled. If compilation is required, please use the `ui-popover-template` attribute option instead.  *The user is responsible for ensuring the content is safe to put into the DOM!*
* `ui-popover-template`
  <small class="badge">$</small> -
  A URL representing the location of a template to use for the popover body. Note that the contents of this template need to be wrapped in a tag, e.g., `<div></div>`.

### ui-popover-* settings

All these settings are available for the three types of popovers.

* `popover-animation`
  <small class="badge">$</small>
  <small class="badge">C</small>
  _(Default: `true`, Config: `animation`)_ -
  Should it fade in and out?

* `popover-append-to-body`
  <small class="badge">$</small>
  <small class="badge">C</small>
  _(Default: `false`, Config: `appendToBody`)_ -
  Should the popover be appended to '$body' instead of the parent element?

* `popover-class` -
  Custom class to be applied to the popover.

* `popover-enable`
  <small class="badge">$</small>
  _(Default: `true`)_ -
  Is it enabled? It will enable or disable the configured popover-trigger.

* `popover-is-open`
  <i class="glyphicon glyphicon-eye-open"></i>
  _(Default: `false`)_ -
  Whether to show the popover.

* `popover-placement`
  <small class="badge">C</small>
  _(Default: `top`, Config: `placement`)_ -
  Passing in 'auto' separated by a space before the placement will enable auto positioning, e.g: "auto bottom-left". The popover will attempt to position where it fits in the closest scrollable ancestor. Accepts:

   * `top` - popover on top, horizontally centered on host element.
   * `top-left` - popover on top, left edge aligned with host element left edge.
   * `top-right` - popover on top, right edge aligned with host element right edge.
   * `bottom` - popover on bottom, horizontally centered on host element.
   * `bottom-left` - popover on bottom, left edge aligned with host element left edge.
   * `bottom-right` - popover on bottom, right edge aligned with host element right edge.
   * `left` - popover on left, vertically centered on host element.
   * `left-top` - popover on left, top edge aligned with host element top edge.
   * `left-bottom` - popover on left, bottom edge aligned with host element bottom edge.
   * `right` - popover on right, vertically centered on host element.
   * `right-top` - popover on right, top edge aligned with host element top edge.
   * `right-bottom` - popover on right, bottom edge aligned with host element bottom edge.

* `popover-popup-close-delay`
  <small class="badge">C</small>
  _(Default: `0`, Config: `popupCloseDelay`)_ -
  For how long should the popover remain open after the close trigger event?

* `popover-popup-delay`
  <small class="badge">C</small>
  _(Default: `0`, Config: `popupDelay`)_ -
  Popup delay in milliseconds until it opens.

* `popover-title` -
   A string to display as a fancy title.

* `popover-trigger`
  <small class="badge">$</small>
  _(Default: `'click'`)_ -
  What should trigger a show of the popover? Supports a space separated list of event names, or objects (see below).

**Note:** To configure the tooltips, you need to do it on `$uiTooltipProvider` (also see below).

### Triggers

The following show triggers are supported out of the box, along with their provided hide triggers:

- `mouseenter`: `mouseleave`
- `click`: `click`
- `outsideClick`: `outsideClick`
- `focus`: `blur`
- `none`

The `outsideClick` trigger will cause the popover to toggle on click, and hide when anything else is clicked.

For any non-supported value, the trigger will be used to both show and hide the
popover. Using the 'none' trigger will disable the internal trigger(s), one can
then use the `popover-is-open` attribute exclusively to show and hide the popover.

### $uiTooltipProvider

Through the `$uiTooltipProvider`, you can change the way tooltips and popovers
behave by default; the attributes above always take precedence. The following
methods are available:

* `setTriggers(obj)`
  _(Example: `{ 'openTrigger': 'closeTrigger' }`)_ -
  Extends the default trigger mappings mentioned above with mappings of your own.

* `options(obj)` -
  Provide a set of defaults for certain tooltip and popover attributes. Currently supports the ones with the <small class="badge">C</small> badge.

### Known issues

For Safari 7+ support, if you want to use **focus** `popover-trigger`, you need to use an anchor tag with a tab index. For example:

```
<a tabindex="0" ui-popover="Test" popover-trigger="focus" class="btn btn-default">
  Click Me
</a>
```

## 代码演示

<div class="no-markdown">
    <h4>Dynamic</h4>
    <div class="form-group">
      <label>Popup Text:</label>
      <input type="text" ng-model="ctrl.dynamicPopover.content" class="form-control">
    </div>
    <div class="form-group">
      <label>Popup Title:</label>
      <input type="text" ng-model="ctrl.dynamicPopover.title" class="form-control">
    </div>
    <div class="form-group">
      <label>Popup Template:</label>
      <input type="text" ng-model="ctrl.dynamicPopover.templateUrl" class="form-control">
    </div>
    <button ui-popover="{{ctrl.dynamicPopover.content}}" popover-title="{{ctrl.dynamicPopover.title}}" type="button" class="btn btn-default">Dynamic Popover</button>

    <button ui-popover-template="ctrl.dynamicPopover.templateUrl" popover-title="{{ctrl.dynamicPopover.title}}" type="button" class="btn btn-default">Popover With Template</button>

    <script type="text/ng-template" id="myPopoverTemplate.html">
        <div>{{ctrl.dynamicPopover.content}}</div>
        <div class="form-group">
          <label>Popup Title:</label>
          <input type="text" ng-model="ctrl.dynamicPopover.title" class="form-control">
        </div>
    </script>
    <hr />
    <h4>Positional</h4>
    <div class="form-group">
      <label>Popover placement</label>
      <select class="form-control" ng-model="ctrl.placement.selected" ng-options="o as o for o in ctrl.placement.options"></select>
    </div>
    <button popover-placement="{{ctrl.placement.selected}}" ui-popover="On the {{ctrl.placement.selected}}" type="button" class="btn btn-default">Popover {{ctrl.placement.selected}}</button>

    <hr />
    <h4>Triggers</h4>
    <p>
      <button ui-popover="I appeared on mouse enter!" popover-trigger="'mouseenter'" type="button" class="btn btn-default">Mouseenter</button>
    </p>
    <input type="text" value="Click me!" ui-popover="I appeared on focus! Click away and I'll vanish..."  popover-trigger="'focus'" class="form-control">

    <hr />
    <h4>Other</h4>
    <button popover-animation="true" ui-popover="I fade in and out!" type="button" class="btn btn-default">fading</button>
    <button ui-popover="I have a title!" popover-title="The title." type="button" class="btn btn-default">title</button>
    <button ui-popover="I am activated manually" popover-is-open="popoverIsOpen" ng-click="popoverIsOpen = !popoverIsOpen" type="button" class="btn btn-default">Toggle popover</button>
    <button ui-popover-html="htmlPopover" class="btn btn-default">HTML Popover</button>
    <button ui-popover-html="'<b>HTML</b>, <i>inline</i>'" class="btn btn-default">HTML Popover (inline)</button>
</div>
