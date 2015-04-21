var app = angular.module('portfolioApp');

app.controller('afterCtrl', function($rootScope, $scope ,$state, $http){

     $scope.goToMain = function (){
    	     $state.go('home');
    };

});