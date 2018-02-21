// var eventemitter=require('events').EventEmitter;
// var util=require('util');
// var person=function(name){
// this.name=name;
// };

// util.inherits(person,eventemitter);

var person=require("./lib/person");


var pt=new person("Prabhav");

var pt2=new person("prabhs");

pt2.on('speak',function(said){

    console.log(`${this.name}:${said}`);
});
pt.on('speak',function(said){
    console.log(`${this.name}:${said}`);
});

pt.emit('speak',"you may delay,but time will not");


pt2.emit('speak',"kasdnakdasdakdn");
