angular.module('app.BlogPage', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/Blog', {
            templateUrl: '/app/views/Blog.html'
            ,controller: 'app.BlogPage.ListCtrl'
        });

        $routeProvider.when('/Blog/:id', {
            templateUrl: '/app/views/Post.html'
            ,controller: 'app.BlogPage.PostCtrl'
        });
    }])
    
    .controller('app.BlogPage.ListCtrl', ['$scope', '$routeParams', '$location', 'Blog', function( $scope, $routeParams, $location, Blog) {

        $scope.posts = {};
        if( $routeParams.p) {
            //TODE pagination
        }

        Blog.then( function( data){
            $scope.posts = data.posts;
        });
    }])
    
    .controller('app.BlogPage.PostCtrl', ['$scope', '$routeParams', '$sce', 'Blog', function( $scope, $routeParams, $sce, Blog) {

        var id = $routeParams.id;
        var post = Blog.then( data => {
            var post = data.posts[ id];

            $scope.id = post.id;
            $scope.link_title = post.title;
            $scope.title = post.title;
            $scope.about = post.about;
            $scope.template = post.template;
            console.log( post.template);
        });

        $scope.id = null;
        $scope.link_title = '';
        $scope.title = '';
        $scope.about = '';
        $scope.content = $sce.trustAsHtml( '<p>Loading...');
        $scope.template = '';
    }]);