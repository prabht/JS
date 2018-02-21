var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var realPerson = {
    name: '',
    saying: []
}
var fs = require("fs");


rl.question("what is your name", function (answer) {
    realPerson.name = answer;

    fs.writeFileSync(realPerson.name + ".md", `${realPerson.name}\n================\n\n`);

    rl.setPrompt(`what would ${realPerson.name} say`);
    rl.prompt();
    rl.on('line', function (saying) {
        realPerson.saying.push(saying);
        fs.appendFile(realPerson.name + ".md", `* ${saying.trim()}\n`);
        if (saying.toLowerCase().trim() === 'exit')
            rl.close();
        else {
            rl.setPrompt(`what else would you say ? ('exit' to leave)`);
            rl.prompt();
        }
    });
});


rl.on('close', function () {

    console.log("%s says %j", realPerson.name, realPerson.saying);
    process.exit();
})