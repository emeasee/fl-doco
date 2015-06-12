'use strict';

angular.module('flDoco')
  .controller('PageCtrl',['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {
    function sectionExists(sec){
      if (sec){
        return $stateParams.section;
      } else {
        return '';
      }
    }

    $http.get(
      'assets/docs/views/'
      + sectionExists($stateParams.section)
      + '/' + $stateParams.id
      + '.json')
      .success(function(data) {
        $scope.view = data;
        console.log(data);
    });
  }]);
