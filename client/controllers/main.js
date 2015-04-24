    var app = angular.module('portfolioApp');


    app.controller('MainCtrl', function ($scope, $rootScope, ngDialog) {
      $rootScope.theme = 'ngdialog-theme-default';

      $scope.openTimed = function () {
        var dialog = ngDialog.open({
          template: '<div>templates/popupTmpl.html</div>',
          plain: true,
          closeByDocument: false,
          closeByEscape: false
        });
        

    };
  });