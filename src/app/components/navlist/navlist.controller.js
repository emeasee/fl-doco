'use strict';

angular.module('flDoco')
  .controller('ListCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
    $scope.setHighlight = function(id) {
      if ($stateParams.id == id){
        return "active";
      } else {
        return "";
      }
    }
  }]);
