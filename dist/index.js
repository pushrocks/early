"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("typings-global");
const beautycolor = require("beautycolor");
const smartq = require("smartq");
const early_hrtMeasurement_1 = require("./early.hrtMeasurement");
exports.HrtMeasurement = early_hrtMeasurement_1.HrtMeasurement;
let doText = false;
let moduleName = 'undefined module name';
let startHrt;
if (process.argv.indexOf('-v') === -1) {
    doText = true;
}
/**
 * start the loading
 */
exports.start = function (moduleNameArg = '', loaderLengthArg = '10') {
    moduleName = moduleNameArg;
    startHrt = new early_hrtMeasurement_1.HrtMeasurement();
    startHrt.start();
    if (doText) {
        console.log(`**** starting ${beautycolor.coloredString(moduleNameArg, 'green')} ****`);
    }
};
exports.stop = () => {
    let done = smartq.defer();
    let earlyExecutionTime = startHrt.stop().milliSeconds;
    let earlyExecutionTimeString = (earlyExecutionTime / 1000).toString();
    console.log(`OK! -> finished loading within ${beautycolor.coloredString(earlyExecutionTimeString, 'blue')}`);
    done.resolve(earlyExecutionTime);
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBCQUF1QjtBQUN2QiwyQ0FBMEM7QUFDMUMsaUNBQWdDO0FBQ2hDLGlFQUF1RDtBQUdyRCx5QkFITyxxQ0FBYyxDQUdQO0FBR2hCLElBQUksTUFBTSxHQUFZLEtBQUssQ0FBQTtBQUMzQixJQUFJLFVBQVUsR0FBVyx1QkFBdUIsQ0FBQTtBQUNoRCxJQUFJLFFBQXdCLENBQUE7QUFFNUIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLE1BQU0sR0FBRyxJQUFJLENBQUE7QUFDZixDQUFDO0FBRUQ7O0dBRUc7QUFDUSxRQUFBLEtBQUssR0FBRyxVQUFVLGdCQUF3QixFQUFFLEVBQUUsa0JBQTBCLElBQUk7SUFDckYsVUFBVSxHQUFHLGFBQWEsQ0FBQTtJQUMxQixRQUFRLEdBQUcsSUFBSSxxQ0FBYyxFQUFFLENBQUE7SUFDL0IsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2hCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixXQUFXLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDeEYsQ0FBQztBQUNILENBQUMsQ0FBQTtBQUVVLFFBQUEsSUFBSSxHQUFHO0lBQ2hCLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQVUsQ0FBQTtJQUNqQyxJQUFJLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUE7SUFDckQsSUFBSSx3QkFBd0IsR0FBVyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQzdFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLFdBQVcsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQzVHLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtJQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtBQUNyQixDQUFDLENBQUEifQ==