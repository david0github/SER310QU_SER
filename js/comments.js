var commentApp = angular.module('CommentedApp', []);

commentApp.controller('CommentController', ['$scope', function($scope){
    $scope.comments = [
        {
            "Page":"Home",
            "Category":"QU",
            "Rating":"4",
            "Type":"Alumni",
            "Comment":"I loved it!",
            "Date":"11/20/2018"
        },
        {
            "Page":"Home",
            "Category":"QU",
            "Rating":"5",
            "Type":"Professor",
            "Comment":"Working Here is a pleasure.",
            "Date":"11/20/2018"
        }
        
    ];
    
    
}]);