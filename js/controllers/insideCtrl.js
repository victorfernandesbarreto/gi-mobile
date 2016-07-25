angular.module('gi-mobile')

.controller('InsideCtrl', function($scope, $rootScope, $http, $state){

  $rootScope.body_style = 'hold-transition login-page';

  $('.button-collapse').sideNav({
        menuWidth: 360,
        edge: 'left',
        closeOnClick: true
      }
    );


});
