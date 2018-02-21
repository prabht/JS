var eventemitter=require('events').EventEmitter;
var util=require('util');
var person=function(name){
this.name=name;
};

util.inherits(person,eventemitter);

var pt=new person("Prabhav");
pt.on('speak',function(said){
    console.log(`${this.name}:${said}`);
})

pt.emit('speak',"you may delay,but time will not");

