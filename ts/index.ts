/// <reference path="./typings/index.d.ts" />
let colors = require("colors");
let readline = require("readline");

import childProcess = require("child_process");
let earlyChild;
// exports
export let start = function(moduleNameArg:string = "",loaderLengthArg:string = "10"){
    earlyChild = childProcess.fork("./dist/early.child.js",[],{
        env: {
            moduleNameArg:moduleNameArg,
            loaderLengthArg:loaderLengthArg
        }
    });
};

export let stop = function(){
    earlyChild.kill();
};

