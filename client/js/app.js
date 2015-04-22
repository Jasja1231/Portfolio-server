(function () {
    var app = angular.module('portfolioApp',['ui.router', 'ngAnimate']);

 app.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: "/home",
                views: {
                    "home": { templateUrl: 'templates/home.html' }
                }
            })
            .state('about', {
                url: "/about",
                views: {
                    "about": { templateUrl: 'templates/about.html' }
                }
            })
            .state('work', {
                url: "/work",
                views: {
                    "work": { templateUrl: 'templates/work.html' }
                }
            })
            .state('contact', {
                url: "/contact",
                views: {
                    "contact": { templateUrl: 'templates/contact.html' },
                controller:'formCtrl'
                }
          })
            .state('afterSending', {
                url: "/afterSending",
                views: {
                    "afterSending": { templateUrl: 'templates/afterSending.html' }
                },
                controller:'afterCtrl'
          });  
        });
    })();
   