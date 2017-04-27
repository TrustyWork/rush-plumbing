angular.module('app.CommercialPlumbingPage', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/CommercialPlumbing', {
      templateUrl: '/app/views/CommercialPlumbing.html'
    });
  }]);