/**
 * https://github.com/benzen/angular-bootstrap3-datepicker
 */
require('./datepicker.js');
var datepickerTemp=require('./template/datepicker.html');
var dp= angular.module('ui-datepicker', []);
dp.directive('uiDatepicker', function($compile) {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: datepickerTemp,
    link: function($scope, element, attr) {
      var attributes, dateFormat, input, resetValue;
      dateFormat = "";
      attributes = element.prop("attributes");
      input = element.find("input");
      resetValue = false;
      angular.forEach(attributes, function(e) {
        if (e.name !== "class") {
          input.attr(e.name, e.value);
        }
        if (e.name === "date-format") {
          return dateFormat = e.value;
        }
      });
      $scope.$watch(attr.language, function(value) {
        var language;
        language = value ? value : 'zh-cn';
        return input.datetimepicker({
          locale: language,
          format: dateFormat,
          icons: {
            time: 'fa fa-clock-o',
            date: 'fa fa-calendar',
            up: 'fa fa-arrow-up',
            down: 'fa fa-arrow-down'
          }
        });
      });
      element.find('.input-group-addon').on('click', function(e) {
        return element.find('input').focus();
      });
      element.on("change.dp", function(e) {
        return $scope.$apply(function() {
          var i, obj, objPath, path, _i, _len, _results;
          if (e.date) {
            objPath = attr.ngModel.split(".");
            obj = $scope;
            _results = [];
            for (i = _i = 0, _len = objPath.length; _i < _len; i = ++_i) {
              path = objPath[i];
              if (!obj[path]) {
                obj[path] = {};
              }
              if (i === objPath.length - 1) {
                if (resetValue) {
                  resetValue = false;
                  _results.push(obj[path] = null);
                } else {
                  _results.push(obj[path] = e.date.format(dateFormat));
                }
              } else {
                _results.push(obj = obj[path]);
              }
            }
            return _results;
          }
        });
      });
      $scope.$watch(attr.ngModel, function(newValue, oldValue) {
        if (oldValue && !newValue) {
          return resetValue = true;
        }
      });
      return $compile(input)($scope);
    }
  };
});
module.exports='ui-datepicker';