'use strict';

/**
 * @ngdoc overview
 * @name billingPortalApp
 * @description
 * # billingPortalApp
 *
 * Main module of the application.
 */
 angular
 .module('billingPortalApp', [
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ui.router',
  'ngSanitize',
  'ngTouch'
  ])
 .config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/login');
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'views/login/login_home.html',
    controller: 'loginController',
    controllerAs: 'login'
  })
  .state('loginError', {
    url: '/register',
    templateUrl: 'views/login/login_error.html',
    controller: 'loginController',
    controllerAs: 'login'
  })
  .state('home', {
    url: '/home',
    templateUrl: 'views/home/portal.html',
    controller: 'billController',
    controllerAs: 'bill'
  });
});
