const core = require("@actions/core");
const github = require("@actions/github");


try {
    // throw(new Error("some error message"));


    core.debug("Debug message");        // Only logs if ACTION_STEP_DEBUG = true, set in GH secrets'
    core.warning("Warning message");
    core.error("ERROR message");      // Won't fail the job, but will log in RED

    const name = core.getInput("who-to-greet");
    core.setSecret(name);       // won't be logged
    console.log(`Hello ${name}`);

    const time = new Date();
    core.setOutput("time", time.toTimeString());


    // Log large JSON object in an expandable group.
    core.startGroup("Logging Github object");
    console.log(JSON.stringify(github, null, 2));
    core.endGroup();


    core.exportVariable("HELLO", "hi");     // Sets an env var on the runner VM

} catch (e) {
    // Need to explicitly set the action as failed in the core package, even if it throws
    core.setFailed("We threw an error or something");
}