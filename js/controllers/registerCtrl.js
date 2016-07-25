angular.module('gi-mobile')

.controller('RegisterCtrl', function($scope, $rootScope, $state, RegisterService, $location, $timeout){

  $rootScope.body_style = 'hold-transition register-page';

  $scope.dadosRegistro = {
    first_name: '',
    last_name: '',
    email: '',
    user: '',
    password: '',
    status: 'A'
  }

  $scope.cadastrar = function(){
    console.log("DADOS CADASTRO: "+JSON.stringify($scope.dadosRegistro));
    RegisterService.registro($scope.dadosRegistro).then(function(response){
      console.log("RESPONSE: "+JSON.stringify(response));
      if(response.code == "00"){
        Materialize.toast(response.message, 3000, '', $location.path('/login'));
      }
    },function(error){
      console.log(error);
    });
  }

});
