import 'typings-global';
/**
 * start the loading
 */
export declare let start: (moduleNameArg?: string, loaderLengthArg?: string) => void;
export declare let stop: () => Promise<number>;
export declare class hrtMeasurement {
    private _started;
    private _hrTimeStart;
    start(): void;
    stop(): {
        nanoSeconds: number;
        milliSeconds: number;
    };
}
