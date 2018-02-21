var spawn = require("child_process").spawn;

var cp = spawn("node", ["hi","hello"]);

cp.stdout.on("data", function (data) {
    console.log(`STDOUT:${data.toString()}`);

})

cp.on("close", function () {
    console.log("child process has ended");
    process.exit();

});

setTimeout(function () {
    cd.stdin.write("stop");

}, 4000);