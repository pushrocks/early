import 'typings-global';
import { HrtMeasurement } from './early.hrtMeasurement';
export { HrtMeasurement };
/**
 * start the loading
 */
export declare let start: (moduleNameArg?: string, loaderLengthArg?: string) => void;
export declare let stop: () => Promise<number>;
