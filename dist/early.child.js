"use strict";
require("typings-global");
const chalk = require("chalk");
const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let moduleName;
let loaderLength;
let frameCounter = 0;
let makeFrame = () => {
    let resultString = `[${chalk.green("/".repeat(frameCounter))}${" ".repeat(loaderLength - frameCounter)}] starting ${moduleName}`;
    if (frameCounter == loaderLength) {
        frameCounter = 0;
    }
    else {
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
let start = function (moduleNameArg = "", loaderLengthArg = "10") {
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
    rl.on("close", () => {
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWFybHkuY2hpbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9lYXJseS5jaGlsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsUUFBTyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3hCLE1BQU8sS0FBSyxXQUFXLE9BQU8sQ0FBQyxDQUFDO0FBQ2hDLE1BQU8sUUFBUSxXQUFXLFVBQVUsQ0FBQyxDQUFDO0FBQ3RDLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUM7SUFDOUIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO0lBQ3BCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtDQUN6QixDQUFDLENBQUM7QUFFSCxJQUFJLFVBQWtCLENBQUM7QUFDdkIsSUFBSSxZQUFvQixDQUFDO0FBQ3pCLElBQUksWUFBWSxHQUFXLENBQUMsQ0FBQztBQUU3QixJQUFJLFNBQVMsR0FBRztJQUNaLElBQUksWUFBWSxHQUFXLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDLGNBQWMsVUFBVSxFQUFFLENBQUM7SUFDekksRUFBRSxDQUFDLENBQUMsWUFBWSxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDL0IsWUFBWSxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixZQUFZLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBQ0QsTUFBTSxDQUFDLFlBQVksQ0FBQztBQUN4QixDQUFDLENBQUM7QUFFRixJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUM7QUFDMUIsSUFBSSxRQUFRLEdBQUc7SUFDWCxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDakIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUN0QixVQUFVLENBQUM7WUFDUCxRQUFRLEVBQUUsQ0FBQztRQUNmLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNYLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFRixJQUFJLEtBQUssR0FBRyxVQUFVLGFBQWEsR0FBVyxFQUFFLEVBQUUsZUFBZSxHQUFXLElBQUk7SUFDNUUsVUFBVSxHQUFHLGFBQWEsQ0FBQztJQUMzQixZQUFZLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3pDLFFBQVEsRUFBRSxDQUFDO0FBQ2YsQ0FBQyxDQUFDO0FBRUYsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFOUQsT0FBTyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDakIsYUFBYSxHQUFHLElBQUksQ0FBQztJQUNyQixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDMUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNYLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFDO0lBRWQsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQyJ9