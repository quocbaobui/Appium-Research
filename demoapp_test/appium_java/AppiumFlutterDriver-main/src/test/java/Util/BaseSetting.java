package Util;

import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.annotations.*;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.Set;

public class BaseSetting {

    public static String appPtah = "/Users/quocbao/Documents/FBM/Appium-Research/demoapp_test/build/app/outputs/apk/debug/app-debug.apk";
    public static AndroidDriver<MobileElement> driver;
    public  ExtentReports extent;
    public ExtentTest logger;

    private String testName = "Flutter Automation";
    private String deviceName = "Redmi Note 9S";
    
    private String automationName = "Flutter";

    @BeforeClass
    public AndroidDriver<MobileElement> setup () throws MalformedURLException {

        DesiredCapabilities flutterCapabilities = new DesiredCapabilities();
        flutterCapabilities.setCapability( "deviceName", deviceName );
        flutterCapabilities.setCapability( "platformName", "Android" );
        flutterCapabilities.setCapability("automationName", "Flutter");
        flutterCapabilities.setCapability("app",appPtah);
        flutterCapabilities.setCapability("noReset", "true");
        driver = new AndroidDriver<MobileElement>(new URL("http://127.0.0.1:4723/"), flutterCapabilities);
        return driver;
    }




    @AfterClass
    public void tearDown() throws MalformedURLException {
        driver.quit();
    }

    public static void switchContext(String context) {
        driver.getContext();
        Set<String> con = driver.getContextHandles();
        for (String c : con) {
            if (c.contains(context)) {
                driver.context(c);
                break;
            }
        }
    }
}
