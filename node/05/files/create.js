var fs=require("fs");

var md=`
Sample Markdown title
=====================

sample subtitle
===============
point 
point
point

`;

fs.writeFile("sample.md",md.trim(),function(err){

    console.log("file created");
    
})
