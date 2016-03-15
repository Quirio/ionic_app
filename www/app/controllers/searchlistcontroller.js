/*
 @ file: searchlistcontroller.js
 @ description: file which contains one of search state controller.
 */

(function () {
  "use strict";
  angular.module('app').controller('searchlistcontroller',searchlistcontroller);

  searchlistcontroller.$inject = ['$q', '$scope', '$state', '$stateParams', 'apirequest'];
  function searchlistcontroller($q, $scope, $state, $stateParams, apirequest) {
    // <editor-fold desc="Vars">

    $scope.searchedfilms = [];

    // </editor-fold>

    // <editor-fold desc="Init">

    function init() {
      apirequest.getdetailsfilms($stateParams.filmid)
        .then(
        function (data) {
          $scope.searchedfilms = data;
        },
        function (data) {
          console.log(data);
        });
    }

    // </editor-fold>

    // <editor-fold desc="Methods">
    /* $scope.todetails = function (id) {
     $state.go('detailsfilm', { "filmid": id });
     }*/
    // </editor-fold>

    // <editor-fold desc="Helpers">

    // </editor-fold>

    // <editor-fold desc="Events">

    // </editor-fold>

    init();

  }
})();
