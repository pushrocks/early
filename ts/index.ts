/// <reference path="./typings/index.d.ts" />
let colors = require("colors");
let readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let moduleName:string;
let loaderLength:number;
let frameCounter:number = 0;

let makeFrame = ():string => {
    let resultString:string = "["
        + "/".green.repeat(frameCounter)
        + " ".repeat(loaderLength - frameCounter)
        + "]"
        + " starting "
        + moduleName.cyan;

    if(frameCounter == loaderLength){
        frameCounter = 0;
    } else {
        frameCounter++;
    }
    return resultString;
};

let abort:boolean = true;
let logEarly = () => {
    rl.write(null, {ctrl: true, name: 'u'});
    rl.write(makeFrame());
    setTimeout(function(){
        if(!abort){
            logEarly();
        }
    },200);
};


// exports
export let start = function(moduleNameArg:string,loaderLengthArg:number = 10){
    abort = false;
    moduleName = moduleNameArg;
    loaderLength = loaderLengthArg;
    logEarly();
};

export let stop = function(){
    abort = true;
    rl.write(null, {ctrl: true, name: 'u'});
    rl.close();
};

