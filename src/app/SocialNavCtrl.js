app.controller('SocialNavCtrl', ['$scope', 'SocialNav', function( $scope, SocialNav) {
	$scope.links = SocialNav;

	$scope.icons = {
		"facebook": "fa-facebook"
		,"twitter": "fa-twitter"
		,"google-plus": "fa-google-plus"
		,"fax": "fa-fax"
		,"rss": "fa-rss"
		,"yelp": "fa-yelp"
	}

	$scope.links = SocialNav;
}]);