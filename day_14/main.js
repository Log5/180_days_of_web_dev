// IMPORTANT VARIABLES

let userName = "";
let userPosition = "Looking for a job";
let userSalary = 0;
let currentDay = 0;
let experience = 0;
let fame = 0;

let skillPointsToAllocate = 5;

//let leadershipSkill = 0;
//let communicationSkill = 0;
//let organisationSkill = 0;
//let teamBuildingSkill = 0; 

let skillObject = {
	leadership: 0,
	communication: 0,
	organisation: 0,
	"team building": 0
};

const levelObject = {

	level_1: {reached: false, exp_amt: 500},
	level_2: {reached: false, exp_amt: 1100},
	level_3: {reached: false, exp_amt: 2400},
	level_4: {reached: false, exp_amt: 4600},
	level_5: {reached: false, exp_amt: 6000},
};


// TEST FUNCTION 

const test = () => {
	
	

}

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
	skillObject.leadership += 1;	
	skillPointsToAllocate--;
	document.getElementById("leadershipSkill").innerHTML = skillObject.leadership;
	document.getElementById("skill_points_to_allocate").innerHTML = skillPointsToAllocate;
};

const increaseCommunication = () => {

	// If no more skill points to allocate, the function stops
	if (skillPointsToAllocate == 0) {
		return alert("No more skill points to allocate!")
	};

	// If remaining skill points to allocate, run the function (increase skill, decrease total points)
	skillObject.communication += 1;	
	skillPointsToAllocate--;
	document.getElementById("communicationSkill").innerHTML = skillObject.communication;
	document.getElementById("skill_points_to_allocate").innerHTML = skillPointsToAllocate;
};

const increaseOrganisation = () => {

	// If no more skill points to allocate, the function stops
	if (skillPointsToAllocate == 0) {
		return alert("No more skill points to allocate!")
	};

	// If remaining skill points to allocate, run the function (increase skill, decrease total points)
	skillObject.organisation += 1;
	skillPointsToAllocate--;
	document.getElementById("organisationSkill").innerHTML = skillObject.organisation;
	document.getElementById("skill_points_to_allocate").innerHTML = skillPointsToAllocate;
};

const increaseTeamBuilding = () => {

	// If no more skill points to allocate, the function stops
	if (skillPointsToAllocate == 0) {
		return alert("No more skill points to allocate!")
	};

	// If remaining skill points to allocate, run the function (increase skill, decrease total points)
	skillObject["team building"] += 1;
	skillPointsToAllocate--;
	document.getElementById("teamBuildingSkill").innerHTML = skillObject.organisation;
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
	document.getElementById("job_posting_page").style.display = "block"

	// UPDATE DASHBOARD INFO
	document.getElementById("db_userName").innerHTML = userName;
	document.getElementById("db_position").innerHTML = userPosition;
	document.getElementById("db_salary").innerHTML = "$" + userSalary + " / year";
	document.getElementById("db_day").innerHTML = currentDay;
	document.getElementById("db_leadership").innerHTML = skillObject.leadership;
	document.getElementById("db_communication").innerHTML = skillObject.communication;
	document.getElementById("db_organisation").innerHTML = skillObject.organisation;
	document.getElementById("db_teamBuilding").innerHTML = skillObject["team building"];
}

// APPLY FOR YOUR FIST JOB //

