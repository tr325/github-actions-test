cost core = require("@actions/core");
cost github = require("@actions/github");


try {
	// throw(new Error("some error message"));


	const name = core.getInput("who-to-greet");
	console.log(`Hello ${name}`);

	const time = new Date();
	core.setOutput("time", time.toTimeString());


	console.log(JSON.stringify(github, null, 2));
} catch (e) {
	// Need to explicitly set the action as failed in the core package, even if it throws
	core.setFailed("We threw an error or something");
}