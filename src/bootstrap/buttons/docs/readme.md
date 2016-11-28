With the buttons directive, we can make a group of buttons behave like a set of checkboxes (`ui-btn-checkbox`) or behave like a set of radio buttons (`ui-btn-radio`).

### ui-btn-checkbox settings

* `btn-checkbox-false`
  _(Default: `false`)_ -
  Sets the value for the unchecked status.
  
* `btn-checkbox-true`
  _(Default: `true`)_ -
  Sets the value for the checked status.
  
* `ng-model`
  <small class="badge">$</small>
  <i class="glyphicon glyphicon-eye-open"></i> -
  Model where we set the checkbox status. By default `true` or `false`.

### ui-btn-radio settings

* `ng-model`
  <small class="badge">$</small>
  <i class="glyphicon glyphicon-eye-open"></i> -
  Model where we set the radio status. All radio buttons in a group should use the same `ng-model`.
    
* `ui-btn-radio` -
  <small class="badge">$</small>
  Value to assign to the `ng-model` if we check this radio button.

* `ui-uncheckable`
  <small class="badge">$</small>
  _(Default: `null`)_ -
  An expression that evaluates to a truthy or falsy value that determines whether the `uncheckable` attribute is present.
  
* `uncheckable`
  <small class="badge">B</small> -
  Whether a radio button can be unchecked or not.
  
### Additional settings `uiButtonConfig`

* `activeClass`
  _(Default: `active`)_ -
  Class to apply to the checked buttons.
  
* `toggleEvent`
  _(Default: `click`)_ -
  Event used to toggle the buttons.

### Known issues

To use tooltips or popovers on elements within a `btn-group`, set the tooltip/popover `appendToBody` option to `true`. This is due to Bootstrap CSS styling. See [here](http://getbootstrap.com/components/#btn-groups) for more information.