const applyJob = (jobNum) => {

	// GETTING INFORMATION FROM HTML (COMPANY NAME, ...)
	const job_1_company = document.getElementById("job_1_company").innerHTML;
	const job_1_position = document.getElementById("job_1_position").innerHTML;
	const job_1_salary = document.getElementById("job_1_salary").innerHTML;
	const job_1_required_skill = document.getElementById("job_1_required_skill").innerHTML.toLowerCase();
	const job_1_min_skill = document.getElementById("job_1_min_skill").innerHTML;

	const job_2_company = document.getElementById("job_2_company").innerHTML;
	const job_2_position = document.getElementById("job_2_position").innerHTML;
	const job_2_salary = document.getElementById("job_2_salary").innerHTML;
	const job_2_required_skill = document.getElementById("job_2_required_skill").innerHTML.toLowerCase();
	const job_2_min_skill = document.getElementById("job_2_min_skill").innerHTML;

	const job_3_company = document.getElementById("job_3_company").innerHTML;
	const job_3_position = document.getElementById("job_3_position").innerHTML;
	const job_3_salary = document.getElementById("job_3_salary").innerHTML;
	const job_3_required_skill = document.getElementById("job_3_required_skill").innerHTML.toLowerCase();
	const job_3_min_skill = document.getElementById("job_3_min_skill").innerHTML;

	skillObject[job_1_required_skill]++;

	// DETERMINING WHICH JOB IS BEING APPLIED TO
	if (jobNum == 1) {
		if (skillObject[job_1_required_skill] >= job_1_min_skill) {
			userPosition = job_1_position
			userSalary = job_1_salary
			console.log("Apply ok")
		} else {
			console.log(skillObject[job_1_required_skill])
			return alert("Not skilled enough")
		};
	}
		
	if (jobNum == 2) {
		if (skillObject[job_2_required_skill] >= job_2_min_skill) {
			userPosition = job_2_position
			userSalary = job_2_salary
			console.log("Apply ok")
		} else {
			console.log(skillObject[job_2_required_skill])
			return alert("Not skilled enough")
		};
	}

	if (jobNum == 3) {
		if (skillObject[job_3_required_skill] >= job_3_min_skill) {
			userPosition = job_3_position
			userSalary = job_3_salary
			console.log("Apply ok")
		} else {
			console.log(skillObject[job_3_required_skill])
			return alert("Not skilled enough")
		};
	}

	// HIDDING THE JOB LISTING PAGE
	document.getElementById("job_posting_page").style.display = "none"

	// UPDATING DASHBOARD
	document.getElementById("db_position").innerHTML = userPosition;
	document.getElementById("db_salary").innerHTML = userSalary;
	currentDay++
	document.getElementById("db_day").innerHTML = currentDay;

};


// TASKS FUNCTION

const doTask = (success_rate, exp_amt, fame_amt) => {
	let rate = Math.floor(Math.random() * 101);

	if (rate < success_rate) {
		experience += exp_amt;
		fame += fame_amt;
		currentDay++
		document.getElementById("db_exp").innerHTML = experience;
		document.getElementById("db_fame").innerHTML = fame;
		document.getElementById("db_day").innerHTML = currentDay;
	} else {
		experience += (exp_amt / 2);
		fame -= (fame_amt / 2);
		currentDay++
		document.getElementById("db_exp").innerHTML = experience;
		document.getElementById("db_fame").innerHTML = fame;
		document.getElementById("db_day").innerHTML = currentDay;
	}

	Object.entries(levelObject).forEach((entry) => {
		let cond1 = entry[1]["reached"];
		let cond2 = entry[1]["exp_amt"];
		if (cond1 == false && experience >= cond2) {
			console.log("condition met")
			document.getElementById("db_leadership_button").style.display = "block";
			document.getElementById("db_communication_button").style.display = "block";
			document.getElementById("db_organisation_button").style.display = "block";
			document.getElementById("db_teamBuilding_button").style.display = "block";
			entry[1]["reached"] = true;
			console.log(entry[1]["reached"])
		}
	})

};


const hideButton = () => {
	document.getElementById("db_leadership_button").style.display = "none";
	document.getElementById("db_communication_button").style.display = "none";
	document.getElementById("db_organisation_button").style.display = "none";
	document.getElementById("db_teamBuilding_button").style.display = "none";
}

// LEVEL UP FUNCTION

const increaseDashboardSkill = (skill_name) => {

	switch (skill_name) {
		case (leadershipSkill):
			console.log("Switch execuded")
			skillObject.leadership += 1;
			document.getElementById("db_leadership").innerHTML = skillObject.leadership;
			return hideButton();
			break;
		default:
			console.log("Switch not executed")
	};

};







































