(function () {
  'use strict';

  angular
    .module('paypal-app', [
      'ui.router'
    ])
    .config(router);

  router.$inject = ['$stateProvider', '$urlRouterProvider'];
  function router($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        views: {
          header: {
            templateUrl: 'scripts/homepage/header.tmpl.html'
          },
          content: {
            templateUrl: 'scripts/homepage/content.tmpl.html'
          }
        }
      })
      .state('send-money', {
        url: '/send-money',
        views: {
          header: {
          },
          content: {
          }
        }
      })
      .state('transactions', {
        url: '/transactions',
        views: {
          header: {
          },
          content: {
          }
        }
      })
  }

}());
