/// <reference path="./typings/index.d.ts" />
import colors = require("colors");
import path = require("path");

import childProcess = require("child_process");
let earlyChild;
// exports
export let start = function(moduleNameArg:string = "",loaderLengthArg:string = "10"){
    earlyChild = childProcess.fork(path.join(__dirname,"early.child.js"),[],{
        env: {
            moduleNameArg:moduleNameArg,
            loaderLengthArg:loaderLengthArg
        }
    });
};

export let stop = function(){
    earlyChild.kill();
};

