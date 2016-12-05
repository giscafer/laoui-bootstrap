# Carousel 走马灯

旋转木马，一组轮播的区域。

## 何时使用

- 当有一组平级的内容。
- 当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。
- 常用于一组图片或卡片轮播。

## 如何使用


`Carousel`组件支持手机端，只需添加 `ngTouch`依赖模块

使用一个`< ui-carousel >`标签包含`< ui-slide >`在里面。


## 属性


| 成员       | 说明             | 类型               | 默认值       |
|-----------|-----------------|--------------------|-------------|
| active    |  将改slide作为当前活动页  | boolean |  -   |
| interval      | 自动循环播放间隔时间，大于0生效 | integer |    0     |
| no-pause     | 默认情况下鼠标悬停在图片上会停止播放，此属性可禁用改控制  | boolean | `false`   |
| no-transition   | 否要禁用幻灯片之间的过渡动画。设置 true 则禁用这个过渡动画 | boolean | `false`  |
| no-wrap   | 禁用幻灯片的循环 | boolean | `false`  |
| template-url  | 自定义模板路径 | string | -  |
| actual  | 绑定slide mode到slide scope作用域，在自定义template模板的时候可以使用 | string | `none`  |
| index  | slide的索引，必须是唯一的。 | string | `none`  |

## 代码演示

<div class="bs-example">  
  <div>
  <div style="height: 405px">
    <div ui-carousel active="ctrl.active" interval="ctrl.myInterval" no-wrap="ctrl.noWrapSlides">
      <div ui-slide ng-repeat="slide in ctrl.slides track by slide.id" index="slide.id">
        <img ng-src="{{slide.image}}" style="margin:auto;">
        <div class="carousel-caption">
          <h4>Slide {{slide.id}}</h4>
          <p>{{slide.text}}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6">
      <button type="button" class="btn btn-info" ng-click="ctrl.addSlide(1)">添加Slide</button>
      <button type="button" class="btn btn-info" ng-click="ctrl.randomize()">重新排序Slide</button>
      <div class="checkbox">
        <label>
          <input type="checkbox" ng-model="ctrl.noWrapSlides">
          禁用循环播放
        </label>
      </div>
    </div>
    <div class="col-md-6">
      Interval, in milliseconds: <input type="number" class="form-control" ng-model="ctrl.myInterval">
      <br /> 输入一个负数或0则无效，会停止自动播放
    </div>
  </div>
</div>
</div>
<ui-clipboard clipboard-target="clipboard3"></ui-clipboard>
<div class="highlight" id="clipboard3">
<pre>
<div>
  <div style="height: 405px">
    <div ui-carousel active="ctrl.active" interval="ctrl.myInterval" no-wrap="ctrl.noWrapSlides">
      <div ui-slide ng-repeat="slide in ctrl.slides track by slide.id" index="slide.id">
        <img ng-src="{{slide.image}}" style="margin:auto;">
        <div class="carousel-caption">
          <h4>Slide {{slide.id}}</h4>
          <p>{{slide.text}}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6">
      <button type="button" class="btn btn-info" ng-click="ctrl.addSlide(1)">添加Slide</button>
      <button type="button" class="btn btn-info" ng-click="ctrl.randomize()">重新排序Slide</button>
      <div class="checkbox">
        <label>
          <input type="checkbox" ng-model="ctrl.noWrapSlides">
          禁用循环
        </label>
      </div>
    </div>
    <div class="col-md-6">
      Interval, in milliseconds: <input type="number" class="form-control" ng-model="ctrl.myInterval">
      <br /> 输入一个负数或0则无效，会停止自动播放
    </div>
    </div>
  </div>
</div>
</pre>
</div>