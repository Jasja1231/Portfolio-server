 var app = angular.module('portfolioApp');
 app.controller('navCtrl',['$http','$scope' ,'$state',function($http ,$scope, $state) {

    $scope.$state = $state;

    $http.get('http://localhost:8000/api/test')
      .success(function (resp ) {
      	for(i=0;i<resp.length;i++){
        alert('name: ' +resp[i].name +' age: '+resp[i].age);
    }
       console.log(resp);
      })
      .error(function(error) {
       console.log(error);
      });

       $http.get('http://localhost:8000/api/tes')
      .success(function (resp ) {
        alert(resp);
       console.log(resp);
      })
      .error(function(error) {
       console.log(error);
      });
   
}]);