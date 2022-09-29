import Util.BaseSetting;
import org.openqa.selenium.TimeoutException;
import appium_flutter_driver.FlutterFinder;
import appium_flutter_driver.finder.FlutterElement;
import org.testng.annotations.Test;
import static org.junit.Assert.assertEquals;

public class AppiumTestDemo extends BaseSetting {

   @Test
    public void testLogin (){

        try {
            switchContext("FLUTTER");
            FlutterFinder find = new FlutterFinder(driver);
            assertEquals(driver.executeScript("flutter:checkHealth"), "ok");
            Thread.sleep(3000);

            // Test case 1 increment_tester
            FlutterElement txtCounterFinder = find.byValueKey("counter_tester");
            FlutterElement btnIncrementFinder = find.byValueKey("increment_tester");

            btnIncrementFinder.click();
            btnIncrementFinder.click();
            btnIncrementFinder.click();
            btnIncrementFinder.click();

            assertEquals(txtCounterFinder.getText(), "4");

            FlutterElement btnLoginFinder = find.bySemanticsLabel("Login Screen");
            driver.executeScript("flutter:waitFor",btnLoginFinder);
            btnLoginFinder.click();
            driver.executeScript("flutter:waitFor",find.byValueKey("id_key"));
            Thread.sleep(3000);

            FlutterElement tfIdFinder = find.byValueKey("id_key");
            tfIdFinder.sendKeys("12");
            Thread.sleep(500);
            FlutterElement tfUserNameFinder = find.byValueKey("userName_key");
            tfUserNameFinder.sendKeys("admin");
            Thread.sleep(500);
            FlutterElement tfPasswordFinder = find.byValueKey("password_key");
            tfPasswordFinder.sendKeys("123456");
            FlutterElement tfBtnLoginFinder = find.bySemanticsLabel("Login");
            tfBtnLoginFinder.click();
            driver.executeScript("flutter:waitFor",find.bySemanticsLabel("Home Screen"));

        } catch (TimeoutException | InterruptedException e) {

        }

    }

}
