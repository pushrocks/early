"use strict";
require("typings-global");
const beautycolor = require("beautycolor");
const smartq = require("smartq");
let doText = false;
let moduleName = 'undefined module name';
let startTime = Date.now();
if (process.argv.indexOf('-v') === -1) {
    doText = true;
}
/**
 * start the loading
 */
exports.start = function (moduleNameArg = '', loaderLengthArg = '10') {
    moduleName = moduleNameArg;
    if (doText) {
        console.log(`**** starting ${beautycolor.coloredString(moduleNameArg, 'green')} ****`);
    }
};
exports.stop = () => {
    let done = smartq.defer();
    let endTime = Date.now();
    let earlyExecutionTime = (endTime - startTime);
    let earlyExecutionTimeString = (earlyExecutionTime / 1000).toString();
    console.log(`... finished loading within ${beautycolor.coloredString(earlyExecutionTimeString, 'blue')}`);
    done.resolve(earlyExecutionTime);
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMEJBQXVCO0FBQ3ZCLDJDQUEwQztBQUMxQyxpQ0FBZ0M7QUFFaEMsSUFBSSxNQUFNLEdBQVksS0FBSyxDQUFBO0FBQzNCLElBQUksVUFBVSxHQUFXLHVCQUF1QixDQUFBO0FBQ2hELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTtBQUUxQixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsTUFBTSxHQUFHLElBQUksQ0FBQTtBQUNmLENBQUM7QUFFRDs7R0FFRztBQUNRLFFBQUEsS0FBSyxHQUFHLFVBQVUsZ0JBQXdCLEVBQUUsRUFBRSxrQkFBMEIsSUFBSTtJQUNyRixVQUFVLEdBQUcsYUFBYSxDQUFBO0lBQzFCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixXQUFXLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDeEYsQ0FBQztBQUNILENBQUMsQ0FBQTtBQUVVLFFBQUEsSUFBSSxHQUFHO0lBQ2hCLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQVUsQ0FBQTtJQUNqQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUE7SUFDeEIsSUFBSSxrQkFBa0IsR0FBVyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsQ0FBQTtJQUN0RCxJQUFJLHdCQUF3QixHQUFXLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDN0UsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsV0FBVyxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDekcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO0lBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO0FBQ3JCLENBQUMsQ0FBQSJ9