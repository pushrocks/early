import 'typings-global'
import * as beautycolor from 'beautycolor'
import * as smartq from 'smartq'

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
    console.log(`**** starting ${beautycolor.coloredString(moduleNameArg, 'green')} ****`)
  }
}

export let stop = (): Promise<number> => {
  let done = smartq.defer<number>()
  let endTime = Date.now()
  let earlyExecutionTime: number = (endTime - startTime)
  let earlyExecutionTimeString: string = (earlyExecutionTime / 1000).toString()
  console.log(`OK! -> finished loading within ${beautycolor.coloredString(earlyExecutionTimeString, 'blue')}`)
  done.resolve(earlyExecutionTime)
  return done.promise
}
