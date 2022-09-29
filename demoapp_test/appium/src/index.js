


const wdio = require('webdriverio');
const assert = require('assert');
const { byValueKey, byText } = require('appium-flutter-finder');


const opts = {
  port: 4723,
  path: '/',
  capabilities: {
    "platformName": 'Android',
    "appium:deviceName": 'Redmi Note 9S',
    "appium:version": '10.0',
    "appium:app": '/Users/quocbao/Documents/FBM/Appium-Research/demoapp_test/build/app/outputs/apk/debug/app-debug.apk',
    "appium:automationName": 'Flutter',
  },
};

(async () => {
  console.log('Initial app testing');

  var driver;


  try {
    // ...
     driver = await wdio.remote(opts);
  } catch (err) {
    // ... handle it locally
    throw new Error(err.message);
  }



  // Test case 1 increment_tester
  const txtCounterFinder = byValueKey('counter_tester');
  const btnIncrementFinder = byValueKey('increment_tester');

  console.log("txtCounterFinder" + txtCounterFinder +"\n");
  console.log("btnIncrementFinder" + btnIncrementFinder + "\n");

  console.log("opts" + opts);


  assert.strictEqual(await driver.getElementText(txtCounterFinder), '0');

  await driver.elementClick(btnIncrementFinder);
  await driver.elementClick(btnIncrementFinder);
  await driver.elementClick(btnIncrementFinder);
  await driver.elementClick(btnIncrementFinder);
  await driver.elementClick(btnIncrementFinder);
  await driver.elementClick(btnIncrementFinder);

  assert.strictEqual(await driver.getElementText(txtCounterFinder), '6');


  await driver.execute('flutter:waitFor', byValueKey('btn_login_screen_key'));

  const btnLoginScrene = byValueKey('btn_login_screen_key');
  await driver.elementClick(btnLoginScrene);


  await driver.execute('flutter:waitFor', byValueKey('id_key'));
  const tf_id_finder = byValueKey('id_key');
  const tf_userName_finder = byValueKey('userName_key');
  const tf_password_finder = byValueKey('password_key');
  const btn_login_key = byValueKey('btn_login_key');

  await driver.elementSendKeys(tf_id_finder,'12');
  await driver.elementSendKeys(tf_userName_finder,'admin');
  await driver.elementSendKeys(tf_password_finder,'123456');

  await driver.touchAction({
    action: 'tap',
    element: { elementId: btn_login_key }
  });  

  await driver.execute('flutter:waitFor', byText('Home Screen'));

  driver.deleteSession();

  // Test Case 2 Demo Login
})();