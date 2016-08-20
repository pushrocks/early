import "typings-global"
import path = require("path");
import chalk = require("chalk");
let q = require("q");
import readline = require("readline");
import childProcess = require("child_process");
let earlyChild;

let doAnimation: boolean = true;
let doText: boolean = false;
let moduleName:string = "undefined module name";
let startTime;

if (process.argv.indexOf("-v") != -1 || process.env.CI) {
    doAnimation = false;
} else if (process.argv.indexOf("-v") == -1) {
    doText = true;
}

// exports
export let start = function (moduleNameArg: string = "", loaderLengthArg: string = "10") {
    
    startTime = process.hrtime();

    moduleName = moduleNameArg;
    if (doAnimation) {
        earlyChild = childProcess.fork(path.join(__dirname, "early.child.js"), [], {
            env: {
                moduleNameArg: moduleNameArg,
                loaderLengthArg: loaderLengthArg,
                CI: process.env.CI
            }
        });
    } else if (doText) {
        console.log(`**** starting ${chalk.green(moduleNameArg)} ****`);
    }
};

export let stop = function () {
    let done = q.defer();
    let endTime = process.hrtime(startTime);
    let executionTime = function(){
        try {
            return(endTime[0] * 1e9 + endTime[1]);
        }
        catch(err){
            return undefined;
        }
    }() / 1000000000;
    if (doAnimation) {
        earlyChild.kill("SIGHUP");
        earlyChild.on("close", function () {
            console.log(` in ${executionTime} seconds!`);
            done.resolve();
        })
    } else {
        console.log(`... finished loading moduleName in ${executionTime}`);
        done.resolve();
    }
    return done.promise;
};

