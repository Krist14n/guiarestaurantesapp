angular.module('starter.controllers', ['ngCordova'])

var app = angular.module('starter.controllers', ['ngCordova', 'ngMap'])

app.run(function($cordovaSplashscreen) {
  setTimeout(function() {
    $cordovaSplashscreen.hide()
  }, 5000)
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

  //Restaurant List from .json

.controller('RestaurantsCtrl', function($scope , $stateParams, $http){

        $http.get('js/guiderest.json').success(function(data){
          $scope.restaurants = data;
        })
})


  

.controller('RestaurantsCtrl', function($scope , $stateParams, $http){

        $http.get('js/guiderest.json').success(function(data){
          $scope.restaurants = data;
        })
})

  //Single restaurant 
.controller('RestaurantCtrl', function($scope, $stateParams, $http){
  var result;
  var lon;
  var lat;

  var filter = $stateParams.restaurantId;  
  $http.get('js/guiderest.json').success(function(data){ 
    result = $.grep(data, function(e){ return e.id == filter; });
    $scope.restaurant = result;
    
    lon = result[0].map.longitud;
    lat = result[0].map.latitud;

    $scope.markers = { 
      "long": lon, 
      "lat": lat
    }

  });

  $scope.$on('mapInitialized', function(event, map) {


  });

})

//Restaurant list by food 

.controller('RestaurantsByCookCtrl', function($scope, $http){
  $http.get('js/tipos_comida.json').success(function(data){
      $scope.restaurants = data;
  })
})

//Internal Restaurant list by food 
.controller('RestaurantsListByCookCtrl', function($scope, $stateParams, $http){
  var filter = $stateParams;
  $http.get('js/guiderest.json').success(function(data){
      var result = $.grep(data, function(e){ return e.cook == filter.cookId; });
      $scope.restaurants = result;
  })

})

//Restaurant list by zone 

.controller('RestaurantsByZoneCtrl', function($scope, $http){
  $http.get('js/por_zona.json').success(function(data){
      $scope.restaurants = data;
  })
})

//Internal Restaurant list by zone 
.controller('RestaurantsListByZoneCtrl', function($scope, $stateParams, $http){
  var filter = $stateParams;
  $http.get('js/guiderest.json').success(function(data){
      var result = $.grep(data, function(e){ return e.zone == filter.zoneId; });
      $scope.restaurants = result;
  })

})

//Restaurant list by plan 

.controller('RestaurantsByPlanCtrl', function($scope, $http){
  $http.get('js/por_plan.json').success(function(data){
      $scope.restaurants = data;
  })
})

//Internal Restaurant list by plan 
.controller('RestaurantsListByPlanCtrl', function($scope, $stateParams, $http){
  var filter = $stateParams;
  $http.get('js/guiderest.json').success(function(data){
      var result = $.grep(data, function(e){ return e.plancat == filter.planId; });
      $scope.restaurants = result;
  })

})


.controller('RestaurantRecomendacionCtrl', function($scope, $http){

  google.maps.event.addDomListener(window, 'load', function() {

      var myLatlng = new google.maps.LatLng(37.3000, -120.4833);

      var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      var map = new google.maps.Map(document.getElementById("map"), mapOptions);

      navigator.geolocation.getCurrentPosition(function(pos) {
          map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          var myLocation = new google.maps.Marker({
              position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
              map: map,
              title: "My Location"
          });
      });

      $scope.map = map;
   
  });

  var filter = Math.floor((Math.random() * 89) + 1);


  $http.get('js/guiderest.json').success(function(data){ 
    var result = $.grep(data, function(e){ return e.id == filter; });
    $scope.restaurant = result;
  });

})




.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})
  
.controller('PlaylistCtrl', function($scope, $stateParams) {
  $scope.playlistId = $stateParams.playlistId;
});
