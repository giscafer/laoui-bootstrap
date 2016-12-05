# Alert警告提示

警告提示，展现需要关注的信息。

## 何时使用

 - 当某个页面需要向用户显示警告的信息时。
 - 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

## 代码演示

### 基本

最简单的用法，适用于简短的警告提示。

<div class="bs-example">
   <ui-alert message="ctrl.success" type="success" ></ui-alert>
</div>
<ui-clipboard clipboard-target="clipboard3"></ui-clipboard>
<div class="highlight" id="clipboard3">
<pre>
    <ui-alert message="ctrl.success" type="success" ></ui-alert>
</pre>
</div>

### 四种样式

共有四种样式 `success`、`info`、`warning`、`error`。

<div class="bs-example">
   <ui-alert message="ctrl.success" type="success" ></ui-alert>
   <ui-alert message="ctrl.info" type="info" ></ui-alert>
   <ui-alert message="ctrl.warning" type="warning" ></ui-alert>
   <ui-alert message="ctrl.error" type="error" ></ui-alert>
</div>
<ui-clipboard clipboard-target="clipboard31"></ui-clipboard>
<div class="highlight" id="clipboard31">
<pre>
    <ui-alert message="ctrl.success" type="success" ></ui-alert>
   <ui-alert message="ctrl.info" type="info" ></ui-alert>
   <ui-alert message="ctrl.warning" type="warning" ></ui-alert>
   <ui-alert message="ctrl.error" type="error" ></ui-alert>
</pre>
</div>

### 可关闭的警告提示

显示关闭按钮，点击可关闭警告提示。

<div class="bs-example">
<ui-alert type="error" closing='ctrl.closing' close="ctrl.close()" message="ctrl.message" description="ctrl.description"></ui-alert>
<ui-alert type="error" closing='ctrl.closing2' close="ctrl.close2()" message="ctrl.message" ></ui-alert>
</div>
<ui-clipboard clipboard-target="clipboard13"></ui-clipboard>
<div class="highlight" id="clipboard13">
<pre>
<ui-alert type="error" closing='ctrl.closing' close="ctrl.close()" message="ctrl.message" description="ctrl.description"></ui-alert>
<ui-alert type="error" closing='ctrl.closing3' close="ctrl.close3()" message="ctrl.message" ></ui-alert>
</pre>
</div>

### 含有辅助性文字介绍

含有辅助性文字介绍的警告提示。

<div class="bs-example">
   <ui-alert message="ctrl.success" type="success" description="ctrl.description"></ui-alert>
   <ui-alert message="ctrl.info" type="info" description="ctrl.description"></ui-alert>
   <ui-alert message="ctrl.warning" type="warning" description="ctrl.description"></ui-alert>
   <ui-alert message="ctrl.error" type="error" description="ctrl.description"></ui-alert>
</div>
<ui-clipboard clipboard-target="clipboard23"></ui-clipboard>
<div class="highlight" id="clipboard23">
<pre>
   <ui-alert message="ctrl.success" type="success" description="ctrl.description"></ui-alert>
   <ui-alert message="ctrl.info" type="info" description="ctrl.description"></ui-alert>
   <ui-alert message="ctrl.warning" type="warning" description="ctrl.description"></ui-alert>
   <ui-alert message="ctrl.error" type="error" description="ctrl.description"></ui-alert>
</pre>
</div>

### 图标

可口的图标让信息类型更加醒目。

<div class="bs-example">
<ui-alert type="error" closing='ctrl.closing' showicon close="ctrl.close()" message="ctrl.message" description="ctrl.description"></ui-alert>
<br>
<ui-alert type="info" closing='ctrl.closing' showicon close="ctrl.close()" message="ctrl.message" description="ctrl.description" closetext="关闭"></ui-alert>
<br>
<ui-alert type="success" closing='ctrl.closing' showicon close="ctrl.close()" message="ctrl.message" description="ctrl.description"></ui-alert>
<br>
<ui-alert type="warning" closing='ctrl.closing' showicon close="ctrl.close()" message="ctrl.message" description="ctrl.description" closetext="关闭"></ui-alert>
<br>
<ui-alert type="info" showicon banner closable message="ctrl.banner" closing='ctrl.closing2' close="ctrl.close2()"></ui-alert>
<br>
<ui-alert type="success" showicon message="ctrl.notabanner"></ui-alert>
</div>
<ui-clipboard clipboard-target="clipboard1"></ui-clipboard>
<div class="highlight" id="clipboard1">
<pre>
<ui-alert type="error" closing='ctrl.closing' showicon close="ctrl.close()" message="ctrl.message" description="ctrl.description"></ui-alert>
<br>
<ui-alert type="info" closing='ctrl.closing' showicon close="ctrl.close()" message="ctrl.message" description="ctrl.description" closetext="关闭"></ui-alert>
<br>
<ui-alert type="success" closing='ctrl.closing' showicon close="ctrl.close()" message="ctrl.message" description="ctrl.description"></ui-alert>
<br>
<ui-alert type="warning" closing='ctrl.closing' showicon close="ctrl.close()" message="ctrl.message" description="ctrl.description" closetext="关闭"></ui-alert>
<br>
<ui-alert type="info" showicon banner closable message="ctrl.banner" closing='ctrl.closing2' close="ctrl.close2()"></ui-alert>
<br>
<ui-alert type="success" showicon message="ctrl.notabanner"></ui-alert>
</pre>
</div>

### 顶部公告

用作顶部公告时，默认有图标，添加`banner`属性，并有特殊样式。

<div class="bs-example">
<ui-alert type="info" showicon banner closable message="ctrl.banner" closing='ctrl.closing2' close="ctrl.close2()"></ui-alert>
<br>
<ui-alert type="success" showicon message="ctrl.notabanner"></ui-alert>
</div>
<ui-clipboard clipboard-target="clipboard15"></ui-clipboard>
<div class="highlight" id="clipboard15">
<pre>
<ui-alert type="info" showicon banner closable message="ctrl.banner" closing='ctrl.closing2' close="ctrl.close2()"></ui-alert>
<br>
<ui-alert type="success" showicon message="ctrl.notabanner"></ui-alert>
</pre>
</div>

### 以上演示demo的Controller 代码

<div class="bs-example">
    以上demo演示的Controller 代码
</div>
<ui-clipboard clipboard-target="clipboard125"></ui-clipboard>
<div class="highlight" id="clipboard125">
<pre>
export default class AlertCtrl {
    constructor($scope, $location, $timeout) {
        "ngInject";
        this._$scope=$scope;
        this.text = "home.ctrl.js";
        this.message = "提示";
        this.description = "传入的值为fontawesome的图标名称";
        this.banner = "这是一个banner！！";
        this.notabanner = "这不是一个banner！！";
        this.success="Success Text"
        this.error="Error Text"
        this.info="Info Text"
        this.warning="Warning Text"
    }
    close(e) {
        this.closing = true;
        console.info('click close', e)
    }
    close2(e) {
        this.closing2 = true;
        console.info('click close', e)
    }
}

</pre>
</div>

## Bootstrap样式书写简单的警示信息

可以使用bootstrap的组件`alert`样式书写警示信息。

详情：<a href="http://v3.bootcss.com/components/#alerts" target="_blank">警告框</a>



