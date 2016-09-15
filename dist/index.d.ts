/// <reference types="q" />
import 'typings-global';
import q = require('q');
export declare let start: (moduleNameArg?: string, loaderLengthArg?: string) => void;
export declare let stop: () => q.Promise<number>;
