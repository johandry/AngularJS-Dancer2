'use strict';

/**
 * @ngdoc function
 * @name unixWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the unixWebApp
 */
angular.module('unixWebApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
