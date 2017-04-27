app.controller('MenuSwitcherCtrl', ['$scope', function( $scope) {
	$scope.open = false;
	$scope.switch = function(){
		$scope.open = !$scope.open;
	};

	$scope.$on('$locationChangeSuccess', function () {
		$scope.open = false;
	});

	window.addEventListener("resize", function () {
		var scrolled = window.innerWidth
		if (scrolled > 499 && $scope.open) {
			$scope.open = false;
			$scope.$apply();
		}
	}, false);
}]);