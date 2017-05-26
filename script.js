
var app = angular.module('computer', ['ngRoute'])  // array of dependencies - allows us to use routing provider

.config(['$routeProvider', function ($routeProvider) { // dependency injection - injecting routeProvider
  $routeProvider
	.when('main', {
  	  templateUrl: 'main.html',
  	  controller: 'MainCtrl'
})	// dot! (.)!
	.when('about', {
  	  templateUrl: 'about.html', // about page isn't going to have its own controller
  	  controller: 'MainCtrl'
})	// dot! (.)!
	.when('services', {
  	  templateUrl: 'services.html',
  	  controller: 'ServicesCtrl'
})	// dot! (.)!
	.when('main', {
  	  templateUrl: 'contact.html',
  	  controller: 'ContactCtrl'
})	// dot! (.)!
		.otherwise({redirectTo: '/main'})
}])

.controller('MainCtrl', ['$scope', function ($scope) {	// if we want to pass something in to controller, we need to use a $scope
  $http.get('services.json').then(function (response) {
   	  $scope.services = response.data
  })
}])

.controller('ServicesCtrl', ['$scope', '$http', function ($scope, $http) {	// if we want to pass something in to controller, we need to use a $scope
  $http.get('services.json').then(function (response) {
  	$scope.services = response.data
  })
}])

.controller('ContactCtrl', ['$scope', '$http', function ($scope, $http) {	// if we want to pass something in to controller, we need to use a $scope
  $http.get('locations.json').then(function (response) {
  	  $scope.locations = response.data
  })
}])
