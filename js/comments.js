var commentApp = angular.module('CommentedApp', []);

commentApp.controller('AlumniController', ['$scope', function($scope){
    $scope.current_section = {
        "Section":"Career Service"
    }
    
    $scope.setSection = function(newSection){
        $scope.current_section.Section=newSection;
    }
    
    $scope.content = [
        {
            "Image":"images/careerfair.jpg",
            "Title":"Resume Reviews",
            "Detail1":"The professors will provide thorough resume reviews to student sot help them get a job",
            "Detail2":"Make sure to ask your advisor!",
            "Section":"Career Service"
        },
        {
            "Image":"images/queso.jpg",
            "Title":"Alumni Weekend",
            "Detail1":"Alumni that have been all over the country come together to see their classmates and the new students",
            "Detail2":"Watch out for it on the Calendar",
            "Section":"Events"
        },
        {
            "Image":"images/computingClubImage.jpg",
            "Title":"Hackathon Judging",
            "Detail1":"The semi-annual Hackathon is often Judged my a few Alumni as well as Industry professionals and Professors",
            "Detail2":"Watch out for it on the Calendar",
            "Section":"Events"
        },
        {
            "Image":"images/imageQ.jpg",
            "Title":"Alumni & Alumni Affrairs Office",
            "Detail1":"Committed to helping you sustain a lifelong and meaningful relationship with Quinnipiac University. We strive to offer you valuable and exclusive benefits, volunteer opportunities and engaging experiences throughout the year to keep you close to your alma mater.",
            "Detail2":"Email at: mailto:alumni@qu.edu",
            "Section":"Alumni Support"
        },
        {
            "Image":"images/DonaldWeinbach.jpg",
            "Title":"Donald J. Weinbach",
            "Detail1":"Vice President of Alumni & Alumni Affrairs Office. He holds a bachelor's degree in political science from Merrimack College.",
            "Detail2":"COntact at: 203-582-8908",
            "Section":"Alumni Support"
        }
    ]
}]);

commentApp.controller('OpportunityController', ['$scope', function($scope){
       $scope.current_section = {
        "Section":"Clubs"
    }
    
    $scope.setSection = function(newSection){
        $scope.current_section.Section=newSection;
    }
    
        $scope.content = [
        {
            "Image":"images/computingClubImage.jpg",
            "Title":"Computing Club",
            "Detail1":"Club known for Hosting events and programming challanges",
            "Detail2":"Website www.QuinnipiacComputingClubs.com",
            "Section":"Clubs"
        },
        {
            "Image":"images/queso.jpg",
            "Title":"QUESO",
            "Detail1":"The biggest programing and computer club at Quinnipiac",
            "Detail2":"Website www.QUESO.com",
            "Section":"Clubs"
        },
        {
            "Image":"images/etaPi.jpg",
            "Title":"eta Pi Honors Society",
            "Detail1":"Quinnipiac is starting a branch of Alpha Eta Pi one of the oldest Honors Engineering Societies",
            "Detail2":"Website www.etaPi.com",
            "Section":"Organizations"
        },
        {
            "Image":"images/prattwhitney.jpg",
            "Title":"Pratt & Whitney",
            "Detail1":"Have Partnered with Quinnipiac to provide Mechanical and Software Engineers with internships",
            "Detail2":"Website www.prattandwhitney.com",
            "Section":"Internships"
        },
        {
            "Image":"images/cigna.png",
            "Title":"Software Developer Cigna",
            "Detail1":"Creating Web and Mobile Applicatinons ant cigna health insurance",
            "Detail2":"Website www.cigna.com",
            "Section":"Jobs"
        },
        {
            "Image":"images/careerfair.jpg",
            "Title":"Quinnipiac Career Fair",
            "Detail1":"Career fair with over 200 Companies to find internships at",
            "Detail2":"Watch out for in the Calendar",
            "Section":"Events"
        }
    ];
    
}])

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
        },
        {
            "Image":"images/facilities1.png",
            "Title":"Gaining different perspectives",
            "Detail1":"When you enroll in our engineering program, you'll have a unique opportunity to not only gain invaluable knowledge by working in the lab, you'll also have a chance to collaborate with students enrolled in other engineering programs. This full circle approach will give you the hands-on experience you'll need while gaining an understanding of how engineers from different desciplines work together for positive results.",
            "Section":"Facilities"
        },
        {
            "Image":"images/facilities2.png",
            "Title":"Interactive classrooms, labs and workshops simulate real-world environments and obstacles",
            "Detail1":"The career ahead of you is nothing less than building infrastructure that is stronger, products that perform more efficiently, and digital landscapes as real as the tangible ones we wake up to each day. To those ends, you'll master the same industry-leading technology and equipment utilized in the field by veteran engineers of all backgrounds. And you'll do it right here.",
            "Section":"Facilities"
        },
        {
            "Image":"images/facilities3.png",
            "Title":"Dynamic and immersive learning environments",
            "Detail1":"The School of Engineering marries in-depth theory with intensive application. Tator Hall's Active Classroom for Engineering seemlessly combines dynamic lectures with laboratory-based projects. This classroom offers 12 large, two-person tables for group work, two MTS uniaxial load frames for materials testing for group work, and a range of other resources for designing models and performing experiments.",
            "Section":"Facilities"
        },
        {
            "Image":"images/facilities4.png",
            "Detail1":"Passionate professors teach you to cultivate a vision; cutting-edge classroom resources enable you to independently bring that vision to life. The Student Fabrication Worksop, located in the Center for Communications and Engineering, is a highly creative, reconfigureable work space where students of all engineering disciplines can draft initial mockups of their own designs, as well as prototypes for variouse courses. In the student design workshop, those designs are realized. This fully equipped and collaborative space supports discussions and brainstorming sessions, as well as testing for processes, models and code.",
            "Section":"Facilities"
        },
    ];
    
    
}]);

var modal = document.getElementById('bg-modal');

var btn = document.getElementById('buttonlogin');

var span = document.getElementById('close')[0];

btn.onclick = function(){
    modal.style.display = "flex";
}

span.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
    }
}

