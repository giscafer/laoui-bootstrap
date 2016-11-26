With the buttons directive, we can make a group of buttons behave like a set of checkboxes (`uib-btn-checkbox`) or behave like a set of radio buttons (`uib-btn-radio`).

### uib-btn-checkbox settings

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

### uib-btn-radio settings

* `ng-model`
  <small class="badge">$</small>
  <i class="glyphicon glyphicon-eye-open"></i> -
  Model where we set the radio status. All radio buttons in a group should use the same `ng-model`.
    
* `uib-btn-radio` -
  <small class="badge">$</small>
  Value to assign to the `ng-model` if we check this radio button.

* `uib-uncheckable`
  <small class="badge">$</small>
  _(Default: `null`)_ -
  An expression that evaluates to a truthy or falsy value that determines whether the `uncheckable` attribute is present.
  
* `uncheckable`
  <small class="badge">B</small> -
  Whether a radio button can be unchecked or not.
  
### Additional settings `uibButtonConfig`

* `activeClass`
  _(Default: `active`)_ -
  Class to apply to the checked buttons.
  
* `toggleEvent`
  _(Default: `click`)_ -
  Event used to toggle the buttons.

### Known issues

To use tooltips or popovers on elements within a `btn-group`, set the tooltip/popover `appendToBody` option to `true`. This is due to Bootstrap CSS styling. See [here](http://getbootstrap.com/components/#btn-groups) for more information.


<div>
    <h4>Single toggle</h4>
    <pre>{{ctrl.singleModel}}</pre>
    <button type="button" class="btn btn-primary" ng-model="ctrl.singleModel" uib-btn-checkbox btn-checkbox-true="1" btn-checkbox-false="0">
        Single Toggle
    </button>
    <h4>Checkbox</h4>
    <pre>Model: {{ctrl.checkModel}}</pre>
    <pre>Results: {{ctrl.checkResults}}</pre>
    <div class="btn-group">
        <label class="btn btn-primary" ng-model="ctrl.checkModel.left" uib-btn-checkbox>Left</label>
        <label class="btn btn-primary" ng-model="ctrl.checkModel.middle" uib-btn-checkbox>Middle</label>
        <label class="btn btn-primary" ng-model="ctrl.checkModel.right" uib-btn-checkbox>Right</label>
    </div>
    <h4>Radio &amp; Uncheckable Radio</h4>
    <pre>{{ctrl.radioModel || 'null'}}</pre>
    <div class="btn-group">
        <label class="btn btn-primary" ng-model="ctrl.radioModel" uib-btn-radio="'Left'">Left</label>
        <label class="btn btn-primary" ng-model="ctrl.radioModel" uib-btn-radio="'Middle'">Middle</label>
        <label class="btn btn-primary" ng-model="ctrl.radioModel" uib-btn-radio="'Right'">Right</label>
    </div>
    <div class="btn-group">
        <label class="btn btn-success" ng-model="ctrl.radioModel" uib-btn-radio="'Left'" uncheckable>Left</label>
        <label class="btn btn-success" ng-model="ctrl.radioModel" uib-btn-radio="'Middle'" uncheckable>Middle</label>
        <label class="btn btn-success" ng-model="ctrl.radioModel" uib-btn-radio="'Right'" uib-uncheckable="ctrl.uncheckable">Right</label>
    </div>
    <div>
        <button class="btn btn-default" ng-click="ctrl.uncheckable = !ctrl.uncheckable">
            Toggle uncheckable
        </button>
    </div>
</div>
