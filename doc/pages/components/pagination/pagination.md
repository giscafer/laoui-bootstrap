A lightweight pagination directive that is focused on ... providing pagination & will take care of visualising a pagination bar and enable / disable buttons correctly!

### ui-pagination settings

* `boundary-links`
  <small class="badge">C</small>
  _(Default: `false`)_ -
  Whether to display First / Last buttons.

* `boundary-link-numbers`
  <small class="badge">$</small>
  <small class="badge">C</small>
  _(Default: `false`)_ -
  Whether to always display the first and last page numbers. If `max-size` is smaller than the number of pages, then the  first and last page numbers are still shown with ellipses in-between as necessary. NOTE: `max-size` refers to the center of the range. This option may add up to 2 more numbers on each side of the displayed range for the end value and what would be an ellipsis but is replaced by a number because it is sequential.

* `direction-links`
  <small class="badge">$</small>
  <small class="badge">C</small>
  _(Default: `true`)_ -
  Whether to display Previous / Next buttons.

* `first-text`
  <small class="badge">C</small>
  _(Default: `First`)_ -
  Text for First button.

* `force-ellipses`
  <small class="badge">$</small>
  <small class="badge">C</small>
  _(Default: `false`)_ -
  Also displays ellipses when `rotate` is true and `max-size` is smaller than the number of pages.

* `items-per-page`
  <small class="badge">$</small>
  <small class="badge">C</small>
  <i class="glyphicon glyphicon-eye-open"></i>
  _(Default: `10`)_ -
  Maximum number of items per page. A value less than one indicates all items on one page.

* `last-text`
  <small class="badge">C</small>
  _(Default: `Last`)_ -
  Text for Last button.

* `max-size`
  <small class="badge">$</small>
  <i class="glyphicon glyphicon-eye-open"></i>
  _(Default: `null`)_ -
  Limit number for pagination size.

* `next-text`
  <small class="badge">C</small>
  _(Default: `Next`)_ -
  Text for Next button.

* `ng-change`
  <small class="badge">$</small> -
  This can be used to call a function whenever the page changes.

* `ng-disabled`
  <small class="badge">$</small>
  <i class="glyphicon glyphicon-eye-open"></i>
  _(Default: `false`)_ -
  Used to disable the pagination component.

* `ng-model`
  <small class="badge">$</small>
  <i class="glyphicon glyphicon-eye-open"></i> -
  Current page number. First page is 1.

* `num-pages`
  <small class="badge">$</small>
  <small class="badge">readonly</small>
  _(Default: `angular.noop`)_ -
  An optional expression assigned the total number of pages to display.

* `page-label`
  _(Default: `angular.identity`)_ -
  An optional expression to override the page label based on passing the current page indexes. Supports page number with `$page` in the template.

* `previous-text`
  <small class="badge">C</small>
  _(Default: `Previous`)_ -
  Text for Previous button.

* `rotate`
  <small class="badge">$</small>
  <small class="badge">C</small>
  _(Default: `true`)_ -
  Whether to keep current page in the middle of the visible ones.

* `template-url`
  _(Default: `../../template/pagination/pagination.html`)_ -
  Override the template for the component with a custom provided template

* `total-items`
  <small class="badge">$</small>
  <i class="glyphicon glyphicon-eye-open"></i> -
  Total number of items in all pages.


## 代码演示

<div class="not-markdown">
    <h4>Default</h4>
    <ul ui-pagination total-items="totalItems" ng-model="currentPage" ng-change="pageChanged()"></ul>
    <ul ui-pagination boundary-links="true" total-items="totalItems" ng-model="currentPage" class="pagination-sm" previous-text="&lsaquo;" next-text="&rsaquo;" first-text="&laquo;" last-text="&raquo;"></ul>
    <ul ui-pagination direction-links="false" boundary-links="true" total-items="totalItems" ng-model="currentPage"></ul>
    <ul ui-pagination direction-links="false" total-items="totalItems" ng-model="currentPage" num-pages="smallnumPages"></ul>
    <pre>The selected page no: {{currentPage}}</pre>
    <button type="button" class="btn btn-info" ng-click="setPage(3)">Set current page to: 3</button>

    <hr />
    <h4>Limit the maximum visible buttons</h4>
    <h6><code>rotate</code> defaulted to <code>true</code>:</h6>
    <ul ui-pagination total-items="bigTotalItems" ng-model="bigCurrentPage" max-size="maxSize" class="pagination-sm" boundary-links="true" num-pages="numPages"></ul>
    <h6><code>rotate</code> defaulted to <code>true</code> and <code>force-ellipses</code> set to <code>true</code>:</h6>
    <ul ui-pagination total-items="bigTotalItems" ng-model="bigCurrentPage" max-size="maxSize" class="pagination-sm" boundary-links="true" force-ellipses="true"></ul>
    <h6><code>rotate</code> set to <code>false</code>:</h6>
    <ul ui-pagination total-items="bigTotalItems" ng-model="bigCurrentPage" max-size="maxSize" class="pagination-sm" boundary-links="true" rotate="false"></ul>
    <h6><code>boundary-link-numbers</code> set to <code>true</code> and <code>rotate</code> defaulted to <code>true</code>:</h6>
    <ul ui-pagination total-items="bigTotalItems" ng-model="bigCurrentPage" max-size="maxSize" class="pagination-sm" boundary-link-numbers="true"></ul>
    <h6><code>boundary-link-numbers</code> set to <code>true</code> and <code>rotate</code> set to <code>false</code>:</h6>
    <ul ui-pagination total-items="bigTotalItems" ng-model="bigCurrentPage" max-size="maxSize" class="pagination-sm" boundary-link-numbers="true" rotate="false"></ul>
    <pre>Page: {{bigCurrentPage}} / {{numPages}}</pre>
</div>
