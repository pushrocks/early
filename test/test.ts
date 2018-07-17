import { expect, tap } from '@pushrocks/tapbundle';
import * as smartdelay from '@pushrocks/smartdelay';
import early = require('../ts/index');

tap.test('.start()', async () => {
  early.start('early');
  await smartdelay.delayFor(2000);
});

tap.test('.stop()', async () => {
  await early.stop();
});

tap.test('hrTime Measurement', async () => {
  let earlyHr = new early.HrtMeasurement();
  earlyHr.start();
  await smartdelay.delayFor(1000);
  let measuredTime = earlyHr.stop();
  console.log(measuredTime);
  return expect(measuredTime.milliSeconds).to.be.greaterThan(999);
});

tap.start();
