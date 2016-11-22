# Navigation 警告信息

<p class="lead"><code>ui-navigation</code>指令可以快速创建导航菜单</p>

<ui-navigation links="ctrl.data2" mode="horizontal" ></ui-navigation>

## 属性

| 成员       | 说明             | 类型               | 默认值       |
|-----------|-----------------|--------------------|-------------|
| mode    | 菜单类型，现在支持垂直、水平、和内嵌模式三种   | String: `vertical` `horizontal` `inline` | `vertical`       |
| theme      | 主题颜色 | String: `light` `dark`  |     `light`    |
| links     | 菜单数组  | Array |  -     |
| className     | 根节点样式  | string |  -     |

## 实例

默认导航样式，只需要将菜单数组传参给`links`属性即可

<div class="bs-example" style="background:#fff">
	<div class="row">
<div class="col-md-5">
<ui-navigation links="ctrl.menus" style="width:240px;margin:20px auto 0 auto"></ui-navigation>
</div>
<div class="col-md-7">
<ui-tabset  style="max-height:500px;overflow:auto">
<ui-tab>
<ui-tab-heading>HTML</ui-tab-heading>

<pre>
  <ui-navigation links="ctrl.menus" style="width:240px"></ui-navigation>
</pre>

</ui-tab>
<ui-tab>
<ui-tab-heading>Controller</ui-tab-heading>

<pre>
import menus from './components.js';
export default class NavigationCtrl{
    constructor($scope,$location,$timeout){
        "ngInject";
        this.menus=menus;
        console.info(this.menus);
    }
}
</pre>
</ui-tab>
<ui-tab>
<ui-tab-heading>JSON</ui-tab-heading>
<pre>
	var data = [{
    "link": "",
    "name": "General 基础组件",
    "icon": "cube",
    "children": [{
        "link": "#/components/button",
        "active": true,
        "name": "Button 按钮",
        "icon": ""
    }, {
        "link": "#/components/icon",
        "name": "Icon 图标",
        "icon": ""
    },{
        "link": "#/components/panel",
        "name": "Panel 面板",
        "icon": ""
    }]
},{
    "link": "",
    "name": "Layout 布局组件",
    "icon": "columns ",
    "children": [ {
        "link": "#/components/grid",
        "name": "Grid 栅格",
        "icon": " "
    }]
},{
    "link": "",
    "name": "Navigation 导航组件",
    "icon": "navicon",
    "children": [{
        "link": "#/components/navigation",
        "name": "导航 - Navigation",
        "icon": ""
    }]
}, {
    "link": "",
    "name": "Data Entry 数据输入",
    "icon": "edit",
    "children": [{
        "link": "#/components/edit",
        "active": true,
        "name": "Edit 编辑器/Wysiwyg",
        "icon": ""
    },{
        "link": "#/components/typeahead",
        "name": "自动完成 - Typeahead",
        "icon": ""
    }]
}, {
    "link": "",
    "name": "Data Display 数据展示",
    "icon": "windows",
    "children": []
}, {
    "link": "",
    "name": "Feedback 反馈提示",
    "icon": "info-circle",
    "children": [{
        "link": "#/components/alert",
        "name": "Alert - 警告提示",
        "icon": ""
    }]
}, {
    "link": "",
    "name": "Chart 图表组件",
    "icon": "bar-chart",
    "children": []
}, {
    "link": "",
    "name": "Other 其它组件",
    "icon": "tags ",
    "children": []
}];
export default data;

</pre>
</ui-tab>
</ui-tabset>
</div>
</div>
</div>

切换<code>dark</code>主题颜色

<div class="bs-example">
	<div class="row">
<div class="col-md-5">
<ui-navigation  theme="dark" links="ctrl.menus" style="width:240px;margin:20px auto 0 auto"></ui-navigation>
</div>
<div class="col-md-7">
<ui-tabset  style="max-height:500px;overflow:auto">
<ui-tab>
<ui-tab-heading>HTML</ui-tab-heading>

<pre>
  <ui-navigation theme="dark" links="ctrl.menus" style="width:240px"></ui-navigation>
</pre>

</ui-tab>
<ui-tab>
<!-- 
<br>
<ui-navigation theme="dark" links="ctrl.menus" style="width:240px"></ui-navigation>
<br>
<ui-navigation mode="horizontal" links="ctrl.menus" style="width:240px"></ui-navigation> -->

