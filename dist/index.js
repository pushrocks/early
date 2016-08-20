"use strict";
require("typings-global");
const path = require("path");
const chalk = require("chalk");
let q = require("q");
const childProcess = require("child_process");
let earlyChild;
let doAnimation = true;
let doText = false;
let moduleName = "undefined module name";
let startTime;
if (process.argv.indexOf("-v") != -1 || process.env.CI) {
    doAnimation = false;
}
if (process.argv.indexOf("-v") == -1 && process.env.CI) {
    doText = true;
}
// exports
exports.start = function (moduleNameArg = "", loaderLengthArg = "10") {
    startTime = Date.now();
    moduleName = moduleNameArg;
    if (doAnimation) {
        earlyChild = childProcess.fork(path.join(__dirname, "early.child.js"), [], {
            env: {
                moduleNameArg: moduleNameArg,
                loaderLengthArg: loaderLengthArg,
                CI: process.env.CI
            }
        });
    }
    else if (doText) {
        console.log(`**** starting ${chalk.green(moduleNameArg)} ****`);
    }
};
exports.stop = function () {
    let done = q.defer();
    let endTime = Date.now();
    let executionTime = ((endTime - startTime) / 1000).toString();
    if (doAnimation) {
        earlyChild.kill("SIGINT");
        earlyChild.on("close", function () {
            console.log(` in ${executionTime} seconds!`);
            done.resolve();
        });
    }
    else {
        console.log(`... finished loading ${moduleName} in ${executionTime}`);
        done.resolve();
    }
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsUUFBTyxnQkFDUCxDQUFDLENBRHNCO0FBQ3ZCLE1BQU8sSUFBSSxXQUFXLE1BQU0sQ0FBQyxDQUFDO0FBQzlCLE1BQU8sS0FBSyxXQUFXLE9BQU8sQ0FBQyxDQUFDO0FBQ2hDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUVyQixNQUFPLFlBQVksV0FBVyxlQUFlLENBQUMsQ0FBQztBQUMvQyxJQUFJLFVBQVUsQ0FBQztBQUVmLElBQUksV0FBVyxHQUFZLElBQUksQ0FBQztBQUNoQyxJQUFJLE1BQU0sR0FBWSxLQUFLLENBQUM7QUFDNUIsSUFBSSxVQUFVLEdBQVcsdUJBQXVCLENBQUM7QUFDakQsSUFBSSxTQUFTLENBQUM7QUFFZCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckQsV0FBVyxHQUFHLEtBQUssQ0FBQztBQUN4QixDQUFDO0FBQ0QsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JELE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDbEIsQ0FBQztBQUVELFVBQVU7QUFDQyxhQUFLLEdBQUcsVUFBVSxhQUFhLEdBQVcsRUFBRSxFQUFFLGVBQWUsR0FBVyxJQUFJO0lBRW5GLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFFdkIsVUFBVSxHQUFHLGFBQWEsQ0FBQztJQUMzQixFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ2QsVUFBVSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDdkUsR0FBRyxFQUFFO2dCQUNELGFBQWEsRUFBRSxhQUFhO2dCQUM1QixlQUFlLEVBQUUsZUFBZTtnQkFDaEMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTthQUNyQjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixLQUFLLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwRSxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRVMsWUFBSSxHQUFHO0lBQ2QsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN6QixJQUFJLGFBQWEsR0FBVSxDQUFDLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDZCxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFCLFVBQVUsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxhQUFhLFdBQVcsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLFVBQVUsT0FBTyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDeEIsQ0FBQyxDQUFDIn0=