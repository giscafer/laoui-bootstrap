# DatePicker 日期选择框

输入或选择日期的控件。

## 何时使用

当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。

## 如何使用

将指令`< ui-datepicker >`添加到任意元素，绑定日期选择组件。在`format`属性中设置日期显示格式。

在`view`属性中设置选择器的功能类型，共有5中类型：

- date: 日期选择器
- datetime: 日期时间选择器
- time: 时间选择器
- year: 年份选择
- month: 月份选择


## 属性

| 成员 	| 默认值	| 描述	| 
| -------| ----| ---| 
| ng-model	| `undefined`	| 绑定对象	| 
| view	| `undefined`	| 选择器模式，可选值: `date`, `datetime`, `time`, `year`, `month`	| 
| format		| `undefined`		| 显示格式，如: `yyyy-MM-dd HH:mm:ss`	| 
| min-date		| `undefined`		| 最小可选日期	| 
| max-date		| `undefined`		| 最大可选日期	| 
| disabled-date(date)		| `undefined`		| date为时间戳	| 
| auto-close	| 	`true`		| 当view为date, year, month时是否选择后自动关闭	| 

## 代码演示

### 日期选择器 5 中类型

<div class="bs-example">
    <p>选择日期: <em>{{ctrl.date}}</em></p>
<div class="row">
    <div class="col-md-4">
        <ui-datepicker ng-model="ctrl.date" view="date" format="yyyy-MM-dd" />
    </div>
</div>
<br />
<p>选择日期时间: <em>{{ctrl.datetime}}</em></p>
<div class="row">
    <div class="col-md-4">
    <ui-datepicker ng-model="ctrl.datetime" view="datetime" format="yyyy-MM-dd HH:mm:ss" />
    </div>
</div>
<br />
<p>选择时间: <em>{{ctrl.time}}</em></p>
<div class="row">
    <div class="col-md-4">
      <ui-datepicker ng-model="ctrl.time" view="time" format="HH:mm:ss" />
    </div>
</div>
<br />
<p>选择年份: <em>{{ctrl.year}}</em></p>
<div class="row">
    <div class="col-md-4">
      <ui-datepicker ng-model="ctrl.year" view="year" format="yyyy" />
    </div>
</div>
<br />
<p>选择月份: <em>{{ctrl.month}}</em></p>
<div class="row">
    <div class="col-md-4">
       <ui-datepicker ng-model="ctrl.month" view="month" format="MM" />
    </div>
</div>
</div>
<ui-clipboard clipboard-target="clipboard1"></ui-clipboard>
<div class="highlight" id="clipboard1">
<pre>
<p>选择日期: <em>{{ctrl.date}}</em></p>
<div class="row">
    <div class="col-md-4">
        <ui-datepicker ng-model="ctrl.date" view="date" format="yyyy-MM-dd" />
    </div>
</div>
<br />
<p>选择日期时间: <em>{{ctrl.datetime}}</em></p>
<div class="row">
    <div class="col-md-4">
    <ui-datepicker ng-model="ctrl.datetime" view="datetime" format="yyyy-MM-dd HH:mm:ss" />
    </div>
</div>
<br />
<p>选择时间: <em>{{ctrl.time}}</em></p>
<div class="row">
    <div class="col-md-4">
      <ui-datepicker ng-model="ctrl.time" view="time" format="HH:mm:ss" />
    </div>
</div>
<br />
<p>选择年份: <em>{{ctrl.year}}</em></p>
<div class="row">
    <div class="col-md-4">
      <ui-datepicker ng-model="ctrl.year" view="year" format="yyyy" />
    </div>
</div>
<br />
<p>选择月份: <em>{{ctrl.month}}</em></p>
<div class="row">
    <div class="col-md-4">
       <ui-datepicker ng-model="ctrl.month" view="month" format="MM" />
    </div>
</div>
</pre>
</div>

### 禁止选择特定日期

设置`disabled-date(date)`属性，设置自定义的方法对指定的日期进行过滤，如果方法的返回值为`true`时日期将被禁用。

参数`date`格式为时间戳

 <div class="bs-example">
 <div class="row">
    <div class="col-md-4">
       <ui-datepicker ng-model="ctrl.datetime" view="datetime" format="yyyy-MM-dd HH:mm:ss" disabled-date="ctrl.disabled(date)"/>
    </div>
</div>
 </div>
 <ui-clipboard clipboard-target="clipboard2"></ui-clipboard>
<div class="highlight" id="clipboard2">
<pre>
<div class="row">
    <div class="col-md-4">
       <ui-datepicker ng-model="ctrl.datetime" view="datetime" format="yyyy-MM-dd HH:mm:ss" disabled-date="ctrl.disabled(date)"/>
    </div>
</div>
</pre>
</div>


### 此外，提供 `< date-picker >`指令，可用来创建日期面板

#### 日历面板

<div class="bs-example">
 <div class="row">
    <div class="col-md-4">
       <date-picker ng-model="ctrl.date" view="date" format="yyyy-MM-dd" />
    </div>
</div>
 </div>
 <ui-clipboard clipboard-target="clipboard4"></ui-clipboard>
<div class="highlight" id="clipboard4">
<pre>
<div class="row">
    <div class="col-md-4">
       <date-picker ng-model="ctrl.date" view="date" format="yyyy-MM-dd" />
    </div>
</div>
</pre>
</div>

#### 月份面板

<div class="bs-example">
 <div class="row">
    <div class="col-md-4">
       <date-picker ng-model="ctrl.date" view="month" format="MM"/>
    </div>
</div>
 </div>
 <ui-clipboard clipboard-target="clipboard5"></ui-clipboard>
<div class="highlight" id="clipboard5">
<pre>
<div class="row">
    <div class="col-md-4">
       <date-picker ng-model="ctrl.date" view="month" format="MM"/>
    </div>
</div>
</pre>
</div>