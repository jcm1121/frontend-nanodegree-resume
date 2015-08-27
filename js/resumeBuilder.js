
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
			"description" : "I served ice cream to patrons"
		}
	]
};


var education = {
	"schools" : [
		{
			"name" : "DeAnza Jr. College",
			"location" : "Cupertino",
			"dates" : "1981",
			"degree" : "AS",
			"major" : ["Gen Ed", "PE"]
		},
		{
			"name" : "Las Positas Jr. College",
			"location" : "Livermore",
			"degree" : "AS",
			"major" : ["Comp Sci"]
		}
	],
	"onlineCourses": [
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity",
			"degree" : "Nano Degree",
			"url" : "http://www.Udacity.com/course/ud804"
		}
	]
};



var formattedBioName = HTMLheaderName.replace("%data%", bio.name);
var formattedBioRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPhone = HTMLmobile.replace("%data%", bio.contact_info.phone);
var formattedBioEmail = HTMLemail.replace("%data%", bio.contact_info.email);
var formattedBioGithub = HTMLgithub.replace("%data%", bio.contact_info.github);
var formattedBioLocation = HTMLlocation.replace("%data%", bio.contact_info.location);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.pic);
var formattedBioMessage = HTMLwelcomeMsg.replace("%data%", bio.message);



var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.employer);
var formattedWorkPositions = HTMLworkTitle.replace("%data%", work.position);
var formattedWorkDates = HTMLworkDates.replace("%data%", work.dates);
var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.description);

var formattedSchoolName = HTMLschoolName.replace("%data%", education.schoolName);
var formattedDegree = HTMLschoolDegree.replace("%data%", education.degree);
var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.dates);


$("#header").prepend(formattedBioRole);
$("#header").prepend(formattedBioName);

$("#topContacts").append(formattedBioPhone);
$("#topContacts").append(formattedBioEmail);
$("#topContacts").append(formattedBioGithub);
$("#topContacts").append(formattedBioLocation);

$("#header").append(formattedBioPic);
$("#header").append(formattedBioMessage);
$("#header").append(HTMLskillsStart);

var length = skills.length;
for (var i = 0; i < length; i++) {
	var formattedBioSkills = HTMLskills.replace("%data%", bio.skills.pop());
	$("#header").append(formattedBioSkills);
}


$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(formattedWorkEmployer + formattedWorkPosition);
$("#workExperience").append(formattedWorkDates);
$("#workExperience").append(formattedWorkDescription);

HTMLworkLocation



$("#education").append(HTMLschoolStart);
$("#education").append(formattedSchoolName + formattedDegree);
$("#education").append(formattedSchoolDates);






