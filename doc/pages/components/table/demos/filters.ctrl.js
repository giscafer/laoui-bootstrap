if (!Array.prototype.filter) {
    Array.prototype.filter = function (fun/*, thisArg*/) {
        'use strict';

        if (this === void 0 || this === null) {
            throw new TypeError();
        }

        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== 'function') {
            throw new TypeError();
        }

        var res = [];
        var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
        for (var i = 0; i < len; i++) {
            if (i in t) {
                var val = t[i];

                // NOTE: Technically this should Object.defineProperty at
                //       the next index, as push can be affected by
                //       properties on Object.prototype and Array.prototype.
                //       But that method's new, and collisions should be
                //       rare, so use the more-compatible alternative.
                if (fun.call(thisArg, val, i, t)) {
                    res.push(val);
                }
            }
        }

        return res;
    };
}
export default class FilterTableDemoCtrl {
    constructor($scope, $http) {
        "ngInject";
        var data;

        $scope.options = {
            rowHeight: 50,
            headerHeight: 100,
            footerHeight: false,
            scrollbarV: false,
            selectable: false
        };

        $scope.prev = function (ev) {
            ev.stopPropagation();
        }

        $scope.$watch('filterKeywords', function (newVal) {
            if (!data) return;
            $scope.data = data.filter((d) => {
                console.log(d.name, d.name.indexOf(newVal))
                return d.name.toLowerCase().indexOf(newVal) !== -1 || !newVal;
            })
        });

        $http.get('/data/table/100.json').success(function (d) {
            $scope.data = data = d;
        });
    }
}