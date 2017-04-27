app.controller('ReviewsCtrl', ['$scope', 'Reviews', function ($scope, Reviews) {
	$scope.list = Reviews;

	$scope.getRand = function ( count) {

		var results = [];

		var getRandomInRange = function(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		for (var i = 0; i < 1000000; i++) { //infinite loop
			if( i > 20){ break;}
			if( results.length == count) {
				break;
			}

			var idx = getRandomInRange( 0, Reviews.length - 1);

			if( results.indexOf( Reviews[idx]) != -1){
				continue
			}

			function cutLongText() {
				var elem, size, text;
				elem = document.getElementById('long_text');
				text = elem.innerHTML;
				size = 40;
				if (text.length > size) {
					text = text.slice(0, 40);
				}
				elem.innerHTML = text + '...';
			}

			results.push( Reviews[idx]);

		}

		return results;
	}
}]);