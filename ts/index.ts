import "typings-global"
import colors = require("colors");
import path = require("path");
import readline = require("readline");
import childProcess = require("child_process");
let earlyChild;

let doAnimation:boolean = true;
if(process.argv.indexOf("-v") != -1){
    doAnimation = false;
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
    }
};

export let stop = function(){
    if(doAnimation){
        earlyChild.kill();
        let rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.close();
    }
};

