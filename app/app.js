'use strict';

define([
  'angular',
  'angular-route'
], function(angular, angularRoute) {
  // Declare app level module which depends on views, and components
  return angular.module('myApp', [
    'ngRoute'
  ]).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise();
  }]);
});
