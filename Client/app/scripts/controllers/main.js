'use strict';

/**
 * @ngdoc function
 * @name unixWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the unixWebApp
 */
angular.module('unixWebApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
