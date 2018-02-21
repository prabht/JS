var eventemitter=require('events').EventEmitter;
var util=require('util');
var person=function(name){
this.name=name;
};

util.inherits(person,eventemitter);

module.exports=person;

