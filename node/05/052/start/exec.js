var exec=require("child_process").exec;

exec("cmd .",function(err,stdout){
    if(err){
        throw err;
    }

    console.log("listing finished");
    console.log(stdout);
});