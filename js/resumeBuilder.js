
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
	"welcome_message" : "Hi everyone. I am learing a ton!"
}
var  work {}

work.position = "Sr. Technical Team Lead";
work.employer = "AT&T";
work.yearsWorked = "34";
work.city = "San Ramon";


var formattedBioName = HTMLheaderName.replace("%data%", bio.name);
var formattedBioRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPhone = HTMLmobile.replace("%data%", bio.contact_info.phone);
var formattedBioEmail = HTMLemail.replace("%data%", bio.contact_info.email);
var formattedBioGithub = HTMLgithub.replace("%data%", bio.contact_info.github);
var formattedBioLocation = HTMLlocation.replace("%data%", bio.contact_info.location);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.pic);
var formattedWorkPosition = HTMLworkTitle.replace("%data%", work.position);


$("#header").prepend(formattedBioRole);
$("#header").prepend(formattedBioName);
$("#topContacts").append(formattedBioPhone);
$("#topContacts").append(formattedBioEmail);
$("#topContacts").append(formattedBioGithub);
$("#topContacts").append(formattedBioLocation);
$("#header").append(formattedBioPic);
$("#workExperience").append(work.position);


HTMLworkEmployer




var str1 = "audacity";
var str2 = str1.slice(2);
var str3 = str1[1].toUpperCase() + str2;
console.log(str3);

/*
var oldArray = [1,43, 54, 8];
console.log(oldArray);
var newArray = [];
var length = oldArray.length;
for(var i=0; i < length; i++) {
	newArray[i] = oldArray.pop();
	console.log("in for loop");
}
newArray.reverse();
console.log(newArray);
*/
/*
var oldArray = [1,43, 54, 8];
var newArray = [];
newArray = oldArray.slice(0);
var lastElement = newArray.pop();
newArray.push(lastElement +1);
console.log(newArray);
*/
/*
var name = "AlbERt EINstEiN";
var searchIndex = name.search(" ");
var fName = name.slice(0,searchIndex);
fName = fName.toLowerCase();
var finalName = fName.substr(0, 1).toUpperCase() + fName.substr(1);
var lName = name.slice(searchIndex);
lName = lName.toUpperCase();
finalName = finalName + lName;
console.log(finalName);
*/
/*
fName = fName.toLowerCase();
fName.atChar[0].toUpperCase;
console.log(fName);
*/





