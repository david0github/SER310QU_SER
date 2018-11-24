var facultyApp = angular.module('CommentedApp', []);

facultyApp.controller('FacultyPageController', ['$scope', function($scope){
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