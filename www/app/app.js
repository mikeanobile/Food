"use strict";

angular.module("ngapp", [ "ui.router", "ngMaterial", "ngCordova", "ngStorage" ])
// ngTouch is No Longer Supported by Angular-Material

.run(function($rootScope, $cordovaDevice, $cordovaStatusbar){
  document.addEventListener("deviceready", function () {
    $cordovaStatusbar.overlaysWebView(false); // Always Show Status Bar
    $cordovaStatusbar.styleHex('#E53935'); // Status Bar With Red Color, Using Angular-Material Style
    //window.plugins.orientationLock.lock("portrait");
	var imagePath = "https://upload.wikimedia.org/wikipedia/commons/2/2b/FDA_Nutrition_Facts_Label_2006.jpg"; 
	Tesseract.recognise(imagePath,successCallback,errorCallback);

function successCallback (result) {
    console.log(result);
}
        
function errorCallback (error) {
    console.log(error);
}
	
  }, false);
  /* Hijack Android Back Button (You Can Set Different Functions for Each View by Checking the $state.current)
  document.addEventListener("backbutton", function (e) {
      if($state.is('init')){
        navigator.app.exitApp();
      }  else{
        e.preventDefault();
      }
    }, false);*/
})

.config(function($mdThemingProvider, $mdGestureProvider) { // Angular-Material Color Theming
  $mdGestureProvider.skipClickHijack();

  $mdThemingProvider.theme('default')
    .primaryPalette('red')
    .accentPalette('blue');
});
