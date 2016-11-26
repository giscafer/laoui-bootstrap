Carousel creates a carousel similar to bootstrap's image carousel.

The carousel also offers support for touchscreen devices in the form of swiping. To enable swiping, load the `ngTouch` module as a dependency.

Use a `<ui-carousel>` element with `<ui-slide>` elements inside it.

### ui-carousel settings

* `active`
  <i class="glyphicon glyphicon-eye-open"></i>
  _(Default: `Index of first slide`)_ -
  Index of current active slide.

* `interval`
  <small class="badge">$</small>
  <i class="glyphicon glyphicon-eye-open"></i>
  _(Default: `none`)_ -
  Sets an interval to cycle through the slides. You need a number bigger than 0 to make the interval work.

* `no-pause`
  <small class="badge">$</small>
  <i class="glyphicon glyphicon-eye-open"></i>
  _(Default: `false`)_ -
  The interval pauses on mouseover. Setting this to truthy, disables this pause.

* `no-transition`
  <small class="badge">$</small>
  <i class="glyphicon glyphicon-eye-open"></i>
  _(Default: `false`)_ -
  Whether to disable the transition animation between slides. Setting this to truthy, disables this transition.

* `no-wrap`
  <small class="badge">$</small>
  _(Default: `false`)_ -
  Disables the looping of slides. Setting `no-wrap` to an expression which evaluates to a truthy value will prevent looping.

* `template-url`
  _(Default: `../../template/carousel/carousel.html`)_ -
  Add the ability to override the template used on the component.

### ui-slide settings

* `actual`
  <small class="badge">$</small>
  <i class="glyphicon glyphicon-eye-open"></i>
  _(Default: `none`)_ -
  Use this attribute to bind the slide model (or any object of interest) onto the slide scope, which makes it available for customization in the carousel template.

* `index`
  <small class="badge">$</small>
  <i class="glyphicon glyphicon-eye-open"></i>
  _(Default: `none`)_ -
  The index of the slide. Must be unique.

* `template-url`
  _(Default: `../../template/carousel/slide.html`)_ -
  Add the ability to override the template used on the component.

<div>
  <div style="height: 405px">
    <div ui-carousel active="ctrl.active" interval="ctrl.myInterval" no-wrap="ctrl.noWrapSlides">
      <div ui-slide ng-repeat="slide in ctrl.slides track by slide.id" index="slide.id">
        <img ng-src="{{slide.image}}" style="margin:auto;">
        <div class="carousel-caption">
          <h4>Slide {{slide.id}}</h4>
          <p>{{slide.text}}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6">
      <button type="button" class="btn btn-info" ng-click="ctrl.addSlide(1)">Add Slide</button>
      <button type="button" class="btn btn-info" ng-click="ctrl.randomize()">Randomize slides</button>
      <div class="checkbox">
        <label>
          <input type="checkbox" ng-model="ctrl.noWrapSlides">
          Disable Slide Looping
        </label>
      </div>
    </div>
    <div class="col-md-6">
      Interval, in milliseconds: <input type="number" class="form-control" ng-model="ctrl.myInterval">
      <br />Enter a negative number or 0 to stop the interval.
    </div>
  </div>
</div>
