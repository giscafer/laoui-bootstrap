Alert 警告信息组件
---

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
export default class AlertCtrl {
  constructor($scope, $location, $timeout) {
    "ngInject";
    $scope.alerts = [
        { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
        { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
      ];

      $scope.addAlert = function() {
        $scope.alerts.push({msg: 'Another alert!'});
      };

      $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
      };
  }
}
</pre>
</ui-tab>
<ui-tab>
<ui-tab-heading>JSON</ui-tab-heading>
<pre>
	var data = [{
    "link": "",
    "name": "容器组件",
    "icon": "appstore",
    "children": [{
        "link": "#/components/panel",
        "active": true,
        "name": "面板 - Panel",
        "icon": "appstore"
    }, {
        "link": "#/components/tabs/1",
        "name": "选项卡 - Tab",
        "icon": "caret-right"
    }, {
        "link": "#/components/accordion",
        "name": "手风琴 - Accordion",
        "icon": "caret-right"
    }, {
        "link": "#/components/modal",
        "name": "模态框 - Modal",
        "icon": "caret-right"
    }, {
        "link": "#/components/dropdown",
        "name": "下拉菜单 - Dropdown",
        "icon": "caret-right"
    }]
}, {
    "link": "",
    "name": "表单组件",
    "icon": "check-square-o",
    "children": [{
        "link": "#/components/form-validate",
        "name": "表单验证 - Form Validate",
        "icon": "caret-right"
    }, {
        "link": "#/components/select",
        "name": "下拉框 - Select",
        "icon": "caret-right"
    }, {
        "link": "#/components/checkbox",
        "name": "多选框 - Checkbox",
        "icon": "caret-right"
    }, {
        "link": "#/components/radio",
        "name": "单选框 - Radio",
        "icon": "caret-right"
    }, {
        "link": "#/components/switch",
        "name": "开关 - Switch",
        "icon": "caret-right"
    }, {
        "link": "#/components/datepicker",
        "name": "日期选择 - Datepicker",
        "icon": "caret-right"
    }, {
        "link": "#/components/typeahead",
        "name": "自动完成 - Typeahead",
        "icon": "caret-right"
    }, {
        "link": "#/components/wysiwyg",
        "name": "编辑器 - WYSIWYG",
        "icon": "caret-right"
    }, {
        "link": "#/components/inline-edit",
        "name": "行内编辑 - Inline Edit",
        "icon": "caret-right"
    }, {
        "link": "#/components/slider",
        "name": "滑动条 - Slider",
        "icon": "caret-right"
    }]
}, {
    "link": "",
    "name": "数据组件",
    "icon": "setting",
    "children": [{
        "link": "#/components/table",
        "name": "表格 - Table",
        "icon": "caret-right"
    }, {
        "link": "#/components/tree",
        "name": "树 - Tree",
        "icon": "caret-right"
    }, {
        "link": "#/components/navigation",
        "name": "多级导航 - Navigation",
        "icon": "caret-right"
    }]
}, {
    "link": "",
    "name": "分页组件",
    "icon": "setting",
    "children": [{
        "link": "#/components/pagination",
        "name": "分页 - Pagination",
        "icon": "caret-right"
    }, {
        "link": "#/components/pager",
        "name": "翻页 - Pager",
        "icon": "caret-right"
    }]
}, {
    "link": "",
    "name": "提示、警告组件",
    "icon": "tag-o",
    "children": [{
        "link": "#/components/tooltip",
        "name": "提示 - Tooltip",
        "icon": "caret-right"
    }, {
        "link": "#/components/popover",
        "name": "弹出框 - Popover",
        "icon": "caret-right"
    }, {
        "link": "#/components/notification",
        "name": "通知消息 - Notification",
        "icon": "caret-right"
    }, {
        "link": "#/components/alert",
        "name": "弹出对话框 - Alert",
        "icon": "caret-right"
    }]
}, {
    "link": "",
    "name": "媒体组件",
    "icon": "setting",
    "children": [{
        "link": "#/components/carousel",
        "name": "幻灯片 - Carousel",
        "icon": "caret-right"
    }, {
        "link": "#/components/imghvr",
        "name": "图片悬浮提示 - Imghvr",
        "icon": "caret-right"
    }]
}, {
    "link": "",
    "name": "图表组件",
    "icon": "line-chart",
    "children": [{
        "link": "#/components/chart/info",
        "name": "图表 - Chart",
        "icon": "caret-right"
    }]
}, {
    "link": "",
    "name": "其它组件",
    "icon": "file",
    "children": [{
        "link": "#/components/rating",
        "name": "投票 - Rating",
        "icon": "caret-right"
    }, {
        "link": "#/components/context-menu",
        "name": "右键菜单 - Conext Menu",
        "icon": "caret-right"
    }, {
        "link": "#/components/progress",
        "name": "进度条 - Progress",
        "icon": "caret-right"
    }, {
        "link": "#/components/loading",
        "name": "加载图标 - Loading",
        "icon": "caret-right"
    }]
}]
export default data;
</pre>
</ui-tab>
</ui-tabset>
</div>
</div>

<!-- 
<br>
<ui-navigation theme="dark" links="ctrl.menus" style="width:240px"></ui-navigation>
<br>
<ui-navigation mode="horizontal" links="ctrl.menus" style="width:240px"></ui-navigation> -->

