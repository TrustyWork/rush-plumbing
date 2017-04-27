angular.module('app.PlumbingProblemsPage', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/PlumberProblems', {
      templateUrl: './app/views/PlumberProblems.html'
    });
  }]);