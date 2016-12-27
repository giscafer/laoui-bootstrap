# ui-grid 表格组件

集成`ui-grid v4.0.1`版本，使用参考官方文档http://ui-grid.info/

<div>
<br>
<button id='toggleGender' ng-click='toggleGender()' class="btn btn-success">Toggle Gender</button>
<div id="grid1" ui-grid="gridOptions1" class="grid"></div>

<br> You can set an initial sort state for the grid by defining the `sort` property on your column definitions. The `direction`
sub-property says which way to sort, and the `priority` says what order to sort the columns in (lower priority gets sorted
first).
<br>
<br>

<div id="grid2" ui-grid="gridOptions2" class="grid"></div>
</div>