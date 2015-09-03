
//var skills = [];
var skills = ["Snow Skier", "Happiness", "Engaged", "Hard Worker"];

var contacts = {
	"phone" : "5104993242",
	"email" : "jimmcpherson@prodigy.net",
	"github" : "jcm1121",
	"location" : "Livermore, CA.",
};

var bio = {
	"name" : "Jim McPherson",
	"role" : "Front End Developer",
	"contacts" : contacts,
	"pic" : "images/me_2.jpg",
	"message" : "Hi everyone. I am learing a ton!",
	"skills" : skills
};


var work = {
	"jobs" : [
		{
			"employer" : "Pacific Bell",
			"title" : "Staff Associate",
			"location" : "San Ramon",
			"dates" : "June 1987 - June 1991",
			"description" : "Clerical Staff Associate"
		},
		{
			"employer" : "Pacific Bell",
			"title" : "TSPS Operator",
			"location" : "San Jose",
			"dates" : "Sept 1981 - June 1987",
			"description" : "TSPS Operator right out of highschool"
		},
		{
			"employer" : "Sunnyvale Hardware",
			"title" : "Associate",
			"location" : "Sunnyvale",
			"dates" : "June 1980 - June 1981",
			"description" : "floor associate during my senior year in highschool"
		},

		{
			"employer" : "Winn Dixie Supermarket",
			"title" : "Courtesy Clerk",
			"location" : "Miami, Fl",
			"dates" : "Jan 1980",
			"description" : "I served as a courtesy clerk at the Supermarket"
		},
		{
			"employer" : "31 Flavors",
			"title" : "attendant",
			"location" : "West LA",
			"dates" : "June 1978 - June 1979",
			"description" : "I served ice cream to patrons as a young teenager"
		}
	]
};


var education = {
	"schools" : [
		{
			"name" : "Las Positas Jr. College",
			"degree" : "AS",
			"dates" : "2013 - 2015",
			"location" : "Livermore",
			"major" : ["Comp Sci", "Gen Ed"]
		},
		{
			"name" : "Las Positas Jr. College",
			"degree" : "AS",
			"dates" : "2009 - 2010",
			"location" : "Livermore",
			"major" : ["Gen Ed"]
		},
		{
			"name" : "DeAnza Jr. College",
			"degree" : "AS",
			"dates" : "1981",
			"location" : "Cupertino",
			"major" : ["Gen Ed"]
		}
	],
	"onlineCourses": [
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity",
			"dates" : "July 2015 - February 2016",
			"url" : "http://www.Udacity.com/"
		}
	]
};

var projects = {
	"projects" : [
		{
			"title" : "Retail Store IVR - Add SMS Messaging",
			"dates" : "Oct 2015",
			"description" : "Add SMS Messaging for callers using smartphones",
			"image" : ["images/197x148.gif", "images/197x148.gif"]
		},
		{
			"title" : "Retail Store IVR - Add CSI Data Dips",
			"dates" : "Sept 2015",
			"description" : "Add CSI Data Dip using caller's TN to Alternate Menu. Control data dip at the store level",
			"image" : ["images/197x148.gif", "images/197x148.gif"]
		},
		{
			"title" : "Retail Store IVR - Alternate Menu",
			"dates" : "Aug 2015",
			"description" : "Add Alternate Menu with additional sub menus and prompting. Alternate Menu is toggled at the store level",
			"image" : ["images/197x148.gif", "images/197x148.gif"]
		}
	],
	"display" : function() {
		for(var i in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
			$(".projects-entry:last").append(formattedProjectTitle);
			$(".projects-entry:last").append(formattedProjectDates);
			$(".projects-entry:last").append(formattedProjectDescription);
			if (projects.projects[i].image.length > 0) {
				console.log("in image if statement");
				for(var y in projects.projects[i].image) {
					var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].image[y]);
					$(".projects-entry:last").append(formattedProjectImage);
				}
			}
		}
	}
};





