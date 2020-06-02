// MODULE
var ramadanApp = angular.module('ramadanApp', ['ngRoute', 'ngResource']);

ramadanApp.config(['$locationProvider','$compileProvider', function($locationProvider,$compileProvider) {
  $locationProvider.hashPrefix('');
$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|magnet):/);
}]);
