angular.module('gi-mobile')

.service('LoginService', function($q, $http, URL_SERVICE){

  var login = function(dados){
    return $q(function(resolve, reject){
      $http({
        url: URL_SERVICE.url + '/authenticate/auth',
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        data: dados
      }).then(function(result){
        resolve(result.data);
      }).catch(function(response){
        reject('Erro');
      });
    });
  };

  return{
    login: login
  };

});
