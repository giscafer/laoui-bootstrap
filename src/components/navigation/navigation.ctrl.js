export default class NavigationCtrl{
    constructor($scope, $location){
        "ngInject";
        
        $scope.$watch(function() {
            return $location.path();
        }, function() {
            // 获取当前url
            $scope.currentUrl = '#' + $location.path();
        });
    }
}
