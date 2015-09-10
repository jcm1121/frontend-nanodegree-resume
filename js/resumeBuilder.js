// BIO JSON
var bio = {
	'name' : 'Jim McPherson',
	'role' : 'Front End Developer',
	'contacts' : {
		'phone' : '5104993242',
		'email' : 'jimmcpherson@prodigy.net',
		'github' : 'jcm1121',
		'location' : 'Livermore, CA.'
		},
	'pic' : 'images/me_2.jpg',
	'message' : 'Hi everyone. I am learing a ton! I have worked for the phone company, now AT&T, for 34 years!',
	'skills' : ['Snow Skier',
				'Happiness',
				'Engaged',
				'Hard Worker',
				'Early Riser',
				'Java',
				'JavaScript',
				'HTML']
};

bio.display =  function() {
	//Populate formatted BIO Information from the JSON BIO object
	var formattedBioName = HTMLheaderName.replace('%data%', bio.name);
	var formattedBioRole = HTMLheaderRole.replace('%data%', bio.role);
	var formattedBioPhone = HTMLmobile.replace('%data%', bio.contacts.phone);
	var formattedBioEmail = HTMLemail.replace('%data%', bio.contacts.email);
	var formattedBioGithub = HTMLgithub.replace('%data%', bio.contacts.github);
	var formattedBioLocation = HTMLlocation.replace('%data%', bio.contacts.location);
	var formattedBioPic = HTMLbioPic.replace('%data%', bio.pic);
	var formattedBioMessage = HTMLwelcomeMsg.replace('%data%', bio.message);

	//Populate the  DIV ID=header and DIV ID=topContacts with
	//formatted BIO information
	$('#header').prepend(formattedBioRole);
	$('#header').prepend(formattedBioName);
	$('#topContacts').append(formattedBioPhone);
	$('#topContacts').append(formattedBioEmail);
	$('#topContacts').append(formattedBioGithub);
	$('#topContacts').append(formattedBioLocation);
	$('#header').append(formattedBioPic);
	$('#header').append(formattedBioMessage);
	$('#header').append(HTMLskillsStart);

	// loop through Skills array, populate formatted bio skills
	// and append to the DIV ID=Header
	if (bio.skills.length > 0) {
		var length = bio.skills.length;
		for (var i = 0; i < length; i++) {
			var formattedBioSkills = HTMLskills.replace('%data%', bio.skills.pop());
			$('#header').append(formattedBioSkills);
		};
	};
};

// Work Experience JSON
var work = {
	'jobs' : [
		{
			'employer' : 'Pacific Bell',
			'title' : 'Staff Associate',
			'location' : 'San Ramon, CA.',
			'dates' : 'June 1987 - June 1991',
			'description' : 'Clerical Staff Associate'
		},
		{
			'employer' : 'Pacific Bell',
			'title' : 'TSPS Operator',
			'location' : 'San Jose, CA.',
			'dates' : 'Sept 1981 - June 1987',
			'description' : 'TSPS Operator right out of highschool'
		},
		{
			'employer' : 'Sunnyvale Hardware',
			'title' : 'Associate',
			'location' : 'Sunnyvale, CA.',
			'dates' : 'June 1980 - June 1981',
			'description' : 'Floor associate during my senior year in highschool'
		},
		{
			'employer' : 'Winn Dixie Supermarket',
			'title' : 'Courtesy Clerk',
			'location' : 'Miami, FL.',
			'dates' : 'Jan 1980',
			'description' : 'I served as a courtesy clerk at the Supermarket'
		},
		{
			'employer' : '31 Flavors',
			'title' : 'attendant',
			'location' : 'West LA, CA.',
			'dates' : 'June 1978 - June 1979',
			'description' : 'I served ice cream to patrons as a young teenager'
		}
	]
};

