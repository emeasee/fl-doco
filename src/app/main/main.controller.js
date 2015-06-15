'use strict';

angular.module('flDoco')
  .controller('MainCtrl', ['$scope', '$mdSidenav', '$http', function ($scope, $mdSidenav, $http) {
    $http.get('assets/docs/sections.json').success(function(data) {
      $scope.items = data;
    });

    $scope.openLeftMenu = function () {
      $mdSidenav('left').toggle();
    };

  }]);
