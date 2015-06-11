'use strict';

angular.module('flDoco')
  .controller('MainCtrl', function ($scope, $mdSidenav) {
    $scope.openLeftMenu = function () {
      $mdSidenav('left').toggle();
    };
  });
