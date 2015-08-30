
var skills = ["Snow Skier", "Happiness", "Engaged", "Hard Worker"];

var contact_info = {
	"phone" : "5104993242",
	"email" : "jimmcpherson@prodigy.net",
	"github" : "jcm1121",
	"location" : "Livermore, CA.",
};

var bio = {
	"name" : "Jim McPherson",
	"role" : "Front End Developer",
	"contact_info" : contact_info,
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
			"image" : "images/197x148.gif"
		},
		{
			"title" : "Retail Store IVR - Add CSI Data Dips",
			"dates" : "Sept 2015",
			"description" : "Add CSI Data Dip using caller's TN to Alternate Menu. Control data dip at the store level",
			"image" : "images/197x148.gif"
		},
		{
			"title" : "Retail Store IVR - Alternate Menu",
			"dates" : "Aug 2015",
			"description" : "Add Alternate Menu with additional sub menus and prompting. Alternate Menu is toggled at the store level",
			"image" : "images/197x148.gif"
		}
	]
};

//Begin Header section
// Load BIO Information from the BIO JSOP object
var formattedBioName = HTMLheaderName.replace("%data%", bio.name);
var formattedBioRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPhone = HTMLmobile.replace("%data%", bio.contact_info.phone);
var formattedBioEmail = HTMLemail.replace("%data%", bio.contact_info.email);
var formattedBioGithub = HTMLgithub.replace("%data%", bio.contact_info.github);
var formattedBioLocation = HTMLlocation.replace("%data%", bio.contact_info.location);
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

// loop through Skills array, populate the formatted skills
// and append to the DIV ID Header
var length = skills.length;
for (var i = 0; i < length; i++) {
	var formattedBioSkills = HTMLskills.replace("%data%", bio.skills.pop());
	$("#header").append(formattedBioSkills);
}

//Begin Work Experience section
// assign the length of work.jobs array to workLength variable
var workLength = work.jobs.length;

// loop through the work JSON to populate
// formattedWork variables, then append the DIV ID=workExperience
// using the formattedWork values
for (var i=0; i< workLength; i++) {
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





















