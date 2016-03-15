/*
 @ file: searchcontroller.js
 @ description: file which contains one of search state controller.
 */

(function () {
  "use strict";
  angular.module('app').controller('searchcontroller',searchcontroller);

  searchcontroller.$inject = ['$q', '$scope', '$state', '$stateParams', 'apirequest'];
  function searchcontroller($q, $scope, $state, $stateParams, apirequest) {
    // <editor-fold desc="Vars">
         $scope.filmname = '1';
    // </editor-fold>

    // <editor-fold desc="Init">

    function init() {
    }

    // </editor-fold>

    // <editor-fold desc="Methods">
     $scope.tosearchlist = function (keyEvent) {
      if (keyEvent.which === 13) {
        $state.go('app.search.list', {"name": $scope.filmname});
        console.log($scope.filmname);
      }
     };


    // </editor-fold>

    // <editor-fold desc="Helpers">

    // </editor-fold>

    // <editor-fold desc="Events">

    // </editor-fold>

    init();

  }
})();

