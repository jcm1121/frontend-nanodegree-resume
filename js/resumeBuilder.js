
var skills = ["Snow Skier", "Happiness", "Engaged", "Hard Worker"];

var contact_info = {
	"phone" : "5104993242",
	"email" : "jimmcpherson@prodigy.net",
	"github" : "jcm1121",
	"location" : "Livermore, CA.",
}

var bio = {
	"name" : "Jim McPherson",
	"role" : "Front End Developer",
	"contact_info" : contact_info,
	"pic" : "images/me_2.jpg",
	"message" : "Hi everyone. I am learing a ton!",
	"skills" : skills
}

var work = {};
	work.position = "Sr. Technical Team Lead";
	work.employer = "AT&T";
	work.dates = "Sept 1981 - Current";
	work.description = "I have had many positions at AT&T over the past 34 years. I will say I started as a TSPS Telephone Operator";

var education = {};
	education["schoolName"] = "Las Positas";
	education["degree"] = "AA";
	education["dates"] = "Jan 2013 - June 2015";

var formattedBioName = HTMLheaderName.replace("%data%", bio.name);
var formattedBioRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPhone = HTMLmobile.replace("%data%", bio.contact_info.phone);
var formattedBioEmail = HTMLemail.replace("%data%", bio.contact_info.email);
var formattedBioGithub = HTMLgithub.replace("%data%", bio.contact_info.github);
var formattedBioLocation = HTMLlocation.replace("%data%", bio.contact_info.location);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.pic);
var formattedBioMessage = HTMLwelcomeMsg.replace("%data%", bio.message);



var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.employer);
var formattedWorkPosition = HTMLworkTitle.replace("%data%", work.position);
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






