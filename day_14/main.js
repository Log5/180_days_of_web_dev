// IMPORTANT VARIABLES

let userName = "";
let userPosition = "Looking for a job";
let userSalary = 0;
let currentDay = 0;

let skillPointsToAllocate = 5;

let leadershipSkill = 0;
let communicationSkill = 0;
let organisationSkill = 0;
let teamBuildingSkill = 0; 


// SUBMIT NAME FUNCTION 

const submitName = () => {
	userName = document.getElementById("input_choose_name").value; // get user name

	if (userName == "") {
		return alert("User name required :)")
	};

	document.getElementById("choose_name_box").style.display = "none";
	document.getElementById("welcome_message_box").style.display = "block";
	document.getElementById("userName").innerHTML = userName;
	
};


// INCREASE SKILLS FUNCTIONS

const increaseLeadershipSkill = () => {

	// If no more skill points to allocate, the function stops
	if (skillPointsToAllocate == 0) {
		return alert("No more skill points to allocate!")
	};

	// If remaining skill points to allocate, run the function (increase skill, decrease total points)
	leadershipSkill++;
	skillPointsToAllocate--;
	document.getElementById("leadershipSkill").innerHTML = leadershipSkill;
	document.getElementById("skill_points_to_allocate").innerHTML = skillPointsToAllocate;
};

const increaseCommunication = () => {

	// If no more skill points to allocate, the function stops
	if (skillPointsToAllocate == 0) {
		return alert("No more skill points to allocate!")
	};

	// If remaining skill points to allocate, run the function (increase skill, decrease total points)
	communicationSkill++;
	skillPointsToAllocate--;
	document.getElementById("communicationSkill").innerHTML = communicationSkill;
	document.getElementById("skill_points_to_allocate").innerHTML = skillPointsToAllocate;
};

const increaseOrganisation = () => {

	// If no more skill points to allocate, the function stops
	if (skillPointsToAllocate == 0) {
		return alert("No more skill points to allocate!")
	};

	// If remaining skill points to allocate, run the function (increase skill, decrease total points)
	organisationSkill++;
	skillPointsToAllocate--;
	document.getElementById("organisationSkill").innerHTML = organisationSkill;
	document.getElementById("skill_points_to_allocate").innerHTML = skillPointsToAllocate;
};

const increaseTeamBuilding = () => {

	// If no more skill points to allocate, the function stops
	if (skillPointsToAllocate == 0) {
		return alert("No more skill points to allocate!")
	};

	// If remaining skill points to allocate, run the function (increase skill, decrease total points)
	teamBuildingSkill++;
	skillPointsToAllocate--;
	document.getElementById("teamBuildingSkill").innerHTML = teamBuildingSkill;
	document.getElementById("skill_points_to_allocate").innerHTML = skillPointsToAllocate;
};


// START LOOKING FOR JOBS BUTTON

const lookForJobs = () => {

	//If remain skill points to allocate, the function stops
	if (skillPointsToAllocate > 0) {
		return alert("You still have some skill points to allocate :)")
	};

	//Hide current screen and show next screen
	document.getElementById("welcome_message_box").style.display = "none";
	document.getElementById("dashboard").style.display = "block";

	document.getElementById("db_userName").innerHTML = userName;
	document.getElementById("db_position").innerHTML = userPosition;
	document.getElementById("db_salary").innerHTML = "$" + userSalary + " / year";
	document.getElementById("db_day").innerHTML = currentDay;
	document.getElementById("db_leadership").innerHTML = leadershipSkill;
	document.getElementById("db_communication").innerHTML = communicationSkill;
	document.getElementById("db_organisation").innerHTML = organisationSkill;
	document.getElementById("db_teamBuilding").innerHTML = teamBuildingSkill;
}










































