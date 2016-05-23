/// <reference path="./typings/index.d.ts" />
let colors = require("colors");
import readline = require("readline");
let rl; 
let initReadline = () => {
    rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });
};

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

let logEarly = () => {
    rl.write(null, {ctrl: true, name: 'u'});
    rl.write(makeFrame());
    setTimeout(function(){
        logEarly();
    },200);
};

let start = function(moduleNameArg:string = "",loaderLengthArg:string = "10"){
    console.log(moduleNameArg);
    moduleName = moduleNameArg;
    loaderLength = parseInt(loaderLengthArg);
    if (!process.env.CI){
        initReadline();
        logEarly();
    } else {
        console.log("**** starting " + moduleName.cyan + " ****");
    };
};

start(process.env.moduleNameArg,process.env.loaderLengthArg);