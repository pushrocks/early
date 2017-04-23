"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("typings-global");
const beautycolor = require("beautycolor");
const smartq = require("smartq");
const process = require("process");
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
class hrtMeasurement {
    constructor() {
        this._started = false;
    }
    start() {
        this._started = true;
        this._hrTimeStart = process.hrtime();
    }
    stop() {
        if (this._started === false) {
            console.log('Hasn\'t started yet');
            return;
        }
        let diffTime = process.hrtime(this._hrTimeStart);
        let nanoSeconds = (diffTime[0] * 1e9) + diffTime[1];
        let milliSeconds = nanoSeconds / 1000000;
        return {
            nanoSeconds: nanoSeconds,
            milliSeconds: milliSeconds
        };
    }
}
exports.hrtMeasurement = hrtMeasurement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBCQUF1QjtBQUN2QiwyQ0FBMEM7QUFDMUMsaUNBQWdDO0FBQ2hDLG1DQUFrQztBQUVsQyxJQUFJLE1BQU0sR0FBWSxLQUFLLENBQUE7QUFDM0IsSUFBSSxVQUFVLEdBQVcsdUJBQXVCLENBQUE7QUFDaEQsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFBO0FBRTFCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QyxNQUFNLEdBQUcsSUFBSSxDQUFBO0FBQ2YsQ0FBQztBQUVEOztHQUVHO0FBQ1EsUUFBQSxLQUFLLEdBQUcsVUFBVSxnQkFBd0IsRUFBRSxFQUFFLGtCQUEwQixJQUFJO0lBQ3JGLFVBQVUsR0FBRyxhQUFhLENBQUE7SUFDMUIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLFdBQVcsQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUN4RixDQUFDO0FBQ0gsQ0FBQyxDQUFBO0FBRVUsUUFBQSxJQUFJLEdBQUc7SUFDaEIsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBVSxDQUFBO0lBQ2pDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTtJQUN4QixJQUFJLGtCQUFrQixHQUFXLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxDQUFBO0lBQ3RELElBQUksd0JBQXdCLEdBQVcsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUM3RSxPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxXQUFXLENBQUMsYUFBYSxDQUFDLHdCQUF3QixFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUM1RyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUE7SUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7QUFDckIsQ0FBQyxDQUFBO0FBRUQ7SUFBQTtRQUNVLGFBQVEsR0FBWSxLQUFLLENBQUE7SUFtQm5DLENBQUM7SUFqQkMsS0FBSztRQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBQ3RDLENBQUM7SUFDRCxJQUFJO1FBQ0YsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQTtZQUNsQyxNQUFNLENBQUE7UUFDUixDQUFDO1FBQ0QsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDaEQsSUFBSSxXQUFXLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ25ELElBQUksWUFBWSxHQUFHLFdBQVcsR0FBRyxPQUFPLENBQUE7UUFDeEMsTUFBTSxDQUFDO1lBQ0wsV0FBVyxFQUFFLFdBQVc7WUFDeEIsWUFBWSxFQUFFLFlBQVk7U0FDM0IsQ0FBQTtJQUNILENBQUM7Q0FDRjtBQXBCRCx3Q0FvQkMifQ==