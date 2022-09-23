const wdio = require('webdriverio');
const assert = require('assert');
const { byValueKey } = require('appium-flutter-finder');


const opts = {
  port: 4723,
  path: '/',
  capabilities: {
    "platformName": 'Android',
    "appium:deviceName": 'Clover Flex',
    "appium:version": '10.0',
    "appium:app": '/Users/quocbao/Documents/FBM/Appium-Research/demoapp_test/build/app/outputs/apk/debug',
    "appium:automationName": 'Flutter',
  },
};

(async () => {
  console.log('Initial app testing');

  const counterTextFinder = byValueKey('counter_tester');
  const buttonFinder = byValueKey('increment_tester');

  console.log("counterTextFinder" + counterTextFinder +"\n");
  console.log("buttonFinder" + buttonFinder + "\n");

  console.log("opts" + opts);

  var driver;


  try {
    // ...
     driver = await wdio.remote(opts);

  } catch (err) {
    // ... handle it locally
    throw new Error(err.message);
  }



  assert.strictEqual(await driver.getElementText(counterTextFinder), '0');

  await driver.elementClick(buttonFinder);


  await driver.touchAction({
    action: 'tap',
    element: { elementId: buttonFinder }
  });

  assert.strictEqual(await driver.getElementText(counterTextFinder), '2');

  driver.deleteSession();
})();