angular.module('app.IndexPage', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: '/app/views/index.html'
			,controller: 'app.IndexPage.PageCtrl'
		});
	}])

	.controller('app.IndexPage.PageCtrl', ['$scope', 'Blog', function ($scope, Blog) {

		$scope.blogPosts = {};

		Blog.then(function (data) {
			$scope.blogPosts = data.posts;

			console.log( data.posts);
		});
	}])