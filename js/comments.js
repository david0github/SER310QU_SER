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
        },
        {
            "Page":"Curriculum",
            "Category":"QU",
            "Rating":"5",
            "Type":"Professor",
            "Comment":"Working Here is a pleasure.",
            "Date":"11/20/2018"
        },
        {
            "Page":"Opportunity",
            "Category":"Computing Club",
            "Rating":"4",
            "Type":"Student",
            "Comment":"Very good events, and a lot of free food",
            "Date":"11/20/2018"
        }
        
    ];
    
    
}]);