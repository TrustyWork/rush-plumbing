angular.module('app.ContactUsPage', ['ngRoute'])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/ContactUs', {
			templateUrl: '/app/views/ContactUs.html'
			,controller: 'app.ContactUsPage.PageCtrl'
		});
	}])
	.controller('app.ContactUsPage.PageCtrl', ['$scope', function( $scope) {

		$scope.processSend = false;

		$scope.send = function(message){

			$scope.processSend = 1;
			console.log( 1);

			setTimeout( function(){
				console.log( 2);
				$scope.processSend = 2;
				$scope.$apply();

			}, 500);

			setTimeout( function(){
				console.log( 3);
				$scope.processSend = false;
				$scope.$apply();

			}, 1500);
		};
	}]);