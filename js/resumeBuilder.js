/*
This is empty on purpose! Your code to build the resume will go here.
 */

// $("#main").append("Akshay Bhinge");

// console.log(awesomeThoughts);

// var email = "abhinge@csus.edu";

//var newEmail = email.replace("csus","gmail");

//console.log(email);
//console.log(newEmail);

//var awesomeThoughts = "I am Akshay and I am AWESOME";

//var funThoughts = awesomeThoughts.replace("AWESOME","FUN");

//$("#main").append(funThoughts);

/*

var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';

var charEscape = function(_html) {
    var newHTML = _html;
    // How will you make sure that newHTML doesn't contain any < or > ?
    // Your code goes here!
    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");
    // Don't delete this line!
    return newHTML;
};

// Did your code work? The line below will tell you!
console.log(charEscape(html));

*/

/*
	bracket & dot notation

	var weirdObject = {
    "property": "Time for an astronomy lesson!",
    "property1": "Cameron's minor in college was astronomy",
    "property-2": "The 4 Galilean largest moons of Jupiter are:",
    "property 3": "Io, Ganymede, Callisto, Europa",
    "property$": "Saturn's moon Enceladus has liquid water ocean under its icy surface",
    " property": "The Sun contains 99.87% of the mass of the entire solar system",
    "property()": "There are 5 dwarf planets in our solar system:",
    "property[]": "Pluto, Ceres, Eris, Haumea, Makemake",
    "8property": "Mars has two tiny moons: Phobos and Deimos"
};

// Use console.log() to figure out if dot and/or bracket notation
// will work to access the properties below. Mark true if you can use dot/bracket
// notation to access the property, otherwise mark false.

// For example, uncomment the line below to see if you can use dot notation to access `property1`.
console.log(weirdObject.property1);

// I'll give you the first answer. The rest are set to false. Try out each property and
// if you can use dot or bracket notation to access it, change the answer to true!

// property
var dotNotation0 = true;
var bracketNotation0 = true;

// property1
var dotNotation1 = true;
var bracketNotation1 = true;

// property-2
var dotNotation2 = false;
var bracketNotation2 = true;

// property 3
var dotNotation3 = false;
var bracketNotation3 = true;

// property$
var dotNotation4 = true;
var bracketNotation4 = true;

// *space*property
var dotNotation5 = false;
var bracketNotation5 = true;

// property()
var dotNotation6 = false;
var bracketNotation6 = true;

// property[]
var dotNotation7 = false;
var bracketNotation7 = true;

// 8property
var dotNotation8 = false;
var bracketNotation8 = true;



*/



var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "CSUS",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "Feb 2016 - Oct 2016",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};


var projects = {
  "projects" : [
  {
    "title" : "A Comparative Study on Data Mining tools",
    "dates" : "Jan 2015 - December 2015",
    "description" : "Performed research study on implementation of classification and clustering algorithms. Applied sample data sets to data mining tools like Rapid Miner, Weka and data visualization using Tableau. Reduced learning time of each tool by designing a responsive UI using Javascript, HTML5, CSS3, Bootstrap and jQuery."
  },
  {
    "title" : "Interactive Movie Repo",
    "dates" : "Feb 2016 - August 2016",
    "description" : "Implemented an interactive web app resembling a movie repository using HTML5, CSS3, Javascript and Angular JS. Working on storing and modifying content in database using MongoDB and Node.js. Got exposure to the pretty cool MEAN stack.   "
  }
  ]
};


var bio= {
  "name" : "Akshay Bhinge",
  "role" : "Front End Developer",
  "welcomeMessage" : "Hey guys, welcome to my interactive and cool resume!",
  "profilePic" : "images/me.jpg",
  "contacts" : {
    "mobile" : 7863348068,
    "email" : "abhinge@gmail.com",
    "github" : "akbhinge",
    "twitter" : "imakbhinge",
    "location" : "San Jose"
  },
  "skills" : [
        "Web Development","HTML", "Javascript", "CSS","Angular JS","Github"
      ]
};


