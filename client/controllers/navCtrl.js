 var app = angular.module('portfolioApp');
 app.controller('navCtrl',['$http','$scope' ,'$state',function($http ,$scope, $state) {

    $scope.$state = $state;

}]);