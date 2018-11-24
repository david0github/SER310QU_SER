var commentApp = angular.module('CommentedApp', []);

commentApp.controller('CommentController', ['$scope', function($scope){
    $scope.comments = [
        {
            "Page":"Home",
            "Category":"QU",
            "Rating":"4",
            "Type":"Alumni",
            "Comment":"I loved it! home",
            "Date":"11/20/2018"
        },
        {
            "Page":"Fac",
            "Category":"QU",
            "Rating":"5",
            "Type":"Professor",
            "Comment":"Working Here is a pleasure. fac",
            "Date":"11/20/2018"
        },
        {
            "Page":"Curriculum",
            "Category":"QU",
            "Rating":"5",
            "Type":"Professor",
            "Comment":"Working Here is a pleasure. cur",
            "Date":"11/20/2018"
        },
        {
            "Page":"Opportunity",
            "Category":"Computing Club",
            "Rating":"4",
            "Type":"Student",
            "Comment":"Very good events, and a lot of free food opp",
            "Date":"11/20/2018"
        },
        {
            "Page":"Alumni",
            "Category":"Computing Club",
            "Rating":"4",
            "Type":"Student",
            "Comment":"Very good events, and a lot of free food alum",
            "Date":"11/20/2018"
        },
        {
            "Page":"Calendar",
            "Category":"Computing Club",
            "Rating":"4",
            "Type":"Student",
            "Comment":"Very good events, and a lot of free food cal",
            "Date":"11/20/2018"
        }
    ];
    
    
}]);

commentApp.controller('FacultyPageController', ['$scope', function($scope){
    $scope.current_section = {
        "Section":"Faculty"
    }
    
    $scope.setSection = function(newSection){
        $scope.current_section.Section=newSection;
    }
    
    $scope.content = [
        {
            "Image":"images/blake.png",
            "Title":"Jonathan Blake, PhD",
            "Detail1":"Program Director, Professor of Computer Science and Software Engineering. Education: BSE, Princeton University; MS, PhD, Northwestern University.",
            "Detail2":"Contact Information: Jonathan.Blake@quinnipiac.edu",
            "Section":"Faculty"
        },
        {
            "Image":"images/christov.png",
            "Title":"Stefan Christov, PhD",
            "Detail1":"Assistant Professor of Software Engineering. Education: BS, SUNY College Brockport; MS, PhD, University of Massachusetts-Amherst.",
            "Detail2":"Contact Information: Stefan.Christov@quinnipiac.edu",
            "Section":"Faculty"
        },
        {
            "Image":"images/ruby.png",
            "Title":"Ruby ElKharboutly, PhD",
            "Detail1":"Assistant Professor of Software Engineering. Education: BS, MS, American University in Cairo; PhD, University of Connecticut.",
            "Detail2":"Contact Information: Ruby.ElKharboutly@quinnipiac.edu",
            "Section":"Faculty"
        },
        {
            "Image":"images/hoffman.png",
            "Title":"Mark Hoffman, PhD",
            "Detail1":"Professor of Computer Science and Software Engineering. Education: BS, MS, University of New Haven; PhD, Polytechnic University Brooklyn.",
            "Detail2":"Contact Information: Mark.Hoffman@quinnpiac.edu",
            "Section":"Faculty"
        }
    ];
    
    
}]);