var education = {

	"schools" :[
		{
			"name": "California State University, Sacramento",
			"location" : "Sacramento, CA",
      "dates" : "Aug 2013 - December 2015",
      "degree" : "MS in Computer Science",
      "majors" : "Computer Science"
		},
		{
  		"name": "University of Pune",
  		"location" : "Pune, India",
      "dates" : "Aug 2008 - July 2013",
      "degree" : "BS in Computer Engineering",
      "majors" : "Computer Engineering"
		},
    {
      "name": "KHS",
      "location" : "Pune, India",
      "dates" : "Aug 2006 - July 2013",
      "degree" : "High School",
      "majors" : "Biology"
    }
	],

	"onlineCourses": [
		{
			"title" : "Shaping up with Angular JS",
			"school" : "Code school"
		},
    {
      "title" : "Javacript Basics",
      "school" : "Udacity"
    },
    {
      "title" : "Version Control using Git and Github",
      "school" : "Udacity"
    }
	]
};



//education["name"] = " California State University, Sacramento";
//education["years"] = "2013-2015",
//education["city"] = "Sacramento, CA, US";

//$("#main").append(work["position"]);
//$("#main").append(education.name);

//var name = "Akshay Bhinge";

var formattedName = HTMLheaderName.replace("%data%", bio.name);

//var role = "Front End Developer";

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);

$("#header").append(formattedmobile);

var formattedemail = HTMLemail.replace("%data%",bio.contacts.email);

$("#header").append(formattedemail);

var formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github);

$("#header").append(formattedgithub);

var formattedtwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);

$("#header").append(formattedtwitter);

var formattedlocation = HTMLlocation.replace("%data%",bio.contacts.location);

$("#header").append(formattedlocation);

var formattedmessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

$("#header").append(formattedmessage);


var formattedPic = HTMLbioPic.replace("%data%",bio.profilePic);

$("#header").append(formattedPic);

if(bio.skills.length > 0){

      $("#header").append(HTMLskillsStart);

      var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);

      $("#skills").append(formattedSkill);

      formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);

      $("#skills").append(formattedSkill);

      formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);

      $("#skills").append(formattedSkill);

      formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);

      $("#skills").append(formattedSkill);

      formattedSkill = HTMLskills.replace("%data%",bio.skills[4]);

      $("#skills").append(formattedSkill);

      formattedSkill = HTMLskills.replace("%data%",bio.skills[5]);

      $("#skills").append(formattedSkill);

    }

    function displayWork(){

	    for(job in work.jobs){
		    $("#workExperience").append(HTMLworkStart);

		    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

		    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

		    var formattedEmployerTitle = formattedEmployer + formattedTitle;

		    $(".work-entry:last").append(formattedEmployerTitle);

			  var formattedDates =  HTMLworkDates.replace("%data%", work.jobs[job].dates);

		    $(".work-entry:last").append(formattedDates);

			  var formattedDescription =  HTMLworkDescription.replace("%data%", work.jobs[job].description);

		    $(".work-entry:last").append(formattedDescription);


        var formattedworkLocation =  HTMLworkLocation.replace("%data%", work.jobs[job].location);

        $(".work-entry:last").append(formattedworkLocation);

	    }
    }

    displayWork();


    function displayProjects(){

      for(project in projects.projects){
        $("#projects").append(HTMLprojectStart);

        var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);

        $(".project-entry:last").append(formattedprojectTitle);

      var formattedprojectDates =  HTMLprojectDates.replace("%data%", projects.projects[project].dates);

        $(".project-entry:last").append(formattedprojectDates);

      var formattedprojectDescription =  HTMLprojectDescription.replace("%data%", projects.projects[project].description);

        $(".project-entry:last").append(formattedprojectDescription);

      }
    }

    displayProjects();

function displaySchool(){

      for(school in education.schools){
        
        $("#education").append(HTMLschoolStart);

        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);

        $(".education-entry:last").append(formattedschoolName);
        
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

        $(".education-entry:last").append(formattedschoolLocation);

        var formattedschoolDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);

        $(".education-entry:last").append(formattedschoolDate);

        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

        $(".education-entry:last").append(formattedschoolDegree);

        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

        $(".education-entry:last").append(formattedschoolMajor);

      }
    }

    displaySchool();




    function locationizer(work_obj){
    	var locationArray = [];

    	for(job in work_obj.jobs){
    		var newLocation = work_obj.jobs[job].location;
    		locationArray.push(newLocation);
    	}
    	return locationArray;
    }

console.log(locationizer(work));

/*
function inName(name){

	name = name.trim().split(" ");
	console.log(name);

	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);*/

$("#mapDiv").append(googleMap);


// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAv0EpJOodcUnENxDMZpmQXS1rN5uI7D_8"></script>