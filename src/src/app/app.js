var app = angular.module('app', [
	'ngRoute'
	,'truncate'
	,'app.IndexPage'
	,'app.PlumbingProblemsPage'
	,'app.ResidentialPlumbingPage'
	,'app.CommercialPlumbingPage'
	,'app.BlogPage'
	,'app.AboutUsPage'
	,'app.ContactUsPage'
	,'app.ReviewsPage'
	,'app.ArticlesPage'
]).config([ '$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix('!');

	$routeProvider.otherwise({redirectTo: '/'});
}])/*.directive( 'scrollUp',
	function(){
		return{
			restrict: 'E',
			transclude: true,
			replace: true,
			controller : [ '$scope', function($scope){
				$scope.$on('$routeChangeSuccess', function(e, current, previous) {
					window.scrollTo(0, 0);
				});
			}]
		}
	}
);*/