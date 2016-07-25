angular.module('gi-mobile', [
  'ui.router'
])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('outside', {
    url: '/outside',
    abstract: true,
    templateUrl: 'templates/outside.html'
  })
  .state('outside.login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })
  .state('outside.register', {
    url: '/register',
    templateUrl: 'templates/register.html',
    controller: 'RegisterCtrl'
  })
  .state('inside', {
    url: '/inside',
    abstract: true,
    templateUrl: 'templates/inside.html',
    controller: 'InsideCtrl'
  })

  .state('inside.home', {
    url: '/home',
    templateUrl: 'templates/home.html'
  });

  $urlRouterProvider.otherwise('/outside/login');
})

.run(function ($rootScope, $state) {
  $rootScope.$on('$stateChangeStart', function (event,next, nextParams, fromState) {

  });
});
