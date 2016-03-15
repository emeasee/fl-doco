'use strict';

//TODO make sure that we put the injections into an array to stop issues with minification
angular.module('flDoco', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial'])
  .config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('section', {
        url: 'section/:id',
        parent: 'home',
        templateUrl: 'app/pages/page.html',
        controller: 'PageCtrl'
      })
      .state('page', {
        url: 'section/:section/:id',
        parent: 'home',
        templateUrl: 'app/pages/page.html',
        controller: 'PageCtrl'
      });

    $urlRouterProvider.otherwise('/');

    $mdThemingProvider.theme('default')
      .primaryPalette('grey', {
        'default': '100'
      })
      .accentPalette('orange', {
        'default': 'A700'
      });

      $mdThemingProvider.theme('api')
        .primaryPalette('grey', {
          'default': '100'
        });

  }]);
