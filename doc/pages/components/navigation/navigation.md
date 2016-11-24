# Navigation 导航菜单

为页面和功能提供导航的菜单列表。

## 何时使用

导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。

## 如何使用

<p class="lead"><code>&lt;ui-navigation&gt;</code>标签声明组件，菜单数组数据通过<code>links</code>属性指定</p>

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
</ui-tabset>
</div>
</div>
</div>

### 横向导航

<code>mode="horizontal"</code>可以生产横向的导航条

<div class="bs-example">
<div class="row" style="margin-top:20px;margin-bottom:30px">
<ui-navigation links="ctrl.data2" mode="horizontal"></ui-navigation>
</div>
<div class="row">
<ui-tabset  style="max-height:500px;overflow:auto">
<ui-tab>
<ui-tab-heading>HTML</ui-tab-heading>

<pre>
  <ui-navigation links="ctrl.data2"></ui-navigation>
</pre>

</ui-tab>
<ui-tab>
<ui-tab-heading>Controller</ui-tab-heading>

<pre>
import data2 from './data2.js';
export default class NavigationCtrl{
    constructor($scope,$location,$timeout){
        "ngInject";
        this.data2=data2;
    }
}
</pre>
</ui-tab>
<ui-tab>
<ui-tab-heading>JSON</ui-tab-heading>
<pre>
var data = [{
    "link": "",
    "name": "首页",
    "icon": "cube"
}, {
    "link": "",
    "name": "产品",
    "icon": "columns ",
    "children": [{
        "link": "#/components/button",
        "active": true,
        "name": "Button 按钮",
        "icon": ""
    }, {
        "link": "#/components/icon",
        "name": "Icon 图标",
        "icon": ""
    }, {
        "link": "#/components/panel",
        "name": "Panel 面板",
        "icon": ""
    }]
}, {
    "link": "",
    "name": "服务",
    "icon": "navicon",
    "children": [{
        "link": "#/components/navigation",
        "name": "Navigation",
        "icon": ""
    }]
}, {
    "link": "",
    "name": "新闻",
    "icon": "edit",
    "children": [{
        "link": "#",
        "active": true,
        "name": "新闻发布1",
        "icon": ""
    }, {
        "link": "#",
        "name": "新闻发布2",
        "icon": ""
    }]
}, {
    "link": "",
    "name": "其他",
    "icon": "windows",
    "children": [{
        "link": "",
        "name": "二级菜单",
        "icon": "info-circle",
        "children": [{
            "link": "#",
            "name": "菜单一",
            "icon": ""
        },{
            "link": "#",
            "name": "菜单二",
            "icon": ""
        },{
            "link": "#",
            "name": "菜单三",
            "icon": ""
        }]
    }]
}];
export default data;


</pre>
</ui-tab>
</ui-tabset>
</div>
</div>
</div>