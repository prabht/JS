var fs=require("fs");

try{
fs.unlinkSync("./lib/b.md");
}
catch(err)
{
    console.log(err);
}

fs.unlink("./lib/b.txt",function(err){
if(err){
    console.log(err);
}
else{
    console.log("b.txt. is removed");
}
})