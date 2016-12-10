<style>
  
  #tabledemo {
    background-color: #fff
  }
  
  .table-demo-wrapper {
    position: fixed;
  }
  
  .table-demo-wrapper p {
    margin-left: 20px;
    font-size: 2em;
  }
  
  .table-demo-wrapper a {
    cursor: pointer;
    color: #0000FF;
    line-height: 2rem;
  }
  
  .table-demo-ul {
    float: left;
    height: 700px;
    width: 300px;
    overflow-y: auto;
  }
  
  .table-demo-display {
    min-height: 750px;
    margin-left: 400px;
  }
</style>
<div class="row">
  <div class="table-demo-wrapper">
    <p> uiTable Demos</p>
    <div class="table-demo-ul">
      <ul>
        <li>Basic
          <ul>
            <li><a ui-sref=".basic">Basic</a></li>
            <li><a href="demos/sort.html">Sorting</a></li>
            <li><a href="demos/tall.html">Tall Rows</a></li>
            <li><a href="demos/paging.html">Paging</a></li>
            <li><a href="demos/virtual-paging.html">Virtual Paging</a></li>
            <li><a href="demos/scroll.html">Horz / Vert Scrolling</a></li>
            <li><a href="demos/filters.html">Filters</a></li>
            <li><a href="demos/tabs.html">Using with Tabs</a></li>
            <li><a href="demos/inline-editing.html">Inline Editing</a></li>
            <li><a href="demos/updating.html">External Data Changes</a></li>
            <li><a href="demos/empty.html">Loading / Clearing Data</a></li>
            <li><a href="demos/slow.html">Slow AJAX</a></li>
          </ul>
        </li>
        <li>Templates
          <ul>
            <li><a href="demos/templates.html">Column / Header Templates</a></li>
            <li><a href="demos/expressive.html">Expressive Columns</a></li>
            <li><a ui-sref=".action-links">Action Links</a></li>
            <li><a href="demos/cell-templates.html">Cell Templates</a></li>
          </ul>
        </li>
        <li>Selection
          <ul>
            <li><a href="demos/checkboxes.html">Checkbox Selection</a></li>
            <li><a href="demos/single-select.html">Single Click Selection</a></li>
            <li><a href="demos/multi-select.html">Multi Click Selection</a></li>
          </ul>
        </li>
        <li>Width Options
          <ul>
            <li><a href="demos/greed.html">Greedy Column Widths</a></li>
            <li><a href="demos/force.html">Force Fill Widths</a></li>
          </ul>
        </li>
        <li>Grouping
          <ul>
            <li><a href="demos/pins.html">Column Pinning</a></li>
            <li><a href="demos/tree.html">Tree</a></li>
            <li><a href="demos/grouping.html">Row Grouping</a></li>
          </ul>
        </li>
        <li>Performance
          <ul>
            <li><a href="demos/virtual.html">100k Rows</a></li>
            <li><a href="demos/perf.html">10 Grids on One Page</a></li>
            <li><a href="demos/perf-horzscroll.html">Horz Scrolling and Full Screen</a></li>
          </ul>
        </li>
        <li>Plugins
          <ul>
            <li><a href="demos/tooltip.html">Tooltips on Cell Content</a></li>
            <li><a href="demos/columnadd.html">Column Add/Remove</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <div class="table-demo-display">
    <div ui-view=""></div>
  </div>
</div>