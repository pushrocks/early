import { expect, tap } from 'tapbundle'
import * as smartdelay from 'smartdelay'
import early = require('../dist/index')

tap.test('.start()', async () => {
  early.start('early')
  await smartdelay.delayFor(2000)
})
tap.test('.stop()', async () => {
  await early.stop()
})