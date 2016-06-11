import "typings-global";
let colors = require("colors");
import readline = require("readline");
let rl = readline.createInterface({
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

let logEarlyAbort = false;
let logEarly = () => {
    rl.write(null, {ctrl: true, name: 'u'});
    rl.write(makeFrame());
    setTimeout(function(){
        if(!logEarlyAbort) logEarly();
    },80);
};

let start = function(moduleNameArg:string = "",loaderLengthArg:string = "10"){
    moduleName = moduleNameArg;
    loaderLength = parseInt(loaderLengthArg);
    logEarly();
};

start(process.env.moduleNameArg,process.env.loaderLengthArg);

process.on('SIGINT', () => {
    logEarlyAbort = true;
    rl.write(null, {ctrl: true, name: 'u'});
    rl.close();
});