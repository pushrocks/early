import 'typings-global'
import chalk = require('chalk')
import q = require('q')

let doText: boolean = false
let moduleName: string = 'undefined module name'
let startTime = Date.now()

if (process.argv.indexOf('-v') === -1) {
    doText = true
}

/**
 * start the loading
 */
export let start = function (moduleNameArg: string = '', loaderLengthArg: string = '10') {
    moduleName = moduleNameArg
    if (doText) {
        console.log(`**** starting ${chalk.green(moduleNameArg)} ****`)
    }
}

export let stop = (): q.Promise<number> => {
    let done = q.defer<number>()
    let endTime = Date.now()
    let earlyExecutionTime: number = (endTime - startTime)
    let earlyExecutionTimeString: string = (earlyExecutionTime / 1000).toString()
    console.log(`... finished loading ${moduleName} in ${earlyExecutionTimeString}`)
    done.resolve(earlyExecutionTime)
    return done.promise
}
