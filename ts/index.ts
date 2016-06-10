import "typings-global"
import colors = require("colors");
import path = require("path");
import readline = require("readline");
import childProcess = require("child_process");
let earlyChild;

let doAnimation:boolean = true;
let doText:boolean = false;
if(process.argv.indexOf("-v") != -1 || process.env.CI){
    doAnimation = false;
} else if(process.argv.indexOf("-v") == -1){
    doText = true;
}

// exports
export let start = function(moduleNameArg:string = "",loaderLengthArg:string = "10"){
    if(doAnimation){
        earlyChild = childProcess.fork(path.join(__dirname,"early.child.js"),[],{
            env: {
                moduleNameArg:moduleNameArg,
                loaderLengthArg:loaderLengthArg,
                CI: process.env.CI
            }
        });
    } else if (doText) {
        console.log("**** starting " + moduleNameArg.cyan + " ****");
    }
};

export let stop = function(){
    if(doAnimation){
        earlyChild.kill();
    }
};

