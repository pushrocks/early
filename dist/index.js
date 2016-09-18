"use strict";
require("typings-global");
const chalk = require("chalk");
const q = require("q");
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
        console.log(`**** starting ${chalk.green(moduleNameArg)} ****`);
    }
};
exports.stop = () => {
    let done = q.defer();
    let endTime = Date.now();
    let earlyExecutionTime = (endTime - startTime);
    let earlyExecutionTimeString = (earlyExecutionTime / 1000).toString();
    console.log(`... finished loading ${moduleName} in ${earlyExecutionTimeString}`);
    done.resolve(earlyExecutionTime);
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMEJBQXVCO0FBRXZCLCtCQUErQjtBQUMvQix1QkFBdUI7QUFHdkIsSUFBSSxNQUFNLEdBQVksS0FBSyxDQUFBO0FBQzNCLElBQUksVUFBVSxHQUFXLHVCQUF1QixDQUFBO0FBQ2hELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTtBQUUxQixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEMsTUFBTSxHQUFHLElBQUksQ0FBQTtBQUNqQixDQUFDO0FBRUQ7O0dBRUc7QUFDUSxRQUFBLEtBQUssR0FBRyxVQUFVLGFBQWEsR0FBVyxFQUFFLEVBQUUsZUFBZSxHQUFXLElBQUk7SUFDbkYsVUFBVSxHQUFHLGFBQWEsQ0FBQTtJQUMxQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDbkUsQ0FBQztBQUNMLENBQUMsQ0FBQTtBQUVVLFFBQUEsSUFBSSxHQUFHO0lBQ2QsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBVSxDQUFBO0lBQzVCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTtJQUN4QixJQUFJLGtCQUFrQixHQUFXLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxDQUFBO0lBQ3RELElBQUksd0JBQXdCLEdBQVcsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUM3RSxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixVQUFVLE9BQU8sd0JBQXdCLEVBQUUsQ0FBQyxDQUFBO0lBQ2hGLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtJQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtBQUN2QixDQUFDLENBQUEifQ==