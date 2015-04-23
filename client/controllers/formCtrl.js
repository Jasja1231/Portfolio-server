var app = angular.module('portfolioApp');

app.controller('formCtrl', function($rootScope,$scope ,$state, $http){

     $rootScope.formData = {};

     $scope.afterPage = function (){
    	     $state.go('afterSending');
    };

    $scope.sendMessage = function (data) {
     $scope.afterPage();
     $http.post('http://localhost:8000/api/form', data)
      .success(function (resp ) {
        alert(resp);
       console.log(resp);
      })
      .error(function(error) {
       console.log(error);
      });
    };

});