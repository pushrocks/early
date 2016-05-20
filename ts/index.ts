/// <reference path="./typings/index.d.ts" />
let colors = require("colors");
let readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export let start = function(moduleStringArg:string){
    rl.write('Delete me!');
    setTimeout(function(){
        rl.write(null, {ctrl: true, name: 'u'});
    },1000);
};

export let stop = function(){
    
};

