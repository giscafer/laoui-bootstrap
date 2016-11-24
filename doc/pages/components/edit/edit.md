
# Editor 编辑器

<p class="lead"><code>&lt;ui-editor /&gt;</code>创建一个markdown样式的<code>Wysiwyg</code>编辑器。</p>


## 实例

<p class="lead">简单实例</p>
<div class="bs-example">
	<ui-editor ng-model="ctrl.htmlVariable" style="height:540px"></ui-editor> 
</div>
<ui-clipboard></ui-clipboard>
<div class="highlight">
	<pre>
		<ui-editor ng-model="ctrl.htmlVariable" style="height:540px"></ui-editor> 
	</pre>
</div>
<p>输入文本转HTML结果：</p>
<div>{{ctrl.htmlVariable}}</div>
