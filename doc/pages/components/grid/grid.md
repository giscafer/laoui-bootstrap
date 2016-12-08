# Grid 栅格

<p class="lead"><code>Grid</code>组件分为<code>Row</code>和<code>Col</code>两部分,也就是行和列，它们组合成 <code>24</code> 栅格系统。</p>

设计参考<a href="https://ant.design/components/grid/" target="_blank">ant-desigh 栅格</a>

## 设计理念

<div class="grid-demo">
<div class="lau-row demo-row">
  <div class="lau-col-24 layout demo-col-1">
    100%
  </div>
</div>
<div class="lau-row demo-row">
  <div class="lau-col-6 layout demo-col-2">
    25%
  </div>
  <div class="lau-col-6 layout demo-col-3">
    25%
  </div>
  <div class="lau-col-6 layout demo-col-2">
    25%
  </div>
  <div class="lau-col-6 layout demo-col-3">
    25%
  </div>
</div>
<div class="lau-row demo-row">
  <div class="lau-col-8 layout demo-col-4">
    33.33%
  </div>
  <div class="lau-col-8 layout demo-col-5">
    33.33%
  </div>
  <div class="lau-col-8 layout demo-col-4">
    33.33%
  </div>
</div>
<div class="lau-row demo-row">
  <div class="lau-col-12 layout demo-col-1">
    50%
  </div>
  <div class="lau-col-12 layout demo-col-3">
    50%
  </div>
</div>
<div class="lau-row demo-row">
  <div class="lau-col-16 layout demo-col-4">
    66.66%
  </div>
  <div class="lau-col-8 layout demo-col-5">
    33.33%
  </div>
</div>
</div>

在多数业务情况下，需要在设计区域内解决大量信息收纳的问题，因此在 12 栅格系统的基础上，我们将整个设计建议区域按照 24 等分的原则进行划分。

划分之后的信息区块我们称之为『盒子』。建议横向排列的盒子数量最多四个，最少一个。『盒子』在整个屏幕上占比见上图。设计部分基于盒子的单位定制盒子内部的排版规则，以保证视觉层面的舒适感。

## 概述

布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：

- 通过`row`在水平方向建立一组`column`（简写col）
- 你的内容应当放置于`col`内，并且，只有`col`可以作为`row`的直接元素
- 栅格系统中的列是指1到24的值来表示其跨越的范围。例如，三个等宽的列可以使用`.col-8`来创建
- 如果一个`row`中的`col`总和超过 24，那么多余的`col`会作为一个整体另起一行排列

## Flex 布局

我们的栅格化系统支持 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 order 来定义元素的排列顺序。

Flex 布局是基于 24 栅格来定义每一个『盒子』的宽度，但排版则不拘泥于栅格。


## 属性

### Row

| 成员       | 说明             | 类型               | 默认值       |
|-----------|-----------------|--------------------|-------------|
| gutter    | 栅格间隔   | number | 0        |
| type      | 布局模式，可选 `flex`，现代浏览器下有效 | string |         |
| align     | flex 布局下的垂直对齐方式：`top` `middle` `bottom`  | string | `top`      |
| justify   | flex 布局下的水平排列方式：`start` `end` `center` `space-around` `space-between`   | string | `start`        |

### Col

| 成员      | 说明             | 类型               | 默认值       |
|----------|-----------------|--------------------|-------------|
| span     | 栅格占位格数，为 0 时相当于 `display: none`   | number | -        |
| order    | 栅格顺序，`flex` 布局模式下有效   | number | 0        |
| offset   | 栅格左侧的间隔格数，间隔内不可以有栅格  | number | 0        |
| push     | 栅格向右移动格数   | number | 0        |
| pull     | 栅格向左移动格数   | number | 0        |
| xs       | `&lt;768px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number or object | - |
| sm       | `≥768px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number or object | - |
| md       | `≥992px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number or object | - |
| lg       | `≥1200px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number or object | - | 


## 实例 

从堆叠到水平排列。

使用单一的一组 `Row` 和 `Col` 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 `Row` 内。


<div class="bs-example">
  <ui-row>
    <ui-col className='layout' span="12">col-12</ui-col>
    <ui-col className='layout' span="12">col-12</ui-col>
  </ui-row>
  <ui-row>
    <ui-col className='layout' span="8">col-8</ui-col>
    <ui-col className='layout' span="8">col-8</ui-col>
    <ui-col className='layout' span="8">col-8</ui-col>
  </ui-row>
  <ui-row>
    <ui-col className='layout' span="6">col-6</ui-col>
    <ui-col className='layout' span="6">col-6</ui-col>
    <ui-col className='layout' span="6">col-6</ui-col>
    <ui-col className='layout' span="6">col-6</ui-col>
  </ui-row>
</div>
<div class="zero-clipboard"><span class="btn-clipboard"  data-clipboard-target="#grid">Copy</span></div>
<div class="highlight" id="grid">
<pre>
    <div>
    <ui-row>
      <ui-col className='layout' span="12">col-12</ui-col>
      <ui-col className='layout' span="12">col-12</ui-col>
    </ui-row>
    <ui-row>
      <ui-col className='layout' span="8">col-8</ui-col>
      <ui-col className='layout' span="8">col-8</ui-col>
      <ui-col className='layout' span="8">col-8</ui-col>
    </ui-row>
    <ui-row>
      <ui-col className='layout' span="6">col-6</ui-col>
      <ui-col className='layout' span="6">col-6</ui-col>
      <ui-col className='layout' span="6">col-6</ui-col>
      <ui-col className='layout' span="6">col-6</ui-col>
    </ui-row>
  </div>
</pre>
</div>

## Bootstrap栅格

 `Grid` 布局组件是<code>24</code>栅格系统，Bootstrap布局组件则为<code>12</code>栅格系统，
在适合的场景使用24或者12栅格，满足页面的要求效果。

