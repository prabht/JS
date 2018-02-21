var fs=require("fs");
if(fs.existsSync("lib")){
console.log("directory already exists");
}
else{
fs.mkdir("lib",function(err){
    if(err){
        console.log(err);}
        else{
            console.log("dir created");

        }
 })
}