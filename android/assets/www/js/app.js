// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('RideMexico',
  ['ionic',
   'starter.controllers',
   'User.controllers',
   'ngCordova',
   'Database.controllers',
   'ngMap',
   'Map.controllers',
   'addCard.controller'
  ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('app.user', {
    url: '/user',
    views: {
      'menuContent': {
        templateUrl: 'templates/user.html'
      }
    },
    controller: 'UserCtrl'
  })

  .state('app.database', {
    url: '/database',
    views: {
      'menuContent': {
        templateUrl: 'templates/database.html',
        controller: 'DatabaseMenuCtrl'
      }
    }
  })

  .state('app.search', {
      url: '/search',
      views: {
        'menuContent': {
          templateUrl: 'templates/search.html'
        }
      }
    })
    .state('app.personalVehicle', {
      url: '/personalVehicle',
      views: {
        'menuContent': {
          templateUrl: 'templates/personalVehicle.html',
          //controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.map', {
    url: '/map',
    views: {
      'menuContent': {
        templateUrl: 'templates/map.html',
        controller: 'MapController'
      }
    }
  })

  .state('app.busRouteList', {
    url: '/database/busRoute',
    views: {
      'menuContent':{
        templateUrl: 'templates/routes.html',
        controller: 'BusRoutesListController'
      }
    }
  })

  .state('app.trainRouteList', {
    url: '/database/trainRoute',
    views: {
      'menuContent':{
        templateUrl: 'templates/routes.html',
        controller: 'TrainRoutesListController'
      }
    }
  })

  .state('app.metroRouteList', {
    url: '/database/metroRoute',
    views: {
      'menuContent':{
        templateUrl: 'templates/routes.html',
        controller: 'MetroRoutesListController'
      }
    }
  })
  .state('app.carrotMap', {
    url: '/database/carrotMap',
    views: {
      'menuContent':{
        templateUrl: 'templates/carrotMap.html',
        controller: 'carrotMapCtrl'
      }
    }
  })
  .state('app.metroRoute', {
    cache: false,
    url: '/database/metroRoute/:routeId',
    views: {
      'menuContent':{
    templateUrl: 'templates/metroRoute.html',
    controller: 'MetroRouteController'
      }
    }
  })
  .state('app.trainRoute', {
    cache: false,
    url: '/database/trainRoute/:routeId',
    views: {
      'menuContent':{
    templateUrl: 'templates/trainRoute.html',
    controller: 'TrainRouteController'
      }
    }
  })
  .state('app.MetroStopMap', {
    url: '/database/metroRoute/stop/:lat/:lon/:name/:desc',
    views: {
      'menuContent':{
        templateUrl: 'templates/stop.html',
        controller: 'StopMapController'
      }
    }
  })
  .state('app.TrainStopMap', {
    url: '/database/trainRoute/stop/:lat/:lon/:name/:desc',
    views: {
      'menuContent':{
        templateUrl: 'templates/stop.html',
        controller: 'StopMapController'
      }
    }
  })
  .state('app.BusTripList', {
    url: '/database/busRoute/:routeId',
    views: {
      'menuContent':{
        templateUrl: 'templates/busTripList.html',
        controller: 'BusTripController'
      }
    }
  })
  .state('app.BusTripRoute', {
    cache: false,
    url: '/database/busRoute/:routeId/:tripId',
    views: {
      'menuContent':{
        templateUrl: 'templates/busTripRoute.html',
        controller: 'BusTripRouteController'
      }
    }
  })
  .state('app.AddCard', {
    url: '/addcard/:routeId/:tripId/:type',
    views: {
      'menuContent':{
        templateUrl: 'templates/newCard.html',
        controller: 'AddCardCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/user');
});
