# Notification 通知提醒框

全局展示通知提醒信息。

## 何时使用

在系统右上角显示通知提醒信息。经常用于以下情况：

 * 较为复杂的通知内容。
 * 带有交互的通知，给出用户下一步的行动点。
 * 系统主动推送。

## 特点

* CSS3 动画支持
* 支持小尺寸弹窗.
* 5 种消息类型
* 可以在消息里内嵌 HTML 代码
* 可通过 provider 配置全局属性
* 可以在使用的时候自定义 Option 属性，定制弹窗
* 可以使用自定义模板 Template


## 使用说明

```

通过`provider`配置默认的属性

```javascript
angular.module('notificationTest', ['ui-notification'])
    .config(function(uiNotificationProvider) {
        uiNotificationProvider.setOptions({
            delay: 10000,
            startTop: 20,
            startRight: 10,
            verticalSpacing: 20,
            horizontalSpacing: 20,
            positionX: 'left',
            positionY: 'bottom'
        });
    });
...
```


当需要显示通知提醒框时，依赖注入`inject` 服务并调用即可，eg:

```javascript
angular.module('notificationTest').controller('notificationController', function($scope, uiNotification) {
 
  uiNotification.primary('Primary notification');
  // or simply..
  uiNotification('Primary notification');
  
  // Other Options
  // Success
  uiNotification.success('Success notification');
  
  // Message with custom type
  uiNotification({message: 'Warning notification'}, 'warning');

  // With Title
  uiNotification({message: 'Primary notification', title: 'Primary notification'});
  
  // Message with custom delay
  uiNotification.error({message: 'Error notification 1s', delay: 1000});
  
  // Embed HTML within your message.....
  uiNotification.success({message: 'Success notification<br>Some other <b>content</b><br><a href="https://github.com/alexcrack/angular-ui-notification">This is a link</a><br><img src="https://angularjs.org/img/AngularJS-small.png">', title: 'Html content'});

  // 更改通知提醒框的位置
  uiNotification.error({message: 'Error Bottom Right', positionY: 'bottom', positionX: 'right'});
  
  // Replace message
  uiNotification.error({message: 'Error notification 1s', replaceMessage: true});
}
```

## 服务

服务名称: "uiNotification"

Configuration provider（配置器）: "uiNotificationProvider"


## Options

Options 可以用来配置全局消息或者当前消息

可选属性列表:

|       Option      |      Possible values      |         默认值         |                               Description                                |
| ----------------- | ------------------------- | ------------------------------ | ------------------------------------------------------------------------ |
| delay             | Any integer value         | 5000                           | 通知停留时长,值为false时：不会自动关闭        |
| startTop          | Any integer value         | 10                             | 消息和浏览器之间的垂直间隔  |
| startRight        | Any integer value         | 10                             | 消息和浏览器之间的水平间隔 |
| verticalSpacing   | Any integer value         | 10                             | 消息之间的垂直间距                                       |
| horizontalSpacing | Any integer value         | 10                             | 消息之间的水平间距                                     |
| positionX         | "right", "left", "center" | "right"                        | 消息的水平位置                                    |
| positionY         | "top", "bottom"           | "top"                          | 消息的垂直位置                                            |
| replaceMessage    | true, false               | false                          | true则每个新消息都会替换旧消息      |
| templateUrl       | Any string                | "angular-ui-uiNotification.html" | 自定义模板路径 (URL)                                           |
| onClose           | Any function              | undefined                      | 当消息弹窗关闭时，触发关闭回调函数,回调接收元素作为其参数|
| closeOnClick      | true, false               | true                           | true: 允许点击关闭，false: 禁止点击关闭        |
| maxCount          | Any integer               | 0                              | 控制最大的消息数量`maxCount`，超过此数量，会关闭旧消息弹窗，设置为0时不限制 |

也可以传`scope`来改变作用域，默认为` $rootScope`

## 方法

#### uiNotification 方法

|              方法名称              |                   描述                   |
|----------------------------------------|-------------------------------------------------|
| uiNotification(), uiNotification.primary() | 一般消息 |
| uiNotification.info()                    | 通知消息    |
| uiNotification.success()                 | 成功消息 |
| uiNotification.warning()                 | 警告消息    |
| uiNotification.error()                   | 错误消息 |
| uiNotification.clearAll()                | 清除所有消息  |
| uiNotification.clear()                | 清除单个消息  |

#### uiNotification 服务配置options

|     Option属性     |       值类型               |           默认值          |                Description                                               |
| -------------- | ------------------------------------------------ | --------------------------------- | ------------------------------------------------------------------------------------------------------ |
| title          | *String*                                         | `""`                              | 	通知标题                       |
| message        | *String*                                         | `""`                              |  通知正文                  |
| templateUrl    | *String*                                         |  -  | 使用自定义消息模版           |
| delay          | *Int* (?)                                        | `5000` 或者全局配置 | 通知停留时长,值为false时：不会自动关闭 |
| type           | "primary", "info", "success", "warning", "error" | `"primary"`                       | Bootstrap flavoring                                                                                    |
| positionY      | "top", "bottom"                                  | `"top"`                           |   纵向方向                  |
| positionX      | "right", "left", "center"                        | `"right"                          |    横向方向               |
| replaceMessage | *Boolean*                                        | `false`                           | 使用“新的消息覆盖旧消息”的显示方式                             |
| closeOnClick      | true, false               | true               | true: 允许点击关闭，false: 禁止点击关闭          |
| onClose      | function   | `undefined`    | 关闭后触发回调函数   |

#### 返回值

uiNotification每个通知弹窗方法都会放回一个`promise`对象，可以通过以下方法来移除

|         方法名称         |                                                   描述                                                    |
|--------------------------------|------------------------------------------------------------------------------------------------------------------|
| notificationScope.kill(isHard) | 移除一个指定的弹窗（作用类似close方法）<br>isHard - false则使用fadeOut方式消失，如果为true则立即关闭通知 |



## 自定义模板

支持自定义模板，可以指定作用域`scope`

```html
<div class="ui-notification">
    <h3 ng-show="title" ng-bind-html="title"></h3>
    <div class="message" ng-bind-html="message"></div>
</div>
```



## 代码演示


<div class="row">
 <div class="col-md-4">
    <div class="example">
        <div class="container">
            <h3>通知提醒框类型</h3>
            <div class="btn-group-vertical">
                <button class="btn btn-primary" ng-click="primary()">Primary Notification</button>
                <button class="btn btn-danger" ng-click="error()">Error Notification</button>
                <button class="btn btn-success" ng-click="success()">Success Notification</button>
                <button class="btn btn-info" ng-click="info()">Information Notification</button>
                <button class="btn btn-warning" ng-click="warning()">Warning Notification</button>
            </div>
        </div>
        <div class="container">
            <h3>带标题 Title 的提醒框</h3>
            <div class="btn-group-vertical">
                <button class="btn btn-primary" ng-click="primaryTitle()">Primary Notification</button>
            </div>
        </div>
        <div class="container">
            <h3>自定义延迟时长</h3>
            <div class="btn-group-vertical">
                <button class="btn btn-danger" ng-click="errorTime()">Error Notification 1s</button>
                <button class="btn btn-danger" ng-click="errorNoTime()">Error Notification (no timeout)</button>
                <button class="btn btn-success" ng-click="successTime()">Success Notification 20s</button>
            </div>
        </div>
        <div class="container">
            <h3>在信息和标题中使用 html 代码</h3>
            <div class="btn-group-vertical">
                <button class="btn btn-danger" ng-click="errorHtml()">Error Notification</button>
                <button class="btn btn-success" ng-click="successHtml()">Success Notification</button>
            </div>
        </div>
        <div class="container">
            <h3>更改通知提醒框的显示位置</h3>
            <div class="btn-group-vertical">
                <button class="btn btn-success" ng-click="TopLeft()">Top Left Notification</button>
                <button class="btn btn-danger" ng-click="BottomRight()">Bottom Right Notification</button>
                <button class="btn btn-warning" ng-click="BottomLeft()">Bottom Left Notification</button>
                <button class="btn btn-success" ng-click="TopCenter()">Top Center Notification</button>
                <button class="btn btn-danger" ng-click="BottomCenter()">Bottom Center Notification</button>
            </div>
        </div>
        <div class="container">
            <h3>手动关闭通知弹窗</h3>
            <div class="btn-group-vertical">
                <button class="btn btn-primary" ng-click="setDelayFalse()">显示通知</button>
                <button class="btn btn-success" ng-click="clear()">点击关闭通知</button>
            </div>
        </div>
        <div class="container">
            <h3>关闭所有通知弹窗</h3>
            <div class="btn-group-vertical">
                <button class="btn btn-success" ng-click="clearAll()">点击关闭所有通知弹窗</button>
            </div>
        </div>
        <div class="container">
            <h3>自定义模板template和scope</h3>
            <div class="btn-group-vertical">
                <button class="btn btn-primary show-custom" ng-click="customTemplateScope()">自定义模板template和scope</button>
            </div>
            <h5>Clicks: {{nClicksLog.length}}</h5>
            <ul class="elements-count">
                <li ng-repeat="l in nClicksLog track by $index">{{$index + 1}}. {{l}}</li>
            </ul>
        </div>
    </div>
    <script type="text/ng-template" id="custom_template.html">
        <div class="ui-notification custom-template">
            <h3>{{nTitle}}</h3>
            <div class="message" ng-bind-html="message"></div>
            <div class="message">
                <ul>
                    <li ng-repeat="el in nElements">{{el}}</li>
                </ul>
            </div>
            <div class="message">
                <a class="btn btn-small btn-primary close-notification" ng-click="nClick()">Click me</a>
            </div>
        </div>
    </script>
</div>
 <div class="col-md-8">  
 <ui-tabset style="height:950px;overflow:auto">
 <ui-tab heading="HTML">
<pre>
<div class="example">
    <div class="container">
        <h3>通知提醒框类型</h3>
        <div class="btn-group-vertical">
            <button class="btn btn-primary" ng-click="primary()">一般消息primary</button>
            <button class="btn btn-danger" ng-click="error()">错误消息danger</button>
            <button class="btn btn-success" ng-click="success()">成功消息success</button>
            <button class="btn btn-info" ng-click="info()">提示消息info</button>
            <button class="btn btn-warning" ng-click="warning()">警告消息warning</button>
        </div>
    </div>
    <div class="container">
        <h3>带标题 Title 的提醒框</h3>
        <div class="btn-group-vertical">
            <button class="btn btn-primary" ng-click="primaryTitle()">带标题的一般消息</button>
        </div>
    </div>
    <div class="container">
        <h3>自定义延迟时长</h3>
        <div class="btn-group-vertical">
            <button class="btn btn-danger" ng-click="errorTime()">Error Notification 1s</button>
            <button class="btn btn-danger" ng-click="errorNoTime()">Error Notification (no timeout)</button>
            <button class="btn btn-success" ng-click="successTime()">Success Notification 20s</button>
        </div>
    </div>
    <div class="container">
        <h3>在信息和标题中使用 html 代码</h3>
        <div class="btn-group-vertical">
            <button class="btn btn-danger" ng-click="errorHtml()">Error Notification</button>
            <button class="btn btn-success" ng-click="successHtml()">Success Notification</button>
        </div>
    </div>
    <div class="container">
        <h3>更改通知提醒框的显示位置</h3>
        <div class="btn-group-vertical">
            <button class="btn btn-success" ng-click="TopLeft()">Top Left Notification</button>
            <button class="btn btn-danger" ng-click="BottomRight()">Bottom Right Notification</button>
            <button class="btn btn-warning" ng-click="BottomLeft()">Bottom Left Notification</button>
            <button class="btn btn-success" ng-click="TopCenter()">Top Center Notification</button>
            <button class="btn btn-danger" ng-click="BottomCenter()">Bottom Center Notification</button>
        </div>
    </div>
    <div class="container">
        <h3>手动关闭通知弹窗</h3>
        <div class="btn-group-vertical">
            <button class="btn btn-primary" ng-click="setDelayFalse()">显示通知</button>
            <button class="btn btn-success" ng-click="clear()">点击关闭通知</button>
        </div>
    </div>
    <div class="container">
        <h3>关闭所有通知弹窗</h3>
        <div class="btn-group-vertical">
            <button class="btn btn-success" ng-click="clearAll()">点击关闭所有通知弹窗</button>
        </div>
    </div>
    <div class="container">
        <h3>自定义模板template和scope</h3>
        <div class="btn-group-vertical">
            <button class="btn btn-primary show-custom" ng-click="customTemplateScope()">自定义模板template和scope</button>
        </div>
        <h5>Clicks: {{nClicksLog.length}}</h5>
        <ul class="elements-count">
            <li ng-repeat="l in nClicksLog track by $index">{{$index + 1}}. {{l}}</li>
        </ul>
    </div>

</div>

<script type="text/ng-template" id="custom_template.html">
    <div class="ui-notification custom-template">
        <h3>{{nTitle}}</h3>
        <div class="message" ng-bind-html="message"></div>
        <div class="message">
            <ul>
                <li ng-repeat="el in nElements">{{el}}</li>
            </ul>
        </div>
        <div class="message">
            <a class="btn btn-small btn-primary close-notification" ng-click="nClick()">Click me</a>
        </div>
    </div>
</script>
</pre>
</ui-tab>
<ui-tab heading="Javascript">
<pre>
export default class NotificationDemoCtrl{
    constructor($scope,uiNotification){
        "ngInject";
        this._$scope=$scope;
        $scope.primary = function () {
            uiNotification('Primary notification');
        };
        $scope.error = function () {
            uiNotification.error('Error notification');
        }
        $scope.success = function () {
            uiNotification.success('Success notification');
        }
        $scope.info = function () {
            uiNotification.info('Information notification');
        }
        $scope.warning = function () {
            uiNotification.warning('Warning notification');
        }
        $scope.primaryTitle = function () {
            uiNotification({ message: 'Primary notification', title: 'Primary notification' });
        }
        $scope.errorTime = function () {
            uiNotification.error({ message: 'Error notification 1s', delay: 1000 });
        }
        $scope.errorNoTime = function () {
            uiNotification.error({ message: 'Error notification (no timeout)', delay: null });
        }
        $scope.successTime = function () {
            uiNotification.success({ message: 'Success notification 20s', delay: 20000 });
        }
        $scope.errorHtml = function () {
            uiNotification.error({ message: '<b>Error</b> <s>notification</s>', title: '<i>Html</i> <u>message</u>' });
        }
        $scope.successHtml = function () {
            uiNotification.success({ message: 'Success notification<br>Some other <b>content</b><br><a href="https://github.com/alexcrack/angular-ui-notification">This is a link</a><br><img src="https://angularjs.org/img/AngularJS-small.png">', title: 'Html content' });
        }
        $scope.TopLeft = function () {
            uiNotification.success({ message: 'Success Top Left', positionX: 'left' });
        }
        $scope.BottomRight = function () {
            uiNotification.error({ message: 'Error Bottom Right', positionY: 'bottom', positionX: 'right' });
        }
        $scope.BottomLeft = function () {
            uiNotification.warning({ message: 'warning Bottom Left', positionY: 'bottom', positionX: 'left' });
        }
        $scope.TopCenter = function () {
            uiNotification.success({ message: 'Success Top Center', positionX: 'center' });
        }
        $scope.BottomCenter = function () {
            uiNotification.error({ message: 'Error Bottom Center', positionY: 'bottom', positionX: 'center' });
        }
        var promise;
        $scope.setDelayFalse = function() {
            promise = uiNotification.primary({ message: '这是一个不会自动关闭的通知', delay: false });
        };
        $scope.clear = function() {
            uiNotification.clear(promise);
        };
        $scope.clearAll = function() {
            uiNotification.clearAll();
        };
        $scope.nTitle = "Title from other scope";
        $scope.nClicksLog = [];
        $scope.nClick = function () {
            $scope.nClicksLog.push("Clicked");
        }
        $scope.nElements = ['one', 'two', 'three'];
        $scope.customTemplateScope = function () {
            uiNotification.primary({ message: "Just message", templateUrl: "custom_template.html", scope: $scope });
        }
    }
}
</pre>
</ui-tab>
</ui-tabset>
</div>
</div>