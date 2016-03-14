'use strict';

angular.module('flDoco')
  .controller('MainCtrl', ['$scope', '$rootScope', '$mdSidenav', '$http', function ($scope, $rootScope, $mdSidenav, $http) {

    var docType = $rootScope.$rootScope.type;

    $http.get('assets/'+ docType +'/sections.json').success(function(data) {
      $scope.items = data;
    });

    $scope.openLeftMenu = function () {
      $mdSidenav('left').toggle();
    };

  }]);
