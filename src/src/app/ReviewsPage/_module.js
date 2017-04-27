angular.module('app.ReviewsPage', ['ngRoute'])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/Reviews', {
			templateUrl: './app/views/Reviews.html'
			,controller: 'app.ReviewsPage.PageCtrl'
		});
	}])
	
	.controller('app.ReviewsPage.PageCtrl', ['$scope', 'Reviews', function( $scope, Reviews) {

		$scope.list = Reviews.reverse();
		$scope.processTestimonial = false;

		$scope.add = function(testimonial){

			$scope.processTestimonial = 2;
			setTimeout( function(){
				$scope.processTestimonial = false;

				$scope.list.unshift(
					{
						author: testimonial.author
						,content: testimonial.content
						,created: ''
						,location: testimonial.location
					}
				)

				$scope.$apply();
			}, 500);
		};
	}]);