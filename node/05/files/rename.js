var fs=require("fs");

fs.renameSync("./lib/a.txt","./lib/b.md")

console.log("config json file renamed");
 
fs.rename("./lib/b.txt","./b.txt",function(err){

    if(err){
        console.log(err);
    }
    else{
        console.log("moved");
    }
})