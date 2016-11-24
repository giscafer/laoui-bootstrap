# Panel 面板

<p class="lead"><code>&lt;ui-panel /&gt;</code>指令是对bootstrap组件 panel 的封装</p>

## 指令

<p><code>ui-panel</code>生成一个`panel-body`</p>
<p><code>ui-panel-heading</code>生成一个panel-heading</p>

*heading 也可以作为ui-panel的属性，eg：<code>&lt;ui-panel heading="我是heading"&gt;&lt;/ui-panel&gt;</code>*

## 属性

| 成员       | 说明             | 类型               | 默认值       |
|-----------|-----------------|--------------------|-------------|
| type      | 指定panel样式类型：`不提供type属性`,`default`,`success`,`info`,`warning`,`danger` | string |   空  |
| heading     | panel标题，可以使用`ui-panel-heading`代替  |  |    |
| noborder   | 属性存在，则panel将没有border样式 | boolean |   无      |
| className   | css类样式，最终会添加到标签的class属性里，该属性为了提供用户自定义样式 | className |   无      |

## 实例

### 使用<code>ui-panel-heading</code>指令添加 panel-heading 

<div class="bs-example" style="background:#eee">
    <ui-panel>
        <ui-panel-heading>
            <h4>这是一个 <code>ui-panel-heading</code>指令,可以快速指定panel-heading</h4></ui-panel-heading>
        <div>
            此处<code>panel-body</code>内容
        </div>
    </ui-panel>
</div>
<div class="zero-clipboard"><span class="btn-clipboard">Copy</span></div>
<div class="highlight">
<pre class="html">
		<ui-panel>
			<ui-panel-heading><h4>这是一个 ui-panel-heading</h4></ui-panel-heading>
			<div>
				此处panel-body内容
			</div>
		</ui-panel>
</pre>
</div>

### 使用<code>type</code>属性控制 panel 样式

<div class="bs-example">
    <!-- panel-default -->
    <ui-panel type="default">
        <ui-panel-heading>这是一个<code>type="default"</code>的panel </ui-panel-heading>
    </ui-panel>
    <!-- panel-primary -->
    <ui-panel type="primary" noborder>
        <ui-panel-heading>这是一个<code>type="primary"</code>，带 <code>noborder</code>属性去掉 border 的panel </ui-panel-heading>
    </ui-panel>
    <!-- panel-success -->
    <ui-panel type="success">
        <ui-panel-heading>这是一个<code>type="success"</code>的panel </ui-panel-heading>
    </ui-panel>
    <!-- panel-info -->
    <ui-panel type="info">
        <ui-panel-heading>这是一个<code>type="info"</code>的panel </ui-panel-heading>
    </ui-panel>
    <!-- panel-warning -->
    <ui-panel type="warning">
        <ui-panel-heading>这是一个<code>type="warning"</code>的panel </ui-panel-heading>
    </ui-panel>
    <!-- panel-danger -->
    <ui-panel type="danger">
        <ui-panel-heading>这是一个<code>type="danger"</code>的panel </ui-panel-heading>
    </ui-panel>
</div>
<div class="zero-clipboard"><span class="btn-clipboard">Copy</span></div>
<div class="highlight">
<pre class="html">
	<!-- panel-default -->
	<ui-panel type="default">
	    <ui-panel-heading>这是一个<code>type="default"</code>的panel </ui-panel-heading>
	</ui-panel>
	<!-- panel-primary -->
	<ui-panel type="primary" noborder>
	    <ui-panel-heading>这是一个<code>type="primary"</code>，带 <code>noborder</code>属性去掉 border 的panel </ui-panel-heading>
	</ui-panel>
	<!-- panel-success -->
	<ui-panel type="success">
	    <ui-panel-heading>这是一个<code>type="success"</code>的panel </ui-panel-heading>
	</ui-panel>
	<!-- panel-info -->
	<ui-panel type="info">
	    <ui-panel-heading>这是一个<code>type="info"</code>的panel </ui-panel-heading>
	</ui-panel>
	<!-- panel-warning -->
	<ui-panel type="warning">
	    <ui-panel-heading>这是一个<code>type="warning"</code>的panel </ui-panel-heading>
	</ui-panel>
	<!-- panel-danger -->
	<ui-panel type="danger">
	    <ui-panel-heading>这是一个<code>type="danger"</code>的panel </ui-panel-heading>
	</ui-panel>
</pre>
</div>

### 使用原生 bootstrap 

<p class="lead"><code>ui-panel</code>指令是对 bootstrap 的 panel 组件的封装，所以，也可以使用原生的bootstrap样式实现一样的效果</p>
<div class="bs-example">
	<!-- Bootstrap 样式直接书写 -->
	<div class="panel panel-primary">
	    <div class="panel-heading">Bootstrap 样式直接书写</div>
	    <div class="panel-body">
	        <code>ui-panel</code>指令最终也是编译为Bootstrap样式，只是做了简化。所以是可以使用Bootstrap 样式直接书写达到一样的效果
	    </div>
	    <div class="panel-footer">Panel footer</div>
	</div>
</div>
<div class="zero-clipboard"><span class="btn-clipboard">Copy</span></div>
<div class="highlight">
<pre>
		<!-- Bootstrap 样式直接书写 -->
<div class="panel panel-primary">
    <div class="panel-heading">Bootstrap 样式直接书写</div>
    <div class="panel-body">
        <code>ui-panel</code>指令最终也是编译为Bootstrap样式，只是做了简化。所以是可以使用Bootstrap 样式直接书写达到一样的效果
    </div>
    <div class="panel-footer">Panel footer</div>
</div>

</pre>
</div>
