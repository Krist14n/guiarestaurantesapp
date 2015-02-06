// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
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
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  // todos los restaurantes

  .state('app.restaurants', {
    url: "/restaurants",
    views: {
      'menuContent': {
        templateUrl: "templates/restaurants.html",
        controller: 'RestaurantsCtrl'
      }
    }
  })

  .state('app.restaurant', {  
    url: "/restaurant/:restaurantId",
    views: {
      'menuContent':{
        templateUrl: "templates/restaurant.html",
        controller: 'RestaurantCtrl'
      }
    }
  })

  //por cocina

  .state('app.restaurantscook', {
    url: "/restaurantscook",
    views: {
      'menuContent': {
        templateUrl: "templates/restaurantscook.html",
        controller: 'RestaurantsByCookCtrl'
      }
    }
  })

  .state('app.restaurantcook', {
    url: "/restaurantcook/:cookId",
    views: {
      'menuContent': {
        templateUrl: "templates/restaurantscooklist.html",
        controller: 'RestaurantsListByCookCtrl'
      }
    }
  })

  .state('app.restaurantsinglecook', {  
    url: "/restaurantsinglecook/:restaurantId",
    views: {
      'menuContent':{
        templateUrl: "templates/restaurant.html",
        controller: 'RestaurantCtrl'
      }
    }
  })

  // por zona

  .state('app.restaurantszone', {
    url: "/restaurantszone",
    views: {
      'menuContent': {
        templateUrl: "templates/restaurantszone.html",
        controller: 'RestaurantsByZoneCtrl'
      }
    }
  })

  .state('app.restaurantzone', {
    url: "/restaurantzone/:zoneId",
    views: {
      'menuContent': {
        templateUrl: "templates/restaurantszonelist.html",
        controller: 'RestaurantsListByZoneCtrl'
      }
    }
  })

  .state('app.restaurantsinglezone', {  
    url: "/restaurantsinglezone/:restaurantId",
    views: {
      'menuContent':{
        templateUrl: "templates/restaurant.html",
        controller: 'RestaurantCtrl'
      }
    }
  })

  // por plan

  .state('app.restaurantsplan', {
    url: "/restaurantsplan",
    views: {
      'menuContent': {
        templateUrl: "templates/restaurantsplan.html",
        controller: 'RestaurantsByPlanCtrl'
      }
    }
  })

  .state('app.restaurantplan', {
    url: "/restaurantplan/:planId",
    views: {
      'menuContent': {
        templateUrl: "templates/restaurantplanlist.html",
        controller: 'RestaurantsListByPlanCtrl'
      }
    }
  })

  .state('app.restaurantsingleplan', {  
    url: "/restaurantsinglezone/:restaurantId",
    views: {
      'menuContent':{
        templateUrl: "templates/restaurant.html",
        controller: 'RestaurantCtrl'
      }
    }
  })





  .state('app.restaurantRecomendacion', {  
    url: "/restaurantRecomendacion",
    views: {
      'menuContent':{
        templateUrl: "templates/restaurantrecomendacion.html",
        controller: 'RestaurantRecomendacionCtrl'
      }
    }
  })



  .state('app.marco',{
    url: "/marcobeteta",
    views: {
      'menuContent':{
        templateUrl : "templates/marcobeteta.html"
      }
    }
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })

  .state('app.playlists', {
    url: "/playlists",
    views: {
      'menuContent': {
        templateUrl: "templates/playlists.html",
        controller: 'PlaylistsCtrl'
      }
    }
  })

  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/restaurants');
});
