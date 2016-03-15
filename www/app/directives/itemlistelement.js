/*
@ file: itemlistelement.js
@ description: contains a directive which represents diferents items of movies or series list.
*/

(function () {
    controller.$inject = ['$scope', '$compile'];
    function controller($scope, $compile) {
        var html;


        $scope.itemSelected = function () {
            if ($.isFunction($scope.onclick)) {

                $scope.onclick({ id: $scope.item.id });

            }
        };
    }

    angular.module('app').directive('itemlistelement', directive);
    function directive() {
        return {
            restrict: 'E',
            template: ' <img class="scrollxitem" ng-src="https://image.tmdb.org/t/p/w370{{item.poster_path}}" ng-click="itemSelected()"/>',
            replace: true,
            controller: controller,
            scope: {
                onclick: '&',
                item: '=',
                id: '@',
                type: '@'
            },
        };
    }
})();