//Begin Header section
// Load BIO Information from the BIO JSOP object
var formattedBioName = HTMLheaderName.replace("%data%", bio.name);
var formattedBioRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPhone = HTMLmobile.replace("%data%", bio.contacts.phone);
var formattedBioEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedBioGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedBioLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.pic);
var formattedBioMessage = HTMLwelcomeMsg.replace("%data%", bio.message);

//Populate the  DIV ID=header and DIV ID=topContacts with
//formatted BIO information
$("#header").prepend(formattedBioRole);
$("#header").prepend(formattedBioName);
$("#topContacts").append(formattedBioPhone);
$("#topContacts").append(formattedBioEmail);
$("#topContacts").append(formattedBioGithub);
$("#topContacts").append(formattedBioLocation);
$("#header").append(formattedBioPic);
$("#header").append(formattedBioMessage);
$("#header").append(HTMLskillsStart);

// loop through Skills array, populate formatted bio skills
// and append to the DIV ID Header
if (skills.length > 0) {
	var length = skills.length;
	for (var i = 0; i < length; i++) {
		var formattedBioSkills = HTMLskills.replace("%data%", bio.skills.pop());
		$("#header").append(formattedBioSkills);
	}
}

// call projects.display to display the projects object and its contents
projects.display();

/*

//start of Projects Section
$("#projects").append(HTMLprojectStart);

// loop through the projects JSON to populate
// formattedProject variables, then append the DIV ID=projects
// using the formattedProject values
var projectsLength = projects.projects.length;
for (var i=0; i< projectsLength; i++) {

	var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
	var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
	var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
	var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].image);

	$("#projects").append(formattedProjectTitle);
	$("#projects").append(formattedProjectDates);
	$("#projects").append(formattedProjectDescription);
	$("#projects").append(formattedProjectImage);
}

*/

//Begin Education section
$("#education").append(HTMLschoolStart);

// loop through the education JSON to populate
// formattedSchool variables, then append the DIV ID=education
// using the formattedSchool values
var educationLength = education.schools.length;
for (var i=0; i< educationLength; i++) {
	var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
	var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
	var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
	var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
	var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

	$("#education").append(formattedSchoolName + formattedDegree);
	$("#education").append(formattedSchoolDates);
	$("#education").append(formattedSchoolLocation);
	$("#education").append(formattedSchoolMajor);
}


//Begin Online Courses section
$("#education").append(HTMLonlineClasses);

// loop through the education JSON to populate
// formattedSchool variables, then append the DIV ID=education
// using the formattedSchool values
var onlineCourseLength = education.onlineCourses.length;
for (var i=0; i< onlineCourseLength; i++) {
	var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
	var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
	var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
	var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);


	$("#education").append(formattedOnlineTitle + formattedOnlineSchool);
	$("#education").append(formattedOnlineDates);
	$("#education").append(formattedOnlineURL);
}



function displayWork() {
		//Begin Work Experience section
	// assign the length of work.jobs array to workLength variable
	var workLength = work.jobs.length;

	// loop through the work JSON to populate
	// formattedWork variables, then append the DIV ID=workExperience
	// using the formattedWork values
	//for (var i=0; i< workLength; i++) {
	for (i in work.jobs) {
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedWorkPosition = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

		$("#workExperience").append(HTMLworkStart);
		$("#workExperience").append(formattedWorkEmployer + formattedWorkPosition);
		$("#workExperience").append(formattedWorkDates);
		$("#workExperience").append(formattedWorkLocation);
		$("#workExperience").append(formattedWorkDescription);
	}
}

displayWork();



$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

function inName(nameString) {
	var nameArray = [];
	nameArray = nameString.trim().split(" ");
	nameArray[1] = nameArray[1].toUpperCase();
	nameArray[0] = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
	return nameArray[0] + " " + nameArray[1];
}








