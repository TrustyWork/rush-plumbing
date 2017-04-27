angular.module('app.AboutUsPage', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/AboutUs', {
      templateUrl: './app/views/AboutUs.html'
    });
  }])