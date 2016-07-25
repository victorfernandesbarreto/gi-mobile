angular.module('gi-mobile')

.service('RegisterService', function($q, $http, URL_SERVICE){

  var registro = function(dados){
    return $q(function(resolve, reject){
      console.log("DADOS ENVIADOS PARA O SERVIÇO: "+JSON.stringify(dados));
      $http({
        url: URL_SERVICE.url + '/user/new',
        method: "PUT",
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
    registro: registro
  };

});
