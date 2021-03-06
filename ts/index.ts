import * as consolecolor from '@pushrocks/consolecolor';
import * as smartpromise from '@pushrocks/smartpromise';
import { HrtMeasurement } from './early.hrtMeasurement';

export { HrtMeasurement };

let doText: boolean = false;
let moduleName: string = 'undefined module name';
let startHrt: HrtMeasurement;

if (process.argv.indexOf('-v') === -1) {
  doText = true;
}

/**
 * start the loading
 */
export let start = function (moduleNameArg: string = '', loaderLengthArg: string = '10') {
  moduleName = moduleNameArg;
  startHrt = new HrtMeasurement();
  startHrt.start();
  if (doText && process.env.CLI_CALL_MODULENAME === moduleName) {
    console.log(`**** starting ${consolecolor.coloredString(moduleNameArg, 'green')} ****`);
  }
};

export let stop = (): Promise<number> => {
  let done = smartpromise.defer<number>();
  let earlyExecutionTime = startHrt.stop().milliSeconds;
  let earlyExecutionTimeString: string = (earlyExecutionTime / 1000).toString();
  if (doText && process.env.CLI_CALL_MODULENAME === moduleName) {
    console.log(
      `OK! -> finished loading within ${consolecolor.coloredString(
        earlyExecutionTimeString,
        'blue'
      )}`
    );
  }

  done.resolve(earlyExecutionTime);
  return done.promise;
};
