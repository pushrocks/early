import "typings-global";
import chalk = require("chalk");
import readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let moduleName: string;
let loaderLength: number;
let frameCounter: number = 0;

let makeFrame = (): string => {
    let resultString: string = `[${chalk.green("/".repeat(frameCounter))}${" ".repeat(loaderLength - frameCounter)}] starting ${moduleName}`;
    if (frameCounter == loaderLength) {
        frameCounter = 0;
    } else {
        frameCounter++;
    }
    return resultString;
};

let logEarlyAbort = false;
let logEarly = () => {
    if (!logEarlyAbort) {
        rl.write(null, { ctrl: true, name: 'u' });
        rl.write(makeFrame());
        setTimeout(function () {
            logEarly();
        }, 80);
    }
};

let start = function (moduleNameArg: string = "", loaderLengthArg: string = "10") {
    moduleName = moduleNameArg;
    loaderLength = parseInt(loaderLengthArg);
    logEarly();
};

start(process.env.moduleNameArg, process.env.loaderLengthArg);

process.on('SIGINT', () => {
    logEarlyAbort = true;
    rl.write(null, { ctrl: true, name: 'u' });
    rl.write(`loaded ${chalk.green(moduleName)}`);
    rl.close();
    rl.on("close",() => {
        
    })
});