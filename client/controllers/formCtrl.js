var app = angular.module('portfolioApp');

app.controller('formCtrl', function($rootScope,$scope ,$state, $http, ngDialog){

     $rootScope.formData = {};

     $scope.afterPage = function (){
    	     $state.go('afterSending');
    };

      $scope.openTimed = function () {
        var dialog =ngDialog.open({
          template: 'templates/popupTmpl.html',
          className: 'ngdialog-theme-default',
          windowClass: 'center-modal',
          scope: $scope
        });
     setTimeout(function () {
          dialog.close();
        }, 4000);
      };        

    $scope.sendMessage = function (data) {
     $http.post('http://localhost:8000/api/form', data)
      .success(function (resp ) {
       console.log(resp);
      })
      .error(function(error) {
       console.log(error);
      });
          $scope.openTimed();
          setTimeout(function () {
          $state.go(''),5000});
    };
});