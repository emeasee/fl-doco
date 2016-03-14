'use strict';

angular.module('flDoco')
  .controller('PageCtrl',['$scope', '$rootScope', '$stateParams', '$http', function ($scope, $rootScope, $stateParams, $http) {
    function sectionExists(sec){
      if (sec){
        return $stateParams.section;
      } else {
        return '';
      }
    }

    var docType = $rootScope.$rootScope.type;

    $http.get(
      'assets/'+ docType +'/views/'
      + sectionExists($stateParams.section)
      + '/' + $stateParams.id
      + '.json')
      .success(function(data) {
        $scope.view = data;
    });

    Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
    // See http://galleria.io/docs/options/ for a list of Options available
      Galleria.configure({
        carousel: 'true',
        thumbnails: 'numbers',
        clicknext: 'true',
        transition: 'fadeslide',
        imageCrop: false
      });
    //TODO: re-enable this once the getting started section is finalised.
    //Galleria.run('.galleria');

  }])
  .filter('to_trusted', ['$sce', function($sce){
    return function(text){
      return $sce.trustAsHtml(text);
    };
  }]);
