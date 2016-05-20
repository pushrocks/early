/// <reference path="./typings/index.d.ts" />
let colors = require("colors");
let ora = require("ora");
let earlyOra;

export let start = function(moduleStringArg:string){
    earlyOra = ora({
        text:"Loading " + moduleStringArg.green,
        spinner:"bouncingBar"
    });
    earlyOra.start();
};

export let stop = function(){
    earlyOra.stop();
};

