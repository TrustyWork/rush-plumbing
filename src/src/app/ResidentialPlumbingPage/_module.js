angular.module('app.ResidentialPlumbingPage', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/ResidentialPlumbing', {
      templateUrl: '/app/views/ResidentialPlubming.html'
    });
  }]);