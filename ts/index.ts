import 'typings-global'
import path = require('path')
import chalk = require('chalk')
import q = require('q')
import childProcess = require('child_process')
let earlyChild

let doAnimation: boolean = true
let doText: boolean = false
let moduleName: string = 'undefined module name'
let startTime

if (process.argv.indexOf('-v') !== -1 || process.env.CI) {
    doAnimation = false
}
if (process.argv.indexOf('-v') === -1 && process.env.CI) {
    doText = true
}

// exports
export let start = function (moduleNameArg: string = '', loaderLengthArg: string = '10') {

    startTime = Date.now()

    moduleName = moduleNameArg
    if (doAnimation) {
        earlyChild = childProcess.fork(path.join(__dirname, 'early.child.js'), [], {
            env: {
                moduleNameArg: moduleNameArg,
                loaderLengthArg: loaderLengthArg,
                CI: process.env.CI
            }
        })
    } else if (doText) {
        console.log(`**** starting ${chalk.green(moduleNameArg)} ****`)
    }
}

export let stop = (): q.Promise<number> => {
    let done = q.defer<number>()
    let endTime = Date.now()
    let earlyExecutionTime: number = (endTime - startTime)
    let earlyExecutionTimeString: string = (earlyExecutionTime / 1000).toString()
    if (doAnimation) {
        earlyChild.kill('SIGINT')
        earlyChild.on('close', function () {
            console.log(`loaded ${chalk.green(moduleName)} in ${earlyExecutionTimeString} seconds!`)
            done.resolve(earlyExecutionTime)
        })
    } else {
        console.log(`... finished loading ${moduleName} in ${earlyExecutionTimeString}`)
        done.resolve(earlyExecutionTime)
    }
    return done.promise
}
