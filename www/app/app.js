/*
 @ file: app.js
 @ description: file which contains the app module.
 */

(function () {
  angular.module('app', ['ionic']);

  angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("app/popularfilm");

    $stateProvider.state('app', {
      url: '/',
      abstract: true,
      views: {
        'app': {
          templateUrl: 'app/views/tabs.html',
        },
      }
    });

    $stateProvider.state('app.popularfilm', {
      url: 'app/popularfilm',
      views: {
        'mainview': {
          templateUrl: 'app/views/popularfilm.html',
          controller: 'filmpopularcontroller'
        },
      }
    });

    $stateProvider.state('app.popularfilm.detailsfilm', {
      url: '/:filmid/details',
      views: {
        'details': {
          templateUrl: 'app/views/detailsfilm.html',
          controller: 'filmdetailscontroller'
        },

      }
    });

    $stateProvider.state('app.search', {
      url: 'app/search',
      views: {
        'search': {
          templateUrl: 'app/views/search.html',
          controller:'searchcontroller'
        },
      }
    });

    $stateProvider.state('app.search.list', {
      url: '/:name/list',
      views: {
        'searchlist': {
          templateUrl: 'app/views/searchlist.html',
          controller: 'searchlistcontroller'
        },
      }
    });


  });
})();
