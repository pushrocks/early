"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    console.log(`OK! -> finished loading within ${beautycolor.coloredString(earlyExecutionTimeString, 'blue')}`);
    done.resolve(earlyExecutionTime);
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBCQUF1QjtBQUN2QiwyQ0FBMEM7QUFDMUMsaUNBQWdDO0FBRWhDLElBQUksTUFBTSxHQUFZLEtBQUssQ0FBQTtBQUMzQixJQUFJLFVBQVUsR0FBVyx1QkFBdUIsQ0FBQTtBQUNoRCxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUE7QUFFMUIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLE1BQU0sR0FBRyxJQUFJLENBQUE7QUFDZixDQUFDO0FBRUQ7O0dBRUc7QUFDUSxRQUFBLEtBQUssR0FBRyxVQUFVLGdCQUF3QixFQUFFLEVBQUUsa0JBQTBCLElBQUk7SUFDckYsVUFBVSxHQUFHLGFBQWEsQ0FBQTtJQUMxQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsV0FBVyxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3hGLENBQUM7QUFDSCxDQUFDLENBQUE7QUFFVSxRQUFBLElBQUksR0FBRztJQUNoQixJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFVLENBQUE7SUFDakMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFBO0lBQ3hCLElBQUksa0JBQWtCLEdBQVcsQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLENBQUE7SUFDdEQsSUFBSSx3QkFBd0IsR0FBVyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQzdFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLFdBQVcsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQzVHLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtJQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtBQUNyQixDQUFDLENBQUEifQ==