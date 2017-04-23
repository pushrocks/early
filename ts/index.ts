import 'typings-global'
import * as beautycolor from 'beautycolor'
import * as smartq from 'smartq'
import * as process from 'process'

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

export class hrtMeasurement {
  private _started: boolean = false
  private _hrTimeStart
  start () {
    this._started = true
    this._hrTimeStart = process.hrtime()
  }
  stop () {
    if (this._started === false) {
      console.log('Hasn\'t started yet')
      return
    }
    let diffTime = process.hrtime(this._hrTimeStart)
    let nanoSeconds = (diffTime[0] * 1e9) + diffTime[1]
    let milliSeconds = nanoSeconds / 1000000
    return {
      nanoSeconds: nanoSeconds,
      milliSeconds: milliSeconds
    }
  }
}