work.display = function() {
	// loop through the work JSON to populate
	// formattedWork variables, then append the DIV ID=workExperience
	// using the formattedWork values
	//for (var i=0; i< workLength; i++) {
	for (i in work.jobs) {
		var formattedWorkEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
		var formattedWorkPosition = HTMLworkTitle.replace('%data%', work.jobs[i].title);
		var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
		var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
		var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);
		$('#workExperience').append(HTMLworkStart);
		$('#workExperience').append(formattedWorkEmployer + formattedWorkPosition);
		$('#workExperience').append(formattedWorkDates);
		$('#workExperience').append(formattedWorkLocation);
		$('#workExperience').append(formattedWorkDescription);
	};
}

// PROJECTS JSON
var projects = {
	'projects' : [
		{
			'title' : 'Retail Store IVR - Add SMS Messaging',
			'dates' : 'Oct 2015',
			'description' : 'Add SMS Messaging for callers using smartphones',
			'image' : ['images/cartoonPic1.jpg', 'images/cartoonPic2.jpg']
		},
		{
			'title' : 'Retail Store IVR - Add CSI Data Dips',
			'dates' : 'Sept 2015',
			'description' : "Add CSI Data Dip using caller's TN to Alternate Menu. Control data dip at the store level",
			'image' : ['images/cartoonPic6.jpg', 'images/cartoonPic7.jpg']
		},
		{
			'title' : 'Retail Store IVR - Alternate Menu',
			'dates' : 'Aug 2015',
			'description' : 'Add Alternate Menu with additional sub menus and prompting. Alternate Menu is toggled at the store level',
			'image' : ['images/cartoonPic5.jpg', 'images/cartoonPic8.jpg']
		}
	]
};

projects.display = function() {
	for(var i in projects.projects) {
		$('#projects').append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
		var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);
		$('.projects-entry:last').append(formattedProjectTitle);
		$('.projects-entry:last').append(formattedProjectDates);
		$('.projects-entry:last').append(formattedProjectDescription);
		if (projects.projects[i].image.length > 0) {
			for(var y in projects.projects[i].image) {
				var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.projects[i].image[y]);
				$('.projects-entry:last').append(formattedProjectImage);
			};
		};
	};
}

// EDUCATION JSON
var education = {
	'schools' : [
		{
			'name' : 'Las Positas Jr. College',
			'degree' : 'AS',
			'dates' : '2013 - 2015',
			'location' : 'Livermore, CA.',
			'major' : ['Comp Sci', 'Gen Ed']
		},
		{
			'name' : 'Las Positas Jr. College',
			'degree' : 'AS',
			'dates' : '2009 - 2010',
			'location' : 'Livermore, CA.',
			'major' : ['Gen Ed']
		},
		{
			'name' : 'DeAnza Jr. College',
			'degree' : 'AS',
			'dates' : '1981',
			'location' : 'Cupertino, CA.',
			'major' : ['Gen Ed']
		}
	],
	'onlineCourses': [
		{
			'title' : 'JavaScript Basics',
			'school' : 'Udacity',
			'dates' : 'July 2015 - February 2016',
			'url' : 'http://www.Udacity.com/'
		}
	]
};

education.display =  function() {
	//Begin Education section
	$('#education').append(HTMLschoolStart);
	// loop through the education JSON to populate
	// formatted School variables, then append the DIV ID=education
	// using the formattedSchool values
	for(var i in education.schools) {
		var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[i].name);
		var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
		var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[i].major);
		//use jQuery to append the formatted Education Elements to the Div Id=education
		$('#education').append(formattedSchoolName + formattedDegree);
		$('#education').append(formattedSchoolDates);
		$('#education').append(formattedSchoolLocation);
		$('#education').append(formattedSchoolMajor);
	};

	//Begin Online Courses section
	$('#education').append(HTMLonlineClasses);
	//loop through Online courses and populate
	//the formatted Online course variables, then append the DIV ID=education
	//using the formatted online course values
	for (var i in education.onlineCourses) {
		var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school);
		var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[i].dates);
		var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[i].url);
		$('#education').append(formattedOnlineTitle + formattedOnlineSchool);
		$('#education').append(formattedOnlineDates);
		$('#education').append(formattedOnlineURL);
	};
}

// call the display element in bio, projects, education, and work
//JSON objects to display the resume
projects.display();
education.display();
work.display();
bio.display();

$('#mapDiv').append(googleMap);
