angular.module('gi-mobile')

.controller('LoginCtrl', function($scope, $rootScope, $state, LoginService){

  $rootScope.body_style = 'hold-transition login-page';

  $scope.login = {
    email: '',
    password: ''
  };

  $scope.authentica = function(){
    LoginService.login($scope.login).then(function(response){
      console.log("LOG RESPONSE: "+JSON.stringify(response));
      if(response.code == "00"){
        $state.go('inside.home');
      }else{
        Materialize.toast(response.message, 3000);
      }
    },function(error){
      Materialize.toast(response.message, 3000);
    });
  }

});
