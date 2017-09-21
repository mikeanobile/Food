"use strict";

angular.module("ngapp").controller("MainController", function(shared, $state, $scope, $http, $mdSidenav, $mdComponentRegistry){

    var ctrl = this;

    this.auth = shared.info.auth;

    this.toggle = angular.noop;

    this.title = $state.current.title;


    this.isOpen = function() { return false };
    $mdComponentRegistry
    .when("left")
    .then( function(sideNav){
      ctrl.isOpen = angular.bind( sideNav, sideNav.isOpen );
      ctrl.toggle = angular.bind( sideNav, sideNav.toggle );
    });

    this.toggleRight = function() {
    $mdSidenav("left").toggle()
        .then(function(){
        });
    };

    this.close = function() {
    $mdSidenav("right").close()
        .then(function(){
        });
    };
	

	var baseURL = "https://anobile.info:8443/FoodAPI/ExecuteSQL?search=";
	//http://localhost:8080/FoodAPI/ExecuteSQL?search=beef

	$scope.foods = []
	$scope.totalItems = 0;
	$scope.dailycalories = 2000;

	$scope.getProducts = function(value) {
		var search = $scope.search;
		var url = baseURL + search;
		console.log(url);
		$http.get(url).then(function (response) {
			if (angular.isUndefined(response.data.client[0])) {
				console.log("No results.");
				$scope.foods = [];
				$scope.totalItems = 0; 
			}
			else {
				$scope.foods = response.data.client;
				
				$scope.totalItems = $scope.foods.length;	
				console.log($scope.foods.length + " results.");
				console.log(response.data.client);
			}
		});
	}
	
});
